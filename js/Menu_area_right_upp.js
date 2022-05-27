export default function Menu_area_right_upp() {
  return React.createElement(
    "div",
    { className: "menu_area_right_upp" },
    React.createElement(
      "div",
      { className: "sns_button_area_pc" },
      React.createElement(
        "ul",
        { className: "snsbtniti" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            {
              href: "https://mobile.twitter.com/kait_jikkou",
              target: "_blank",
              className: "flowbtn9"
            },
            React.createElement("i", { className: "fab fa-twitter-square" })
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "https://lin.ee/rGrWlhE", className: "flowbtn9" },
            React.createElement("i", { className: "fab fa-line" })
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "pc_button_area" },
      React.createElement(
        "section",
        { id: "pc_change_lang" },
        React.createElement(
          "a",
          { href: "#", className: "boxbutton_hover", onClick: trans_eng },
          React.createElement(
            "div",
            { className: "pc_button_small_box", id: "pc_button_small_box1" },
            React.createElement("i", { className: "fas fa-globe" }),
            "ENGLISH"
          )
        )
      ),
      React.createElement(
        "a",
        { href: "contact.html", className: "boxbutton_hover" },
        React.createElement(
          "div",
          { className: "pc_button_small_box", id: "pc_button_small_box2" },
          React.createElement("i", { className: "far fa-envelope" }),
          "CONTACT"
        )
      ),
      React.createElement(
        "a",
        { href: "link.html", className: "boxbutton_hover" },
        React.createElement(
          "div",
          { className: "pc_button_small_box", id: "pc_button_small_box3" },
          React.createElement("i", { className: "fas fa-link" }),
          "LINK"
        )
      )
    )
  );
}