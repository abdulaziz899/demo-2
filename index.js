const miniNavBar=document.querySelector(".miniNavBar").querySelectorAll("a");
miniNavBar.forEach(element => {
    element.addEventListener("click",function(){
        miniNavBar.forEach(miniNav =>miniNav.classList.remove("active"));
        this.classList.add("active")
    })
});