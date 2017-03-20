var myRequest = new XMLHttpRequest();
var myRequest2 = new XMLHttpRequest();
var dogContainer = document.getElementById("dogContainer");
var catContainer = document.getElementById("catContainer");

function addDogFood(xhrDogData){
	var dogString = "";
	var currentDogFood;
	if (dogContainer){
		for (var i=0; i<xhrDogData.dog_brands.length; i++){
			currentDogFoodBrand = xhrDogData.dog_brands[i];
			for (var y=0; y<currentDogFoodBrand.types.length; y++){
				currentDogFoodType = currentDogFoodBrand.types[y];
				for (var k=0; k< currentDogFoodType.volumes.length; k++){
					currentDogFoodVol = currentDogFoodType.volumes[k];
					dogString +=`<div class="col-sm-6 col-md-4">`;
					dogString+=`<div class="thumbnail">`;
					dogString+=`<h3>${currentDogFoodBrand.name}</h3>`
					dogString+=`<div class="caption">`
					dogString+=`<h4>${currentDogFoodType.type}</h4>`
					dogString+=`<h4>${currentDogFoodVol.name}</h4>`
					dogString+=`<h4>${currentDogFoodVol.price}</h4>`
					dogString+=`</div></div></div>`;
				}
			}
		}
	} else {
		return;
	}
	dogContainer.innerHTML= dogString;
}
function addCatFood(xhrCatData){
	var catString = "";
	var currentCatFood;
	if (catContainer){
		for (var i=0; i<xhrCatData.cat_brands.length; i++){
			currentCatFoodBrand = xhrCatData.cat_brands[i];
			for (var y=0; y<currentCatFoodBrand.types.length; y++){
				currentCatFoodType = currentCatFoodBrand.types[y];
				for (var k=0; k< currentCatFoodType.volumes.length; k++){
					currentCatFoodVol = currentCatFoodType.volumes[k];
					catString +=`<div class="col-sm-6 col-md-4">`;
					catString+=`<div class="thumbnail">`;
					catString+=`<h3>${currentCatFoodBrand.name}</h3>`
					catString+=`<h4>Good for ${currentCatFoodBrand.breeds}</h4>`
					catString+=`<div class="caption">`
					catString+=`<h4>${currentCatFoodType.type}</h4>`
					catString+=`<h4>${currentCatFoodVol.name}</h4>`
					catString+=`<h4>${currentCatFoodVol.price}</h4>`
					catString+=`</div></div></div>`;
				}
			}
		}
	} else {
		return;
	}
	catContainer.innerHTML= catString;

}


function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);

	addDogFood(data);
}
function executeThisCodeAfterFileLoaded2(){
	var catData = JSON.parse(this.responseText);

	addCatFood(catData);
}
function executeThisCodeAfterFileFails(){
	console.log("boooooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","dogFood.json");
myRequest.send();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoaded2);
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET","catFood.json");
myRequest2.send();