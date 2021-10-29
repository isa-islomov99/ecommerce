import React,{ Component,useEffect } from "react" 
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from "firebase"
import Checkout from "../pages/checkout/Checkout"

firebase.initializeApp({
  apiKey : "AIzaSyCANSSjdi5KaXENRuTvaLcORHxD2FCeazA",
  authDomain:"fir-auth-tutorial-66538.web.app"
})

class Store_route extends React.Component {
    state = { isSingnedIn: false}

    uiConfig = {
    signInFlow : "popup",
    signInOptions:[
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks : {signInSuccess : () => false}}

    componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
        this.setState({isSingnedIn : !! user})
    })}

  render() {
    return (
      <div  style={{marginTop: "4rem", marginBottom: "4rem"}}>
      {this.state.isSingnedIn ? (
        <>
          <Checkout />
        </>
        ) : (
          <> <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth= {firebase.auth()} /> </>
          )}
    </div>
  );
}}


export default Store_route;