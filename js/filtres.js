// évenements de filtres

$("#AaZ").click(function () {
  let tabItems = Array.from($(".item"));
  $tab = $(tabItems);

  $tab.sort((a, b) => {
    let titre1 = $(a).find(".title").text();
    let titre2 = $(b).find(".title").text();

    return titre1.localeCompare(titre2);
  });

  $(".video-container").append($tab);
  $tab.detach();
  $(".video-container").append($tab);
});

$("#ZaA").click(function () {
  let tabItems = Array.from($(".item"));
  $tab = $(tabItems);

  $tab.sort((a, b) => {
    let titre1 = $(a).find(".title").text();
    let titre2 = $(b).find(".title").text();

    return titre2.localeCompare(titre1);
  });

  $(".video-container").append($tab);
  $tab.detach();
  $(".video-container").append($tab);
});

$("#femmes").click(function () {
  let tabItems = Array.from($(".item"));
  $tab = $(tabItems);

  let tabItemsF = Array.from($(".f"));
  $tabF = $(tabItemsF);

  $(".video-container").append($tab);
  $tab.detach();
  $(".video-container").append($tabF);
});

function hommes_tri() {
    let tabItems = Array.from($(".item"));
    $tab = $(tabItems);
  
    let tabItemsH = Array.from($(".h"));
    $tabH = $(tabItemsH);

    $(".video-container").append($tab);
    $tab.detach();
    $(".video-container").append($tabH);
  }
$("#hommes").click(hommes_tri);
