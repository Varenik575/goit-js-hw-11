import axios from 'axios';

export async function fetchPhotosByQuery(query) {
    return await axios.get(`https://pixabay.com/api/?`, {
        params: {
            image_type: 'photo',
            orientation: 'horizontal',
            q: query,
            page: 1,
            per_page: 40,
            key: "40166916-9d1461e2ce0772333088e6da8",
            safesearch: true,
        }
    })
};


