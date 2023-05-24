

function init() {
  const mainDiv = document.createElement("div");
  mainDiv.id = "content";
  document.body.appendChild(mainDiv);

  const menuDiv = document.createElement("div");
  menuDiv.id = "menu";
  mainDiv.appendChild(menuDiv);

  const menuList = document.createElement("ul");
  menuDiv.appendChild(menuList);

  for (const menuItem of ["Appetizers", "Salads", "Sandwiches", "Pizza", "Entrees", "Desserts"]) {
    const listItem = document.createElement("li");
    listItem.textContent = menuItem;
    menuList.appendChild(listItem);
  }

  const photosDiv = document.createElement("div");
  photosDiv.id = "photos";
  mainDiv.appendChild(photosDiv);

  for (const photo of ["burger.jpg", "pizza.jpg", "salad.jpg"]) {
    const image = document.createElement("img");
    image.src = `/Users/marley/repos/restaraunt-page/src/img/${photo}`;
    photosDiv.appendChild(image);
  }

  const contactFormDiv = document.createElement("div");
  contactFormDiv.id = "contactForm";
  mainDiv.appendChild(contactFormDiv);

  const form = document.createElement("form");
  form.action = "/contact";
  form.method = "post";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Your Name";
  form.appendChild(nameInput);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Your Email";
  form.appendChild(emailInput);

  const messageTextarea = document.createElement("textarea");
  messageTextarea.name = "message";
  messageTextarea.placeholder = "Your Message";
  form.appendChild(messageTextarea);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  form.appendChild(submitButton);

  contactFormDiv.appendChild(form);

  // Tab-switching logic
  const contactTab = document.createElement("div");
  contactTab.id = "contact-tab";
  contactTab.textContent = "Contact";

  const menuTab = document.createElement("div");
  menuTab.id = "menu-tab";
  menuTab.textContent = "Menu";

  // Append the tabs to the menuDiv
  menuDiv.appendChild(contactTab);
  menuDiv.appendChild(menuTab);

  const contentDiv = document.getElementById("content");

  contactTab.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    const contactContent = createContactTab();
    contentDiv.appendChild(contactContent);
  });

  menuTab.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    const menuContent = createMenuTab();
    contentDiv.appendChild(menuContent);
  });

  // Add styling to the mainDiv
  mainDiv.style.backgroundColor = "#f5f5f5";
  mainDiv.style.padding = "20px";

  // Add styling to the menuDiv
  menuDiv.style.padding = "10px";
  menuDiv.style.backgroundColor = "#ffffff";
  menuDiv.style.border = "1px solid #ddd";
  menuDiv.style.marginBottom = "20px";

  // Add styling to the photosDiv
  photosDiv.style.display = "flex";
  photosDiv.style.justifyContent = "space-between";
  photosDiv.style.marginBottom = "20px";

  // Add styling to the contactFormDiv
  contactFormDiv.style.padding = "10px";
  contactFormDiv.style.backgroundColor = "#ffffff";
  contactFormDiv.style.border = "1px solid #ddd";

  // ...

  // Add styling to the tabs
  contactTab.style.cursor = "pointer";
  menuTab.style.cursor = "pointer";
  contactTab.style.padding = "10px";
  menuTab.style.padding = "10px";
  contactTab.style.backgroundColor = "#f5f5f5";
  menuTab.style.backgroundColor = "#f5f5f5";
  contactTab.style.border = "1px solid #ddd";
  menuTab.style.border = "1px solid #ddd";
}

export default init;