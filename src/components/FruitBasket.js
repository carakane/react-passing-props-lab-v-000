import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({updateFilterCallback, handleFilterChange, currentFilter, filters, fruit, list}) =>
      <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} filters={filters} />
        <FilteredFruitList
          filter={currentFilter} fruit={fruit}/>
      </div>

FruitBasket.defaultProps = {
	fruit: [],
	filters: [],
	currentFilter: "",
	updateFilterCallback:""
}

export default FruitBasket;
