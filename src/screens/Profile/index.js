import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Header } from 'native-base';
import { connect } from 'react-redux'

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const content = this.props.navigation.getParam('content')
        console.log('content : ', content)
        console.log('profile page props : ', this.props)

        console.log(this.props.contents)

        return (
            <View>
                <Header />
                <Text>
                    Profile Pagessssss
                </Text>
            </View>
        )
    }

}


const mapStateToProps = state => {
    return {
      contents: state.contentReducers.contents
    }
}

export default connect(mapStateToProps, null)(Profile)