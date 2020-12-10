import React, { Component } from 'react'
import axios from 'axios'

import moment from "moment";

import { Image, Button, View, ScrollView, StyleSheet, Text } from 'react-native';
// import AnimatedLoader from 'react-native-animated-loader';
// import LottieView from "lottie-react-native";
// import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';

const URL = 'https://covid-193.p.rapidapi.com/statistics';

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            
            // visible: false,
            statistics: [],
            stats: [],
            // result: [],
            statErrorMsg: '',
            // loading: false,
            // tableHead: ['COUNTRIES', 'NEW CASES', 'ACTIVE CASES', 'CRITICAL CASES', 'RCEOVERED CASES', 'TOTAL CASES', 'RECENT DEATHS', 'TOTAL DEATHS', 'DATE', 'TIME'],
            // tableData: ['']
            
        }
    }

    // componentDidMount(){
        
    //     axios.get("https://covid-193.p.rapidapi.com/statistics", {
    //                 headers: {

    //                 // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    //                 'Content-Type': 'application/json',
    //                 'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    //                 'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
    //                 // 'Authorization': 'Bearer '+a,
    //                 // 'withCredentials': true,
    //                 // app.use(cors({origin: true, credentials: true}));
    //             }
    //     })
    //         .then(response => {
    //             // console.log('getting data from axios', Object.values(response.data.response));
    //             // console.log('getting data from axios', JSON.stringify(response.data.response));
    //             // console.log('getting data from axios', response.data.response);
    //             console.log("Success");
    //             // var result = [];
    //             // for(var i in response.data.response)
    //             //     result.push([i, response.data.response[i]]);

    //             // console.log(result);
    //             this.setState({ statistics: response.data.response })
    //             // setTimeout(() => {
    //             //     this.setState({
    //             //         // loading: true,
    //             //         visible: !this.state.visible,
    //             //         // axiosData: response.data
    //             //     })
    //             // }, 30000)
    //         })
    //         .catch(error => {
    //             // console.log(error);

    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 // console.log("response");
    //                 // console.log(error.response.data);
    //                 // console.log(error.response.status);
    //                 // console.log(error.response.headers);
    //               } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //                 // http.ClientRequest in node.js
    //                 // console.log("request");
    //                 // console.log(error.request);
    //               } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 // console.log("else");
    //                 // console.log('Error', error.message);
    //               }
    //             //   console.log(error.config);
    //         });

    // }

    async componentDidMount() {
        const response =  await axios.get(URL, {
            headers: {

            // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76'
            }
        });
        const data = response.data;
            this.setState({
              statistics: data.response
            });
          
    }

    render(){
        const { statistics, statErrorMsg } = this.state

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

        statistics.sort(GetSortOrder("country")); //Pass the attribute to be sorted on  
        // document.write("Sorted Active cases : ");  
        // for (var item in statistics) {  
            // document.write("<br>" + statistics[item].country);  
        // }  

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
                <View style={{backgroundColor: "#a2d8f9"}}>
                    <Text style={{ height: 15, marginTop: 10}}></Text>
                </View>
                <View style={{backgroundColor: "navy"}}>
                    <Image style={{width: 100, height: 40, borderRadius: 30, marginTop: 10}} source={require('./corover1.png')} />
                </View>
					<ScrollView>
                    <View style={{padding: 10, backgroundColor: "white"}}>
                        <Text style={{color: "navy", textAlign: "center"}}>LIVE UPDATES</Text>
                    </View>
                    {/* {statistics.map(statistic=>
                        <ScrollView key={statistic.country} horizontal={true}>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 100, paddingBottom: 10, paddingTop: 10}}>  {statistic.country} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 100, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>NEW CASES</Text> {"\n"}  {statistic.cases.new} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 100, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>ACTIVE CASES</Text> {"\n"} {statistic.cases.active} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 150, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>CRITICAL CASES</Text> {"\n"} {statistic.cases.critical} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 150, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>RECOVERED CASES</Text> {"\n"} {statistic.cases.recovered} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 100, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>TOTAL CASES</Text> {"\n"} {statistic.cases.total} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 100, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>NEW DEATHS</Text> {"\n"} {statistic.deaths.new} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 150, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>TOTAL DEATHS</Text> {"\n"} {statistic.deaths.total} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 100, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>DAY</Text> {"\n"} {moment(statistic.day).format("MMM Do YYYY")} </Text>
                            <Text style={{backgroundColor: "black", color: "white", flex: 1, width: 200, paddingBottom: 10, paddingTop: 10}}> <Text style={{color: "#a2d8f9"}}>TIME</Text> {"\n"} {moment(statistic.time).fromNow()} </Text>
                        </ScrollView>
                    )} */}
                        <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} </Text>
					</ScrollView>
                    
                </View>
                <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}  {"\n"} {"\n"} </Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 300 }}>
                
                <Image style={{width: 500, height: 500, borderRadius: 300}} source={require('./load.gif')} />
                </View>
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

