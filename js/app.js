"use strict";

function site(){
  initialize();
  handleSubmit();
  loadNew();
  showResult();
}

function initialize(){
  new Product(bag,img/bag.jpg,0,0);
  new Product(banana,img/banana,0,0);
  new Product(bathroom,img/bathroom.jpg,0,0);
  new Product(boots,img/banana,0,0);
  new Product(breakfest,img/breakfest.jpg,0,0);
  new Product(bubblegum,img/bubblegum,0,0);
  new Product(chair,img/chair.jpg,0,0);
  new Product(cthulu,img/cthulu,0,0);
  new Product(dog-duck,img/dog-duck.jpg,0,0);
  new Product(dragon,img/dragon,0,0);
  new Product(pen,img/pen.jpg,0,0);
  new Product(pet-sweep,img/pet-sweep,0,0);
  new Product(scissors,img/scissors.jpg,0,0);
  new Product(shark,img/shark,0,0);
  new Product(sweep,img/sweep.jpg,0,0);
  new Product(tauntaun,img/tauntaun,0,0);
  new Product(unicorn,img/unicorn.jpg,0,0);
  new Product(usb,img/usb,0,0);
  new Product(water-can,img/water-can.jpg,0,0);
  new Product(wine-glass,img/wine-glass,0,0);
}


function Product(name,src,timesShown,timesChosen){
  this.name=name;
  this.src=src;
  this.timesShown=timesShown;
  this.timesChosen=timesChosen

  Product.all.push(this);
}
Product.all=[];