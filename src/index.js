import { fetchPhotosByQuery } from "./js/pixabay-api";
import { form, formInput } from "./js/refs";
import { renderCards } from "./js/card-render";

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    fetchPhotosByQuery(formInput.value)
        .then(renderCards);

}

