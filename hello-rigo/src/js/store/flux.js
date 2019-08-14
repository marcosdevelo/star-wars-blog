import { log } from "../utils";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],

			planets: [],
			favorite: []
		},
		actions: {
			getPlanets: () => {
				fetch("https://swapi.co/api/planets", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						log("La respues del GET /user/marcostodo fue: ", resp.ok); // will be true if the response is successfull
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						log("DATA LLEGO PLANETS", data); //this will print on the console the exact object received from the server
						setStore({
							planets: data.results
						});
					})
					.catch(error => {
						//error handling
						log("ERROR ", error);
						/**
						 * EDIT THIS!
						 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
						 * you should do your ajax requests or fetch api requests here
						 **/
					});
			},
			getCharacters: () => {
				fetch("https://swapi.co/api/people", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						log("La respues del GET /user/marcostodo fue: ", resp.ok); // will be true if the response is successfull
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						log("DATA LLEGO PEOPLE", data); //this will print on the console the exact object received from the server
						setStore({
							characters: data.results
						});
					})
					.catch(error => {
						//error handling
						log("ERROR ", error);
						/**
						 * EDIT THIS!
						 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
						 * you should do your ajax requests or fetch api requests here
						 **/
					});
			},

			markAsFavorite: (elementId, name) => {
				const store = getStore();
				setStore({ favorite: store.favorite.concat({ index: elementId, name: name }) });
				//console.log("Index:", elementId);
			},
			removeFavorites: (elementId, index) => {
				const store = getStore();
				setStore({ favorite: store.favorite.filter((item, i) => i !== index) });
			},

			changeColor: (index, color) => {}

			//get the store
			/*const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });*/
			// }
		}
	};
};

export default getState;
