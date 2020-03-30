import React from 'react'
import { Link, Route} from 'react-router-dom'
import image from '../../assets/sahara.jpg'
import image2 from '../../assets/forest.jpg'


const FirstPage: React.FC = () => {
    return (
        <section>
            <header>
                <div className="general_title">I like traveling</div>
            </header>
            <div className="border">
                <img className="image" src={image} alt="Картинка" />
                <Link to="/Tape/" className="href">
                    <div className="general_title">Photo tape</div>
                </Link>
                <img className="image" src={image2} alt="Картинка" />
                <Link to = "/AddPlace/" className="href">
                    <div className="general_title">Add place</div>
                </Link>
                <Link to = "/Login/" className="href">
                    <div className="general_title">Log in</div>
                </Link>
            </div>
        </section>
    )
}


export default FirstPage