import createDrawerNavigation from "./modules/drawerNavigation/drawerNavigation";
import createDropdown from "./modules/dropdown/dropdown";

// const dropdown = createDropdown({options: ["Audi", "BMW", "Ford"], placeholder: "Select a car"});
// document.body.appendChild(dropdown);

// const dropdown2 = createDropdown({options: ["Spaghetti", "Pizza", "Eggs", "Rice", "Chicken", "Beef"], placeholder: "Select a dish"});
// document.body.appendChild(dropdown2);

const menu = createDrawerNavigation({items: ["Home", "Menu 1", "Menu 2", "Menu 3", "Logout"]});
document.body.appendChild(menu);

const dropdown = createDropdown({options: ["Audi", "BMW", "Ford"], placeholder: "Select a car"});
document.body.appendChild(dropdown);