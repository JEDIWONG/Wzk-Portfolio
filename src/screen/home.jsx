import "../style/home.css"
import avatar from "../assets/avatar.jpg";
import IntroCard from "../components/introCard";
import ProjectCard from "../components/project_card";
import pro_1 from "../assets/project_01.jpg";

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
                        Holds a Microsoft Azure Fundamentals certification and is passionate about crafting innovative solutions.
                        Seeking an internship in Kuala Lumpur starting March 2025 to contribute to impactful software projects while expanding my expertise."
                    />

                    <img src={avatar}></img>

                </div>
                
                <section className="project-section">
                    <h1  className="section-title">Projects</h1>
                    <hr className="title-divider"></hr>
                </section>
                
                <ProjectCard name="Flutter Health Care App" desc="Mobile App built using Flutter framework" img={pro_1}/>
                <ProjectCard name="Flutter Health Care App" desc="Mobile App built using Flutter framework" img={pro_1}/>

            </div>
            
        </> 
    );
}

export default Home; 