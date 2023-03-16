const Discountcard = (props: any)=>{
  const pictures = [
    {
      id:1,
      url: "discount-item01",
      title: 'Discount Product'
    },
    {
      id:2,
      url: "discount-item02",
      title: 'Discount Product'
    },
    {
      id:3,
      url: "discount-item03",
      title: 'Discount Product'
    }

  ];
return(
  <div className="card">
    <div className="card-img">
      {
        pictures.map(
          (pic) => {
            return(  
              <img key = {pic.id} src={require('./img/' + pic.url + '.png')} alt="Discount Product" title={pic.title} />
            )
          }
        )
      }
    </div>         
  </div>
)
}
export default Discountcard;