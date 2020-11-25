let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { 
    image.removeAttribute('data-src'); 
  };
};

if('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, imageObserver) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imageObserver.unobserve(item.target);
        }
      });
    });

    imagesToLoad.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img)
    });
  }
