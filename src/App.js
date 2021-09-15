import React, { Component } from "react";
import "./App.css";
import Feed from "./Feed";
import data from "./data.json";

class App extends Component {
  state = {
    searchQuery: "",
  };

  setSearch = (evevnt) => {
    this.setState({ searchQuery: evevnt.target.value });
  };
  // data = (state.searchQuery) => {data.find(i => i.toLowerCase().includes(searchQuery.toLowerCase()))};

  // data = ({searchQuery}) => {
  //   return (
  //   data.find(i => i.toLowerCase().includes(this.state.searchQuery.toLowerCase())))
  //  }

  render() {
    const sdata = data.filter((i) => {
      return (
        i.desc.toLowerCase().includes(this.state.searchQuery.toLowerCase()) +
        i.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    });

    var fdata;
    if (sdata.length !== 0) {
      fdata = sdata.map((props) => Feed(props));
    } else {
      fdata = (
        <div className='News'>
          <div>
            <h2>Очень пусто и грустно ):</h2>
          </div>
        </div>
      );
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <img
            src='https://cdn3.f-cdn.com/contestentries/114457/10540864/5446245b3d5f7_thumb900.jpg'
            className='App-logo'
            alt='logo'
          />
          <h1>лучшие мемы автомира</h1>

          <input
            size='large'
            placeholder='Поиск'
            value={this.state.searchQuery}
            onChange={this.setSearch}
          />
        </header>
        <div className='App-content'>{fdata}</div>
      </div>
    );
  }
}

export default App;
