// this function changes the background color of the body when the section is in the top of the page
window.addEventListener("scroll", function (e) {
  const sections = document.querySelectorAll("section");

  // get the scroll position of the window and divide it by 3 to get the position of the section in the top of the page ( 1/3 of the page )
  let scrollPosition = window.scrollY + window.innerHeight / 3;

  // loop through each section and check if the section is in the top of the page ( 1/3 of the page ) and if it is, change the background color of the body
  sections.forEach((section) => {
    const sectionBg = section.getAttribute("data-color");
    let sectionPosition = section.offsetTop;
    if (
      sectionPosition <= scrollPosition &&
      sectionPosition + section.offsetHeight > scrollPosition
    ) {
      document.body.style.background = sectionBg;
    }
  });
});
