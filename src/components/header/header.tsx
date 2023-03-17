import Button from "../button";
import Navbar from "../navbar/navbar";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.pos}>
        <div className={styles.headerBar}>
          <div className={styles.logo}>
            <h1>
              <a href="#">
                <img src={require("./img/logo.png")} alt="Logo" />
              </a>
            </h1>
          </div>
          <Navbar/>
          <div className={styles.login}>
            <a href="#login-id">
              {""}
              <span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </span>{" "}
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="inner-wrap">
        <div className={styles.txtWrap}>
          <h2>CLOTHING</h2>
          <p>
            Provocative content for an accounting firm may include six reasons
            you're paying too much in tax; why the top line is more important
            than the bottom line; and how to get your clients to offer to pay
            you more than you ask.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Header;
