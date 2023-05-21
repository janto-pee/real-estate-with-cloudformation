import axios from "axios";

export async function axiosRequest () {
    const {data} = await axios.get('/xyf')
    return data
}