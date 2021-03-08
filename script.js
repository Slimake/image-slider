(function() {
    const buttons = document.querySelectorAll("button");
    const image = document.querySelector(".img");
    let counter = 1;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if ( button.classList.contains("prevbtn") && counter > 1 ) {
                counter--;
                image.style.backgroundImage = `url(/image/building${counter}.jpeg)`;
            } else if ( button.classList.contains("nextbtn") && counter < 5) {
                counter++;
                image.style.backgroundImage = `url(/image/building${counter}.jpeg)`;
            }

        });
    });
})()