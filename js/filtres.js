function trierEtAfficher(elements) {
  const videoContainer = document.querySelector(".item");
  const tab = elements.map(item => item.cloneNode(true));

  tab.sort((a, b) => {
    const titre1 = a.querySelector(".title").textContent;
    const titre2 = b.querySelector(".title").textContent;
    return titre1.localeCompare(titre2);
  });

  tab.forEach(item => videoContainer.appendChild(item));
  tab.forEach(item => item.remove());
}

// function filtrerParGenre(genre) {
//   const tabItems = Array.from(document.querySelectorAll(".item"));
//   const tabItemsGenre = Array.from(document.querySelectorAll("." + genre));

//   const elements = tabItemsGenre.length > 0 ? tabItemsGenre : tabItems;
//   trierEtAfficher(elements);
// }

document.getElementById("AaZ").addEventListener("click", function () {
  const tabItems = Array.from(document.querySelectorAll(".item"));
  trierEtAfficher(tabItems);
});

document.getElementById("ZaA").addEventListener("click", function () {
  const tabItems = Array.from(document.querySelectorAll(".item"));
  trierEtAfficher(tabItems.reverse());
});

// document.getElementById("femmes").addEventListener("click", function () {
//   filtrerParGenre("f");
// });

// document.getElementById("hommes").addEventListener("click", function () {
//   filtrerParGenre("h");
// });
