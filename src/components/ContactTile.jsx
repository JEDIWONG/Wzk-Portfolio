
function ContactTile(props){

    return(
        <>
            <div className="contact-tile">
                <img src={props.imgUrl}></img>
                <p>{props.value}</p>
            </div>
        </>
    );
}

export default ContactTile;