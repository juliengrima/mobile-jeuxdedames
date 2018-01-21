import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Button from 'apsl-react-native-button'
import Artist from "./Artist";

class Home extends React.Component{

    static navigationOptions = {
        header: null,
        title: 'Home',
    }

    constructor (props) {
        super(props)
    }

    submit(){
        this.props.navigation.navigate('Artist')
    }

    render(){

        return(

            <View style={Style.view}>

                <Image source={require('../assets/home-image.png')} style={Style.image}/>

                <Button
                    onPress={() => this.submit()}
                    style={Style.bouton}>
                    <Text style={Style.textBouton}>Artistes</Text>
                </Button>
                {/*<Button*/}
                    {/*onPress={() => this.submit()}*/}
                    {/*style={Style.bouton}>*/}
                    {/*<Text style={Style.textBouton}>Métiers</Text>*/}
                {/*</Button>*/}
                {/*<Button*/}
                    {/*onPress={() => this.submit()}*/}
                    {/*style={Style.bouton}>*/}
                    {/*<Text style={Style.textBouton}>Partenaires</Text>*/}
                {/*</Button>*/}

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
    }
});

export default StackNavigator({
    Home:{
        screen: Home
    },
    Artist:{
        screen: Artist
    }
})