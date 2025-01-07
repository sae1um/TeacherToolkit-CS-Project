const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const hljs = require('highlight.js');
const hljsStyle = path.join(__dirname, 'node_modules', 'highlight.js', 'styles', 'github.css'); // Path to CSS

const sourceDir = './src'; // Change to the folder containing your files
const outputDir = './pdf-files';

(async () => {
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const processFiles = async (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          await processFiles(fullPath); // Recursively process directories
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith(".py")) {
          const code = fs.readFileSync(fullPath, 'utf-8');
          const highlightedCode = hljs.highlightAuto(code).value;

          const html = `
            <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  background-color: #f5f5f5;
                  color: white;
                }
                h2 {
                  color: #2d2d2d;
                  font-size: 1.5em;
                  margin-bottom: 20px;
                }
                pre {
                  padding: 10px;
                  background: #2d2d2d;
                  color: black;
                  border-radius: 5px;
                  overflow: auto;
                  white-space: pre-wrap; /* Allow text to wrap */
                  word-wrap: break-word; /* Break long words */
                }
                code {
                  font-family: Consolas, "Courier New", monospace;
                  white-space: pre-wrap; /* Allow text to wrap */
                  word-wrap: break-word; /* Break long words */
                }
                /* Manually include the highlight.js theme */
                @import url('file://${hljsStyle}');
              </style>
            </head>
            <body>
              <!-- Display the file name as an h2 tag -->
              <h2>${file}</h2>
              <pre><code>${highlightedCode}</code></pre>
            </body>
            </html>
          `;

          try {
            await page.setContent(html, { waitUntil: 'load' });
            const outputFileName = path.basename(file, path.extname(file)) + '.pdf';
            await page.pdf({ path: path.join(outputDir, outputFileName), format: 'A4' });
            console.log(`Converted: ${file}`);
          } catch (pdfError) {
            console.error(`Failed to convert ${file} to PDF:`, pdfError);
          }
        }
      }
    };

    await processFiles(sourceDir);
    await browser.close();
    console.log('All files have been converted to PDFs with syntax highlighting.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
