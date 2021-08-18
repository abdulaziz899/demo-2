const miniNavBar=document.querySelector(".miniNavBar").querySelectorAll("a");
miniNavBar.forEach(element => {
    element.addEventListener("click",function(){
        miniNavBar.forEach(miniNav =>miniNav.classList.remove("active"));
        this.classList.add("active")
    })
});
const graph=document.getElementById("graph");
const events=document.getElementById("event");
const eventClick=()=>{
    graph.style.display="none"
    events.style.display="block"
    console.log("click me");
}
const graphClick=()=>{
    graph.style.display="block"
    events.style.display="none"
    console.log("click me");
}
const openMenu=document.getElementById("menus")
const openDisplay=document.getElementById("openDisplay")
const closeDisplay=document.getElementById("closeDisplay")
const openSlideMenu=()=>{
    openDisplay.style.display="none"
    closeDisplay.style.display="block"
    openMenu.style.display="block"
}

const closedSlider=()=>{
    openDisplay.style.display="block"
    closeDisplay.style.display="none"
    openMenu.style.display="none"
}