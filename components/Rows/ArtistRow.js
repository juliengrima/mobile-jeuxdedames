import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'

export default class Row extends React.Component {

    static  propTypes = {

        id: React.PropTypes,
        index: React.PropTypes

    }
    submit(){
        this.props.navigation.navigate('Calendar')
    }

    render(){
        return(
            <View style = {Style.view}>

                <Text style = {Style.titre}>
                    {this.props.id.artistess.nom}
                </Text>

                <Text style = {Style.contenu}>
                    {this.props.id.commercant.nom}
                </Text>

                <Text style = {Style.contenu}>
                    {this.props.id.dateDebut} / {this.props.id.dateFin}
                </Text>

                <Button onPress={() => this.submit()} style={Style.bouton}>
                    <Text style={Style.textBouton}>Itinéraire</Text>
                </Button>

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