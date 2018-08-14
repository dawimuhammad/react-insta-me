/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import axios from 'axios'
import Home from './components/Home'

const styles = StyleSheet.create({

  });
  
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      contents: []
    }

    this.saveContents = this.saveContents.bind(this)
  }

  saveContents(data) {
      this.setState({
        contents: data
      })
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=33745993.95d454d.672ce25a600740babb2d588464f7baa7'
    })
    .then((response) => {
        this.saveContents(response.data.data)
        console.log(response.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  render() {
    console.log(this.state.contents)
    return (
      <Container>
        <Header>
          <Body>
            <Text>
            Instagurem
            </Text>
          </Body>
        </Header>

        <Content>
          {
            this.state.contents.map( (content, index) => {
              return (
                <Home key={index} content={content}/>
              )
            })
          }
        </Content>
        
      </Container>
    );
  }
}