import {
  createIconSmallComponent,
  SVG_CLASS_NAME_PLACEHOLDER,
} from "../iconSmall/createIconSmallComponent";
import styles from "./loupe.module.css";

SVG_CLASS_NAME_PLACEHOLDER;

export const createLoupeComponent = (isSearchOpen = true) => {
  const markup = isSearchOpen
    ? `<svg class="${SVG_CLASS_NAME_PLACEHOLDER} ${styles.loupeIcon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>`
    : `<svg class="${SVG_CLASS_NAME_PLACEHOLDER} ${styles.loupeIcon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`;

  const container = createIconSmallComponent(markup);
  container.classList.add(styles.loupe);
  return container;
};
