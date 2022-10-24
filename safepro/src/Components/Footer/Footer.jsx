import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SafePro from "../../icons/logo_black.svg"
const Footer = () => {
    return (
        <div className="footer">
            <img src={SafePro} alt="logo" width="150px" />
            <div className="footer_sub_div">
                <div className="footer_left"><h1>Reach us +91 82772 82772</h1></div>
                <div className="footer_right">
                    <h6>Join us</h6>
                    <div className="footer_right_inbox">
                        <div className="input_mail">
                            <h5>example@safepro.tech</h5>
                            <button>Subscribe</button>
                        </div>
                        <div style={{ display: "flex", marginTop: "-30px" }}>
                            <h6 style={{ paddingRight: "20px", paddingLeft: "20px" }}>Mobile  </h6 >
                            <h6 >: 82772 82772 | 82772 11111</h6>
                        </div>
                        <div style={{ display: "flex" }}>
                            <h6 style={{ marginTop: "-15px", paddingRight: "24px", paddingLeft: "20px" }}> Phone </h6>
                            <h6 style={{ marginTop: "-15px" }}> : 80 2323 2030</h6>
                        </div>
                        <div style={{ display: "flex" }}>
                            <h6 style={{ marginTop: "-15px", paddingRight: "16px", paddingLeft: "20px" }}>Support </h6>
                            <h6 style={{ marginTop: "-15px" }}>:  reachus@safepro.tech</h6>
                        </div>
                        <div >
                            <LinkedInIcon style={{ marginLeft: "20px", color:"#0087ff" }} />
                            <InstagramIcon style={{ marginLeft: "10px" , color:"#0087ff" }} />
                            <TwitterIcon style={{ marginLeft: "10px" , color:"#0087ff" }} />
                            <FacebookIcon style={{ marginLeft: "10px" , color:"#0087ff" }} />
                            <PinterestIcon style={{ marginLeft: "10px" , color:"#0087ff" }} />
                            <YouTubeIcon style={{ marginLeft: "10px" , color:"#0087ff" }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer