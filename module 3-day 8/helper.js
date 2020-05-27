const url = "https://striveschool.herokuapp.com/api/product/";window.onload =  getProducts = async () => {
  let response = await fetch(url,{
      "method":"GET",
      "headers":{
        "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
      }  }); 
  const data = await response.json(); 
  return data;
};window.onload = async function getProductsDetails ()  {
    let productsDiv = document.querySelector(".container");
    let products = await getProducts();
    console.log(products)   
     if (products.length > 0) {
      products.forEach((pdt) => {
        productsDiv.innerHTML+= `
        <div class= "card mb-3" style="width: 18rem;">
       <img src="${pdt.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${pdt.name}</h5>
      <p class="card-text">${pdt.description}</p>
      <p class="card-text">${pdt.brand}</p>
      <p class="card-text">${pdt.price}</p>
      
     <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
        `
      });
    } else {
      productsDiv.innerHTML = "<h1>No selected products</h1>";
    }
  };const saveProduct = async (product) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')    }),
  });
  return response;
}; 

handleSubmit = () => {
    event.preventDefault();
    submitProduct();
  };  
  
submitProduct = async () => {
    let myProduct = {
      imageUrl:document.querySelector("img").src,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      brand: document.querySelector("#brand").value,
      price: document.querySelector("#price").value,
    };
    console.log("MYPRODUCT", myProduct);    let response = await saveProduct(myProduct);
    console.log("RESPONSE FROM THE SAVEPRODUCT", response);
    if (response.ok) {
      alert("Product created successfully");
      location.assign("index.html");
    } else {
      alert("product NOT created succesfully");
    }
  };