import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'
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
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            destination: {
                latitude: this.props.id.commercant.lat,
                longitude: this.props.id.commercant.lng
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
            <View style = {Style.view}>

                <Text style = {Style.titre}>
                    {this.props.id.artistess.nom}
                </Text>

                <ScrollView contentContainerStyle={Style.contentContainer}>
                    <View>
                        <Text style = {Style.contenu}>
                            {this.props.id.commercant.nom}
                        </Text>
                        <Text style = {Style.contenu}>
                            {this.props.id.dateDebut} / {this.props.id.dateFin}
                        </Text>
                    </View>
                </ScrollView>

                <Button onPress={this.handleGetDirections} title="Itinéraire" style = {Style.button} />

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
    contentContainer: {
        paddingVertical: 20
    },
    titre: {
        color: '#ffff1a',
    },
    contenu: {
        color: '#ffffff',
    },
    bouton: {
        marginHorizontal: 50,
        backgroundColor: '#9cbeec',
        // borderColor: '#ffff1a'
    },
    textBouton: {
        color: '#ffff1a',
        fontSize: 20,
        fontWeight: 'bold',
    },

});