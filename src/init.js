function init() {
    // Create a new div element with the id "content" and append it to the body element.
    const mainDiv = document.createElement("div");
  
    // Set the div element's id to "content".
    mainDiv.id = "content";
  
    // Append the div element to the body element.
    document.body.appendChild(mainDiv);
  
    // Create a new menu element.
    const menuDiv = document.createElement("div");
  
    // Set the menu element's id to "menu".
    menuDiv.id = "menu";
  
    // Append the menu element to the main div element.
    mainDiv.appendChild(menuDiv);
  
    // Create a new list element.
    const menuList = document.createElement("ul");
  
    // Append the list element to the menu element.
    menuDiv.appendChild(menuList);
  
    // Add a new list item for each menu item.
    for (const menuItem of ["Appetizers", "Salads", "Sandwiches", "Pizza", "Entrees", "Desserts"]) {
      const listItem = document.createElement("li");
      listItem.textContent = menuItem;
      menuList.appendChild(listItem);
    }
  
    // Create a new photos element.
    const photosDiv = document.createElement("div");
  
    // Set the photos element's id to "photos".
    photosDiv.id = "photos";
  
    // Append the photos element to the main div element.
    mainDiv.appendChild(photosDiv);
  
    // Add a new image element for each photo.
    for (const photo of ["burger.jpg", "pizza.jpg", "salad.jpg"]) {
      const image = document.createElement("img");
      image.src = `/Users/marley/repos/restaraunt-page/src/img/${photo}`;
      photosDiv.appendChild(image);
    }
  
    // Create a new contact form element.
    const contactFormDiv = document.createElement("div");
  
    // Set the contact form element's id to "contactForm".
    contactFormDiv.id = "contactForm";
  
    // Append the contact form element to the main div element.
    mainDiv.appendChild(contactFormDiv);
  
    // Create a new form element.
    const form = document.createElement("form");
  
    // Set the form element's action to "/contact".
    form.action = "/contact";
    form.method = "post";
  
    // Add a new input element for the name field.
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.placeholder = "Your Name";
    form.appendChild(nameInput);
  
    // Add a new input element for the email field.
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Your Email";
    form.appendChild(emailInput);
  
    // Add a new textarea element for the message field.
    const messageTextarea = document.createElement("textarea");
    messageTextarea.name = "message";
    messageTextarea.placeholder = "Your Message";
    form.appendChild(messageTextarea);
  
    // Add a new submit button.
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    form.appendChild(submitButton);
  
    // Append the form element to the contact form element.
    contactFormDiv.appendChild(form);
  }
  export default init;
