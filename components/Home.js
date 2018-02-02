import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Button from 'apsl-react-native-button'
import Artist from "./Artist";
import Job from "./Job";
import Partner from "./Partner";

class Home extends React.Component{

    static navigationOptions = {

        header: null,
        title: 'Home'

    }

    constructor (props) {
        super(props)
    }

    submit1(){
        this.props.navigation.navigate('Artist')
    }
    submit2(){
        this.props.navigation.navigate('Job')
    }
    submit3(){
        this.props.navigation.navigate('Partner')
    }

    render(){

        return(

            <View style={Style.view}>

                <Image source={require('../assets/home-image.png')} style={Style.image}/>

                <Button onPress={() => this.submit1()} style={Style.bouton}>
                    <Text style={Style.textBouton}>Artistes</Text>
                </Button>
                <Button onPress={() => this.submit2()} style={Style.bouton}>
                    <Text style={Style.textBouton}>Métiers</Text>
                </Button>
                <Button onPress={() => this.submit3()} style={Style.bouton}>
                    <Text style={Style.textBouton}>Partenaires</Text>
                </Button>

            </View>
        )
    }
}

const Style = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: '#0bd7e4'
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
    header:{
        backgroundColor: '#03C9A9',
    },
    headerTitle: {
        color: '#ffff1a'
    }
});

export default StackNavigator({
    Home:{
        screen: Home
    },
    Artist:{
        screen: Artist,
    },
    Job:{
        screen: Job,
    },
    Partner:{
        screen: Partner,
    },

})