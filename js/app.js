"use strict";

var p1=undefined,
  p2=undefined,
  p3=undefined;

/*function site(){
  initialize();
  handleSubmit();
  loadNew();
  showResult();
}
*/
function Product(name,src,timesShown,timesChosen){
  this.name=name;
  this.src=src;
  this.timesShown=timesShown;
  this.timesChosen=timesChosen;

  Product.all.push(this);
}
Product.all=[];

function random(){
  p1=Product.all[Math.floor(Math.random()*20)];
  p2=Product.all[Math.floor(Math.random()*20)];
  p3=Product.all[Math.floor(Math.random()*20)];
  if (p1===p2||p1===p3||p2===p3){
    random();
  }
  return p1,p2,p3;
}

function setup(){
  var img1=document.getElementById("P1");
  var img2=document.getElementById("P2");
  var img3=document.getElementById("P3");
  img1.src=p1.src;
  p1.timesShown++;
  img2.src=p2.src;
  p2.timesShown++;
  img3.src=p3.src;
  p3.timesShown++;
  console.log(p3);
}

function initialize(){
  new Product("bag","img/bag.jpg",0,0);
  new Product("banana","img/banana.jpg",0,0);
  new Product("bathroom","img/bathroom.jpg",0,0);
  new Product("boots","img/boots.jpg",0,0);
  new Product("breakfest","img/breakfast.jpg",0,0);
  new Product("bubblegum","img/bubblegum.jpg",0,0);
  new Product("chair","img/chair.jpg",0,0);
  new Product("cthulu","img/cthulhu.jpg",0,0);
  new Product("dog-duck","img/dog-duck.jpg",0,0);
  new Product("dragon","img/dragon.jpg",0,0);
  new Product("pen","img/pen.jpg",0,0);
  new Product("pet-sweep","img/pet-sweep.jpg",0,0);
  new Product("scissors","img/scissors.jpg",0,0);
  new Product("shark","img/shark.jpg",0,0);
  new Product("sweep","img/sweep.png",0,0);
  new Product("tauntaun","img/tauntaun.jpg",0,0);
  new Product("unicorn","img/unicorn.jpg",0,0);
  new Product("usb","img/usb.gif",0,0);
  new Product("water-can","img/water-can.jpg",0,0);
  new Product("wine-glass","img/wine-glass.jpg",0,0);
  console.log(Product.all);
  random();
  setup();
}

initialize();

function handleSubmit(event){
  event.preventDefault();

  window[event.target.vote.value].timesChosen++;

}

var form=document.querySelector("form");
form.addEventListener("submit",handleSubmit);
