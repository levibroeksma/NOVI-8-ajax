// const axios = require('axios');

async function getJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        jokeContainer.textContent = result.data.value;
    } catch (e) {
        jokeContainer.textContent = "helaas pindakaas"
    }
}

const jokeContainer = document.getElementById('chuckNorrisJoke');

getJoke();

// async function getCategories() {
//     try {
//         const result = await axios.get('https://api.chucknorris.io/jokes/categories')
//         for (let i = 0; i < result.data.length; i++) {
//             console.log(result.data[i]);
//         }
//     } catch (e) {
//         console.log('too bad');
//     }
// }
//
// getCategories();