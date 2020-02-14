import React from "react";

import axios from "axios";

import { PlayerCard } from "./components/PlayerCard.js";
import { Nav } from "./components/Nav";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/footballers`)
      .then((res) => {
        // console.table(`Success! you got data`, res.data);
        this.setState({ players: res.data });
        // console.log(Array.isArray(this.state.players));
      })
      .then((err) => {
        console.log(`ERROR, check again`, err);
      });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>
          Happy building{" "}
          <span role="img" aria-label="Smiling emoji">
            😃
          </span>
          {this.state.players.map((players) => {
            return <PlayerCard key={players.id} players={players} />;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
