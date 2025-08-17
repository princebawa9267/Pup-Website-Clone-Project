import React from "react";
import { facebook,linkedin,instagram,youtube,logo,naacA } from "../Images";

const Footer = () => {
  return (
    <div className="footer_section">
          <div className="row">
            <div className="col-sm-5 " style={{marginBottom:"20px"}}>
              <img src={logo} width={"13%"} style={{marginLeft:"2%",marginRight:"2%"}}/> 
              <img src={naacA} width={"15%"} />
              <p>
                <b>The Vision and Mission of Punjabi University, Patiala</b>
                <br />
                To be best among the departments in Computer Science and Engineering and to benefit the society globally by producing world class engineers, researchers with excellent analytical, logical, communication skills and with ability to work in every type of environment
              </p>
              <div className="icon" style={{display:"flex"}}>
                <span style={{ padding: "0.5rem" }}>
                  <a href="https://www.facebook.com/punjabiuniversity?mibextid=ZbWKwL" target="_blank" >
                  <img src={facebook} width={"30rem"}/>
                  </a>
                </span>
                <span style={{ padding: "0.5rem" }}>
                  <a href="https://www.instagram.com/cse_pup?igsh=Ym8yYXd3bTByZXlj" target="_blank">
                  <img src={instagram} width={"30rem"}/>
                  </a>
                </span>
                <span style={{ padding: "0.5rem" }}>
                  <a href="https://www.linkedin.com/school/punjabi-university-patiala/" target="_blank">
                  <img src={linkedin} width={"30rem"}/>
                  </a>
                </span>
                <span style={{ padding: "0.5rem" }}>
                  <a href="https://www.youtube.com/channel/UC1RmhsSn4I9L0Or15BKcC7g" target="_blank">
                  <img src={youtube} width={"30rem"}/>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-sm-3 ">
                  <h3 >Quick Links</h3>
                    <ul>
                      <li>
                        <a href="https://punjabiuniversity.ac.in/indexSyllabi.aspx" target="_blank">Download latest Syllabus</a>
                      </li>
                      <li>
                        <a href="https://ds19.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" target="_blank">Datesheet</a>
                      </li>
                      <li>
                        <a href="https://results.pupexamination.ac.in/t8/results/results.php" target="_blank">Result</a>
                      </li>
                      <li>
                        <a href="https://www.onlinesbi.sbi/sbicollect/" target="_blank">Online fees payment</a>
                      </li>
                    </ul>
            </div>
            <div className="col-sm-4" >
                  <h3>Contact us</h3>
                <div>
                <ul>
                  <li><b>GENERAL ENQUIRY:</b> 0175-5136582</li>
                  <li><b>FEES ENQUIRY</b> 0175-5136395</li>
                  <li><b>ADMINISTRATIVE ENQUIRY:</b>0175-5136366</li>
                  <li><b>ADMISSION ENQUIRY:</b>0175-5136522</li>
                  <li><b>EXAMINATION ENQUIRY:</b>0175-5136370</li>
                </ul>
                </div>
            </div>
          </div>
      </div>
  );
};

export default Footer;
