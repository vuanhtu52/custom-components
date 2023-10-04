import createDropdown from "./modules/dropdown/dropdown";

const dropdown = createDropdown({options: ["Audi", "BMW", "Ford"], placeholder: "Select a car"});
document.body.appendChild(dropdown);

const dropdown2 = createDropdown({options: ["Spaghetti", "Pizza", "Eggs", "Rice", "Chicken", "Beef"], placeholder: "Select a dish"});
document.body.appendChild(dropdown2);