import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer(props) {
    return (

        <div>
            <div style={{ backgroundColor: "#484A4E", padding: "30px", textAlign: "left", color: "#FFFFFF" }}>
                <div style={{ paddingLeft: '20px' }}>
                    <h3>SITE LINKS</h3>
                </div>
                <div style={{ backgroundColor: "#484A4E", paddingLeft: "30px", paddingTop: '10px', textAlign: "left", color: "#6B6E74", }}>

                    <h5>Our Services</h5>
                    <h5>Directions</h5>
                    <h5>Contact Us</h5>
                    <h5>About Us</h5>
                    <h5>FAQs</h5>
                </div>

            </div>
            <div style={{ backgroundColor: "#484A4E", paddingLeft: "30px", paddingBottom: '20px', textAlign: "center", color: "#6B6E74", }}>
                <FacebookIcon />
                <GitHubIcon />
                <TwitterIcon />
            </div>
            <div style={{ backgroundColor: "#6B6E74", padding: "10px", textAlign: "center", color: "#3B3D41" }}>
                <p>© 2022 Copyright: Inventory Tools</p>
            </div>
        </div >
    );
}

export default Footer;