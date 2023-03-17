import Productbtn from "./product-btn";
import styles from "./productCard.module.css";

const Productcard = ()=>{
  const productpic = [
    {
      id: 1,
      url: "p08",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 2,
      url: "p09",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 3,
      url: "p10",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 4,
      url: "p11",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 5,
      url: "p12",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 6,
      url: "p13",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 7,
      url: "p14",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    },
    {
      id: 8,
      url: "p15",
      title: "GUCCI",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam deserunt, autem id voluptates veritatis inventore"
    }
  ]
  return(
    <div className={styles.pWrap}>
      {
        productpic.map(
          (pic)=>{
            return(
              <div className={styles.picSize}>
                  <img key={pic.id} src={require('./img/' + pic.url + '.jpeg')} alt="" />
                  <h4>{pic.title}</h4>
                  <p>{pic.des}</p>
                  <Productbtn />
              </div>
            )
          }
        )
      }
    </div>
  )
}
export default Productcard;