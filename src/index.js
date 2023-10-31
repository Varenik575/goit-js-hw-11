import { fetchPhotosByQuery, pageCounter, loadNextPage } from "./js/pixabay-api";
import { form, formInput, galleryEl, loaderButton } from "./js/refs";
import { renderCards } from "./js/card-render";
import { Notify } from "notiflix";

form.addEventListener("submit", onSubmit);
loaderButton.addEventListener("click", loadNextPage());

function onSubmit(event) {

    event.preventDefault();
    clearQuery();

    fetchPhotosByQuery(formInput.value)
        .then(renderCards);
    
    loaderButton.classList.remove('hidden');
    
};      

function clearQuery() {
    pageCounter = 1;
    galleryEl.innerHTML = "";

}


   




