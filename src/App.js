import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        items: [{"name": "ANG", "age": 20}, {"name": "HsG", "age": 20}, {"name": "KyT", "age": 20}],
        filter:false
      }
  }
  componentWillMount() {
    fetch("https://swapi.co/api/people/?format=json")
      .then(response => response.json())
      .then( ({results: items}) => this.setState({items}) )
  } 
  filter(e){
    this.setState({filter: e.target.value});
  }
  render() {
    let items = this.state.items;
    // OR this.state.items.slice() to ceasy for later push pop items if have
    if (this.state.filter) {
      items = items.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()) )
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
         {items.map(item => <Person person = {item} key = {item.name}/>)}
      </div>
    );
  }
}

const Person = (props) => <h4>{props.person.name}</h4>;

export default App;
