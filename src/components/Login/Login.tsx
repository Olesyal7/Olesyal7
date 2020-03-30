import React from 'react'
import {Link} from "react-router-dom";
import {IPlace} from "../../types/place";
import {IUser} from "../../types/user";
import {render} from "react-dom";

/*interface ILoginProps {
    fetchUsers: () => void
    userList: number[]
}*/
/*interface ILogin {
    history: {
        push: (url:string) => `/PersonalOffice/${}`
    }
}*/


const Login: React.FC = (props) => {

    const [login, setLogin] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [users, setUsers] = React.useState<IUser[]>([]);
    React.useEffect(() => {
        void usersGet()
    }, []);
    const usersGet = React.useCallback(async() => {
        const response = await fetch('/api/user/');
        const data = await response.json();
        setUsers(data);
    }, []);

    const onSubmit = React.useCallback(
        (event) => {
            if (users) {
                console.log(users, login, password)
                users.map(function (user) {
                    console.log(user)
                        if (user.login === login && user.password === password) {
                            window.open(`/PersonalOffice/${user.id}`)
                        }
                    }
                )
            }
    }, [login, password])

    return (
        <section>
            <div className="form">
                <input type="text" value={login} name="login" onChange={(event => {setLogin(event.target.value)})} required/>
                <label htmlFor="login"> Login</label>
            </div>
            <div className="form">
                <input type="text" value={password} name="password" onChange={(event => {setPassword(event.target.value)})} required/>
                <label htmlFor="password"> Password</label>
            </div>

                <button type="submit" onClick={onSubmit} id="send_form">Send</button>

        </section>
    )
}

export default Login
/*/!*


import { userActions } from '../_actions';*!/
const Login: React.FC = () => { //npm install react-redux @types/react/redux

    /!*const [login, setLogin] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const onSubmit = React.useCallback( async () => {
        const responce = await fetch(
            ``
        )

    }, [])*!/

    class Login extends React.Component {
        /!*constructor(props) {
            super(props);
            this.props.logout();

            this.state = {
                login: '',
                password: '',
                submitted: false
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e) {
            const {name, value} = e.target;
            this.setState({[name]: value})
        }

        handleSubmit(e) {
            e.preventDefault();
            this.setState({submitted: true});
            const {login, password} = this.state;
            if (login && password) {
                this.props.login(login, password);
            }
        }
    }*!/

   /!* render() {
        const {loggingIn} = this.props;
        const {login, password, submitted} = this.state;*!/
        return (
            <section>
                <div className="form">
                    <input type="text" name="login" required/>
                    <label htmlFor="login"> Login</label>
                </div>
                <div className="form">
                    <input type="text" name="password" required/>
                    <label htmlFor="password"> Password</label>
                </div>
                <Link to="/Tape/" className="href">
                    <button type="submit" id="send_form">Send</button>
                </Link>
            </section>
        )
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const {user} = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.deelte
}

const connectHomePage = connect(mapState, actionCreators)(HomePage);
export {connectHomePage as HomePage}

export default Login*/

/*const Login: React.FC = () => {
    return (
        <section>
            <div className="form">
                <input type="text" name="login" required/>
                <label htmlFor="login"> Login</label>
            </div>
            <div className="form">
                <input type="text" name="password" required/>
                <label htmlFor="password"> Password</label>
            </div>
            <Link to="/Tape/" className="href">
                <button type="submit" id="send_form">Send</button>
            </Link>
        </section>
    )
}*/
