document.addEventListener("DOMContentLoaded", function () {
    const options = {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 100, // typing speed in milliseconds
      backSpeed: 50,   // deleting speed in milliseconds
      backDelay: 1000, // delay before starting to delete
      startDelay: 1000, // delay before typing starts on page load
      loop: true,      // loop the animation
    };
  
    const typed = new Typed(".text", options);
  });
  