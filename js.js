window.result = {};
result.links = [];
window.arr_links = document.querySelectorAll('.fullImageContainer img');
for(let i = 1; i < arr_links.length; i++ ) {
    result.links.push(arr_links[i].currentSrc);
}
result.name = document.querySelector('.product-hero h1').innerHTML;
function price_return(string) {
let arr = string.split(' $')[0].split(',');
return Number(arr[0] +"."+arr[1]);
}
result.price = price_return(document.querySelector('#product-price .current-price-container span').innerHTML);
result.price_ = price_return(document.querySelectorAll('#product-price .product-prev-price')[1].innerHTML);
console.log("Название - " + result.name);
console.log("Цена -" + result.price);
console.log("Цена без скидки -" + result.price_);
result.links.forEach((value) => {
   console.log(value);
});

