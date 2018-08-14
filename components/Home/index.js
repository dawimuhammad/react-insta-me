import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import IconFA from 'react-native-vector-icons/FontAwesome'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: 400
    }
  });

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const location = this.props.content.location
        const isLocationAlive = location === null
        
        return (
            <Container>
                <Content>
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
                            <Button transparent>
                                <IconFA name="heart"></IconFA>
                            </Button>
                            <Text>{ this.props.content.likes.count } Likes</Text>
                        </Left>
                        <Body />
                        <Right>
                        <Button transparent>
                                <IconFA name="comment"></IconFA>
                            </Button>
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
                </Card>
                </Content>
            </Container>
        )
    }
}

export default Home