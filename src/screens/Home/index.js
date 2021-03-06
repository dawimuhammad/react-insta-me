import React, { Component } from 'react'
import { FlatList } from 'react-native'
import axios from 'axios'
import { Container, Button, Text } from 'native-base';
import Timeline from './Timeline'
// import Icon from 'react-native-vector-icons/FontAwesome'

import { addContentsToState } from '../../actions/actionContent'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
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
            this.props.addContentsToState(response.data.data)
            console.log(response.data.data, 'response data component did mount')
        })
        .catch((err) => {
            console.log(err)
        })
      }
    
    render() {
        return (
            <Container>
                <FlatList
                    data={this.props.contents}
                    renderItem={({ item, index }) => 
                        <Timeline key={item.key} content={item} navigation={ this.props.navigation}/>}
                    keyExtractor={(item, index) => String(index) }
                />
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
      contents: state.contentReducers.contents
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addContentsToState: (contents) => { dispatch(addContentsToState(contents)) },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)