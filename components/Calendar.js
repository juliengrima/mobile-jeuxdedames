import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, ListView, ScrollView} from 'react-native'
import { TabNavigator } from 'react-navigation'
import axios from 'axios'
import Row from './Row'
import Job from './Job'
import Partner from './Partner'

export default class Artist extends React.Component {

    static navigationOptions = {

        title: 'Evènements',
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
            report: null
        }
        //EN ATTENTE DE RECEVOIR LES DONNEES DE JDD
        this.calendar()
    }

    calendar(){
        axios.get('http://www.lesjeuxdedames.com/events/')
        .then((response)  => {
            // console.log(response.data)
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

            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return(

                <View style={Style.view}>

                    <ListView
                        style={Style.contentContainer}
                        dataSource={ds.cloneWithRows(this.state.report)}
                        renderRow={(row, j, k) => <Row id={row} index={k}/>}

                        // renderRow={(row) => <Text>{row.id}</Text>,
                        //     (row) => <Text>{row.titre}</Text>,
                        //     (row) => <Text>{row.contenu}</Text>}
                    />

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

    // image: {
    //     marginTop: 30,
    //     marginBottom: 50,
    //     width: 350,
    //     height: 350
    // },
    // bouton: {
    //     backgroundColor: '#03C9A9',
    //     borderColor: '#ffff1a'
    // },
    // textBouton: {
    //     color: '#ffff1a',
    //     fontSize: 20,
    //     fontWeight: 'bold',
    // },
    // liste: {
    //     marginTop: 50,
    // },
    contentContainer: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5,

    }
});