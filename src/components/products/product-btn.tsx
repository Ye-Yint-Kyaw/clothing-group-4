import styles from "./productCard.module.css";
const Productbtn = ()=>{
  return(
    <div className={styles.Btn}>
      <a href="#detail-id" className="order-btn">ORDER</a>
    </div>
  )
}
export default Productbtn;