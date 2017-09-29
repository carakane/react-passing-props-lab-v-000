import React from 'react';

const FilteredFruitList = ({fruit}) =>
      <ul className="fruit-list">
        {fruit.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>

FilteredFruitList.defaultProps = {
	list: [],
	fruit: "",
	filter: ""
}
export default FilteredFruitList;
