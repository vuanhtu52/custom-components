import "./imageSlider.css";

const createImageSlider = ({imageLinks}) => {
    // Add slider
    const slider = document.createElement("div");
    slider.className = "slider";

    // Add image container
    const container = document.createElement("div");
    container.className = "container";
    slider.appendChild(container);

    // Add previous button
    const previousButton = document.createElement("button");
    previousButton.className = "previous-button";
    previousButton.textContent = "<";
    slider.appendChild(previousButton);

    // Add next button
    const nextButton = document.createElement("button");
    nextButton.className = "next-button";
    nextButton.textContent = ">";
    slider.appendChild(nextButton);

    // Add the dots
    const dots = document.createElement("div");
    dots.className = "dots";
    imageLinks.forEach(() => {
        const dot = document.createElement("div");
        dot.className = "dot";
        dots.appendChild(dot);
    });
    slider.appendChild(dots);

    // Add the first image to the container
    const image = new Image();
    image.src = imageLinks[0];
    slider.querySelector(".container").appendChild(image);
    slider.index  = 0;

    // Detect when user clicks the next button
    slider.querySelector(".next-button").addEventListener("click", () => {
        console.log(imageLinks[0]);
        // toNextSlide({slider: slider, imageLinks: imageLinks});
    });

    return slider;
};

// const toNextSlide = ({slider, imageLinks}) => {
//     // Remove the current image from container
//     slider.querySelector(".container").removeChild(slider.querySelector(".container").lastChild);

//     // Calculate the index of the next image
//     let newIndex = slider.index;
//     if (newIndex === imageLinks.length - 1) {
//         newIndex = 0;
//     } else {
//         newIndex += 1;
//     }
//     slider.index = newIndex;

//     // Add new image
//     const image = new Image();
//     image.src = imageLinks[slider.index];
//     slider.querySelector(".container").appendChild(image);
// };

export default createImageSlider;