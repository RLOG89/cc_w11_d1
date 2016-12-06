var cats = [];
var boba = {name: "Boba", favouriteFood: "Sock fluff", imageSrc:"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"};
 var barnaby = {name: "Barnaby", favouriteFood: "Tuna", imageSrc:"http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"};
 var max = {name: "Max", favouriteFood: "Whiskas Temptations", imageSrc:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"};
 var bagheera = {name: "Bagheera", favouriteFood: "Tuna", imageSrc: "http://i2.mirror.co.uk/incoming/article6745691.ece/ALTERNATES/s615b/Black-cat.jpg"}
 cats.push(boba, barnaby, max, bagheera);

var createUl = function(name) {
  var ul = document.createElement("ul")
  ul.classList.add( name )
  return ul;
}

var createLi = function(text) {
  var li = document.createElement("li")
  li.classList.add(text)
  return li;
}

var createImg = function(src) {
  var img = doument.createElement('img');
  var width = 500;
  var src = src;
  return img;
}

var addCat = function(name, favouriteFood, image){
  var ul = createUl();
  var nameLi = createLi(name);
  var favouriteFoodLi = createLi(text);
  var imgSrc = createImg(image);
  appendElements(ul, nameLi, favouriteFoodLi, imgSrc);
}

var createCatArticle = function(){
  var catArticle = document.createElement('article');
  catArticle.classList.add('cat')
  return catArticle;
}

var appendElements = function(ul, liName, liFood, img) {
  ul.appendChild(liName);
  ul.appendChild(liFood);
  ul.appendChild(img);
  document.querySelector('#cats').appendChild(ul);
}

var init = function() {
  for (var i = 0; i < cats.length; i++) {
    addCat(cats[i].name, cats[i].favouriteFood, cats[i].imageSrc);
  } 
}

window.onload = init;