import { useState } from "react";

export default function Testing(params) {
    const [catImg, setCatImg] = useState()
    const endpoint = 'https://randombig.cat/roar.json';

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const catFile = data.file;
    setCatImg(catFile.file)
    // Do something with the cat file, such as display it on a webpage
  })
  .catch(error => {
    console.error(`Error fetching cat data: ${error}`);
  });

    return(
        <div>
            <img src={catImg} />
            <button>
                click
            </button>
        </div>
    )
};
