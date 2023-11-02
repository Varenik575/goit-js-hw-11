
import { galleryEl } from "./refs";

export function renderCards(response) {
  const cards = response.hits.map(card => {
    const {
      likes,
      views,
      comments,
      downloads,
      largeImageURL,
      webformatURL,
      tags
    } = card;
        
    return `<div class="photo-card">
  <img  class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b>
    </p>
  </div>
  </div>`;
  });

    galleryEl.insertAdjacentHTML("beforeend", cards.join(''));  

}

