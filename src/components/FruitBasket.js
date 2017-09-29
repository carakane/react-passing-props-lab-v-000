import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({handleFilterChange, selectedFilter, filters, list}) =>
      <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} filters={filters} />
        <FilteredFruitList
          filter={selectedFilter} list={list}/>
      </div>

FruitBasket.defaultProps = {
	fruit: [],
	filters: [],
	currentFilter: "",
	updateFilterCallback:""
}

export default FruitBasket;
