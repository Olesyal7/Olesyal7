import React from 'react'
import PlaceCard from '../PlaceCard'
import {IPlace} from '../../types/place'
import {Link} from "react-router-dom";
import ExamplePage from "../ExamplePage";


const Tape: React.FC = () => {
    const [places, setPlaces] = React.useState<IPlace[]>([]);
    React.useEffect(() => {
        void placeGet()
    }, []);
    const placeGet = React.useCallback(async() => {
        const response = await fetch('/api/place/');
        const data = await response.json();
        setPlaces(data);
    }, []);
    return (
        <section>
            <header>
                <div className="general_title">Places</div>
            </header>
            <div className="border">
                {places.map((place, index) => (
                     <PlaceCard key={index} {...place}/>
                ))}
            </div>
            <Link to="/FirstPage/" className="href">
                <div className="general_title">First Page</div>
            </Link>
        </section>
    )
};

export default Tape