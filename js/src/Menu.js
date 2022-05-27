import Menu_right from "./Menu_right.js";

const element = (
  <React.Fragment>
    <div className="menu_area_left">
      <a href="index.html">
        <img
          className="logo"
          src="images/logo.png"
          alt="神奈川工科大学 第46回 幾徳祭"
        ></img>
      </a>
    </div>
    <Menu_right />
  </React.Fragment>
);

ReactDOM.render(element, document.getElementById("menu_area"));
