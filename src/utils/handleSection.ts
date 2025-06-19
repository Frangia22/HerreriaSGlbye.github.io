export const handleSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    //add offset to the section
    const offset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};