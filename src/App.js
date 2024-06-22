import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'; 

const App=()=> {
  return (
    <div>
      <h1>Useful Website</h1>
      <h3>Which Website Do you want to open? </h3>
      <Button name ="Google" link="https://google.com"/>
      <Button name = "Youtube" link="https://youtube.com"/>
      <Button name = "Facebook" link="https://facebook.com"/>
      <br></br>
      <Button name = "W3school" link = "https://www.w3schools.com/ "/>
      <Button name = "Simplilearn" link = "https://www.simplilearn.com/?utm_source=bing&utm_medium=cpc&utm_term=simplilearn&utm_content=518655660-1313918051002785-&utm_device=c&utm_campaign=Simplilearn+-+Search-US-ALL-en+-+B+-+x-x-x-x-x+-+QueryType:Brand+Pure-MT:Exact-adgroup-Simplilearn+-+MT:Exact&msclkid=e6f5d3f902cc16f742e3b5aa87f61441"/>
      <Button name = "Github" link = "https://github.com/"/>
      <br></br>
      <Button name ="CoinMarketCap" link="https://coinmarketcap.com/"/>
      <Button name = "React" link="https://react.dev/"/>
      <Button name = "Gmail" link="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fhl%3Den&emr=1&hl=en&ifkv=AaSxoQz7UMlEuP2Rq-MGdKix5k5e4TN1UtozRUOAIOBkQIudvcThIEiqmlvvn0UFhEctan5VLh9gaw&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S755497484%3A1716750654751668&ddm=0"/>

    </div>
  );
}

export default App;
