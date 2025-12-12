// script.js (recommended)
document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const heartLoader = document.querySelector(".cssload-main");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");

  // Defensive checks
  if (!questionContainer || !resultContainer || !yesBtn || !noBtn) {
    console.warn("Some required DOM elements are missing.");
    return;
  }

  // Move the No button to a random location inside the question container on hover
  noBtn.addEventListener("mouseover", () => {
    const containerRect = questionContainer.getBoundingClientRect();

    // Compute a safe area so the button doesn't go outside container
    const maxX = Math.max(containerRect.width - noBtn.offsetWidth, 0);
    const maxY = Math.max(containerRect.height - noBtn.offsetHeight, 0);

    const randX = Math.floor(Math.random() * (maxX + 1));
    const randY = Math.floor(Math.random() * (maxY + 1));

    // Position relative to the container
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randX}px`;
    noBtn.style.top = `${randY}px`;
  });

  // Yes button flow
  yesBtn.addEventListener("click", () => {
    // Hide the question UI
    questionContainer.style.display = "none";

    // Show the heart loader (if present)
    if (heartLoader) {
      heartLoader.style.display = "block";
    }

    // After 2.5-3s, hide loader and show result container
    setTimeout(() => {
      if (heartLoader) heartLoader.style.display = "none";
      resultContainer.style.display = "block";
    }, 2800);
  });

  // Optional: handle No button click fallback
  noBtn.addEventListener("click", () => {
    // If the user actually clicks No (rare), give a gentle message
    alert("Oh no! 😢 But that's okay.");
  });
});
