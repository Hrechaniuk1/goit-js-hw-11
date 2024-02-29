import requestForImgs from "./js/pixabay-api.js"

const form = document.querySelector(".form")
 

form.addEventListener("submit", doSearch)

function doSearch(event) {
    event.preventDefault()
    if (event.target.elements.search.value === "") {
         alert("no")
    } else {
        document.querySelector(".gallery").innerHTML = ""
        requestForImgs(event)
        
    }
    form.reset()
}

