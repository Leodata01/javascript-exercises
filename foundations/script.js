// prendre input the element input dans une variable

const input = document.querySelector("input");

// event on click botton

const btn = document.querySelector("#add");

const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  value = input.value;
  const shopItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete button";
  shopItem.textContent = value;
  shopItem.style.margin = "10px";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", (e) => {
    shopItem.remove(e.target);
  });

  list.appendChild(shopItem);
  shopItem.appendChild(deleteBtn);
});
