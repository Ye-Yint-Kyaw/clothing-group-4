const Topsale = ()=>{
  return(
    <div className="topsale" id="topsale-id">
      <h2>Top Sale</h2>
      <div className="first">
        <img src={require('./img/first.png')} alt="" />
      </div>
      <div className="second">
        <img src={require('./img/second.png')} alt="" />
      </div>
      <div className="third">
        <img src={require('./img/third.png')} alt="" />
      </div>
    </div>
  )
}
export default Topsale;