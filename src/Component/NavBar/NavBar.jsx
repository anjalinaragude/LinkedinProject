import { Link } from 'react-router-dom';
import logo from '../logo/linkedin.png'
import {AiFillHome} from 'react-icons/ai';
import {BsFillPeopleFill,BsBagFill} from 'react-icons/bs'
import "../NavBar/NavBar.css"
const NavBar=()=>{
    const divStyle = {
        // background: 'linear-gradient(45deg, rgba(225, 160, 190, 0), rgba(200, 110, 70, 0.5))'
      };
    return(
        <div>


<nav className="navbar navbar-expand-lg bg-body-white" style={{backgroundColor:"white"}} >
  <div className="container-fluid">
    <div className="container">

<div className="row">
    <div className="col-md-4  col-lg -4">
     <div className="d-flex ">
        {/* <h3  className="text-primary mx-1">Linked</h3> */}
       <div className=''>
     <img src={logo} width={20} height={30}/>
     </div>
    
     </div>
    </div>
    <div className="col-md-8 col-lg-8 ">
     <div>
        <ul  className='d-flex justify-content-around listItem'>
          <li className="navbarList"><AiFillHome/></li>
         <Link to="/mynetwork"> <li className="navbarList"><BsFillPeopleFill/></li></Link>
          <li className="navbarList"><BsBagFill/></li>
          <button className='float-end rounded-pill bg-white' > <Link to="/login">logout</Link></button>
        
          
        </ul>
      
       
           
        </div>
    </div>

</div>
 </div>
  </div>
</nav>

 

        </div>
    )
}
export default NavBar;