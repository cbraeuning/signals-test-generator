function generateTest(){
  var imageTabsDiv = document.getElementById('imageTabs');
  if(imageTabsDiv !== null) imageTabsDiv.parentNode.removeChild(imageTabsDiv);
  var test = [];

  var seasons = ["fall","spring"];
  var years = [16,17];
  var questions = [1,2,3,4,5,6,7,8,9,10,11,12];
  var perms = cartesianProduct([seasons,years,questions]);
  var randomPerms = shuffle(perms);
  var qNum = 0;

  var imageTabsDiv = document.createElement('div');
    imageTabsDiv.setAttribute('id', 'imageTabs');
    baseURL = "questions/";

    for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.classList.add("question");
      img.src =  (baseURL + "T1-"+season+year+'/'+question+".png");
      test.push(img);
      qNum++;
  }
  for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.classList.add("question");
      img.src =  (baseURL + "T2-"+season+year+'/'+question+".png");
      test.push(img);
      qNum++;
  }
  for (var i = 0; i < 4; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.classList.add("question");
      img.src =  (baseURL + "T3-"+season+year+'/'+question+".png");
      test.push(img);
      qNum++;
  }
  for (var i = 0; i < 4; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.classList.add("question");
      img.src =  (baseURL + "T4-"+season+year+'/'+question+".png");
      test.push(img);
      qNum++;
  }
  for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.classList.add("question");
      img.src =  (baseURL + "T5-"+season+year+'/'+question+".png");
      test.push(img);
      qNum++;
  }
  for (var i = 0; i < 3; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var img = document.createElement("img");
      img.classList.add("question");
      img.src =  (baseURL + "T6-"+season+year+'/'+question+".png");
      test.push(img);
      qNum++;
  }

  var randomTest = shuffle(test);
  for(var x=0; x<randomTest.length; x++){ 
    imageTabsDiv.appendChild(randomTest[x]);
  }

  document.getElementById("testPlaceholder").appendChild(imageTabsDiv);
  stopwatch.start()
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

class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
    }
    
    reset() {
        this.times = [ 0, 0, 0 ];
    }
    
    start() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }
    
    lap() {
        let times = this.times;
        let li = document.createElement('li');
        li.innerText = this.format(times);
        this.results.appendChild(li);
    }
    
    stop() {
        this.running = false;
        this.time = null;
    }

    restart() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
        this.reset();
    }
    
    clear() {
        clearChildren(this.results);
    }
    
    step(timestamp) {
        if (!this.running) return;
        this.calculate(timestamp);
        this.time = timestamp;
        this.print();
        requestAnimationFrame(this.step.bind(this));
    }
    
    calculate(timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] >= 100) {
            this.times[1] += 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] >= 60) {
            this.times[0] += 1;
            this.times[1] -= 60;
        }
    }
    
    print() {
        this.display.innerText = this.format(this.times);
    }
    
    format(times) {
        return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}`;
    }
}

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}

function clearChildren(node) {
    while (node.lastChild)
        node.removeChild(node.lastChild);
}

let stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'),
    document.querySelector('.results'));