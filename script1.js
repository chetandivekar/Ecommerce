async function fetchApi(){
    let data = await fetch(`https://fakestoreapi.com/products`)
    let obj = await data.json();
    console.log(obj);
    let str ="";
      
      // Use the function inside the for loop
      for(let i of obj){
        str += `<div onclick="handleCardClick()"  class="card  mx-3 my-2" style="width: 20rem">
        <img src="${i.image}" class="card-img-top rounded mx-auto d-block"  style="width:100px;margin: 5px;" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${i.title.slice(0, 18)}</h5>
        <p> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
        <a href="#" class="btn btn-primary">$ ${i.price}</a>
        
        </div>
        </div> `;
        // console.log(i);
    }
}

fetchApi();
// function handleCardClick(title, image, price) {
//     console.log(title, image, price);
//     // do whatever you want with the title, image, and price here
//   }

function handleCardClick(){
    console.log("hello");
   
}
 