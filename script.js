window.addEventListener("load", startUp);

function startUp() {
  const color = document.querySelector("#color");

  function changeColor() {
    const html = document.querySelector('html');
    html.style.setProperty("--box-color", color.value);
  }

  color.addEventListener("input", changeColor);
  color.addEventListener("change", changeColor);
  color.select();
}