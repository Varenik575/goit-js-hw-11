import axios from 'axios';
import { Notify } from 'notiflix';

const imageType = "photo";
const imageOrientation = "horizontal";
const amountPerPage = 40;
const API_KEY = "40166916-9d1461e2ce0772333088e6da8";

let pageCounter = 1;
let totalAmount;

export async function fetchPhotosByQuery(query) {
    
    try {
        const { data: { total, totalHits, hits } } = await axios.get(`https://pixabay.com/api/?`, {
            params: {
                image_type: imageType,
                orientation: imageOrientation,
                q: query,
                page: pageCounter,
                per_page: amountPerPage,
                key: API_KEY,
                safesearch: true,
            }
        })
    
        if (!!totalHits) {
            Notify.success(`Hooray! We found ${totalHits} images.`);

        } else {
            Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        };

        totalAmount = total;
        return hits;
    }
    catch {
        Notify.failure("Something went wrong, please try again.")
    }
};

 

