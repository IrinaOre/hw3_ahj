function createDiv() {
  const bodyDiv = document.createElement("div");
  bodyDiv.classList = "field-game";
  document.querySelector("body").append(bodyDiv);

  for (var i = 0; i < 16; i++) {
    const divField = document.createElement("div");
    divField.classList = "field";

    divField.id = "field" + [i + 1];

    document.querySelector(".field-game").append(divField);
  }
}

createDiv();

let arr = document.querySelectorAll(".field");

function intervalGoblin() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList = "field";
  }

  let random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

  arr[random].classList = "field field_goblin";
}

setInterval(intervalGoblin, 1000);
