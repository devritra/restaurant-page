export function pageLoad(){
    const contentDiv = document.querySelector("#content");
    const heroSection = document.createElement("div");
    const contentTitle = document.createElement("h1");
    const contentDescription = document.createElement("p");

    contentTitle.textContent = "Welcome to my Restaurent site";
    contentDescription.textContent = "It's a practice restaurent page";

    heroSection.classList.add(".hero_section");
    heroSection.appendChild(contentTitle);
    heroSection.appendChild(contentDescription);
    contentDiv.appendChild(heroSection);
}