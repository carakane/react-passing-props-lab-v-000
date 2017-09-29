import React from 'react';

const FilteredFruitList = ({items}) =>
      <ul className="fruit-list">
        {items.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>

FilteredFruitList.defaultProps = {
	items: [],
	fruit: "",
	filter: ""
}
export default FilteredFruitList;
