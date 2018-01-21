import React from 'react'
import {Text} from 'react-native'

export default class Job extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Home',
    }

    render(){
        return(
            <Text>VOICI MA PAGE METIERS</Text>
        )
    }
}