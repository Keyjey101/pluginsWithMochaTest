//set sizes for all images
const imageSize = { height: 400, width: 600 };
//set order of images to show, where img1 is first slide
//img6 is last slide
const orderOfImages = ["img1", "img2", "img3", "img4", "img5", "img6"];
const nameOfButtonForward = "btn2";
const nameOfButtonBackward = "btn1";
/////////////////////////////////////////////////////////

const imagesOnScreen = mgImages();
function setImagesOnSize(size) {
  console.log(window)
  for (let image in imagesOnScreen) {
    const currentImage = mgImages()[image];
    currentImage.x = window.PLAYER_SIZE.height / 2 - imageSize.height / 2;
    currentImage.y = window.PLAYER_SIZE.width / 2 - imageSize.width / 2;
    currentImage.width = size.width;
    currentImage.height = size.height;
  }

  for (let i = 1; i < orderOfImages.length; i++) {
    mgImages()[orderOfImages[i]].hidden = true;
  }
}

let countValue = 0;

const dictionaryEvents = {
  [nameOfButtonForward]: function () {
    if (countValue + 1 < orderOfImages.length) {
      mgImages()[orderOfImages[countValue]].hidden = true;
      countValue += 1;
      mgImages()[orderOfImages[countValue]].hidden = false;
    } else console.log("last slide");
  },
  [nameOfButtonBackward]: function () {
    if (countValue - 1 >= 0) {
      mgImages()[orderOfImages[countValue]].hidden = true;
      countValue -= 1;
      mgImages()[orderOfImages[countValue]].hidden = false;
    } else console.log("first slide");
  },
};

mgButtonEvents(dictionaryEvents);

setImagesOnSize(imageSize);
