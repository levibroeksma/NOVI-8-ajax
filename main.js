const axios = require('axios');

async function getJoke() {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
}

getJoke();