let icons = document.querySelectorAll(".side-par  ul li")
icons.forEach((icon)=>{
    icon.onclick = function (e) {
        icons.forEach((icon)=>{
            icon.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
}})







let yearlySection = document.querySelector(".yearly-targets")
let ticketsSection = document.querySelector(".tickets")
let spans = document.querySelectorAll(".yearly-targets .targets-content .box .progress .prog")
let numbers = document.querySelectorAll(".yearly-targets .targets-content .box .progress span:last-child")
let started = false ;
let nums = document.querySelectorAll(".tickets .tickets-content .box span")
let start = false
window.onscroll = function () {
    
    if (scrollY > yearlySection.offsetTop) {
        spans.forEach((span)=>{
            span.style.width = span.parentElement.dataset.prog;
        })
        
        if (!started) {
            numbers.forEach((num)=>{
                
                let goal = num.dataset.number
                let count = setInterval(()=>{
                    num.innerHTML++
                    if (num.innerHTML == goal){
                        clearInterval(count)
                    }
                }, 1000/ goal)
            })
            
        }
        started = true;
    }
    if (scrollY > ticketsSection.offsetTop) {

        if (!start) {
        nums.forEach((num)=>{
            let goals = num.dataset.numb

            let count = setInterval(()=>{
                num.innerHTML++
                if (num.innerHTML == goals) {
                    clearInterval(count)
                }
            },1000/goals)
            
        })} 
        start = true;
    }

}






let deleteIcons = document.querySelectorAll(".latest-tasks .box i")
deleteIcons.forEach((icon)=>{
    icon.onclick = function () {
            icon.parentElement.style.opacity = "0.2"
            icon.style.opacity = "0"
            let ICON  = document.createElement("i")
            ICON.className = "fa-solid fa-backward backicon"
            
            icon.parentElement.appendChild(ICON)
            
            ICON.onclick = function () {
                icon.parentElement.style.opacity = "1"
                ICON.remove()
                icon.style.opacity = "1"
            }
    }
})
