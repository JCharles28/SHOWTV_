document.getElementById("AaZ").addEventListener("click", function () {
  let tabItems = Array.from(document.querySelectorAll(".item"));
  let tab = tabItems.map(item => item.cloneNode(true));

  tab.sort((a, b) => {
    let titre1 = a.querySelector(".title").textContent;
    let titre2 = b.querySelector(".title").textContent;

    return titre1.localeCompare(titre2);
  });

  let videoContainer = document.querySelector(".video-container");
  tab.forEach(item => videoContainer.appendChild(item));
  tab.forEach(item => item.remove());
  tab.forEach(item => videoContainer.appendChild(item));
});

document.getElementById("ZaA").addEventListener("click", function () {
  let tabItems = Array.from(document.querySelectorAll(".item"));
  let tab = tabItems.map(item => item.cloneNode(true));

  tab.sort((a, b) => {
    let titre1 = a.querySelector(".title").textContent;
    let titre2 = b.querySelector(".title").textContent;

    return titre2.localeCompare(titre1);
  });

  let videoContainer = document.querySelector(".video-container");
  tab.forEach(item => videoContainer.appendChild(item));
  tab.forEach(item => item.remove());
  tab.forEach(item => videoContainer.appendChild(item));
});

document.getElementById("femmes").addEventListener("click", function () {
  let tabItems = Array.from(document.querySelectorAll(".item"));
  let tab = tabItems.map(item => item.cloneNode(true));

  let tabItemsF = Array.from(document.querySelectorAll(".f"));
  let tabF = tabItemsF.map(item => item.cloneNode(true));

  let videoContainer = document.querySelector(".video-container");
  tab.forEach(item => videoContainer.appendChild(item));
  tab.forEach(item => item.remove());
  tabF.forEach(item => videoContainer.appendChild(item));
});

function hommes_tri() {
  let tabItems = Array.from(document.querySelectorAll(".item"));
  let tab = tabItems.map(item => item.cloneNode(true));

  let tabItemsH = Array.from(document.querySelectorAll(".h"));
  let tabH = tabItemsH.map(item => item.cloneNode(true));

  let videoContainer = document.querySelector(".video-container");
  tab.forEach(item => videoContainer.appendChild(item));
  tab.forEach(item => item.remove());
  tabH.forEach(item => videoContainer.appendChild(item));
}

document.getElementById("hommes").addEventListener("click", hommes_tri);
