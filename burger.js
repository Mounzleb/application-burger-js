
	
	let toppings = ['egg','cheese','salad','oignon','steak','bacon','chicken','fish','pickle','mayo','ketchup'];

	let choiceToppings;




	function getRandomrecipe(){

// permet de faire le tirage aux hasard
let i = Math.floor(Math.random()* toppings.length );
choiceToppings = toppings[i];
return choiceToppings;

};

console.log(getRandomrecipe());



function recette(){

		//je crée le tableau qui va me permettre de stocker mes ingredients tiré aux hasard

		let recetteListe=[];

		for (var i = 0; i < 6; i++) {

			let ingredients = getRandomrecipe();
			// le push permet de mettre les ingredients tiré aux hasard dans getRandomRecipe dans notre tableau recetteListe
			recetteListe.push(ingredients);

		}

		return recetteListe;
	};
	console.log(recette());





	// comment faire la selection de aux maximus deux ingrédients

	

	function getRandomRecipe2(min, max){
		let nbToppings = recette2(3,6);

		let counters= {};

		let recipe = [];

		
		while (recipe.length < nbToppings) {
			let i = Math.floor(Math.random() * toppings.length);
			let randomTopping = toppings[i];
			let c = counters[randomTopping] || 0; 
			if (c < 2) {
				counters[randomTopping] = c + 1;
				recipe.push(randomTopping);
			}
		}

		return recipe;
	}

	function recette2(min, max) {
		console.log(max - min + 1);
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	console.log(getRandomRecipe2());




