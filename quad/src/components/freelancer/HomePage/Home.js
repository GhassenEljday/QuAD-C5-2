import React, { Component } from 'react';
import Filter from './Filter';
import Feeds from './Feeds'
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

            user : {}, //we get it from the login action
            userDescription : {}, //we get it from the login action
            jobs : [], // get request to the jobOffers table
            applications : [] // get request to the join table

        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:3008/home')
        .then(res => {
            console.log('job offers ===>', res.data)
            this.setState({jobs : res.data})
        })
        .catch(err => console.log('client side catch error ===>' , err))
    }

    render(props) {
        return (
            <div>
                <Filter/>
                <Feeds jobs={this.state.jobs}/>
            </div>
        )
    }
}
