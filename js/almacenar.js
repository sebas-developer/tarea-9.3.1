document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("item");
    const addButton = document.getElementById("agregar");
    const clearButton = document.getElementById("limpiar");
    const contenedor = document.getElementById("contenedor");
  
    // Cargar ítems almacenados al cargar la página
    let storedItems = JSON.parse(localStorage.getItem("items")) || [];
    renderItems(storedItems);
  
    addButton.addEventListener("click", function () {
      const newItem = itemInput.value.trim();
      if (newItem !== "") {
        storedItems.push(newItem);
        localStorage.setItem("items", JSON.stringify(storedItems));
        renderItems(storedItems);
        itemInput.value = "";
      }
    });
  
    clearButton.addEventListener("click", function () {
      localStorage.removeItem("items");
      storedItems = [];
      renderItems([]);
    });

    function renderItems(items) {
        contenedor.innerHTML = "";
        items.forEach(function (item) {
          const li = document.createElement("li");
          li.className = "list-group-item";
          li.textContent = item;
          contenedor.appendChild(li);
        });
      }
    });
