(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function l(i){const s=document.querySelector(".gallery"),o=i.hits.map(e=>`<li class="gallery-item" data-id="${e.id}">
        <div class="img-container" >
          <img class="image" src="${e.largeImageURL}" alt="${e.tags}">
        </div>
        <ul class="description-list" >
          <li class="description-item"><p>Likes</p><p>${e.likes}</p></li>
          <li class="description-item"><p>Views</p><p>${e.views}</p></li>
          <li class="description-item"><p>Comments</p><p>${e.comments}</p></li>
          <li class="description-item"><p>Downloads</p><p>${e.downloads}</p></li>
        </ul>
      </li>`).join("");s.insertAdjacentHTML("afterbegin",o)}function a(i){const o=`key=42614843-af27c28624474ca020601ef6c&q=${i.target.elements.search.value}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(e=>{e.hits.length===0?alert("Sorry, there are no images matching your search query. Please try again!"):l(e)}).catch(e=>{console.log(e)})}const n=document.querySelector(".form");n.addEventListener("submit",p);function p(i){i.preventDefault(),a(i),n.reset()}
//# sourceMappingURL=commonHelpers.js.map
