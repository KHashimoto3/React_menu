import Menu_area_right_upp from "./Menu_area_right_upp.js";
import Menu_area_right_low from "./Menu_area_right_low.js";

export default function Menu_right() {
  return React.createElement(
    "div",
    { className: "menu_area_right" },
    React.createElement(Menu_area_right_upp, null),
    React.createElement(Menu_area_right_low, null)
  );
}