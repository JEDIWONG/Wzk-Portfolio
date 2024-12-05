import "../style/contact.css"; 
import ContactIntro from "../components/contactIntro";
import loc_img from "../assets/ipoh.jpg";
import { Link } from "react-router-dom";

function Contact(){
    return(
        <>
            <div className="contact-container">
                <ContactIntro location="Current Studying Abroad At Kuching but will open to working position around Kuala Lumpur and Penang"
                            imgUrl={loc_img}
                />
                
                <div className="alt-contact-section">
                    <h2>Or Hit Me On</h2>
                    <hr/>

                    <ul>

                        <li>
                            <Link className="Link" to="https://github.com/JEDIWONG">Github</Link>
                        </li>

                        <li>
                            <Link className="Link" to="https://github.com/JEDIWONG">Instagram</Link>
                        </li>

                        <li>
                            <Link className="Link" to="https://github.com/JEDIWONG">linkedIn</Link>
                        </li>

                        <li>
                            <Link className="Link" to="https://github.com/JEDIWONG">Discord</Link>
                        </li>

                    </ul>
                </div>

                <div className="contact-action">
                    <div className="contact-action-details">
                        <h1>Seeking For Opportunity</h1>
                        <p>Internship Offer For Software Engineering Student</p>
                    </div>
                    

                    <button className="button-filled" >
                        <Link className="Link" to="mailto:jediwzk@gmail.com">Email</Link>
                    </button>
                </div>
                
            </div>
        </>
    );
}

export default Contact;