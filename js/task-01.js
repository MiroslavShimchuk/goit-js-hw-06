const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(item => {
    const h2El = item.querySelector("h2");
    console.log('Category:',h2El.textContent);
    const countLiEl = item.querySelectorAll("li");
    console.log("Elements:", countLiEl.length);
});


