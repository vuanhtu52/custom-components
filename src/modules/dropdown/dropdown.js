import "./dropdown.css";

const createDropdown = ({ options, placeholder = "Select an option" }) => {
    // Create the dropdownn
    const dropdown = document.createElement("div");
    dropdown.className = "custom-dropdown";

    // Add the top item
    const topItem = document.createElement("div");
    topItem.className = "top-item";

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = placeholder;
    topItem.appendChild(text);

    const icon = document.createElement("div");
    icon.className = "icon";
    icon.textContent = "▾";
    topItem.appendChild(icon);
    dropdown.appendChild(topItem);

    // Add the other items 
    options.forEach(option => {
        const item = document.createElement("div");
        item.className = "item hidden";
        item.textContent = option;
        dropdown.appendChild(item);
    });

    //  Hide the items when user clicks outside the dropdown
    window.addEventListener("click", event => {
        if (!dropdown.contains(event.target)) {
            closeDropdown(dropdown);
        }
    });

    // Detect when user clicks the top item
    dropdown.querySelector(".top-item").addEventListener("click", () => {
        if (dropdown.querySelector(".top-item .icon").textContent === "▾") {
            openDropdown(dropdown);
        } else {
            closeDropdown(dropdown);
        }
    });

    // Detect when user clicks an item
    dropdown.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {
            // Update the text in top item
            dropdown.querySelector(".top-item .text").textContent = item.textContent;

            // Change background of selected item
            dropdown.querySelectorAll(".item").forEach(element => {
                element.classList.remove("item-active");
            });
            item.classList.add("item-active");
            closeDropdown(dropdown);
        });
    });

    return dropdown;
};

const openDropdown = dropdown => {
    // Flip the arrow icon
    const icon = dropdown.querySelector(".top-item .icon");
    if (icon.textContent === "▾") {
        icon.textContent = "▴";
    };

    // Display the items
    const items = dropdown.querySelectorAll(".item");
    items.forEach(item => {
        if (item.classList.contains("hidden")) {
            item.classList.remove("hidden");
        }
    });
};

const closeDropdown = dropdown => {
    // Flip the arrow icon
    const icon = dropdown.querySelector(".top-item .icon");
    if (icon.textContent === "▴") {
        icon.textContent = "▾";
    };

    // Hide the items
    const items = dropdown.querySelectorAll(".item");
    items.forEach(item => {
        if (!item.classList.contains("hidden")) {
            item.classList.add("hidden");
        }
    });
};

export default createDropdown;