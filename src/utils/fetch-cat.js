import fetchData from "./fetch-api-data";

/* API Resources */
const API = process.env.API;

async function getNewCat() {
    const newCat = await fetchData(`${API}?json=true`);
    return await newCat;
}

export default getNewCat;