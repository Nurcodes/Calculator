//*SELECT ALL NECCESSARY ELEMENTS
const HTMLbody = document.querySelector("body");
const container = document.createElement("main");
const screen = document.createElement("div");
const btnContainer = document.createElement("div");
const text = document.createElement("h2");

//*CREATE FUNCTION FOR GENERATING BUTTONS
function generateUI() {
  for (let i = 0; i < 10; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.dataset.key = i;
    btn.textContent = i;
    btn.style.background = "#fff";
    btn.style.padding = "20px 40px";
    btn.style.border = "none";
    btnContainer.insertAdjacentElement("beforeend", btn);
  }
  screen.classList.add("screen");

  //*STYLING THE BUTTON CONTAINER AND SCREEN
  btnContainer.style.display = "grid";
  btnContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
  btnContainer.style.gap = "5px";
  btnContainer.style.fontSize = "4.5rem";
  btnContainer.style.alignItems = "center";
  btnContainer.style.border = "1.5px solid #f1ffe7";

  screen.style.background = "#111";
  screen.style.color = "#fff";
  screen.style.textAlign = "right";
  screen.style.fontSize = "2rem";
  //*STYLING THE CONTAINER
  container.style.background = "#F1FFE7";
  container.style.height = "400px";
  container.style.width = "300px";
  container.style.padding = "1rem";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr";
  container.style.gridTemplateRows = "1fr 4fr";

  //*INSERTING ELEMENTS INTO EACHOTHER
  screen.insertAdjacentElement("beforeend", text);
  container.insertAdjacentElement("beforeend", screen);
  container.insertAdjacentElement("beforeend", btnContainer);
  container.style.marginInline = "auto";
  HTMLbody.appendChild(container);
}
generateUI();
