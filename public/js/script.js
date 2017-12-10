function generateTest(){
  var imageTabsDiv = document.getElementById('imageTabs');
  if(imageTabsDiv !== null) imageTabsDiv.parentNode.removeChild(imageTabsDiv);
  var test = [];
  var qPerTest = [3,3,4,4,3,3];

  var seasons = ["fall","spring"];
  var years = [16,17];
  var questions = [1,2,3,4,5,6,7,8,9,10,11,12];
  var perms = cartesianProduct([seasons,years,questions]);
  var randomPerms = shuffle(perms);
  var qNum = 0;

  var imageTabsDiv = document.createElement('div');
    imageTabsDiv.setAttribute('id', 'imageTabs');
    baseURL = "questions/";

  for(var t=1; t<=6; t++){  
    for (var i = 1; i <= qPerTest[t]; i++) {
      season = randomPerms[qNum][0];
      year = randomPerms[qNum][1];
      question = randomPerms[qNum][2];
      var q = document.createElement("div");
      q.classList.add("question");
      var img = document.createElement("img");
      img.classList.add("qImg");
     
      var source = document.createElement("a");
      source.innerText = "Test " + t + ':'+season+year+'- question '+question;
      source.setAttribute("target","_blank");
      source.setAttribute("href","tests/T"+t+"-3300"+season+year+"ans.pdf");
      source.classList.add("source");
      source.classList.add("sourceHide");
      img.src =  (baseURL + "T" + t + '-' +season+year+'/'+question + ".png");
      q.appendChild(img);
      q.appendChild(source);

      test.push(q);
      qNum++;
    }
  }

  var randomTest = shuffle(test);
  for(var x=0; x<randomTest.length; x++){ 
    imageTabsDiv.appendChild(randomTest[x]);
  }

  document.getElementById("testPlaceholder").appendChild(imageTabsDiv);
  stopwatch.start()
}

function toggleSource(){
  if(document.getElementById("sourceButton").innerText == "Show Source"){
    sources = document.getElementsByClassName("source");
    for (var i = sources.length - 1; i >= 0; i--) {
      sources[i].classList.remove("sourceHide");
      sources[i].classList.add("sourceShow");
    }
  }
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