import React from 'react';
import sahara from '../../assets/sahara.jpg';
import {Link} from "react-router-dom";
import {IPlace} from '../../types/place'
import {ICountry} from '../../types/country'
import {IEntertainment} from "../../types/entertainment";



const Place: React.FC = (props) => {
    React.useEffect(() => {
        //void placeGet()
        //void countryNameGet()
        void entertainmentNameGet()
    }, [])

    const [place, setPlace] = React.useState<IPlace>()
    const placeGet = React.useCallback(async () => {
        const response = await fetch (
            `/api${window.location.pathname}`
        )

        const data = await response.json()
        setPlace(data)
    }, [])

    const [countryName, setCountryName] = React.useState<ICountry>()
    const countryNameGet = React.useCallback(async () => {
        await void await placeGet()
        const response = await fetch (
            `/api/country/${place ? place.country : 1}`
        )
        const data = await response.json()
        setCountryName(data)
    },[])

    const [entertainmentName, setEntertainmentName] = React.useState<IEntertainment>()
    const entertainmentNameGet = React.useCallback(async () => {
        await void await countryNameGet()
        const response = await fetch (
            `/api/entertainment/${place ? place.entertainment : 1}`
        )
        const data = await response.json()
        setEntertainmentName(data)
    },[])





    if (!place) {
        return (
            <header>ERROR, {window.location.pathname}</header>
        )
    }
    if (!countryName) {
        return (
            <header>ERROR, {place.country}</header>
        )
    }
    if (!entertainmentName) {
        return (
            <header>ERROR, {place.country}</header>
        )
    }




    const {id, name, geoPosition, climate, country, description, entertainment, image} = place

    return (
        <section>
            <header>
                <div className="general_title">{name}</div>
            </header>
            <div className="border">
                <img className="image" src={sahara} alt="Картинка" />
            </div>
            <div className="description">Геогафическое положение: {geoPosition}</div>
            <div className="description">Климат: {climate}</div>
            <div className="description">Страна: {countryName.name}</div>
            <div className="description">Описание: {description}</div>
            <div className="description">Тип: {entertainmentName.name}</div>
            <Link to="/Tape/" className="href">
                <div className="general_title">Photo tape</div>
            </Link>
        </section>
    )
}
export default Place