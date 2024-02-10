import { BASE_URL } from "./db.profile"

export default async function getData(path, q) {
    try{
        const response = await fetch(`${BASE_URL}/${path}?name_like=${q||''}`)
        return await response.json()
    } catch(error) {
        console.error(error);
    }
}