let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { 
    image.removeAttribute('data-src'); 
};
};

if('IntersectionObserver' in window) {
    const imgobserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imageobserver.unobserve(item.target);
        }
      });
    });

    imagesToLoad.forEach((img) => {
      imageobserver.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img)
    });
  }
