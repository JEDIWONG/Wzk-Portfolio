import { Link } from "react-router-dom";
import "../style/intro_card.css"

function IntroCard(props){

    return(
        <>
            <div className="intro-card">
                <p className="intro-card-title">
                    {props.title}
                </p>

                <hr/>

                <h1 className="intro-card-name">
                    Greetings, My Name <br></br>is {props.name}
                </h1>
                

                <p className="intro-card-desc">
                    {props.desc}
                </p>
                
                <div className="button-container">
                    
                    <Link to="https://github.com/JEDIWONG">
                        <button className="button-filled">
                            Projects
                        </button>
                    </Link>
                    
                    <Link to="about/">
                        <button className="button-outlined">
                            About Me
                        </button>
                    
                    </Link>
                    
                </div>
                
            </div>
        </>
    );
}

export default IntroCard; 