// setInterval(function () { console.log("Hello") }, 3000000);
// import { main } from './deploy.js'
const main = require('./deploy.js');
const api_url = "https://dhanrakshak-production-0b5f.up.railway.app/block";


async function check(url) {
    const response = await fetch(url);
    const data = await response.json();
    // Create an array of promises that will add each item to the database

    if (data.transactions.length) {
        const promises = data.transactions.map(item => main(item));

        // Wait for all promises to resolve before proceeding
        Promise.all(promises)
            .then((data) => {
                console.log(data);
            })
            .catch(error => {
                console.error('An error occurred while adding items to the database', error);
            });
    }
}




check(api_url);