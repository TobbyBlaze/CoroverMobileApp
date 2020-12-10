import React, { Component } from 'react'

import { View, ScrollView, Text, Image } from 'react-native';

export default class About extends Component{

    render(){
        return(
            <View>
                <View style={{backgroundColor: "#a2d8f9"}}>
                    <Text style={{ height: 15, marginTop: 10}}></Text>
                </View>
                <View style={{backgroundColor: "navy", borderBottomColor: "black"}}>
                    <Image style={{width: 100, height: 40, borderRadius: 30, marginTop: 10}} source={require('./corover1.png')} />
                </View>
                <ScrollView>

                        <View style={{backgroundColor: "navy", color: "white"}}>
                            <Text style={{backgroundColor: "navy", color: "white", margin: 10, fontSize: 20, textAlign: "center"}}>About</Text>
                            <Text style={{backgroundColor: "navy", color: "white", margin: 10}}>
                                Corover is an app specifically developed to get live updates about the pandemic coronavirus(COVID-19) disease globally and help quickly diagnose anyone suspicious of the disease.  
                            </Text>
                            <Text style={{backgroundColor: "navy", color: "white", margin: 10}}>
                                Please stay at home and adhere to every precaution against the spread of the coronavirus in your country. God bless.
                            </Text>
                        </View>

                    <ScrollView style={{margin: 10}}>
                        <Image style={{width: 150, height: 150, borderRadius: 30, marginLeft: 100}} source={require('./pic1.jpg')} />
                        <Text style={{textAlign: "center"}}>Muritala Tobi</Text>
                        <Text style={{textAlign: "center"}}>Humanitarian</Text>
                        <Text style={{textAlign: "center"}}>Full stack developer</Text>
                        <Text style={{textAlign: "center"}}>Data science enthusiast</Text>
                    <Text>
                        {"\n"}
                        Email: muritala.mt@gmail.com
                    </Text>
                    </ScrollView>

            </ScrollView>
            </View>
        )
    }
}
