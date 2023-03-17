import Discountcard from "./card";
import styles from "./discount.module.css"

type props = {
  title: string;
}
const Discount: React.FC<props> = ({title})=>{
  return(
    <div className='discount-sec'>
          <div className='inner-wrap'>
            <div className={styles.discountWrap}>
              <h2>Discount Products</h2>
              <div className={styles.cardWrap}>
                <Discountcard title={title}/>
              </div>
            </div>
          </div>
      </div>
  )
}
export default Discount;