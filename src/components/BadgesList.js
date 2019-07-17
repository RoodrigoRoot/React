import React from 'react'
import "../styles/BadgesList.css"
class BadgesList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled ">
            {this.props.badges.map( (badge)=>{
                return <li className="BadgesListItem" key={badge.id}> 
                <a> <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar" /></a>
                <div>

                <p className="mb-1 font-weight-bold">{badge.firstName} {badge.lastName}</p>
                <a href="#"><img src="https://img.icons8.com/cotton/2x/twitter.png" width="30" />{badge.twitter}</a>
                <address>{badge.jobTitle}</address>
                </div>
                </li>
            } )}
    </ul>
        )
    }
}
export default BadgesList