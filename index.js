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

