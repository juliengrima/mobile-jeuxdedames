import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'

export default class Row extends React.Component {

    static  propTypes = {

        id: React.PropTypes,
        index: React.PropTypes,
    }

    render(){

        return(
            <View style = {Style.view}>

                <Text style = {Style.titre}>
                    {this.props.id.titre}
                </Text>

                <Text style = {Style.contenu}>
                    {this.props.id.contenu}
                </Text>

                <Text style = {Style.contenu}>
                    {this.props.id.start} / {this.props.id.end}
                </Text>

            </View>
        )

    }

}

const Style = StyleSheet.create({

    view: {
        flex: 1,
        marginBottom: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
    },
    titre: {
        color: '#ffff1a',
    },
    contenu: {
        color: '#ffffff',
    },
    contentContainer: {
        paddingVertical: 20
    }

});