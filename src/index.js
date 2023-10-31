import { fetchPhotosByQuery, pageCounter, totalAmount } from "./js/pixabay-api";
import { form, formInput, galleryEl, loaderButton } from "./js/refs";
import { renderCards } from "./js/card-render";
import { Notify } from "notiflix";

form.addEventListener("submit", onSubmit);
loaderButton.addEventListener("click", loadNextPage);

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

function loadNextPage() {

    const loadedAmount = document.querySelectorAll('.photo-card').length;
    console.log(loadedAmount);
    console.log(totalAmount);
                 
        if (loadedAmount < totalAmount) {
            pageCounter++;
            fetchPhotosByQuery(formInput.value).then(renderCards);
        }
        else {
            loaderButton.classList.add('hidden');
            Notify.warning("We're sorry, but you've reached the end of search results.")
    };
    }
   




