import Discountcard from "./card";

type props = {
  title: string;
}
const Discount: React.FC<props> = ({title})=>{
  return(
    <div className='discount-sec' id="discount-id">
          <div className='inner-wrap'>
            <div className="discount-wrap">
              <h2>Discount Products</h2>
              <div className='card-wrap'>
                <Discountcard title={title}/>
              </div>
            </div>
          </div>
      </div>
  )
}
export default Discount;