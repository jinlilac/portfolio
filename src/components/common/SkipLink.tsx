import { clsx } from "clsx";

const SkipLink = () => (
  <a
    href="#main-content"
    className={clsx(
      "sr-only focus:not-sr-only",
      "fixed top-2 left-2 z-50",
      "bg-primary-500 text-white px-3 py-2 rounded",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    )}
  >
    본문 바로가기
  </a>
);

export default SkipLink;
