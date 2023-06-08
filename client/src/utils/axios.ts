import axios from "axios";

export async function axiosRequest () {
    const {data} = await axios.get('https://realance-com-ng.onrender.com/api')
    return data
}