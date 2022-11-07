import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css';
import { useLocation } from '@builder.io/qwik-city';
import cityPlan from '@qwik-city-plan';

export default component$(() => {
  const location = useLocation();
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
