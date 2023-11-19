import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
    const [planetInfo, setPlanetInfo] = useState([]);
		const [peopleInfo, setPeopleInfo] = useState([]);

		// ❗ Create effects to fetch the data and put it in state
		useEffect(() => {
			function getPlanets() {
				axios
					.get(urlPlanets)
					.then((res) => {
						setPeopleInfo(res.data);
					})
					.catch((err) => {
						console.log(err.message);
					});
			}
			function getPeople() {
				axios
					.get(urlPeople)
					.then((res) => {
						setPlanetInfo(res.data);
					})
					.catch((err) => {
						console.log(err.message);
					});
			}
			getPlanets();
			getPeople();
		}, []);

		function testing() {
			if (planetInfo.length > 0 && peopleInfo.length > 0) {
				console.log(planetInfo);
				console.log(peopleInfo);
			}
		}

		testing();
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
