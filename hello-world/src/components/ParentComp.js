// import React, { Component } from 'react'
// import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegularComp from './RegularComp'

// export class ParentComp extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name: 'Benjamin'
//       }
//     }

//     componentDidMount(){
//         setInterval(() => {
//             this.setState({
//                 name: 'Benjamin'
//             })
//         }, 2000)
//     }
    

//   render() {
//     console.log('###############Parent Comp Render###############')
//     return (
//       <div>
//         Parent Component
//         <MemoComp name = {this.state.name} />
//         {/* <RegularComp name = {this.state.name}></RegularComp> */}
//         {/* <PureComp name = {this.state.name}></PureComp> */}
//       </div>
//     )
//   }
// }

// export default ParentComp
