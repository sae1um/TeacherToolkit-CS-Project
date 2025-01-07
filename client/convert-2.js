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
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html')) {
          const code = fs.readFileSync(fullPath, 'utf-8');
          const highlightedCode = hljs.highlightAuto(code).value;

          const html = `
            <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                }
                h3 {
                  color: #2d2d2d;
                  font-size: 1.5em;
                }
                div {
                  font-family: Consolas, "Courier New", monospace;
                  color: black;
                }
              </style>
            </head>
            <body>
              <!-- Display the file name as an h2 tag -->
              <h3>${file}</h3>
              <div>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
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
