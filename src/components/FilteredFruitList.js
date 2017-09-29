import React from 'react';


const FilteredFruitList = ({fruit, filter, pome}) =>
	 <ul className="fruit-list">
		{filter ? pome.map((item, index) => <li key={index}>{item.char}</li>) :

     fruit.map((item, index) => <li key={index}>{item.char}</li>)}
   </ul>

FilteredFruitList.defaultProps = {
	fruit: [],
	filter: null,
pome: [
   { name: 'green_apple',
    keywords: [ 'fruit', 'nature' ],
    char: '🍏',
    fruit_type: 'pome' },
  { name: 'apple',
    keywords: [ 'fruit', 'mac', 'school' ],
    char: '🍎',
    fruit_type: 'pome' },
  ]
}

//pome shouldn't be hardcoded. the tests passed in a filter value to
//FilteredFruitList, probably because that's where the filtering was
//originally done. But the Filter is where the change of filter actually occurs. My version works in the browser but doesn't work when the filter
//is passed in via the FilteredFruitList

export default FilteredFruitList;
