import Menu_area_right_upp from "./Menu_area_right_upp.js";
import Menu_area_right_low from "./Menu_area_right_low.js";

export default function Menu_right() {
  return (
    <div className="menu_area_right">
      <Menu_area_right_upp />
      <Menu_area_right_low />
    </div>
  );
}
