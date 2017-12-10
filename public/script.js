function generateTest(){
	var imageTabsDiv = document.getElementById('imageTabs');
	if(imageTabsDiv !== null) imageTabsDiv.parentNode.removeChild(imageTabsDiv);
	var test = [];

	var seasons = ["fall","spring"];
	var years = [16,17];
	var questions = [1,2,3,4,5,6,7,8,9,10,11,12];
	var perms = cartesianProduct([seasons,years,questions]);
	randomPerms = shuffle(perms);
	var qNum = 0;

	var imageTabsDiv = document.createElement('div');
    imageTabsDiv.setAttribute('id', 'imageTabs');
    baseURL = "questions/";

    for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.src =  (baseURL + "T1-"+season+year+'/'+question+".png");
      img.setAttribute("width","80%");
      test.push(img);
      qNum++;
	}
	for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.src =  (baseURL + "T2-"+season+year+'/'+question+".png");
      img.setAttribute("width","80%");
      test.push(img);
      qNum++;
	}
	for (var i = 0; i < 4; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.src =  (baseURL + "T3-"+season+year+'/'+question+".png");
      img.setAttribute("width","80%");
      test.push(img);
      qNum++;
	}
	for (var i = 0; i < 4; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.src =  (baseURL + "T4-"+season+year+'/'+question+".png");
      img.setAttribute("width","80%");
      test.push(img);
      qNum++;
	}
	for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.src =  (baseURL + "T5-"+season+year+'/'+question+".png");
      img.setAttribute("width","80%");
      test.push(img);
      qNum++;
	}
	for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.src =  (baseURL + "T6-"+season+year+'/'+question+".png");
      img.setAttribute("width","80%");
      test.push(img);
      qNum++;
	}
	for(var x=0; x<test.length; x++){ 
		imageTabsDiv.appendChild(test[x]);
	}

	document.getElementById("testPlaceholder").appendChild(imageTabsDiv);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function cartesianProduct(arr){
    return arr.reduce(function(a,b){
        return a.map(function(x){
            return b.map(function(y){
                return x.concat(y);
            })
        }).reduce(function(a,b){ return a.concat(b) },[])
    }, [[]])
}