import "./drawerNavigation.css";
import MenuIcon from "../../assets/menu.svg"

const createDrawerNavigation = ({items}) => {
    // Create the menu
    const menu = document.createElement("div");
    menu.className = "menu";

    // Create the icon
    const menuIcon = new Image();
    menuIcon.src = MenuIcon;
    menuIcon.className = "menu-icon";
    menu.appendChild(menuIcon);

    // Create the wrapper for the items
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.style.display = "none";
    items.forEach(item => {
        const navItem = document.createElement("div");
        navItem.className = "item";
        navItem.textContent = item;
        wrapper.appendChild(navItem);
    });

    // Create close button
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "X";
    wrapper.appendChild(closeButton);

    menu.appendChild(wrapper);

    // Detect when user clicks the menu icon
    menu.querySelector(".menu-icon").addEventListener("click", () => {
        openMenu(menu);
    });

    // Detect when user clicks the close button
    menu.querySelector(".close-button").addEventListener("click", () => {
        closeMenu(menu);
    });

    // Detect when user clicks an item
    menu.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {
            menu.querySelectorAll(".item").forEach(element => {
                element.classList.remove("item-active");
            });
            item.classList.add("item-active");
        });
    });

    return menu;
};

const openMenu = menu => {
    menu.querySelector(".menu-icon").classList.add("hidden");
    menu.querySelector(".wrapper").style.display = "flex";
}

const closeMenu = menu => {
    menu.querySelector(".menu-icon").classList.remove("hidden");
    menu.querySelector(".wrapper").style.display = "none";
}

export default createDrawerNavigation;