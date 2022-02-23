const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const makeImage = ({url, alt}) => {
//   const imageLiEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.setAttribute('src', url);
//   imageEl.setAttribute('alt', alt);
//   imageLiEl.append(imageEl);
//   return imageLiEl;
// }
// const elements = images.map(makeImage);
// const imagesUlel = document.querySelector('.gallery');
// imagesUlel.append(...elements);

const imagesUlEl = document.querySelector(".gallery");
const imagesElements = images.map((item) => {
  imagesUlEl.insertAdjacentHTML(
    "beforeend",
    `<img src=${item.url} alt=${item.alt} width='350px'>`
  );
});
