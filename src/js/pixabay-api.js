import axios from 'axios';
import { Notify } from 'notiflix';
import { loaderWheel, galleryEl, loaderButton } from './refs';

const imageType = 'photo';
const imageOrientation = 'horizontal';
const amountPerPage = 40;
const API_KEY = '40166916-9d1461e2ce0772333088e6da8';

export let pageCounter = 1;
export let totalAmount;

export function pageIncrement() {
  pageCounter++;
}

export async function fetchPhotosByQuery(query) {
  try {
    const {
      data: { total, totalHits, hits },
    } = await axios.get(`https://pixabay.com/api/?`, {
      params: {
        image_type: imageType,
        orientation: imageOrientation,
        q: query,
        page: pageCounter,
        per_page: amountPerPage,
        key: API_KEY,
        safesearch: true,
      },
    });

    return { total, totalHits, hits };
  } catch {
    Notify.failure('Something went wrong, please try again.');
  }
}

export function responseCheck({ total, totalHits, hits }) {
  if (!!totalHits) {
    totalAmount = total;
    if (totalAmount <= amountPerPage) {
      loaderButton.classList.add('hidden');
    }
    Notify.success(`Hooray! We found ${totalHits} images.`);

    return { total, totalHits, hits };
  } else {
    loaderButton.classList.add('hidden');
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

export function clearQuery() {
  pageCounter = 1;
  galleryEl.innerHTML = '';
}
