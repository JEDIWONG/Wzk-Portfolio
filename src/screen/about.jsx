import AboutCard from "../components/aboutCard"
import "../style/about.css"
import avatar from "../assets/avatar.jpg"
import interest_01 from "../assets/software.svg"
import interest_02 from "../assets/devops.svg"

function InterestCard(props){

    return(
        <>
            <div className="interest-card-container">
                <img src={props.imgUrl}></img>
                <h1>
                    {props.title}
                </h1>
                <hr/>
                <p>{props.desc}</p>
            </div>
        </>
    );
}

function About(){

    return(
        <>
            <div className="about-container">
                <AboutCard 
                    desc="Software Engineering student who have passion in delivering software as a solution for everyday task. Im eager to gain hands on experience in software engineering and ready to take on any challenges.  "
                    imgUrl = {avatar}
                />
                
                <section className="about-section">
                    <h1>
                        Interest
                    </h1>

                    <hr/>
                    
                    <div className="interest-container">
                        <InterestCard 
                            title="Full Stack Development" 
                            desc="Interest in developing full stack application using the best practices and connected to real world solution" 
                            imgUrl={interest_01}
                        />

                        <InterestCard 
                            title="DevOps" 
                            desc=" Passionate about exploring DevOps practices, as they bridge the gap between development and operations, fostering efficient collaboration, automation, and continuous delivery to enhance software quality and scalability" 
                            imgUrl={interest_02}
                        />

                    </div>
                    
                    
                </section>        

            </div>
        </>
    ); 
}

export default About;