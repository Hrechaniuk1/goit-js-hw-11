import requestForImgs from "./js/pixabay-api"

const form = document.querySelector(".form")



form.addEventListener("submit", doSearch)

function doSearch(event) {
    event.preventDefault()
    requestForImgs(event)
    form.reset()

}

