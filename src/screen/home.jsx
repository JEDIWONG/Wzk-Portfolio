import "../style/home.css"
import avatar from "../assets/avatar.jpg";
import IntroCard from "../components/introCard";
import ProjectCard from "../components/project_card";
import pro_1 from "../assets/project_01.jpg";
import pro_2 from "../assets/project_02.jpg";
import cert_1 from "../assets/cert_1.png"; 
import { Link } from "react-router-dom";

function CertCard(props){

    return(
        <>
            <div className="cert-card-container">
                <img src={props.imgUrl}></img>
                
                <div className="cert-card-details">

                    <h1>
                        {props.title}
                    </h1>

                    <p>
                        {props.desc}
                    </p>

                </div>

                <Link className="Link" to={props.url}>
                    <button className="button-filled">Check</button>
                </Link>
                
            </div>
        </>
    )
}

function Home(){

    return(
        <>  
            <div>

                <div className="intro-section">
                    <IntroCard 
                        title="Software Engineering" 
                        name="WONG ZHI KIN"
                        desc="Third-year Software Engineering student at Universiti Malaysia Sarawak (UNIMAS), 
                        proficient in React.js, Flutter, Java, and Python. Skilled in developing mobile and web applications.
                        Passionate about crafting innovative solutions.
                        Seeking an internship around Kuala Lumpur area starting March 2025 to contribute to impactful software projects while expanding my expertise."
                    />

                    <img src={avatar}></img>

                </div>
                
                <section className="project-section">
                    <h1  className="section-title">Projects</h1>
                    <hr className="title-divider"></hr>
                    <ProjectCard name="Health Care Mobile" desc="Android Application built for health care monitoring using Flutter. Inspired greatly by Google Health" img={pro_1} url="https://github.com/JEDIWONG/Health_Matrix"/>
                    <ProjectCard name="Website For Retails Solution" desc="Frontend application built using ReactJS which present the UI/UX of a retail solution" img={pro_2} url="https://jediwong.github.io/Banana-Retail-Site/"/> 
                </section>

                <section className="project-section">
                    <h1 className="section-title">
                        Certifications
                    </h1>
                    <hr className="title-divider"></hr>
                    
                    <CertCard title="Microsoft Certified: Azure Fundamentals" 
                        imgUrl={cert_1} 
                        desc="Achieved One By Taking the Exam and Learned Fundamentals About AI and Machine Learning"
                        url="https://learn.microsoft.com/en-us/users/jediwong-0134/credentials/certification/azure-ai-fundamentals?tab=credentials-tab"
                    />
                </section>

            </div>
            
        </> 
    );
}

export default Home; 