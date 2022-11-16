let spans = document.querySelectorAll(".project .project-content .prog  .progress span")
let projectSection = document.querySelector(".project")
window.onscroll = function () {
    if (scrollY > projectSection.offsetTop) {
        
        spans.forEach((span)=> {
            span.style.width = span.dataset.wid
        })
    }
}