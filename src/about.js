export function aboutLoad(){
    const contentDiv = document.querySelector("#content");
    const aboutContentHolder = document.createElement("div");
    aboutContentHolder.classList.add("about_content_holder");
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About";
    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = "This is a experimental restaurant page";
    aboutContentHolder.appendChild(aboutTitle);
    aboutContentHolder.appendChild(aboutDescription);
    contentDiv.appendChild(aboutContentHolder);
}