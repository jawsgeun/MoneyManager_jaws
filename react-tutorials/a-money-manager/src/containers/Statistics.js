import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Statistics extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        const {cookies} = props;
        this.state = {
            cookieDatas : cookies.get('datas'),
        }

    }
    render() {
        return (
            <div>
                <b>{JSON.stringify(this.state.cookieDatas)}</b>          
            </div>
        );
    }
}
export default withCookies(Statistics);