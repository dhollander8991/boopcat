import { component$, useStore } from '@builder.io/qwik';
// import styles from './sidebar.css?inline';

export default component$(() => {
  const videosCounter = 8;
  const store = useStore({
    "videos": Array.from(Array(videosCounter).keys()).map((e, index) => "/videos/" + (index + 1) + ".mp4")
  })
  return (
    <div class="main-content">
      <h1 style="font-family: 'amatic sc',cursive; font-size: 60px;">Videos</h1>
      <div class="container">
        {store.videos.map((videoSrc) =>
          <video width="320" height="240" controls>
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        )}
      </div>
    </div>
  );
});
