//Products component
import one from "../one.jpg"
import two from "../two.jpg"
import three from "../three.jpg"

function Products()
{
  return(
    <div className="products">
      <div className="box">
            <img className="one" src={one} alt="one"></img>
            <p>Perfume 1</p>
      </div>

      <div className="box">
            <img src={two} alt="two"></img>
            <p>Perfume 2</p>
      </div>
      
      <div className="box">
            <img src={three} alt="three"></img>
            <p>Perfume 3</p>
      </div>
    </div>
  )
}

export default Products