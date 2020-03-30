import React from "react";
import {Link} from "react-router-dom"
import {IUser} from "../../types/user";
import forest from "../../assets/forest.jpg";


const PersonalOffice: React.FC = () => {
    React.useEffect(() => {
        void userGet()
    }, [])
    const [user, setUser] = React.useState<IUser>()
    const userGet = React.useCallback(async () => {
        const response = await fetch (
            `/api/user/${window.location.pathname.split('/')[2]}`
        )
        const data = await response.json()
        setUser(data)
    }, [])
    if (!user) {
        return (
            <header>Error</header>
        )
    }

    return (
        <section>
            <header className="general_title"> Personal Office </header>
            <div className="tape_title"> Name: {user.name}</div>
            <div className="tape_title"> Login: {user.login}</div>
            <p className="im">
                <img className="imagePO" alt="Картинка" src={forest}/>
            </p>
            <Link to="/FirstPage/" className="href">
                <div className="general_title">Photo tape</div>
            </Link>
        </section>
    )
}

/*const PersonalOffice: React.FC = () => {

}*/

export default PersonalOffice;