import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
    const [planetInfo, setPlanetInfo] = useState([]);
		const [peopleInfo, setPeopleInfo] = useState([]);
    const [newArray, setNewArray] = useState([])

    const combinedInfo = []

		// ❗ Create effects to fetch the data and put it in state
    useEffect( () => {
      const promises = [
        axios.get(urlPlanets),
        axios.get(urlPeople)
      ];

      Promise.all(promises)
      .then(([planetRes, peopleRes]) => {
        setPlanetInfo(planetRes.data)
        setPeopleInfo(peopleRes.data)

        
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [])

    //testing();
		combineInfo();

    
    

		function testing() {
			if (planetInfo.length > 0 && peopleInfo.length > 0) {
				console.log(planetInfo);
				console.log(peopleInfo);
			}
		}

    function combineInfo() {
      peopleInfo.forEach( (person) => {
        const {id, name, homeworld} = person
        const answer = planetInfo.filter((info) => {
          const {id} = info
          return ( id === homeworld)
        })
        let from = answer[0].name
        combinedInfo.push({id,name,from})
      })
      //console.log(combinedInfo)
      if ((combinedInfo.length === 9) && (newArray.length === 0)) {
        //console.log('new')
				setNewArray(combinedInfo)
        //console.log(newArray)
			}
      
    }

       
        
        
    

  return (
		<div>
			<h2>Star Wars Characters</h2>
			<p>
				See the README of the project for instructions on completing this
				challenge
			</p>
			{/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        newArray.map( info =>{
          const {id, name, from} = info;
          return <Character key={id} name={name} from={from} />
        })
      }

		</div>
	);
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
