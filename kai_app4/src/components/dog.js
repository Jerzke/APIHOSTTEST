import React from "react";

export default function Doggie(props){
    return(<div>
      <div>
      <ul>
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.address}</li>
        <li>{props.operatingHours}</li>
        <li>{props.image}</li>
        <li>{props.restaurantType}</li>
        <li>{props.priceLevel}</li>
        <button onClick={()=>props.deleteRestaurant(props.id)}>delete</button>
      </ul>
    </div>
    </div>
    )
}