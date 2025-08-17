import React from 'react'
import Carousel from '../Components/Carousel'
import ContactCard from '../Components/ContactCard'
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PupBuilding } from "../Images/index"

const Home = () => {
  return (
    <div>
      <div
  className="HomePUPBuilding"
  style={{
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  }}
>
  <img
    src={PupBuilding}
    alt="PUP Building"
    style={{
      width: "100%",
      height: "auto",
      objectFit: "cover",
    }}
  />
</div>

      <div className='Gallery'>
        <div className='text'>
          Gallery
        </div>
        <div className='carousel' >
          <Carousel />
        </div>
        <div className='text' style={{ padding: "10px", marginBottom: "20px" }}>
          Contact Us
        </div>
        <div>
          {/* <div className="container text-center">
            <div className="row align-items-start g-4">
              <div className="col-12 col-md-6 col-lg-4" style={{display: 'block',justifyContent: "center"}}>
                <ContactCard className="ContactCardView" img={<FaPhoneAlt size={"50%"} className="ContactImg" />} contactType={"Phone number"} contactDetails={<a href='tel:911755136337' target='_blank'><span>+91175-5136337</span></a>} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ContactCard className="ContactCardView" img={<MdEmail size={"50%"} className="ContactImg" />} contactType={"Email Address"} contactDetails={<a href="mailto:ce2013pup@yahoo.com" target='_blank'><span>ce2013pup@yahoo.com</span></a>} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ContactCard className="ContactCardView" img={<FaLocationArrow size={"50%"} className="ContactImg" />} contactType={"Location"} contactDetails={<a href="https://maps.app.goo.gl/vWfxuB6XEou2m58C6" target='_blank'><span>Department of Computer Engineering</span></a>} />
              </div>
            </div>
          </div> */}

          <div className="container my-4">
  <div className="row g-4 justify-content-center">
    
    {/* Phone */}
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
      <ContactCard
        className="ContactCardView"
        img={<FaPhoneAlt className="ContactImg" />}
        contactType="Phone number"
        contactDetails={
          <a href="tel:911755136337">
            <span>+91 175-5136337</span>
          </a>
        }
      />
    </div>

    {/* Email */}
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
      <ContactCard
        className="ContactCardView"
        img={<MdEmail className="ContactImg" />}
        contactType="Email Address"
        contactDetails={
          <a href="mailto:ce2013pup@yahoo.com">
            <span>ce2013pup@yahoo.com</span>
          </a>
        }
      />
    </div>

    {/* Location */}
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
      <ContactCard
        className="ContactCardView"
        img={<FaLocationArrow className="ContactImg" />}
        contactType="Location"
        contactDetails={
          <a
            href="https://maps.app.goo.gl/vWfxuB6XEou2m58C6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Department of Computer Engineering</span>
          </a>
        }
      />
    </div>
    
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Home
