import React, { Component } from 'react'
import { ScrollView, Image, Text, Linking } from 'react-native'
import { Card, CardItem, Button } from 'native-base';
import moment from 'moment'
import styles from '../../../style'

class Detail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const content = this.props.navigation.getParam('content')
        console.log(content)
        return (
            <ScrollView>
                <Card>
                    <CardItem>
                        <Image source={{uri: content.images.low_resolution.url}} style={{height: 320, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Text>Created at: { moment(content.created_time, 'X').format('LLL') }</Text>
                    </CardItem>
                    <CardItem>
                        <Text>User: {content.user.username}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Caption: </Text>
                    </CardItem>
                    <CardItem>
                        <Text>{ content.caption.text }</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Likes Count: { content.likes.count }</Text>
                    </CardItem>
                    <CardItem>
                        <Button
                            style={ styles.buttonInstagram }
                            onPress={ ()=>{ Linking.openURL(content.link)} }
                        >
                            <Text>
                                Open in Instagram
                            </Text>
                        </Button>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}

export default Detail