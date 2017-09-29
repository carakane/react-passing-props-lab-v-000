import React from 'react';

const FilteredFruitList = ({list}) =>
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>

FilteredFruitList.defaultProps = {
	fruit: "",
	filter: ""
}
export default FilteredFruitList;
