import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Job from './Job'
import Partner from './Partner'

export default class Artist extends React.Component {

    static navigationOptions = {

        title: 'Tri par artistes',
    };

    render(){
        return(

            <View>
                <Text>VOICI MA PAGE ARTISTES</Text>
            </View>

        )
    }
}

const Style = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: '#0bd7e4',
        marginTop: 30
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
    }
});

const Tabs = TabNavigator({
    // mot affiché: { le render: la class à afficher }
    Artistes: { screen: Artist },
    Job: {screen: Job},
    Partner: { screen: Partner }
}, {
    tabBarPosition: 'bottom', //position de navbar
    tabBarOptions: {
        //options label ou icones et indicateur
        showIcon: false,
        showLabel: true,
        activeTintColor: '#03C9A9',
        activeBackgroundColor: '#ffff1a',
        labelStyle: {
            color: '#ffff1a',
            fontSize: 12,
        },
        tabStyle: {
            backgroundColor: '#03C9A9',
        },
        indicatorStyle:{
            backgroundColor:'#FFFFFF'
        },
    },
    style:{
    }
});