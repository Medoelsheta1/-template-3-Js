let diveS = document.querySelectorAll(".backup-manager .backup-content .features > div")
diveS.forEach((div)=>{
    
    div.onclick = function (e) {
        diveS.forEach((e)=>{
            e.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }
})
let icons = document.querySelectorAll(".side-par  ul li")
icons.forEach((icon)=>{
    icon.onclick = function (e) {
        icons.forEach((icon)=>{
            icon.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
}})

