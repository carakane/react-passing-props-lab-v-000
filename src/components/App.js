import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor(props){
		super(props)

	this.state = {
		items:[],
		fruit: [],
		filters: [],
		currentFilter: null
	}
}

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

 handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

	updateFilterCallback = () => {
		const list = !this.state.currentFilter || this.state.currentFilter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.state.currentFilter);
this.setState({
			fruit: list
	})
}

	render(){


	return(
	<FruitBasket handleFilterChange={this.handleFilterChange} currentFilter={this.currentFilter} filters={this.state.filters} items={this.state.items} fruit={this.state.fruit}/>
)}}

export default App;
