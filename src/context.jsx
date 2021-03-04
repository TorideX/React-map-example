import React, { Component } from 'react'

const context = React.createContext();

export class UserProvider extends Component {

    state = {
        users: [
            {
                id: 1,
                name: 'Ibrahim',
                surname: 'Huseynzade',
                salary: 5000
            },
            {
                id: 2,
                name: 'John',
                surname: 'Wick',
                salary: 1500
            },
            {
                id: 3,
                name: 'Elon',
                surname: 'Musk',
                salary: 100000
            }
        ]
    }

    render() {
        return (
            <context.Provider value = {this.state}>
                { this.props.children }
            </context.Provider>
        )
    }
}

const UserConsumer = context.Consumer;
export default UserConsumer