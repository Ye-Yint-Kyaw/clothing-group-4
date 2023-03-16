import Addtocard from "./addtocard";
import styles from "./detail.module.css" ;
const Detail = ()=>{
  return(
    <div className="detail-sec" id="detail-id">
      <div className="outer-wrap">
        <div className="inner-wrap">
          <div className={styles.detailwrap}>
            <h2>Here is Detail</h2>
            <div className={styles.colorbox}>
              <div className={styles.redbox}>
              </div> 
              <div className={styles.bluebox}>
              </div> 
              <div className={styles.greenbox}>
              </div> 
              <div className={styles.pinkbox}>
              </div> 
              <div className={styles.whitebox}>
              </div> 
            </div>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Magni vero culpa commodi voluptate ipsum fugiat hic qui est, quia placeat at quibusdam fugit. 
                 Atque, ad sed. Dicta quo quod facere!</p>
            
            <div className={styles.picwrap}>
              <div className={styles.pic}>
                <img src={require('./img/p01.jpeg')} alt="" />
                <img src={require('./img/p01.jpeg')} alt="" />
                <img src={require('./img/p01.jpeg')} alt="" />
                <img src={require('./img/p01.jpeg')} alt="" />
              </div>
            </div>
            <Addtocard />


          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;