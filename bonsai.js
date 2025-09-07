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

btnTwo.forEach(button => {
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
    login.classList.add("pressed");
})

login.addEventListener("pointerup", () => {
    login.classList.remove("pressed");
})
login.addEventListener("pointerleave", () => {
    login.classList.remove("pressed");
})

login.addEventListener("pointercancel", () => {
    login.classList.remove("pressed");
})





startFree.addEventListener("pointerdown", () => {
    startFree.classList.add("pressed");
})

startFree.addEventListener("pointerup", () => {
    startFree.classList.remove("pressed");
})
startFree.addEventListener("pointerleave", () => {
    startFree.classList.remove("pressed");
})

startFree.addEventListener("pointercancel", () => {
    startFree.classList.remove("pressed");
})


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    })
}, { threshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));
