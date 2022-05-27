export default function Menu_area_right_upp() {
  return (
    <div className="menu_area_right_upp">
      {/*<!--SNSボタン-->*/}
      <div className="sns_button_area_pc">
        <ul className="snsbtniti">
          {/*Twitterを見る*/}
          <li>
            <a
              href="https://mobile.twitter.com/kait_jikkou"
              target="_blank"
              className="flowbtn9"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          {/*LINEに登録*/}
          <li>
            <a href="https://lin.ee/rGrWlhE" className="flowbtn9">
              <i className="fab fa-line"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="pc_button_area">
        <section id="pc_change_lang">
          <a href="#" className="boxbutton_hover" onClick={trans_eng}>
            <div className="pc_button_small_box" id="pc_button_small_box1">
              <i className="fas fa-globe"></i>ENGLISH
            </div>
          </a>
        </section>
        <a href="contact.html" className="boxbutton_hover">
          <div className="pc_button_small_box" id="pc_button_small_box2">
            <i className="far fa-envelope"></i>CONTACT
          </div>
        </a>
        <a href="link.html" className="boxbutton_hover">
          <div className="pc_button_small_box" id="pc_button_small_box3">
            <i className="fas fa-link"></i>LINK
          </div>
        </a>
      </div>
    </div>
  );
}
