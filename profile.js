let icons = document.querySelectorAll(".side-par  ul li")
icons.forEach((icon)=>{
    icon.onclick = function (e) {
        icons.forEach((icon)=>{
            icon.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
}})
let infoSectopn = document.querySelector(".head")
let span = document.querySelector(".info .bublic-info .progress span")
window.onscroll = function () {
    if (scrollY > infoSectopn.offsetTop) {
        span.style.width = span.dataset.width
    }
}