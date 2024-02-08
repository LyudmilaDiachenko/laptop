import { BASE_URL } from "./db.profile"

export let arrayData

export default async function getData(path) {
    try{
        const response = await fetch(
            `${BASE_URL}/${path}`
        )
        const data = await response.json()
        arrayData = data
        return arrayData;
    }catch(error){
        console.error(error);
    }
}