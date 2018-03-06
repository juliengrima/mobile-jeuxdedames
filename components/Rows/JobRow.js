import React from 'react'
import {StyleSheet, Text, View, ScrollView, Button, Image} from 'react-native'
import getDirections from 'react-native-google-maps-directions'

export default class Row extends React.Component {

    // Recuoeration localisation
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    // recuperation du json
    static  propTypes = {

        id: React.PropTypes,
        index: React.PropTypes

    }

    // mis en place des donnees de géolocalisation
    handleGetDirections = () => {
        const data = {
            source: {
                latitude: this.props.id.lat,
                longitude: this.props.id.lng
            },
            destination: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },

            params: [
                {
                    key: "AIzaSyAjVJ0O2apVaT0jdUYqiOpa5FfkO-aBgug",
                    value: "w"
                }
            ]
        }

        getDirections(data)
    }

    render(){
        return(

            <ScrollView contentContainerStyle={Style.contentContainer} horizontal={true}>

                <View style = {Style.view} >
                    <Text style = {Style.titre}>
                        {this.props.id.nom}
                    </Text>
                    <Text style = {Style.titre}>
                        {this.props.id.nomDeLaCategorie}
                    </Text>
                </View>
                <View style = {Style.view2} >
                    <Text style = {Style.contenu}>
                        {this.props.id.nomco}
                    </Text>
                    <Text style = {Style.contenu}>
                        {this.props.id.adresse}, {this.props.id.code} {this.props.id.ville}
                    </Text>
                </View>

                <View style = {Style.viewButton} >
                    <Button onPress={this.handleGetDirections} title="Itinéraire" style = {Style.button} />
                </View>

            </ScrollView>

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
        paddingHorizontal: 120,
        paddingVertical: 30
    },
    view2: {
        flex: 1,
        marginBottom: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
        paddingHorizontal: 100,
        paddingVertical: 30
    },
    viewButton: {
        flex: 1,
        marginBottom: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
        paddingHorizontal: 50,
        paddingVertical: 30
    },
    contentContainer: {
        paddingVertical: 20
    },
    titre: {
        color: '#ffff1a',
        fontSize: 15
    },
    contenu: {
        color: '#ffffff',
    },
    bouton: {
        width: 50,
        height: 30,
        backgroundColor: '#03C9A9',
        borderColor: '#ffff1a'
    },
    textBouton: {
        color: '#ffff1a',
        fontSize: 20,
        fontWeight: 'bold',
    },

});