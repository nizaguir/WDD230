// get all the imgs on the page with data-src
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the Intersectional Observer
const imgOptions = {
  rootMargin: "0px 0px 300px 0px",
  threshold: 0
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onLoad = () => {
    image.removeAttribute("data-src");
  };
};

// first check to see if the Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  // loop through each image and check status and load image if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
  // just load all images if not supported...
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
