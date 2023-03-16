import Button from "../button";
const Header = ()=>{
  return(
    <div className="bg">
      <div className="pos">
        <div className='header-bar'>
          <div className='logo'>
            <h1><a href="#"><img src={require('./img/logo.png')} alt="Logo" /></a></h1>
          </div>
          <div className='nav-bar'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#product-id">Products</a></li>
              <li><a href="#brands-id">Brands</a></li>
              <li><a href="#topsale-id">Topsale</a></li>
              <li><a href="#contact-id">Contact Us</a></li>
            </ul>
          </div>
          <div className='login'>
            
            <a href="#login-id"> <span><i className="fa-solid fa-right-to-bracket"></i></span> Sign Up</a>
          </div>  
        </div>
      </div> 
      <div className="inner-wrap">
        <div className="txt-wrap">
          <h2>CLOTHING</h2>
          <p>Provocative content for an accounting firm may include six reasons you're paying too much in tax; why the top line is more important than the bottom line; 
            and how to get your clients to offer to pay you more than you ask.
          </p>
          <Button />
        </div>
      </div>
    </div>
  )
}
export default Header;