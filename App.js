const $ = function (selector) {
    const elements = document.querySelectorAll.call(document, selector)

    //actual library functionality
    const library = {
        elements,
        addClass(className) {
            this.elements.forEach((element) => {
                element.classList.add(className)
            })
            return library
        },
        //add fadeout
        fadeOut(duration) {
            this.elements.forEach((element) => {
                let currentOpacity = 1
                const decrement = 1 / (duration / 10)

                const fade = setInterval(() => {
                    currentOpacity -= decrement
                    element.style.opacity = currentOpacity

                    if (currentOpacity <= 0) {
                        clearInterval(fade)
                        element.style.display = "none"
                    } 
                }, 10)
            })
        return library
        },
    }
    return library
}

$("p").addClass("fade").fadeOut(1000)