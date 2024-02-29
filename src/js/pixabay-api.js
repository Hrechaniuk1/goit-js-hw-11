import doMarkUp from "./render-functions.js"
import SimpleLightbox from "simplelightbox"
import iziToast from "izitoast";

export default function requestForImgs(event) {
        const parameters = `key=42614843-af27c28624474ca020601ef6c&q=${event.target.elements.search.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`
        fetch(`https://pixabay.com/api/?${parameters}`).then(response => {
            if (response.ok) {
                return response.json()                
            } else {
                throw new Error(response.status)
            }
        }).then(data => {

            if (data.hits.length === 0) {
                iziToast.show({message: "Sorry, there are no images matching your search query. Please try again!",})
            } else {
                
                doMarkUp(data)
                const lightbox = new SimpleLightbox(".large-image", { captionDelay: 250, captionsData: "alt", })
                lightbox.refresh()
                console.log(lightbox.refresh())
                 }
        }).catch(error => {
            console.log(error)
        })

        
}
