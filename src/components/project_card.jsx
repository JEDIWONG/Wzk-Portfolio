import { Link } from "react-router-dom";
import "../style/project_card.css"


function ProjectCard(props){
    
    return(
        <>
            <div className="project-card-container">

                <div className="project-card-details">
                    <h1>
                        {props.name}
                    </h1>
                    <p>
                        {props.desc}
                    </p>
                    <Link to={props.url}>
                        <button className="button-outlined">
                            View Project
                        </button>
                    </Link>
                    
                </div>
                
                <img src={props.img} ></img>
            </div>
        </>
    ); 

}

export default ProjectCard; 