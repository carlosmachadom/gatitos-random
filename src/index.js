/* Styles */
import '@styles/main.css';

/* Images */
import pawPrint from '@images/pawprint.png'
import linkedinIcon from '@images/linkedin.png'
import githubIcon from '@images/github-sign.png'
import hiddenCat from '@images/hidden-cat.jpeg'

/* Utils - helper and process functions */
import getNewCat from '@utils/fetch-cat';

(async function App() {
    const API = process.env.API;
    const pawImage = null || document.querySelector('.paw-logo');
    const catImage = null || document.querySelector('.gatito-random');
    const button = null || document.querySelector('.gatito-random-btn');
    const githubImage = null || document.querySelector('.github-image');
    const linkedinImage = null || document.querySelector('.linkedin-image');

    pawImage.src = pawPrint;
    catImage.src = hiddenCat;
    githubImage.src = githubIcon;
    linkedinImage.src = linkedinIcon;

    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const newCat = await getNewCat();
        catImage.src = `${API}/${newCat._id}`;        
    })
})();