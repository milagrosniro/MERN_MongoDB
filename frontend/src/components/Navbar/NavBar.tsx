import { Link } from "react-router-dom"
import '../../css/navBar.css'


const NavBar = () => {
  return (
    <div className="container-navBar">

    <nav >
  <div className="container-links">
  <div className="">
    <Link className="link" to="/">
      My Favorites Videos
    </Link>
   </div>
    
      <div className="">
      
        <Link className="link" to="/">
          Create new video
        </Link>
        
      </div>
    </div>
  
</nav>
    </div>

  )
}

export default NavBar