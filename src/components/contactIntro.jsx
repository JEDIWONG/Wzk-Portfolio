import "../style/contact_intro.css";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import ContactTile from "../components/ContactTile";

function ContactIntro(props){

    return(
        <>
            <div className="contact-intro-container">
                <div className="contact-intro-details">
                    <p>Contact</p>
                    <hr />
                    <h1>Reach Me Out</h1>
                    <p className="contact-intro-location">{props.location}</p>

                    <div className="contact-bar">
                        <ContactTile imgUrl={email} value="jediwzk@gmail.com"></ContactTile>
                        <ContactTile imgUrl={phone} value="011-3185-1901"></ContactTile>
                    </div>
                </div>
                
                <img src={props.imgUrl}></img>
            </div>
        </>
    );
}

export default ContactIntro;