export function menuLoad(){
    const contentDiv = document.querySelector("#content");
    const menuContentHolder = document.createElement("div");
    menuContentHolder.classList.add(".menu_content_holder");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "This is our menu";
    const menuDescription = document.createElement("p");
    menuDescription.textContent = "Enjoy the good stuff";
    menuContentHolder.appendChild(menuTitle);
    menuContentHolder.appendChild(menuDescription);
    contentDiv.appendChild(menuContentHolder);
}