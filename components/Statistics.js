import React, { Component } from 'react'
import axios from 'axios'

import { Image, Dimensions, Button, View, ScrollView, StyleSheet, Text } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
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
            // data: {},
            // result: [],
            statErrorMsg: '',
            // loading: false,
            // tableHead: ['COUNTRIES', 'NEW CASES', 'ACTIVE CASES', 'CRITICAL CASES', 'RCEOVERED CASES', 'TOTAL CASES', 'RECENT DEATHS', 'TOTAL DEATHS', 'DATE', 'TIME'],
            // tableData: ['']
            
        }
    }

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
            console.log(statistics);
        // const statistics = response.data.response;
          
    }

    render(){
        const { statistics, statErrorMsg } = this.state

        // Comparer Function  
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
        //     // document.write("<br>" + statistics[item].country);  
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
                <View style={{backgroundColor: "navy"}}>
                    <Image style={{width: 100, height: 40, borderRadius: 30, marginTop: 40}} source={require('./corover1.png')} />
                </View>
					<ScrollView>
                    <Text>Bezier Line Chart</Text>
                        <BarChart
                            data={{
                                labels: ['New cases', 'Active cases', 'Critical cases', 'Recovered cases', 'Total cases', 'New deaths', 'Total deaths'],
                            // labels: statistics.map(statistic=> statistic.country ),
                            datasets: [
                                {
                                // data: [...Object.values(statistics[220].cases), ...Object.values(statistics[220].deaths)],
                                // data: {...[statistics[220].cases], ...[statistics[220].deaths]}
                                // data: Object.values(parseInt(statistics[220].cases))
                                data: [3, 4, 3, 6, 5, 4, 7]
                                // data : Object.assign({}, statistics[220].cases)
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            yAxisLabel="$"
                            yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 16
                            }}
                        />
                        <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} </Text>
					</ScrollView>
                    
                </View>
                <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}  </Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
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

