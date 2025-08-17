import React from 'react'
import { certificate, PupBuilding } from '../Images'

const About = () => {
  return (
    <div>
      <div className='AboutUs'>
        <h1 style={{ textAlign: "center", fontFamily: "cursive", textDecoration: "underline", margin: "2%" }}>About Punjabi University</h1>
        <div>
          {/* <div className='col-md-6 col-sm-4' style={{display:"flex", justifyContent:'center', paddingLeft:"2.5%", alignItems:"center"}}> */}
          {/* <img src="http://punjabiuniversity.ac.in/Pages/Images/PG/8.jpg" alt='LogoPicture' style={{width:"250px",height:"150px", margin:"1%", display:"flex"}} /> */}
          <div style={{ margin: "10px", textAlign: "center" }}>
            <p style={{ textAlign: "center", display: "inline" }}>
              Punjab Assembly established Punjabi University, Patiala under the Punjab Act No. 35 of 1961. Dr. S. Radhakrishnan, the then President of India laid foundation of Punjabi University on June 24, 1962. He preached, "The institutes of higher education share the burden of nation-building in a critically important sense. Our aim is a strong, free and democratic India where every citizen has an equal place and full opportunity of growth. In this task, a vast responsibility rests on our universities." Established on April 30, 1962 in the erstwhile princely state of Patiala with the main objective of furthering the cause of Punjabi language, art and literature, Punjabi University has since evolved into the largest University in the state. This is the second University in the world to be named after a language, the first being Hebrew University of Israel. Its vision is to establish and incorporate a University for the advancement of Punjabi studies and development of Punjabi language as a medium of instruction or otherwise for providing instruction in humanistic and scientific subjects and generally for the promotion of education and research. The University started working from its present lush green, pollution free, 316 acres campus since 1965. Initially University’s jurisdiction area was fixed as the 16 km radius having only 9 colleges. In 1969, it grew into an affiliating university, with 43 colleges affiliated to it. Now the university caters to the educational needs of nine Districts of Punjab. Over the time since its inception, the University has evolved into a multi-faceted and multi-faculty educational institution for the promotion of higher education and research in Humanities, Arts, Sciences, Engineering Languages, Technology and many more. Spread over 600 acres of land, its 1500+ teachers are imparting instruction and guidance to nearly 14,000+ students in a multi-faceted, multi-pronged and multi-faculty environment comprising 70+ Teaching and Research Departments/Chairs on its Campus, 27 Regional Centre/ Neighbourhood Campuses/Constituent Colleges and 274 Colleges affiliated to it.</p>
          </div>
          <div style={{display:'block',alignItems:'center',margin:'1rem'}}>
          <p style={{ padding:"1rem", fontFamily: "cursive", fontWeight: "800", marginTop: "30px", textAlign: "center", marginBottom: "8px", fontSize: "17px" , backgroundColor:"rgba(141, 145, 144, 0.628)" ,borderRadius:"2rem"}}>
            <b>NAAC performance</b>
          </p>
          </div>
          <p style={{ margin: "10px", textAlign: "center"}}>
            Punjabi University, Patiala, has kept up its spree of winning the highest "A" grade on a four-point scale amongst over 350 universities in the country. The status is awarded by the National Assessment and Accreditation Council (NAAC), which is an autonomous institution of the University Grants Commission, for a period of five years. The rare status is given by the NAAC on the basis of overall performance of a University during a space of five years.
          </p>
          <div style={{margin:'20px',padding:'10px',textAlign:'center'}}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope='col'>Sr. No.</th>
                  <th scope='col'>Cycle</th>
                  <th scope='col'>Grade</th>
                  <th scope='col'>CGPA</th>
                  <th scope='col'>Year of Accreditation</th>
                  <th scope='col'>Validity Upto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>1st Cycle</td>
                  <td>Five Star</td>
                  <td>-</td>
                  <td>2002</td>
                  <td>2002-2007</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2nd Cycle</td>
                  <td>A</td>
                  <td>3.11</td>
                  <td>2008</td>
                  <td>2008-2013</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>3rd Cycle</td>
                  <td>A</td>
                  <td>3.34</td>
                  <td>2016</td>
                  <td>2016-2023</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>4th Cycle</td>
                  <td>A+</td>
                  <td>3.37</td>
                  <td>2023</td>
                  <td>2023-2028</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
          <img style={{marginLeft:'32%',width:"40%",borderColor:"black",borderWidth:'0.2rem',borderStyle:"double",padding:"1%"}} src={certificate}/>
          </div>
        </div>
        {/* <div className='col-sm-8 col-md-6' style={{padding:"3%", display:"flex", alignItems:"center", justifyContent:"center"}}> */}

      </div>
      {/* <div></div> */}
      {/* </div> */}

      {/* </div> */}
      <div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.7212103239367!2d76.44708487448409!3d30.35887217476676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102804bba6d66b%3A0x8f2ada618e274451!2sPunjabi%20University%2C%20Patiala!5e0!3m2!1sen!2sin!4v1720776195515!5m2!1sen!2sin" width={"600"} height={"450"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  )
}

export default About
