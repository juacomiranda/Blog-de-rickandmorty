const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			episode:[],
			favoritos:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			getCharacter: ()=>{
				fetch("https://rickandmortyapi.com/api/character")
  					.then(response => response.json())
  					.then(result => setStore({characters:result.results}))
  					.catch(error => console.log('error', error));
			},

			getEpisode: ()=>{
				fetch("https://rickandmortyapi.com/api/episode")
  					.then(response => response.json())
  					.then(result => setStore({episode:result.results}))
  					.catch(error => console.log('error', error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
