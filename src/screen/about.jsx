import AboutCard from "../components/aboutCard";
import "../style/about.css"
import avatar from "../assets/avatar.jpg";

function About(){

    return(
        <>
            <div className="about-container">
                <AboutCard 
                    desc="Software Engineering student who have passion in delivering software as a solution for everyday task. Im eager to gain hands on experience in software engineering and ready to take on any challenges.  "
                    imgUrl = {avatar}
                />

            </div>
        </>
    ); 
}

export default About;