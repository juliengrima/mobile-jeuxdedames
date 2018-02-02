import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import { TabNavigator } from 'react-navigation'
import axios from 'axios'
import Job from './Job'
import Partner from './Partner'

export default class Artist extends React.Component {

    static navigationOptions = {

        title: 'Tri par artistes',
        headerStyle:{
            backgroundColor: '#03C9A9'
        },
       headerTitleStyle:{
            color: '#ffff1a'
        },
        headerBackTitleStyle:{
              color: '#ffff1a'
        },
        gesturesEnabled : true
    };

    constructor (props){
        super(props)
        this.state = {
            city: 'Fontainebleau',
            report: null
        }
        //EN ATTENTE DE RECEVOIR LES DONNEES DE JDD
        this.fetchWeather()
    }

    fetchWeather(){
        axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=fontainebleau&mode=json&unit=metric&ctn=10,DE&APPID=ac69da0470525fa59d3492b3724bc5fb')
        .then((response)  => {
            this.setState({report: response.data})
        })
    }

    render(){

        if (this.state.report === null){
            return(
                <View style={Style.viewIndicator}>
                    <ActivityIndicator color={'#ffff1a'} size={"large"}/>
                </View>
            )
        }
        else{

            return(
                <View style={Style.view}>
                    <Text>VOICI MA PAGE ARTISTES</Text>
                </View>
            )
        }
    }
}

const Style = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: '#0bd7e4',
    },
    viewIndicator: {
        flex: 1,
        backgroundColor: '#0bd7e4',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10
    },
    image: {
        marginTop: 30,
        marginBottom: 50,
        width: 350,
        height: 350
    },
    bouton: {
        backgroundColor: '#03C9A9',
        borderColor: '#ffff1a'
    },
    textBouton: {
        color: '#ffff1a',
        fontSize: 20,
        fontWeight: 'bold',
    },
});