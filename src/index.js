import init from "./init";
import { createContactTab } from "./contact";
import { createMenuTab } from "./menu";

init();

// Get the elements for the tabs
const contactTab = document.getElementById("contactTab");
const menuTab = document.getElementById("menuTab");

// Add event listeners to the tabs
contactTab.addEventListener("click", switchToContactTab);
menuTab.addEventListener("click", switchToMenuTab);

// Function to switch to the Contact tab
function switchToContactTab() {
  // Clear the current contents of the mainDiv
  const mainDiv = document.getElementById("content");
  mainDiv.innerHTML = "";

  // Create the Contact tab content
  const contactContent = createContactTab();

  // Append the Contact tab content to the mainDiv
  mainDiv.appendChild(contactContent);
}

// Function to switch to the Menu tab
function switchToMenuTab() {
  // Clear the current contents of the mainDiv
  const mainDiv = document.getElementById("content");
  mainDiv.innerHTML = "";

  // Create the Menu tab content
  const menuContent = createMenuTab();

  // Append the Menu tab content to the mainDiv
  mainDiv.appendChild(menuContent);
}

// Initially display the Menu tab
switchToMenuTab();