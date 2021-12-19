export const email = "ezedin.fedlu@gmail.com";
export const navDelay = 1000;
export const loaderDelay = 2000;
export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/ezedinff",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ezedin.fedlu",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ezedinff",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/ezedinff",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/ezedinff",
  },
];

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});
