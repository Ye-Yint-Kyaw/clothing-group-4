import Productcard from "./productcard";
const Product = ()=>{
  return(
    <div className="discount-wrap outer-wrap" id="product-id">
      <h2>Feature Products</h2>
        <div className='product-wrap'>
          <Productcard />
        </div>
    </div>
  )
}
export default Product;