import React, { Component } from 'react'
import axios from 'axios'

import { Image, Button, TextInput, View, ScrollView, StyleSheet, Text, Picker } from 'react-native';
// import AnimatedLoader from 'react-native-animated-loader';
// import LottieView from "lottie-react-native";
// import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';

const URL = 'https://covid-193.p.rapidapi.com/statistics';

export default class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            
            // visible: false,
            statistics: [],
            countries: [],
            country: '',
            stats: [],
            // result: [],
            statErrorMsg: '',
            // loading: false,
            // tableHead: ['COUNTRIES', 'NEW CASES', 'ACTIVE CASES', 'CRITICAL CASES', 'RCEOVERED CASES', 'TOTAL CASES', 'RECENT DEATHS', 'TOTAL DEATHS', 'DATE', 'TIME'],
            // tableData: ['']
            
        }
    }

    componentDidMount(){
        axios

            .get('https://covid-193.p.rapidapi.com/countries', {
                headers: {

                    // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
                    // 'Authorization': 'Bearer '+a,
                    // 'withCredentials': true
                }
            })
            .then(response => {
                console.log(response.data.response)
                this.setState({ countries: response.data.response })
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })

    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // submitHandler = e => {
    //     axios

    //         .get('https://covid19-tracker.p.rapidapi.com/statistics/US', {
    //             headers: {

    //                 // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    //                 'Content-Type': 'application/json',
    //                 // 'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    //                 // 'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
    //                 "x-rapidapi-host": "covid19-tracker.p.rapidapi.com",
	// 	            "x-rapidapi-key": "8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76",
    //                 // 'Authorization': 'Bearer '+a,
    //                 // 'withCredentials': true
    //             }
    //         })
    //         .then(response => {
    //             console.log(response.data.response)
    //             this.setState({ countries: response.data.response })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({errorMsg: 'Error retrieving data'})
    //         })
    // }

    // async componentDidMount() {
    //     const response =  await axios.get(URL, {
    //         headers: {

    //         // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    //         'Content-Type': 'application/json',
    //         'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    //         'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76'
    //         }
    //     });
    //     const data = response.data;
    //         this.setState({
    //           statistics: data.response
    //         });
          
    // }

    render(){
        const { statistics, countries, country, statErrorMsg } = this.state

        //Comparer Function  
        function GetSortOrder(prop) {  
            return function(a, b) {  
                if (a[prop] > b[prop]) {  
                    return 1;  
                } else if (a[prop] < b[prop]) {  
                    return -1;  
                }  
                return 0;  
            }  
        }

        // statistics.sort(GetSortOrder("country")); //Pass the attribute to be sorted on  
        // // document.write("Sorted Active cases : ");  
        // for (var item in statistics) {  
        //     // document.write("<br>" + statistics[item].country);  
        // }  

        // const [value, onChangeText] = React.useState('Useless Placeholder');
        // const {value, onChangeText} = this.state;

        // var stats = Object.values(statistics);

        // const state = this.state;
        // const { navigation } = this.props.navigation;
        return(
            <View>

                {/* <AnimatedLoader
                    visible={visible}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("./loader.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                /> */}
                
                <View>
                <View style={{backgroundColor: "navy"}}>
                    <Image style={{width: 100, height: 40, borderRadius: 30, marginTop: 40}} source={require('./corover1.png')} />
                </View>
					<ScrollView>
                    
                    {/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    /> */}

                    {/* <form onSubmit={this.submitHandler} className="" > */}
                        <Text style={{color: "navy"}}>Select country</Text>
                        <Picker
                            selectedValue={this.state.country}
                            onValueChange={itemValue => this.setState({ country: itemValue })}>
                            {countries.map((i, index) => (
                            <Picker.Item key={index} label={i.label} value={i.value} />
                            ))}
                        </Picker>
                        <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={this.changeHandler}
                        name={'search'}
                        value={this.state.country}
                        />
                        <Button
                        onPress={this.submitHandler}
                        title="search"
                        color="#000080"
                        accessibilityLabel="Learn more about this purple button"
                        />
                    {/* </form> */}

                        <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} </Text>
					</ScrollView>
                    
                </View>
                <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}  </Text>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <Image style={{width: 500, height: 500, borderRadius: 300}} source={require('./load.gif')} />
                </View> */}
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     header: { height: 50, backgroundColor: '#537791' },
//     text: { textAlign: 'center', fontWeight: '100' },
//     dataWrapper: { marginTop: -1, width: 600 },
//     row: { height: 40, backgroundColor: '#E7E6E1' },
//     lottie: {
//         width: 100,
//         height: 100
//       }
// });

