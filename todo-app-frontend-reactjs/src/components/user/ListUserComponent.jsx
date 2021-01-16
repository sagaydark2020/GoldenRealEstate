import React, { Component } from 'react';
import UserListServices from '../../service/UserListServices';
class ListUserComponent extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.updateUserClicked = this.updateUserClicked.bind(this)
        this.addUserClicked = this.addUserClicked.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserListServices.retrieveAllUsers()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ users: response.data })
                }
            )
    }

    deleteUserClicked(id, name) {
        UserListServices.deleteUser(id)
            .then(
                response => {
                    this.setState({ message: `Delete of User ${name} Successful` })
                    this.refreshUsers()
                }
            )    
    }

    updateUserClicked(id) {
        this.props.history.push(`/user/${id}`)
    }

    addUserClicked() {
        this.props.history.push(`/user/-1`)
    }

    render() {
        return (
            
            <div className="container">
                   <h4> Users </h4>
                   <div>
                        <button className="btn btn-primary btn-xs" onClick={this.addUserClicked}>Add User</button>&nbsp;
                    </div>
                    <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    users =>
                                        <tr key={users.id}>
                                            <td>{users.id}</td>
                                            <td>{users.userName}</td>
                                            <td>{users.userEmail}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(users.id , users.name)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateUserClicked(users.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
              
            </div>
          
        )
    }
}

export default ListUserComponent