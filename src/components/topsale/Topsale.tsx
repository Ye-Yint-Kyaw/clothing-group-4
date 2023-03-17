import styles from "./topsale.module.css";

const Topsale = ()=>{
  return(
    <div className={styles.topsale} id={styles.topsaleid}>
      <h2>Top Sale</h2>
      <div className={styles.first}>
        <img src={require('./img/first.png')} alt="first" />
      </div>
      <div className={styles.second}>
        <img src={require('./img/second.png')} alt="second" />
      </div>
      <div className={styles.third}>
        <img src={require('./img/third.png')} alt="third" />
      </div>
    </div>
  )
}
export default Topsale;