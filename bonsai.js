const slideIcon = document.getElementById("slide-menu");
const slidebar = document.getElementById("sidebar");

slideIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    slideIcon.classList.toggle("active");
    slidebar.classList.toggle("active");
});
slidebar.addEventListener("click", (e) => {
    e.stopPropagation();
})

document.addEventListener("click", () => {
    if(slidebar.classList.contains("active")) {
        slidebar.classList.remove("active");
        slideIcon.classList.remove("active");
    }
});

//document.addEventListener("touchstart", () => {}, true);

const btnOne = document.querySelectorAll(".bttn");
const btnTwo = document.querySelectorAll(".btne");
const btnThree = document.querySelectorAll(".btn");
const login = document.getElementById("log-in");
const startFree = document.getElementById("start-free");

btnOne.forEach(button => {
    button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})

btnOTwo.forEach(button => {
    button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})

btnThree.forEach(button => {
    button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})


login.addEventListener("pointerdown", () => {
    button.classList.add("pressed");
})

login.addEventListener("pointerup", () => {
    button.classList.remove("pressed");
})
login.addEventListener("pointerleave", () => {
    button.classList.remove("pressed");
})

login.addEventListener("pointercancel", () => {
    button.classList.remove("pressed");
})





startFree.addEventListener("pointerdown", () => {
    button.classList.add("pressed");
})

startFree.addEventListener("pointerup", () => {
    button.classList.remove("pressed");
})
startFree.addEventListener("pointerleave", () => {
    button.classList.remove("pressed");
})

startFree.addEventListener("pointercancel", () => {
    button.classList.remove("pressed");
})