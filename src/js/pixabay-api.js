import axios from 'axios';


axios.defaults.headers.common["x-api-key"] = "40166916-9d1461e2ce0772333088e6da8";
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImages(input) {
    await axios.get(`/&key=40166916-9d1461e2ce0772333088e6da8&q=${input}&orientation=horizontal&image_type=photo&safesearch=true`);
}
