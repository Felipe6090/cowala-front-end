const size = {
  mobileS: "320px", //Small
  mobileM: "375px", //Medium
  mobileL: "425px", //Large
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px", //Large
  desktop: "2560px",
};

export const device = {
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobileM: `@media (max-width: ${size.mobileM})`,
  mobileL: `@media (max-width: ${size.mobileL})`,
  tablet: `@media (max-width: ${size.tablet})`,
  laptop: `@media (max-width: ${size.laptop})`,
  laptopL: `@media (max-width: ${size.laptopL})`,
  desktop: `@media (max-width: ${size.desktop})`,
  desktopL: `@media (max-width: ${size.desktop})`,
};
