import React, {useState} from 'react'
import Styles from 'styled-components'



function Character(props) { // ❗ Add the props
  const {name, from} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [ showFrom, setShowFrom ] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  function toggle() {
    setShowFrom(!showFrom)
  }
  return (
		<div className='character-card' onClick={toggle}>
			{/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{name}</h3>
      {
        showFrom ? (
        <p>
          Planet:
          <span className='character-planet'> {from}</span>
        </p>) : null
      }
			
		</div>
	);
}

export default Character;
