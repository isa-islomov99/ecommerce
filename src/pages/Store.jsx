import React from 'react'

const Store = () => {
  return (
    <div>
      <h3>🌆 title</h3>
      <h3>🌆 title</h3>
      <h3>🌆 title</h3>
      <h3>🌆 title</h3>

      <button>"next" . go to order adress</button>

    </div>
  )
}

export default Store









































// import React,{ Component,useEffect } from "react" 
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import firebase from "firebase"
// import { Redirect, Route, Switch } from 'react-router'
// import AppRouter from "../AppRouter/AppRouter"
// import { connect } from 'react-redux'
// import {setAuth} from "../redux/userReducer"
// import Order_page from "./Order_page"


// firebase.initializeApp({
//   apiKey : "AIzaSyCANSSjdi5KaXENRuTvaLcORHxD2FCeazA",
//   authDomain:"fir-auth-tutorial-66538.web.app"
// })



// class Store extends React.Component {
//     state = { isSingnedIn: false}

//     uiConfig = {
//     signInFlow : "popup",
//     signInOptions:[
//         firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ],
//     callbacks : {signInSuccess : () => false}}

//     componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//         this.setState({isSingnedIn : !! user})
//         setAuth(this.state.isSingnedIn)
//         console.log("Store.js this.state.isSingnedIn ", this.state.isSingnedIn);
//     })}

//   render() {
//     return (
//       <div>
//       {this.state.isSingnedIn ? (
//         <>
//           {/* <AppRouter isSingnedIn={this.state.isSingnedIn} /> */}
//           <Order_page />
//         </>
//         ) : (
//           <> <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth= {firebase.auth()} /> </>
//           )}
//     </div>
//   );
// }}


// export default Store;










































// import React, { Component } from 'react'
// import firebaseConfig from '../firebaseConfig';
// import * as firebaseui from 'firebaseui'
// import "firebaseui/dist/firebaseui.css"
// import firebase from "firebase/app"


// class Store extends Component {
//     componentDidMount() {
//         firebase.initializeApp(firebaseConfig);
//         const uiConfig = {
//             signInOptions:[{
//                 provide: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//                 recaptchaParameters:{
//                     type: "image",
//                     size:"normal",
//                     badge:"bottomleft"
//                 },
//                 defaultCountry: "USA"
//             }],
//             callbacks:{
//                 signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//                     alert("succsesfull");
//                     return true;
//                 }
//             },
//             signInSuccessUrl: "https://my link"
//         }

//         var ui = new firebaseui.auth.AuthUI(firebase.auth());
//         ui.start("#firebaseui-auth-container", uiConfig);
//     }
//     render() {
//         return (
//             <div id="firebaseui-auth-container">
                
//             </div>
//         )
//     }
// }
// export default Store;