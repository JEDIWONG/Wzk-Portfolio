import ProjectCard from "../components/project_card"
import "../style/project.css"
import icon from "../assets/project_icon.jpg"

function Projecthead(props){

    return(
        <>
            <div className="project-head-container">
                
                <div className="project-head-details">

                    <p className="project-head-title">Personal Project</p>
                    <hr/>
                    <div>
                        <h1>Lets Take A Look Of My Projects</h1>
                        <p>{props.desc}</p>
                    </div>

                </div>

                <img src={props.imgUrl}></img>
                
            </div>
        </>
    )
}

function Project(){

    return(
        <>
            <div className="project-page-container">

                <Projecthead 
                    imgUrl={icon}
                    desc="Developed website and mobile application using familiar modern framework such as ReactJs and Flutter. Mostly FrontEnd focused but currently working on Full Stack Project"
                />

                <div className="project-section">
                    <h1  className="section-title">Recent Work</h1>
                    <hr className="title-divider"></hr>
                    <ProjectCard name="Web Solution For Food Stall" desc="Website Built As Solution For long Queue In UNIMAS Food Stall" url="https://github.com/JEDIWONG/Food-Stall-Web"/>
                    <ProjectCard name="Flutter Food Ordering App" desc="Developing Food Ordering App For Client Restaurant Business" url="https://github.com/JEDIWONG/Chef_Palette_Mobile"/>
                </div>

            </div>
        
        </>
    )
}

export default Project;