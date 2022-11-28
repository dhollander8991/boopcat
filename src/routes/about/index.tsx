import { component$ } from '@builder.io/qwik';
// import styles from './sidebar.css?inline';

export default component$(() => {
  return (
    <div class="about-us">
      <h1>About Boop</h1>
      <p>Welcome to our little cat's website. Boop was adopted on September 17th 2020 and was a traumatized cat</p>
      <p>He was kind of starved and malnourished. However, In the end he got really fat and we had to put him on a diet.</p>
      <p>Today he is part of our little family.</p>
    </div>
  );
});
