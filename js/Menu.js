import Menu_right from "./Menu_right.js";

var element = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "div",
    { className: "menu_area_left" },
    React.createElement(
      "a",
      { href: "index.html" },
      React.createElement("img", {
        className: "logo",
        src: "images/logo.png",
        alt: "\u795E\u5948\u5DDD\u5DE5\u79D1\u5927\u5B66 \u7B2C46\u56DE \u5E7E\u5FB3\u796D"
      })
    )
  ),
  React.createElement(Menu_right, null)
);

ReactDOM.render(element, document.getElementById("menu_area"));