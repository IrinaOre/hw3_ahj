const arrayFields = Array.from(document.querySelectorAll(".field"));

for (let i = 0; i < arrayFields.length; i++) {
  function poleClick() {
    if (
      document.getElementById("field" + [i + 1]).className ==
      "field field_goblin"
    ) {
      document.querySelector(".dead").textContent++;
      if (document.querySelector(".dead").textContent >= 5) {
        alert("Вы выиграли!");
        document.querySelector(".dead").textContent = 0;
        document.querySelector(".lost").textContent = 0;
      }
    } else if (
      document.getElementById("field" + [i + 1]).className == "field"
    ) {
      document.querySelector(".lost").textContent++;
      if (document.querySelector(".lost").textContent >= 5) {
        alert("Вы проиграли!");
        document.querySelector(".dead").textContent = 0;
        document.querySelector(".lost").textContent = 0;
      }
    }
  }

  document.getElementById("field" + [i + 1]).onclick = poleClick;
}

document.querySelectorAll("span")[0].classList = "dead";

document.querySelectorAll("span")[1].classList = "lost";
