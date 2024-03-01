import requestForImgs from "./js/pixabay-api.js"
import iziToast from "izitoast";

const form = document.querySelector(".form")

 

form.addEventListener("submit", doSearch)

function doSearch(event) {
    event.preventDefault()
    if (event.target.elements.search.value === "") {
         iziToast.show({message: "You have to text something", backgroundColor: "red", messageColor: "white", position: "topCenter"})
    } else {
            document.querySelector(".gallery").innerHTML = ""
            requestForImgs(event)
    }
    form.reset()
}

