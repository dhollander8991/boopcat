import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <div class="image-header">
          <img src="./images/header/header.png" style="width: 100vw;" />
        </div>
        <div class="main-container">
          <Slot />
        </div>
        <section>
        </section>
      </main>
      <Footer />
    </>
  );
});
