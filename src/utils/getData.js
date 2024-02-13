import { BASE_URL } from "./db.profile"

export default async function getData(path, q, page = 1, cntPerPage = 10) {
    try{
        const response = await fetch(`${BASE_URL}/${path}?name_like=${q||''}&_start=${(page-1)*cntPerPage}&_limit=${cntPerPage}`)
        return await response.json()
    } catch(error) {
        console.error(error);
    }
}