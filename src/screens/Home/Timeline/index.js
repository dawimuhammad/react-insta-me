import React, { Component } from 'react'
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, Button, Right } from 'native-base';
import {  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import styles from '../../../style'

class Timeline extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const date_created = moment(this.props.content.created_time, 'X').format('LLL')
        const location = this.props.content.location
        const isLocationAlive = location === null
    
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.content.user.profile_picture}} />
                        <Body>
                            <Text>{ this.props.content.user.full_name }</Text>
                            {
                                (!isLocationAlive) && (
                                    <Text note> { this.props.content.location.name } </Text>
                                )
                            }
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image source={{uri: this.props.content.images.low_resolution.url}} style={{height: 320, width: null, flex: 1}}/>
                </CardItem>

                <CardItem>
                    <Left>
                        <Icon name="heart" size={ 20 }></Icon>
                        <Text style={ styles.imageDesc }>{ this.props.content.likes.count } Likes</Text>
                    </Left>
                    <Right style={ styles.dateContainer }>
                        <Text style={ styles.imageDesc }>{ date_created }</Text>
                    </Right>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                            { this.props.content.user.username }
                        </Text>
                        <Text>

                        </Text>
                        <Text>
                        { this.props.content.caption.text }
                        </Text>
                    </Body>
                </CardItem>

                <CardItem>
                    <Body>
                        <Button
                            style={ styles.buttonMore }
                            onPress={() => this.props.navigation.navigate('Detail', { content: this.props.content })} >
                            <Text>
                                More
                            </Text>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default Timeline