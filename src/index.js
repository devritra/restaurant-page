import { pageLoad } from "./pageloader";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";
import "./styles.css";
pageLoad();

const contentDiv = document.querySelector("#content");
let currentTab = "home";

document.documentElement.addEventListener("click", (e)=>{
    switch(e.target.id){
        case "home":
            if(currentTab === "home"){
                break;
            } else{
                contentDiv.innerHTML = "";
                pageLoad();
                currentTab = "home";
                break;
            }
        case "menu":
            if(currentTab === "menu"){
                break;
            } else{
                contentDiv.innerHTML = "";
                menuLoad();
                currentTab = "menu";
                break;
            }
        case "about":
            if(currentTab === "about"){
                break;
            } else{
                contentDiv.innerHTML = "";
                aboutLoad();
                currentTab = "about";
                break;
            }
    }
})