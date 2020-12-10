import React, { Component } from 'react'

import { Image, StyleSheet, View, ScrollView, Text, Picker, } from 'react-native';

const choice = [
    {
        label: 'Not at all -- 0',
        value: 'None',
    },
    {
        label: 'Barely -- 1',
        value: 'Barely',
    },
    {
        label: 'Mildly -- 2',
        value: 'Mild',
    },
    {
        label: 'More often -- 3',
        value: 'Moderate',
    },
    {
        label: 'Severely -- 4',
        value: 'Severe',
    }
    
]

export default class Diagnosis extends Component{

    constructor(props){
        super(props);

        this.state = {
           
            diagnosis: [],
            fever: 'None',
            cough: 'None',
            tiredness: 'None',
            breath: 'None',
            muscle: 'None',
            headaches: 'None',
            throat: 'None',
            nose: 'None',
            sneezing: 'None',
            
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        var symptoms = this.state;
        // console.log(symptoms);
    }

    render(){
        const { fever, cough, tiredness, breath, muscle, headaches, throat, nose, sneezing } = this.state

        var disease = null;
        if((fever == "Severe")&&(cough == "Severe")&&((tiredness == "Moderate")||(tiredness == "Severe"))&&(breath == "Severe")&&((muscle == "Moderate")||(muscle == "Severe"))&&((headaches == "Moderate")||(headaches == "Severe"))&&((throat == "Moderate")||(throat == "Severe"))&&(nose == "Barely")&&(sneezing == "None")){
            disease = "You probably have Coronavirus, you may want to call any of the emergency lines in your country in order to get tested.";
        }else if((fever == "Severe")&&(cough == "Severe")&&(tiredness == "Severe")&&((breath == "None")||(breath == "Barely"))&&(muscle == "Severe")&&(headaches == "Severe")&&((throat == "Severe")||(throat == "Moderate"))&&(nose == "Moderate")&&((sneezing == "None")||(sneezing == "Barely")||(sneezing == "Mild"))){
            disease = "You probably have a Flu. You may want to see your doctor.";
        }else if(((fever == "Barely")||(fever == "None"))&&((cough == "Severe")||(cough == "Moderate"))&&((tiredness == "Moderate")||(tiredness == "Mild"))&&((breath == "None")||(breath == "Barely"))&&((muscle == "Severe")||(muscle == "Moderate")||(muscle == "Mild"))&&((headaches == "Barely")||(headaches == "None"))&&((throat == "Severe")||(throat == "Moderate"))&&(nose == "Severe")&&(sneezing == "Severe")){
            disease = "You probably have a common cold. You may want to see your doctor.";
        }else if((fever == "None")&&(cough == "None")&&(tiredness == "None")&&(breath == "None")&&(muscle == "None")&&(headaches == "None")&&(throat == "None")&&(nose == "None")&&(sneezing == "None")){
            disease = "Please select the symptoms you are showing in the appropriate scale.";
        }else{
            disease = "You are not showing any symptom for the coronavirus and it's related diseases.";
        }

        return(
            <View>
                <View style={{backgroundColor: "#a2d8f9"}}>
                    <Text style={{ height: 15, marginTop: 10}}></Text>
                </View>
                <View style={{backgroundColor: "navy"}}>
                    <Image style={{width: 100, height: 40, borderRadius: 30, marginTop: 10, paddingBottom: 10}} source={require('./corover1.png')} />
                </View>
                <View style={{backgroundColor: "red", borderRadius: 30, margin: 10}}>
                    <Text style={{color: "white", padding: 20}}> {disease} </Text>
                </View>
                <ScrollView style={{backgroundColor: "white", color: "navy"}}>
                    <View>
                        <View style={{color: "white"}}>
                        {/* <form onSubmit={this.submitHandler} className="" > */}
                        
                            <Text style={{color: "navy", fontSize: 17}}>{"\n"} Please select the symptoms you are showing {"\n"}</Text>
                            <View style={{backgroundColor: "white"}}>
                            <View style={styles.one}>
                            <Text style={{color: "white"}}>Do you have fever?</Text>
                            <Picker
                                selectedValue={this.state.fever}
                                // style={{ height: 50, width: 150 }}
                                onValueChange={itemValue => this.setState({ fever: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" backgroundcolor="navy" value={i.value} />
                                ))}
                                {/* <Picker.Item label="Yes" value="java" />
                                <Picker.Item label="No" value="js" /> */}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "navy"}}>
                            <View style={styles.two}>
                            <Text style={{color: "navy"}}>Have you been coughing?</Text>
                            <Picker
                                selectedValue={this.state.cough}
                                onValueChange={itemValue => this.setState({ cough: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "white"}}>
                            <View style={styles.one}>
                            <Text style={{color: "white"}}>Have you been feeling tired?</Text>
                            <Picker
                                selectedValue={this.state.tiredness}
                                onValueChange={itemValue => this.setState({ tiredness: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "navy"}}>
                            <View style={styles.two}>
                            <Text style={{color: "navy"}}>Do you have difficulty breathing?</Text>
                            <Picker
                                selectedValue={this.state.breath}
                                onValueChange={itemValue => this.setState({ breath: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "white"}}>
                            <View style={styles.one}>
                            <Text style={{color: "white"}}>Does your muscle ache?</Text>
                            <Picker
                                selectedValue={this.state.muscle}
                                onValueChange={itemValue => this.setState({ muscle: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "navy"}}>
                            <View style={styles.two}>
                            <Text style={{color: "navy"}}>Do you have headache?</Text>
                            <Picker
                                selectedValue={this.state.headaches}
                                onValueChange={itemValue => this.setState({ headaches: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "white"}}>
                            <View style={styles.one}>
                            <Text style={{color: "white"}}>Do you have a sore throat?</Text>
                            <Picker
                                selectedValue={this.state.throat}
                                onValueChange={itemValue => this.setState({ throat: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "navy"}}>
                            <View style={styles.two}>
                            <Text style={{color: "navy"}}>Do you have a stuffy or runny Nose?</Text>
                            <Picker
                                selectedValue={this.state.nose}
                                onValueChange={itemValue => this.setState({ nose: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>
                            <View style={{backgroundColor: "white"}}>
                            <View style={styles.one}>
                            <Text style={{color: "white"}}>Have you been sneezing?</Text>
                            <Picker
                                selectedValue={this.state.sneezing}
                                onValueChange={itemValue => this.setState({ sneezing: itemValue })}
                                mode="dropdown">
                                {choice.map((i, index) => (
                                <Picker.Item key={index} label={i.label} color="black" value={i.value} />
                                ))}
                            </Picker>
                            </View>
                            </View>

                        </View>
                    </View>
                    <View style={{margin: 20, backgroundColor: "navy", borderRadius: 50}}>
                        <View style={{margin: 20, backgroundcolor: "navy"}}>
                            <Text style={{color: "white", fontSize: 20, textAlign: "center", textDecorationLine: "underline"}}>Results</Text>
                            
                            <Text style={{color: "white"}}>Fever:    {fever} </Text>
                            
                            
                            <Text style={{color: "white"}}>Cough:    {cough} </Text>
                            
                            
                            <Text style={{color: "white"}}>Tiredness:    {tiredness} </Text>
                            
                            
                            <Text style={{color: "white"}}>Shortness of breath:     {breath} </Text>
                            
                            
                            <Text style={{color: "white"}}>Muscle Aches:     {muscle} </Text>
                            
                            
                            <Text style={{color: "white"}}>HeadAches:    {headaches} </Text>
                            
                            
                            <Text style={{color: "white"}}>Sore Throat:     {throat} </Text>
                            
                            
                            <Text style={{color: "white"}}>Stuffy or Runny nose:     {nose} </Text>
                            
                            
                            <Text style={{color: "white"}}>Sneezing:     {sneezing} </Text>
                            
                            
                            
                        </View>
                    </View>
                    <View style={{margin: 20}}>
                        <Text style={{fontSize: 20, textAlign: "center", color: "red", textDecorationLine: "underline"}}>Disclaimer</Text>
                        <View>
                            <Text style={{color: "navy"}}>
                                The results provided in this app is based on WHO(World Health Organisation)'s suggested likely diseases based on symptoms. The results gotten from this app are not conclusive as no standard medical testing kits were used, seek medical attentions first. {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
                            </Text>
                            <Text> {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} </Text>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1, width: 600 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    lottie: {
        width: 100,
        height: 100
      },

    one: {
        backgroundColor: "#000080",
        color: "#ffffff",
        borderBottomRightRadius: 60,
        borderTopRightRadius: 60,
        paddingLeft: 20,
        paddingTop: 10,
        marginRight: 30,
        // shadowColor: "red",
        // shadowRadius: 10,
    },

    two: {
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 60,
        borderTopLeftRadius: 60,
        paddingLeft: 50,
        paddingTop: 10,
        marginLeft: 30,
    }

});