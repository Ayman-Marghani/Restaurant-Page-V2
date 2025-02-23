import { useState } from "react"
import HomePageImg1 from "../assets/img/homepage-img1.jpg"
import HomePageImg2 from "../assets/img/homepage-img2.jpg"
import HomePageImg3 from "../assets/img/homepage-img3.jpg"

function ImageCarousel() {
  const [curImgId, setCurImgId] = useState(0);

  return (
    <>
      <div className="slider-container">
        <button className="arrow left-arrow" onClick={() => setCurImgId((curImgId - 1 + 3) % 3)}>&#10094;</button>
        <div className="slider">
          <img id="img0" className={`home-img ${curImgId === 0 ? "show" : ""}`} src={HomePageImg1} alt="Interior of cozy restaurant, loft style stock photo"/>
          <img id="img1" className={`home-img ${curImgId === 1 ? "show" : ""}`} src={HomePageImg2}/>
          <img id="img2" className={`home-img ${curImgId === 2 ? "show" : ""}`} src={HomePageImg3}/>
        </div>
        <button className="arrow right-arrow" onClick={() => setCurImgId((curImgId + 1) % 3)}>&#10095;</button>
      </div>
      {/* Nav dots */}
      <div className="nav-dots">
        <span id="dot0" className={`dot ${curImgId === 0 ? "highlight" : ""}`} onClick={() => setCurImgId(0)}></span>
        <span id="dot1" className={`dot ${curImgId === 1 ? "highlight" : ""}`} onClick={() => setCurImgId(1)}></span>
        <span id="dot2" className={`dot ${curImgId === 2 ? "highlight" : ""}`} onClick={() => setCurImgId(2)}></span>
      </div>
    </>
  )
}

export default ImageCarousel