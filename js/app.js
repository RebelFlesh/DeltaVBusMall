"use strict";

var product1=undefined,
  product2=undefined,
  product3=undefined,
  votes=0;

/*function site(){
  initialize();
  handleSubmit();
  loadNew();
  showResult();
}
*/
function Product(name,src,timesShown,timesChosen){
  //creates products and adds them to an array
  this.name=name;
  this.src=src;
  this.timesShown=timesShown;
  this.timesChosen=timesChosen;

  Product.all.push(this);
}
Product.all=[];

function random(){
  //picks random product from array
  product1=Product.all[Math.floor(Math.random()*20)];
  product2=Product.all[Math.floor(Math.random()*20)];
  product3=Product.all[Math.floor(Math.random()*20)];
  if (product1===product2||product1===product3||product2===product3){
    random();
  }
  return product1,product2,product3;
}

function setup(){
  var img1=document.getElementById("P1");
  var img2=document.getElementById("P2");
  var img3=document.getElementById("P3");
  //insert product src as img src
  img1.src=product1.src;
  product1.timesShown++;
  img2.src=product2.src;
  product2.timesShown++;
  img3.src=product3.src;
  product3.timesShown++;
}

function initialize(){
  //makes all products and sets up form
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
var form=document.querySelector("form");
form.addEventListener("submit",handleSubmit);

function handleSubmit(event){
  //when submit, timesChosen++, add new products.
  event.preventDefault();
  votes++;
  window[event.target.vote.value].timesChosen++;
  event.target.querySelector("input:checked").checked = false;
  random();
  setup();
  if (votes===25){
    form.removeEventListener("submit",handleSubmit);
    results();
  }
}

function results(){
  showList();
  showChart();
}

function showList(){
  var aside=document.querySelector("aside");
  var ul=document.createElement("ul");
  for(var i=0;i<Product.all.length;i++){
    var li=document.createElement("li");
    li.textContent=Product.all[i].timesChosen+" votes for "+Product.all[i].name;
    ul.appendChild(li);
  }
  aside.appendChild(ul);
}

function showChart(){
  var canvas =document.getElementById("results-Canvas");
  canvas.style.display="block";

  var labels=[];
  var voteCounts=[];
  for (var i=0;i < Product.all.length;i++){
    labels[i]=Product.all[i].name;
    voteCounts[i]=Product.all[i].timesChosen;
  }

  var ctx=canvas.getContext("2d");
  new Chart(ctx,{
    type:"bar",
    data:{
      labels:labels,
      datasets:[{
        label: "Vote Count",
        backgroundColor: 'rgb(200,0,0,0.6)',
        data: voteCounts,
      }]
    },
    options:{
      responsive:true,
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true,
          }
        }]
      },
      title:{
        display:true,
        text: "Voting Results"
      }
    }
  });
}

