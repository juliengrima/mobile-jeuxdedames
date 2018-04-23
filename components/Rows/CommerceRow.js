import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import Button from 'apsl-react-native-button'
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

    //Récupération de la position par géolocalisation
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
        };

        getDirections(data)
    };

    render() {
        return (

            <ScrollView contentContainerStyle={Style.contentContainer} horizontal={false}
                        showsHorizontalScrollIndicator={false}>

                <View style={Style.view}>
                    <Text style={Style.titre}>
                        {this.props.id.nom}
                    </Text>
                    <Text style={Style.contenu}>
                        {this.props.id.adresse}, {this.props.id.code} {this.props.id.ville}
                    </Text>

                    <Button onPress={this.handleGetDirections} title="Itinéraire" style={Style.button}>
                        <Text style={Style.textBouton}>Itinéraire</Text>
                    </Button>
                </View>

            </ScrollView>

        )
    }

}

const Style = StyleSheet.create({

    view: {
        flex: 1,
        width: 360,
        marginBottom: 0,
        borderWidth: 2,
        borderRightWidth: 8,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
        paddingHorizontal: 5,
        paddingVertical: 0
    },
    view2: {
        flex: 1,
        marginBottom: 0,
        borderWidth: 2,
        width: 350,
        borderRightWidth: 8,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    viewButton: {
        flex: 1,
        marginBottom: 0,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ffff1a',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    contentContainer: {
        paddingVertical: 10,
    },
    titre: {
        color: '#ffff1a',
        fontSize: 20,
        paddingTop: 10
    },
    contenu: {
        color: '#ffffff',
        fontSize: 12,
        paddingTop: 10
    },
    contenu2: {
        color: '#ffffff',
        fontSize: 12,
        paddingTop: 15
    },
    bouton: {
        width: 50,
        height: 30,
        backgroundColor: '#03C9A9',
        borderColor: '#ffff1a',
    },
    textBouton: {
        color: '#ffff1a',
        fontSize: 15,
        fontWeight: 'bold',
    },

});