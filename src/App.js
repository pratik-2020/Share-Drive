import { Button } from '@material-ui/core';
//import './App.css';
import Share from './Share';
import {useState} from 'react';
import Recieve from './Recieve';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter } from 'react-router-dom';
import {Route, Switch, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import FileDownload from './FileDownload';
function senderButton(a){
  if(a){
    return(
      <Share />
    );
  }else{
    return(
      <div>

      </div>
    );
  }
}
function revieverButton(a){
  if(a){
    return(
      <Recieve />
    );
  }else{
    <div></div>
  }
}
function App() {
  const [sender, senderbutton] = useState(false);
  const [reciever, recieverbutton] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__cardview">{/*
          <Button id="sender" type="submit" onClick={()=> {senderbutton(true)}}>Sender</Button>
          <Button id="recierver" type="submit" onClick={() => recieverbutton(true)}>Recieve</Button>*/}
          <Switch>
            <Route path="/home" component={() => <HomeComponent />}/>
            <Route exact path="/share" component={() => <Share />}/>
            <Route exact path="/recieve" component={() => <Recieve />}/>
            <Redirect to="/home" />
          </Switch>
          {senderButton(sender)}
          {revieverButton(reciever)}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
