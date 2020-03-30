/*import {connect} from 'react-redux'
import {fetchUsers} from "../../actions/users";
import Login from "./Login";
import {IState} from "../../react-app-env"

function mapStateToProps(state: IState) {
    return {
        userList: state.users.userList
    }
}

const mapDispatchToProps = {
    fetchUsers
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)*/


export { default } from './Login'