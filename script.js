document.addEventListener("DOMContentLoaded", function () {
  const dialog = document.getElementById("dialog");
  const recipeForm = document.getElementById("recipe-form");
  const container = document.querySelector(".container");
  const addButton = document.getElementById("add");
  const closeButton = document.getElementById("close-button");

  addButton.addEventListener("click", function () {
    dialog.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    dialog.style.display = "none";
    recipeForm.reset();
  });

  recipeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;

    if (title && ingredients && instructions) {
      const recipeBox = document.createElement("div");
      recipeBox.className = "box";

      recipeBox.innerHTML = `
        <h3>${title}</h3>
        <strong>Ingredients:</strong><br>${ingredients}
        <br><strong>Instructions:</strong><br>${instructions}
        <button class="delete-button">X</button>
      `;

      container.appendChild(recipeBox);

      recipeForm.reset();
      dialog.style.display = "none";

      const deleteButton = recipeBox.querySelector(".delete-button");
      deleteButton.addEventListener("click", function () {
        container.removeChild(recipeBox);
      });
    }
  });
});
