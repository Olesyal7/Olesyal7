import React from 'react'
import Cookies from 'js-cookie';
import {Link} from "react-router-dom";

interface IPlaceCreate {
    history: {
        push: (url:string) => void
    }
}



const AddPlace: React.FC<IPlaceCreate> = ({history}) => {
    const [name, setName] = React.useState<string>('')
    const [geoPosition, setGeoPosition] = React.useState<string>('')
    const [climate, setClimate] = React.useState<string>('')
    const [country, setCountry] = React.useState<string>('')
    const [description, setDescription] = React.useState<string>('')
    const [entertainment, setEntertainment] = React.useState<string>('')

    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            await fetch('/api/place/', {
                method: 'post',
                headers: {
                    'X-CSRFToken': Cookies.get('csrftoken'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name, geoPosition: geoPosition, climate: climate, country: country,
                    description: description, entertainment: entertainment})
            })

        },
        [name, geoPosition, climate, country, description, entertainment]
    )

    return (
        <section>
            <div>
                <h1 className="general_title">Input Form</h1>
            </div>

            <form>
                <div className="input_form">
                    <label><b>Name: </b></label>
                    <input type="text" value={name} onChange={(event => {setName(event.target.value)})}/>
                </div>
                <div className="input_form">
                    <label><b>Geographical Position: </b></label>
                    <input type="text" value={geoPosition} onChange={(event => {setGeoPosition(event.target.value)})}/>
                </div>
                <div className="input_form">
                    <label><b>Climate: </b></label>
                    <input type="text" value={climate} onChange={(event => {setClimate(event.target.value)})}/>
                </div>
                <div className="input_form">
                    <label><b>Country: </b></label>
                    <input type="text" value={country} onChange={(event => {setCountry(event.target.value)})}/>
                </div>
                <div className="input_form">
                    <label><b>Description: </b></label>
                    <input type="text" value={description} onChange={(event => {setDescription(event.target.value)})}/>
                </div>
                <div className="input_form">
                    <label><b>Entertainment: </b></label>
                    <input type="text" value={entertainment} onChange={(event => {setEntertainment(event.target.value)})}/>
                </div>
                <button type="submit" onClick={onSubmit}>Register</button>
                <Link to = "/FirstPage/" className="href">
                    <div className="general_title">First Page</div>
                </Link>
            </form>
        </section>
    )
}

export default AddPlace