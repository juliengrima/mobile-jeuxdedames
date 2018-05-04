import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import getDirections from 'react-native-google-maps-directions'
import Button from 'apsl-react-native-button'

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
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10},
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    // recuperation du json
    static  propTypes = {

        id: React.PropTypes,
        index: React.PropTypes

    };

// mis en place des donnees de géolocalisation
    handleGetDirectionsCo1 = () => {
        const data = {
            source: {
                latitude: this.props.id.latco1,
                longitude: this.props.id.lngco1
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

    handleGetDirectionsCo2 = () => {
        const data = {
            source: {
                latitude: this.props.id.latco2,
                longitude: this.props.id.lngco2
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

    handleGetDirectionsCo3 = () => {
        const data = {
            source: {
                latitude: this.props.id.latco3,
                longitude: this.props.id.lngco3
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

            <ScrollView contentContainerStyle={Style.contentContainer} horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                <View style={Style.view}>
                    <Text style={Style.titre}>
                        {this.props.id.nom}
                    </Text>
                    <Text style={Style.titre}>
                        {this.props.id.nomDeLaCategorie}
                    </Text>
                </View>

                <View style={Style.view2}>
                    <Text style={Style.contenu}>
                        {this.props.id.nomco1}
                    </Text>
                    <Text style={Style.contenu}>
                        {this.props.id.adresseco1}, {this.props.id.codeco1} {this.props.id.villeco1}
                    </Text>

                    <Button onPress={this.handleGetDirectionsCo1} title="Itinéraire" style={Style.button}>
                        <Text style={Style.textBouton}>Itinéraire</Text>
                    </Button>
                </View>

                <View style={Style.view2}>
                    <Text style={Style.contenu}>
                        {this.props.id.nomco2}
                    </Text>
                    <Text style={Style.contenu}>
                        {this.props.id.adresseco2}, {this.props.id.codeco2} {this.props.id.villeco2}
                    </Text>

                    <Button onPress={this.handleGetDirectionsCo2} title="Itinéraire" style={Style.button}>
                        <Text style={Style.textBouton}>Itinéraire</Text>
                    </Button>
                </View>

                <View style={Style.view2}>
                    <Text style={Style.contenu}>
                        {this.props.id.nomco3}
                    </Text>
                    <Text style={Style.contenu}>
                        {this.props.id.adresseco3}, {this.props.id.codeco3} {this.props.id.villeco3}
                    </Text>

                    <Button onPress={this.handleGetDirectionsCo3} title="Itinéraire" style={Style.button}>
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