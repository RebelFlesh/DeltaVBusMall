"use strict";

function site(){
  initialize();
  handleSubmit();
  loadNew();
  showResult();
}
function Product(name,src,timesShown,timesChosen){
  this.name=name;
  this.src=src;
  this.timesShown=timesShown;
  this.timesChosen=timesChosen

  Product.all.push(this);
}
function random(){
  var p1=Product.all[Math.floor(Math.random()*20)];
  var p2=Product.all[Math.floor(Math.random()*20)];
  var p3=Product.all[Math.floor(Math.random()*20)];
  if (p1==p2||p1==p3||p2==p3){
    random();
  }
  return p1,p2,p3;
}

function initialize(){
  new Product("bag","img/bag.jpg",0,0);
  new Product("banana","img/banana.jpg",0,0);
  new Product("bathroom","img/bathroom.jpg",0,0);
  new Product("boots","img/boots.jpg",0,0);
  new Product("breakfest","img/breakfest.jpg",0,0);
  new Product("bubblegum","img/bubblegum.jpg",0,0);
  new Product("chair","img/chair.jpg",0,0);
  new Product("cthulu","img/cthulu.jpg",0,0);
  new Product("dog-duck","img/dog-duck.jpg",0,0);
  new Product("dragon","img/dragon.jpg",0,0);
  new Product("pen","img/pen.jpg",0,0);
  new Product("pet-sweep","img/pet-sweep.jpg",0,0);
  new Product("scissors","img/scissors.jpg",0,0);
  new Product("shark","img/shark.jpg",0,0);
  new Product("sweep","img/sweep.jpg",0,0);
  new Product("tauntaun","img/tauntaun.jpg",0,0);
  new Product("unicorn","img/unicorn.jpg",0,0);
  new Product("usb","img/usb",0,0);
  new Product("water-can","img/water-can.jpg",0,0);
  new Product("wine-glass","img/wine-glass",0,0);
  console.log(Product.all);
  random();
  if (p1==p2||p1==p3||p2==p3){
    console.error("Same stuff");
  }
}




Product.all=[];

initialize();