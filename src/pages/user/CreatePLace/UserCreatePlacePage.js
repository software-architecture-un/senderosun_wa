import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import ErrorPage from '../../../components/Errors/ErrorPage';
import UserCreatePlacePageSuccess from './UserCreatePlacePageSuccess';

class UserCreatePlacePage extends React.Component {

    state = {

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
                        load: <UserCreatePlacePageSuccess 
                        
                        google={this.props.google}
                        center={{ lat: 4.635751099, lng: -74.0834692 }}
                        height='400px'
                        zoom={15}
                        />,
                    })
                    // console.log(res.data.verifyToken.status)
                } else {
                    this.setState({
                        load: <ErrorPage />,
                    })
                }
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
    }

    render() {
        return (
            <div>
                {this.state.load}
            </div>
        );
    }
}

export default UserCreatePlacePage;