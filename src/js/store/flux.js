const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			paises:[],
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
				getPaises: ()=>{
					fetch("https://restcountries.com/v2/all", requestOptions)
  				.then(response => response.text())
 				.then(data => console.log(data.result))
				setStore({paises:data.result})
				}
			// Use getActions to call a function within a fuction
			//1exampleFunction: () => {
			//1	getActions().changeColor(0, "green");
			//1},
			//1loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			//1},
			//1changeColor: (index, color) => {
				//get the store
			//1	const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
			//1	const demo = store.demo.map((elm, i) => {
			//1		if (i === index) elm.background = color;
			//1		return elm;
			//1	});

				//reset the global store
				//1setStore({ demo: demo });
			//1}
		//1}
	//1};
}
}
	};
export default getState;
