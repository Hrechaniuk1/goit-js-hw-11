import doMarkUp from "./render-functions"

export default function requestForImgs(event) {
        let searchWord = event.target.elements.search.value
        const parameters = `key=42614843-af27c28624474ca020601ef6c&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`
        fetch(`https://pixabay.com/api/?${parameters}`).then(response => {
            if (response.ok) {
                return response.json()                
            } else {
                throw new Error(response.status)
            }
        }).then(data => {

            if (data.hits.length === 0) {
                    alert("Sorry, there are no images matching your search query. Please try again!")
            } else {
                
                doMarkUp(data)
                 }
        }).catch(error => {
            console.log(error)
        })

    
    }