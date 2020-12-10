import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'

export default class History extends Component{
    constructor(props){
        super(props);

        this.state = {

            histories: [],
            errorMsg: ''
            
        }
    }

    componentDidMount(){
        axios

            .get('https://covid-193.p.rapidapi.com/history?country={this.props.country}', {
                headers: {

                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
                    // 'Authorization': 'Bearer '+a,
                    // 'withCredentials': true
                }
            })
            .then(response => {
                // console.log(response)
                this.setState({ histories: response.data.response })
            })
            .catch(error => {
                // console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })

    }

    render(){
        const { histories, errorMsg } = this.state
        return(
            <div>
                <h1>List of histories</h1>
                {histories.length ?
                // countries.map(country=><div key={country.id}> {country.Title} </div>):
                histories.map(country=><div> {history}</div>):
                null}
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

// if (document.getElementById('home')) {
//     ReactDOM.render(<Home />, document.getElementById('home'));
// }
