async function fetchApi(){
    let data = await fetch(`https://fakestoreapi.com/products`)
    let obj = await data.json();
    // console.log(obj);
    let card = document.querySelector(".row");
    let str ="";
      
      // Use the function inside the for loop
      for(let i of obj){
        str += `<div onclick="handleCardClick('titlr' , '${i.image}' , '${i.price}' )"  class="card  mx-3 my-2" style="width: 20rem">
        <img src="${i.image}" class="card-img-top rounded mx-auto d-block"  style="width:100px;margin: 5px;" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${i.title.slice(0, 18)}</h5>
        <p> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
        <a href="#" class="btn btn-primary">$ ${i.price}</a>
        
        </div>
        </div> `;
        // console.log(i);
     
      card.innerHTML = str;
    }
}

 function handleCardClick(title, image, price) {
    console.log("hello" ,title , price);
  }

fetchApi();

async function fetchApi1(categories , category){
    let data = await fetch(`https://fakestoreapi.com/products/${categories}/${category}`)
    let obj = await data.json();
    // console.log(obj);
    let card = document.querySelector(".row");
    let str ="";

    for(let i of obj){
        str += `<div class="card  mx-3 my-2" style="width: 20rem; ">
        <img src="${i.image}" class="card-img-top rounded mx-auto d-block"  style="width:100px; margin: 5px ; " alt="..." />
        <div class="card-body">
        <h5 class="card-title">${i.title.slice(0, 18)}</h5>
        <p> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
        <a href="#" "console.log('${i.description}')" class="btn btn-primary">$ ${i.price}</a>
        
        </div>
        </div> `
     
      card.innerHTML = str
    }



}



let menscloths = document.querySelector(".menscloths");
menscloths.addEventListener('click' , ()=>{
    fetchApi1("category" , "men's clothing");
})

let womenscloths = document.querySelector(".womenscloths");
womenscloths.addEventListener('click' , ()=>{
    fetchApi1("category" , "women's clothing");
})

let electronic = document.querySelector(".electronic");
electronic.addEventListener('click' , ()=>{
    fetchApi1("category" , "electronics");
})

let jewelery = document.querySelector(".jewelery");
jewelery.addEventListener('click' , ()=>{
    fetchApi1("category" , "jewelery");
})
