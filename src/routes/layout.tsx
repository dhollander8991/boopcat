import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import LeftSidebar from '../components/left-side-bar/left-sidebar';
import RightSidebar from '../components/right-side-bar/right-sidebar';
export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <div class="main-container">
          <LeftSidebar />
          <Slot />
          <RightSidebar />
        </div>
        <section>
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
});