import React from 'react';
import forest from '../../assets/forest.jpg';
import {Link} from "react-router-dom";
import {IPlace} from "../../types/place";

interface IPLaceCard {
    id: number
    name: string
    geoPosition: string
    climate: string
    country: number
    description: string
    entertainment: number
    image: string
}

const PlaceCard: React.FC<IPLaceCard> = (props) => {
    const {id, name, geoPosition, climate, country, description, entertainment, image} = props;
    return (
        <Link to={`/place/${id}`} className="href">
            <div className="tape_title">{name}</div>
            <img className="image" alt="Картинка" src={forest}/>
        </Link>
    )
}

export default PlaceCard