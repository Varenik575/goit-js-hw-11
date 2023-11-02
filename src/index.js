import {
  fetchPhotosByQuery,
  pageCounter,
  pageIncrement,
  totalAmount,
  clearQuery,
  responseCheck,
} from './js/pixabay-api';
import {
  form,
  formInput,
  galleryEl,
  loaderButton,
  loaderWheel,
} from './js/refs';
import { renderCards } from './js/card-render';
import { Notify } from 'notiflix';

form.addEventListener('submit', onSubmit);
loaderButton.addEventListener('click', loadNextPage);

loaderWheel.classList.add('hidden');
loaderButton.classList.add('hidden');

function onSubmit(event) {
  event.preventDefault();
  clearQuery();
  loaderButton.classList.remove('hidden');

  fetchPhotosByQuery(formInput.value).then(responseCheck).then(renderCards);
}

function loadNextPage() {
  loaderWheel.classList.remove('hidden');
  const loadedAmount = galleryEl.children.length;

  if (loadedAmount < totalAmount) {
    pageIncrement();
    fetchPhotosByQuery(formInput.value).then(renderCards);
  } else {
    Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }

  loaderWheel.classList.add('hidden');
}
