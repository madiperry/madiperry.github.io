let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0 0 50px 0"
};

function loadImages(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { image.removeAttribute('data-src'); 
};
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(!item.isIntersecting) {
          return;
        } else{
          loadImages(item.target);
          imgobserver.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      imgobserver.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
