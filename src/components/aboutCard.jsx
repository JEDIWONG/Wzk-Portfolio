import "../style/aboutCard.css"


function AboutCard(props){

    return(
        <>
            <div className="about-card-container">
                <div className="about-card-details">
                    <h1>About Me</h1>
                    <hr/>
                    <p>{props.desc}</p>

                    <button className="button-filled">
                        Resume
                    </button>
                </div>
                
                <img src={props.imgUrl}></img>
            </div>
        </>
    ); 
}

export default AboutCard;