import { component$, useStore, useOnDocument } from '@builder.io/qwik';

export default component$(() => {

  const imagesCounter = 27;
  const store = useStore({
    "images": Array.from(Array(imagesCounter).keys()).map((e, index) => "./images/gallery/" + (index + 1) + ".jpeg")
  })
  return (
    <div class="gallery-container" style="margin-bottom: 15px">
      <h1 style="font-family: 'amatic sc',cursive; font-size: 60px;">
        Gallery
      </h1>

      <div class="w3-content w3-display-container" style="border: 1px dashed pink; padding: 75px;">
        {store.images.map((imageSrc, index) =>
          <div class="image-container-gallery">
            <img class={index == 0 ? "mySlides show" : "mySlides"} src={imageSrc} style="width:100%; height: 50vw" />
          </div>
        )}

        <button class="w3-button w3-black w3-display-left">&#10094;</button>
        <button class="w3-button w3-black w3-display-right">&#10095;</button>
      </div>
    </div>
  );
});