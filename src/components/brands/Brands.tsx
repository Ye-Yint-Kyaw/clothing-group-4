import styles from "./brands.module.css";
const Brands = ()=>{
  const logo = [
    {
      id: 1,
      url: "Desigual",
      
      // name: "Adidas"
    },
    {
      id: 2,
      url: "FILA",
      // name: "Calvin Klein"
    },
    {
      id: 3,
      url: "G-STAR",
      // name: "Adidas"
    },
    {
      id: 4,
      url: "GUCCI",
      // name: "Adidas"
    },
    {
      id: 5,
      url: "H-M",
      // name: "Adidas"
    },
    {
      id: 6,
      url: "Hugo Boss",
      // name: "Adidas"
    },
    {
      id: 7,
      url: "LV",
      // name: "Adidas"
    },
    {
      id: 8,
      url: "NIKE",
      // name: "Adidas"
    },
    {
      id: 9,
      url: "POLO",
      // name: "Adidas"
    },
    {
      id: 10,
      url: "PUMA",
      // name: "Adidas"
    },
    {
      id: 11,
      url: "UNIQLO",
      name: "Adidas"
    },
    {
      id: 12,
      url: "ZARA",
      name: "Adidas"
    },
    {
      id: 13,
      url: "Levi's",
      name: "Adidas"
    },
    {
      id: 14,
      url: "MONCLER",
      name: "Adidas"
    },
    {
      id: 15,
      url: "Lululemon",
      name: "Adidas"
    },
    {
      id: 16,
      url: "Under-Armour",
      name: "Adidas"
    }
  ]
  return(
    <div className={styles.brandsBlog} >
      {
        logo.map((item)=>{
          return(
            <div className={styles.logoWrap}>
              <img key={item.id} src={require('./img/' + item.url + '.png')} alt="Adidas" />
            </div>
          )
        })
      } 
    </div>
  )
}
export default Brands;