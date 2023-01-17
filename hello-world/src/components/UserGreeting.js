import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {

    return this.state.isLoggedIn && <div>Welcome back</div>

    // return(
    //     this.state.isLoggedIn ? (
    //     <div>Welcome back</div> ) : (
    //     <div>Welcome guest</div> )
    // )

    //----------------------------------

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome back</div>
    // }else{
    //     message = <div>Welcome guest</div>
    // }

    // return <div>{message}</div>

    //-------------------------------------

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome back</div>
    //     )
    // } else{
    //     return(
    //         <div>Welcome guest</div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome back</div>
    //     <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
