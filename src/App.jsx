import ReactRouter from './Pages/ReactRouter';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dataAvailable } from './Component/Redux';
import { ToastContainer } from 'react-toastify';

import './App.css'
import "./CSS/Login.css"
import './CSS/Signup.css'
import './CSS/Card.css'
import './CSS/Users.css'
import './CSS/studentDetails.css'
import "./CSS/ChangePassword.css"
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("User") !== null) {
      dispatch(dataAvailable(JSON.parse(localStorage.getItem("User"))))
      // console.log("After refresh data is loaded into redux using local storage")
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <div
          style={{
            maxWidth: "1100px",
            margin: "20px auto",
            padding: "16px 20px",
            border: "1px solid #f39c12",
            background: "#fffaf0",
            borderRadius: "12px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
            display: "flex",
            gap: "14px",
            alignItems: "flex-start",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontSize: "14px",
            lineHeight: "1.6"
          }}
        >
          <div style={{ fontSize: "22px", lineHeight: 1 }}>⚠️</div>
          <div style={{ color: "#333" }}>
            <strong>Disclaimer</strong><br />
            This website is a <b>student-made educational project</b> and is{" "}
            <b>not affiliated with Punjabi University</b>. All data shown here is{" "}
            publicly available and used only for learning purposes.
            <br /><br />
            <b>Developer:</b> Prince Bawa (Batch 2022–2026, Roll No. 12201101)<br />
            <b>Contact:</b>{" "}
            <a href="mailto:princebawa9267@gmail.com">princebawa9267@gmail.com</a>
            <br /><br />
            If any official or authority has an issue regarding this project or wants
            changes, please contact me <b>before taking any action</b>.
            <br /><br />
            For official updates and accurate information, please always refer to the
            Punjabi University official website:&nbsp;
            <a
              href="https://csepup.ac.in/btech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://csepup.ac.in/btech/
            </a>
          </div>
        </div>


        <ReactRouter />
      </BrowserRouter>
    </>
  )
}

export default App
