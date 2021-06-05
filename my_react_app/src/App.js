import React, { Component } from 'react'
    import Posts from './components/posts'
    
    class App extends Component {

      componentDidMount() {
        fetch('http://localhost:4000/api/posts')
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data['data'] })
          console.log(data)
        })
        .catch(console.log)
      }
      
      state = {
        posts: []
      }

      render() {
        return (
          <Posts posts={this.state.posts} />
        )
      }
    }
    
    export default App