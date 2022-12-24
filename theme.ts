import { buildLegacyTheme } from "sanity";

export const dColors = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--kamil-brand": "#F7AB0A",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": dColors["--my-black"],
  "--white": dColors["--my-white"],
  "--gray": "#666",
  "--gray-base": "#666",
  "--component-bg": dColors["--my-black"],
  "--component-text-color": dColors["--my-white"],
  /* Brand */
  "--brand-primary": dColors["--kamil-brand"],
  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": dColors["--kamil-brand"],
  "--default-button-success-color": dColors["--my-green"],
  "--default-button-warning-color": dColors["--my-yellow"],
  "--default-button-danger-color": dColors["--my-red"],
  /* State */
  "--state-info-color": dColors["--kamil-brand"],
  "--state-success-color": dColors["--my-green"],
  "--state-warning-color": dColors["--my-yellow"],
  "--state-danger-color": dColors["--my-red"],
  /* Navbar */
  "--main-navigation-color": dColors["--my-black"],
  "--main-navigation-color--inverted": dColors["--my-white"],
  "--focus-color": dColors["--kamil-brand"],
});
