// import { component$ } from '@builder.io/qwik';
// import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
// export const RouterHead = component$(() => {
// const head = useDocumentHead();
// const loc = useLocation();

// return head;
// });
import { component$, } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="/gallery" class="nav-link">Gallery</a></li>
          <li class="nav-item"><a href="/" class="nav-link">Support Boop</a></li>
          <li class="nav-item"><a href="/" class="nav-link">About</a></li>
        </ul>
      </header>
    </div>
  );
});
