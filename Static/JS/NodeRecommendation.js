var count = 1;
var multiplicand = 0.851*0.1;
var colorsarray = [ "#A52A2A" , "#5F9EA0" , "#D2691E" , "#FF7F50" , "#FF8C00" , "#DC143C" , "#00CED1" , "#00BFFF" , "#1E90FF" , "#FFD700" ,
"#F08080" , "#ADD8E6" , "#90EE90" , "#20B2AA" , "#00FA9A" , "#FFA500" , "#FF4500" , "#EEE8AA" , "#FA8072" , "#F4A460" , "#FF6347" , "#9ACD32"];

document.getElementById("node").addEventListener("click", branch);
document.getElementById("node").style.background = colorsarray[Math.floor(Math.random() * 22)];

function branch(e) {
  var x = e.target;
  x.removeEventListener("click", branch);
  var movie1 = x.cloneNode('false');
  var movie2 = x.cloneNode('false');
  var movie3 = x.cloneNode('false');

  var moviestyle =  window.getComputedStyle(x);

  movie1.style.top = String(parseInt(moviestyle.getPropertyValue('top')) - document.documentElement.clientWidth * 0.10+"px");

  movie2.style.left = String(parseInt(moviestyle.getPropertyValue('left')) + document.documentElement.clientWidth  * multiplicand+"px");
  movie2.style.top = String(parseInt(moviestyle.getPropertyValue('top')) + document.documentElement.clientHeight * multiplicand+"px");

  movie3.style.left = String(parseInt(moviestyle.getPropertyValue('left')) - document.documentElement.clientWidth * multiplicand+"px");
  movie3.style.top = String(parseInt(moviestyle.getPropertyValue('top')) + document.documentElement.clientHeight * multiplicand+"px");

  movie1.class=String(count++);
  movie2.class=String(count++);
  movie3.class=String(count++);

  movie1.style.background = colorsarray[Math.floor(Math.random() * 22)];
  movie2.style.background = colorsarray[Math.floor(Math.random() * 22)];
  movie3.style.background = colorsarray[Math.floor(Math.random() * 22)];

  movie1.addEventListener("click", widebranch);
  movie2.addEventListener("click", widebranch);
  movie3.addEventListener("click", widebranch);

  document.body.appendChild(movie1);
  document.body.appendChild(movie2);
  document.body.appendChild(movie3);
}

function widebranch(e) {
  var x = e.target;
  var tarclass = e.target.class;
  x.removeEventListener("click", widebranch);
  var movie1 = x.cloneNode('false');
  var movie2 = x.cloneNode('false');
  var movie3 = x.cloneNode('false');

  var moviestyle =  window.getComputedStyle(x);


  movie1.style.top = String(parseInt(moviestyle.getPropertyValue('top')) - document.documentElement.clientHeight * 0.15+"px");

  movie2.style.left = String(parseInt(moviestyle.getPropertyValue('left')) + document.documentElement.clientWidth * 0.08+"px");
  movie2.style.top = String(parseInt(moviestyle.getPropertyValue('top')) + document.documentElement.clientHeight * 0.1+"px");

  movie3.style.left = String(parseInt(moviestyle.getPropertyValue('left')) - document.documentElement.clientWidth * 0.08+"px");
  movie3.style.top = String(parseInt(moviestyle.getPropertyValue('top')) + document.documentElement.clientHeight * 0.1+"px");

  movie1.class=String(count++);
  movie2.class=String(count++);
  movie3.class=String(count++);

  movie1.style.background = colorsarray[Math.floor(Math.random() * 22)];
  movie2.style.background = colorsarray[Math.floor(Math.random() * 22)];
  movie3.style.background = colorsarray[Math.floor(Math.random() * 22)];

  movie1.addEventListener("click", widebranch);
  movie2.addEventListener("click", widebranch);
  movie3.addEventListener("click", widebranch);

  document.body.appendChild(movie1);
  document.body.appendChild(movie2);
  document.body.appendChild(movie3);
}
