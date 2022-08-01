const allStars = document.querySelectorAll(".star");
allStars.forEach((elem, i) => {
  let currElem = i + 1;
  elem.onclick = function () {
    allStars.forEach((el, j) => {
      if (currElem >= j + 1) {
        el.innerHTML = "&#9733";
      } else {
        el.innerHTML = "&#9734";
      }
    });
  };
});
