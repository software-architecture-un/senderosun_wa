import React from 'react';
import ErrorPage from '../../components/Errors/ErrorPage';
import IpGraphql from '../../components/conection/IpGraphql';
import UserDataPageSuccess from './UserDataPageSuccess';


class UserDataPage extends React.Component {

    state = {
        load: <ErrorPage />
    }

    componentDidMount() {
        console.log("DID MOUNT")
    }

    componentWillMount() {
        const query = `
            mutation {
                verifyToken(jwt:{jwt: "${window.localStorage.token}"}) {
                    content
                    message
                    status
                }
            }
        `;

        const url = IpGraphql;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        (fetch(url, opts)
            .then(res => res.json())
            .then(res => {
                if (res.data.verifyToken != null) {
                    this.setState({
                        status: res.data.verifyToken.status,
                        load: <UserDataPageSuccess />,
                    })
                    console.log(res.data.verifyToken.status)
                }
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
        console.log("WILL MOUNT")
    }

    render() {
        return (
            <div>
                {this.state.load}
            </div>
        );
    }
}

export default UserDataPage;