import "../style/contact.css"; 
import ContactIntro from "../components/contactIntro";
import loc_img from "../assets/ipoh.jpg";

function Contact(){
    return(
        <>
            <div className="contact-container">
                <ContactIntro location="Current Studying Abroad At Kuching but will available at Kuala Lumpur, Ipoh and Kuantan"
                            imgUrl={loc_img}
                />
                
                <div className="alt-contact-section">
                    <h2>Or Hit Me On</h2>
                    <hr/>

                    <ul>

                        <li>
                            Github
                        </li>

                        <li>
                            Instagram
                        </li>

                        <li>
                            linkedIn
                        </li>

                        <li>
                            Discord
                        </li>

                    </ul>
                </div>

                <div className="contact-action">
                    <div className="contact-action-details">
                        <h1>Seeking For Opportunity</h1>
                        <p>Internship Offer For Software Engineering Student</p>
                    </div>
                    

                    <button className="button-filled">Email</button>
                </div>
                
            </div>
        </>
    );
}

export default Contact;