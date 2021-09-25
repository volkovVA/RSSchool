export function playerProgress() {
  const playerControl = document.querySelector(".player__control");

  playerControl.addEventListener("input", e => {
    const target = e.target;
    if (target.classList.contains('player__progress')) {
      const value = target.value;
      target.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
    }
  });
}