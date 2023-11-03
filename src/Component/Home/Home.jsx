import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import "../Home/Home.css";
import { Last } from "react-bootstrap/esm/PageItem";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai"
function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDropdown = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row  mt-3 grid gap-2">
          <div className="col-md-3  col-lg-2 bg-white ">
            <div className=" profile ">
              <div className="Img">
                <div className="backImg">
                  <img
                    src="img/post.jpg"
                    width={"220px"}
                    height={80}
                    alt=""
                    className="backgroundImg"
                  />
                </div>
                <div className="proImg">
                  <Link to="/profile">
                    {" "}
                    <img
                      src="img/profile1.jpg"
                      alt=""
                      width={70}
                      height={70}
                      className="profileImg rounded-pill"
                    />
                  </Link>
                </div>
              </div>
              <div className="desc my-4">
                <span className=" postUserName">Anjali Reddy</span>
                <span className="postDesc fs-6 fw-light"> Software Engg</span>
              </div>
              <hr style={{ width: "100%" }}></hr>
              <Link
                to="/mynetwork"
                className="text-decoration-none bg-body-secondary "
                style={{ width: "20" }}
              >
                <div className="connections d-flex gap-2 align-items-center">
                  <div className="connect  text-black ">
                    <span className="fw-lighter">Connections </span>
                    <br />
                    <span>
                      <b>Grow your network</b>
                    </span>
                  </div>
                  <div>
                    <span className="">39</span>
                  </div>
                </div>
              </Link>
              <Link
                to="/profile-view"
                className="text-decoration-none bg-body-secondary "
                style={{ width: "20" }}
              >
                <div className="">
                  <div className="connection d-flex align-items-center">
                    <span className="fw-lighter text-black">
                      Who's viewed your profile
                    </span>
                    <span className="">14</span>
                  </div>
                </div>
              </Link>
              <hr />
              <Link
                to="/my-items/saved-jobs/"
                className=" text-decoration-none text-black"
              >
                <div className="d-flex align-items-center">
                  <BsFillBookmarkFill className="me-3" />
                  <span className="fw-b">
                    <b>My items</b>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 bg-white">
            <div className="container">
              <div className="row m-3">
                {/* <div className="startpost d-flex  col-md-6">
                        <div className="ProfileImg me-3">
                            <img src="img/profile1.jpg" alt="" width={50} height={50} className="rounded-pill" />
                        </div>
                        <div className="inputProfile">
                            <input type="text" className="inputpost"  placeholder=" Start a post" />
                        </div>
                     </div> */}

                <div className="col-md-12 ">
                  <div className="ProfileImg  d-flex align-items-center">
                    <img
                      src="img/profile1.jpg"
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-pill me-3"
                    />

                    <div className="inputProfile">
                      <input
                        type="text"
                        className="inputpost rounded-pill"
                        placeholder=" Start a post"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 bg-secondary">fgfg</div>
        </div>
        <div class="row my-2">
          <div className="col-md-3  col-lg-2 bg-white ">
            {/* <div  className=" profile " style={{width:'210px'}}>
                            <div className="Img">
                               <div className="backImg">
                                <img src="img/post.jpg" width={"210px"} height={80} alt="" className="backgroundImg" />
                                </div>
                                <div className="proImg">
                             <Link to="/profile">   <img src="img/profile1.jpg" alt="" width={70} height={70} className="profileImg rounded-pill" /></Link>
                            </div>
                            </div>
                            <div className="desc my-4">
                                <span className=" postUserName">Anjali Reddy</span>
                                <span className="postDesc fs-6 fw-light"> Software Engg</span>
                            </div>
                            <hr></hr>
                            <Link to="/mynetwork" className="text-decoration-none bg-body-secondary "style={{width: "20"}}>
                                <div className="connections d-flex gap-2 align-items-center">
                                
                                <div className="connect  text-black " >
                                <span className="fw-lighter">Connections </span>
                                <br/>
                                    <span><b>Grow your network</b></span>
                                    </div>
                               <div><span className="">39</span></div>
                                
                               
                                </div></Link>
                               <Link to="/profile-view" className="text-decoration-none bg-body-secondary "style={{width: "20"}}> 
                               <div className="">
                                <div className="connection d-flex align-items-center">
                                    <span className="fw-lighter text-black">Who's viewed your profile</span>
                                    <span className="">14</span>
                                    </div>
                            </div></Link>
                            <hr/>
                            <Link to="//my-items/saved-jobs/" className=" text-decoration-none text-black"><div className="d-flex align-items-center">
                                <BsFillBookmarkFill className="me-3"/>
                                <span className="fw-b"><b>My items</b></span>
                            </div></Link>

                        </div> */}

            <div className="dropdown">
              <span className="me-5">Recent</span>
              <button
                onClick={handleDropdown}
                className="dropdown-toggle bg-white border-0 ms-5 "
                disabled={isDisabled}
              ></button>
              {showContent && (
                <div className="dropdown-content">
                  <div className="d-flex align-items-center">
                    <BiHash />
                    <span className="fw-light ms-3">tstschie</span>
                  </div>
                </div>
              )}
            </div>
            <p className=""><Link to="/groups" >Groups</Link></p>
            <div className="d-flex justify-content-between">
                <p><Link to="/events">Events</Link></p>
                <AiOutlinePlus/>
            </div>
            <div className="dropdown">
              <span className="">Followed Hashtags</span>
              <button
                onClick={handleDropdown}
                className="dropdown-toggle border-0 bg-white ms-3"
                disabled={isDisabled}
              ></button>
              {showContent && (
                <div className="dropdown-content">
                  <div className="d-flex align-items-center">
                    <BiHash />
                    <span className="fw-light ms-3">tstschie</span>
                  </div>
                  <div  className="">
                  <p className="fw-light ms-4 fs-6">  See all</p>
                  </div>
                </div>
              )}
            </div>
            <button className="text-center border-0 mt-2 mb-2" style={{width:'200px'}}>Discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
