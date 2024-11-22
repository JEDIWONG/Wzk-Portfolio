import "../style/footer.css"
import gh_icon from "../assets/github_icon.svg"
import ig_icon from "../assets/ig_icon.svg"
import linkedin_icon from "../assets/linkedin_icon.svg"


function Footer(){
    
    return(
        <>
            <div className="footer-container">

                <div className="footer-img-container">
                    <img src={gh_icon}></img>
                    <img src={ig_icon}></img>
                    <img src={linkedin_icon}></img>
                </div>
                

                <p>WONG ZHI KIN 2024</p>
            </div>


        </>
    ); 

}

export default Footer; 