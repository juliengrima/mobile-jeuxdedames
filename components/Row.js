import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, ListView, ScrollView} from 'react-native'

export default class Row extends React.Component {

    static  propTypes = {

        id: React.PropTypes,
        index: React.PropTypes

    }

    render(){
        return(
            <View style = {Style.view}>

                <Text>
                    {this.props.id.titre}
                </Text>

                <Text>
                </Text>

            </View>
        )
    }

}

const Style = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: '#0bd7e4',
        marginBottom: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
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

});