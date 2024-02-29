import{i as a,S as c}from"./assets/vendor-39d661cd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function m(s){const o=document.querySelector(".gallery"),r=s.hits.map(t=>`<li class="gallery-item" data-id="${t.id}">
        <div class="img-container" >
        <a class="large-image" href="${t.largeImageURL}">
        <img class="image" src="${t.webformatURL}" alt="${t.tags}">
        </a> 
        </div>
        <ul class="description-list" >
          <li class="description-item"><p>Likes</p><p>${t.likes}</p></li>
          <li class="description-item"><p>Views</p><p>${t.views}</p></li>
          <li class="description-item"><p>Comments</p><p>${t.comments}</p></li>
          <li class="description-item"><p>Downloads</p><p>${t.downloads}</p></li>
        </ul>
      </li>`).join("");o.insertAdjacentHTML("afterbegin",r)}function p(s){const o=`key=42614843-af27c28624474ca020601ef6c&q=${s.target.elements.search.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(r.ok)return r.json();throw new Error(r.status)}).then(r=>{if(r.hits.length===0)a.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{m(r);const t=new c(".large-image",{captionDelay:250,captionsData:"alt"});t.refresh(),console.log(t.refresh())}}).catch(r=>{console.log(r)})}const n=document.querySelector(".form");n.addEventListener("submit",u);function u(s){s.preventDefault(),s.target.elements.search.value===""?alert("no"):(document.querySelector(".gallery").innerHTML="",p(s)),n.reset()}
//# sourceMappingURL=commonHelpers.js.map
