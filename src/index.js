import { fetchPhotosByQuery } from "./js/pixabay-api";

const formInput = document.querySelector(".input");
const form = document.querySelector('#search-form')

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    fetchPhotosByQuery(formInput.value);

}

