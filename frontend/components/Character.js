import React from 'react'

function Character(props) { // ❗ Add the props
  console.log('In The Char')
  console.log(props)
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
		<div>
			{/* Use the same markup with the same attributes as in the mock */}
			{console.log('In The Char')}
		</div>
	);
}

export default Character;
