const aboutImgScroll = document.getElementById("aboutImgScroll")

document.addEventListener("DOMContentLoaded", ()=>{
    window.addEventListener("scroll", ()=> {
        const scrollPosition = window.scrollY
        const elementTop = aboutImgScroll.offsetTop
        const width = 700 + scrollPosition * 1.05
        aboutImgScroll.style.width = `${width}px`
    })
})

const joinOptions = document.querySelectorAll(".join-option");

joinOptions.forEach((option)=> {
    option.addEventListener("click", function() {
        joinOptions.forEach(option =>{
            if (option.classList.contains("join-active")) {
                option.classList.remove("join-active")
                option.querySelector(".join-text").classList.add('max-h-0')
            }
        })
        this.classList.add("join-active")
        option.querySelector(".join-text").classList.remove('max-h-0')
    })
})