import React, { Component } from "react";
import { Route, Switch } from "react-router";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Topic from "./components/Topics";
import Firework from "./components/Fireworks";
import SubTopic from "./components/SubTopics";
import Difficulty from "./components/Difficulty";
import Question from "./components/Questions";
import Answer from "./components/Answer";
import Timer from "./components/Timer";
import Spring from "./components/Topics/spring";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/HomeScreen" component={HomeScreen} />
          <Route path="/Topic" component={Topic} />
          <Route path="/SubTopic" component={SubTopic} />
          <Route path="/Difficulty" component={Difficulty} />
          <Route path="/Question" component={Question} />
          <Route path="/Answer" component={Answer} />
          <Route path="/Firework" component={Firework} />
          <Route path="/Timer" component={Timer} />
          <Route path="/Spring" component={Spring} />
        </Switch>
      </div>
    );
  }
}

export default App;
