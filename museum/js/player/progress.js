export function playerProgress() {
  const playerControl = document.querySelector(".player__control");

  playerControl.addEventListener("input", e => {
    const target = e.target;
    if (target.classList.contains('player__progress')) {
      const value = target.value;
      target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
    }
  });
}