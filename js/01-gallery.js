import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMainDiv = document.querySelector(".gallery");

const marcup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
        <a class="gallery__link"  href="${original}"  >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join("");

galleryMainDiv.insertAdjacentHTML("beforeend", marcup);

galleryMainDiv.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.classList.contains("gallery__image")) {
    e.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1100" height="900" >`);
    instance.show();
  }
}
