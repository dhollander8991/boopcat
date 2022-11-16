import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const imagesCounter = 27;
  const store = useStore({
    "images": Array.from(Array(imagesCounter).keys()).map((e, index) => "/images/gallery/" + (index + 1) + ".webp")
  })
  return (
    <div class="gallery-container" style="margin-bottom: 15px">
      <h1 style="font-family: 'amatic sc',cursive; font-size: 60px;">
        Gallery
      </h1>

      <div class="w3-content w3-display-container" style="border: 1px dashed pink; padding: 75px;">
        {store.images.map((imageSrc, index) =>
          <div class="image-container-gallery">
            <img class={index == 0 ? "mySlides show" : "mySlides"} src={imageSrc} style="width:100%; height: 50vw" width="400px" height="600px" />
          </div>
        )}

        <button class="w3-button w3-black w3-display-left" onClick$={() => {
          const el = document.querySelector(".mySlides.show");
          if (el != null) {
            const currentImageIndex = Array.from(document.querySelectorAll(".mySlides")).findIndex(e => e.classList[1] == "show");
            const arrayLength = Array.from(document.querySelectorAll(".mySlides")).length;
            el.classList.remove("show");
            Array.from(document.querySelectorAll(".mySlides"))[currentImageIndex - 1 == -1 ? arrayLength - 1 : currentImageIndex - 1].classList.add("show");
          }
        }}>&#10094;</button>
        <button class="w3-button w3-black w3-display-right" onClick$={() => {
          const el = document.querySelector(".mySlides.show");
          // console.log(el);
          if (el != null) {
            const currentImageIndex = Array.from(document.querySelectorAll(".mySlides")).findIndex(e => e.classList[1] == "show");
            const arrayLength = Array.from(document.querySelectorAll(".mySlides")).length;
            el.classList.remove("show");
            Array.from(document.querySelectorAll(".mySlides"))[currentImageIndex + 1 == arrayLength ? 0 : currentImageIndex + 1].classList.add("show");
          }
        }}>&#10095;</button>
      </div>
    </div>
  );
});