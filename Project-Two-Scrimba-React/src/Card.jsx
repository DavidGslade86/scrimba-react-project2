
import star from "./assets/star.png"

function Card (props) {
    
    let badgeText
    if (props.card.openSpots ===0){
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <>
            <div className="card-interior">
                {badgeText && <div className="exp-image-badge">{badgeText}</div>}
                <img className="exp-image" src={props.card.coverImg}/>
                <div className="exp-ratings">
                    <img className="star-image" src={star} alt="star" />
                    <span>{props.card.stats.rating}</span><span className="grey"> ({props.card.stats.reviewCount}) · </span><span className="grey">{props.card.location}</span>
                </div>
                <p className="exp-description">{props.card.title}</p>
                <p><span className="bold">From ${props.card.price}</span> / person</p>
            </div>
        </>
    )
}

export default Card