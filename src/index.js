import "./style.css";
import createDrawerNavigation from "./modules/drawerNavigation/drawerNavigation";
import createDropdown from "./modules/dropdown/dropdown";
import createImageSlider from "./modules/imageSlider/imageSlider";
import Nature1ImageLink from "./assets/jpg/nature_1.jpg";
import Nature2ImageLink from "./assets/jpg/nature_2.jpg";
import Nature3ImageLink from "./assets/jpg/nature_3.jpg";
import Nature4ImageLink from "./assets/jpg/nature_4.jpg";

// const dropdown = createDropdown({options: ["Audi", "BMW", "Ford"], placeholder: "Select a car"});
// document.body.appendChild(dropdown);

// const dropdown2 = createDropdown({options: ["Spaghetti", "Pizza", "Eggs", "Rice", "Chicken", "Beef"], placeholder: "Select a dish"});
// document.body.appendChild(dropdown2);

// const menu = createDrawerNavigation({items: ["Home", "Menu 1", "Menu 2", "Menu 3", "Logout"]});
// document.body.appendChild(menu);

// const dropdown = createDropdown({options: ["Audi", "BMW", "Ford"], placeholder: "Select a car"});
// document.body.appendChild(dropdown);

const slider = createImageSlider({imageLinks: [Nature1ImageLink, Nature2ImageLink, Nature3ImageLink, Nature4ImageLink]});
document.body.appendChild(slider);
