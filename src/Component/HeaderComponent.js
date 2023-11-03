import { Link } from 'react-router-dom';
import logo from '../Component/logo/linkedin.png'

const HeaderComponent=()=>{
    const divStyle = {
        background: 'linear-gradient(45deg, rgba(225, 160, 190, 0), rgba(200, 110, 70, 0.5))'
      };
    return(
        <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary" style={divStyle} >
  <div className="container-fluid">
    <div className="container">

<div className="row">
    <div className="col-md-4 ">
     <div className="d-flex my-3">
        <h3  className="text-primary mx-1">Linked</h3>
        
     <img src={logo} width={20} height={30}/>
     </div>

    </div>
    <div className="col-md-8 ">
        <div className='my-3'>
          <Link to="/login">  <button className='float-end rounded-pill bg-white' > Sign In</button></Link>
        </div>
    </div>

</div>
 </div>
  </div>
</nav>

 

        </div>
    )
}
export default HeaderComponent;