import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor(props){
		super(props)

	this.state = {
		fruit: [],
		items: [],
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
    this.setState({ selectedFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

	render(){
    const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);

	return(
	<FruitBasket handleFilterChange={this.handleFilterChange} selectedFilter={this.selectedFilter} filters={this.state.filters} items={this.state.items} list={list}/>
)}}

export default App;
