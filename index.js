const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDidtance = targetElement[i].getBoundingClientRect().top +  
        targetElement[i].clientHeight * .6
        if (window.innerHeight > getElementDidtance){
            targetElement[i].classList.add("show");
        }
    }
})
