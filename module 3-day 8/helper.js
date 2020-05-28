
const url = "https://striveschool.herokuapp.com/api/product/";

// for the index.html page
const getProducts = async () => {
let response = await fetch(url,{
      "method":"GET",
      "headers":{
        "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
      }  }); 
  const data = await response.json(); 
  return data;
};


  
  // for the backoffice.html page
  const saveProduct = async (product) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')  }),
  });
  return response;
}; 

const handleSubmit = () => {
    event.preventDefault();
    submitProduct();
  //we could have written the submitProduct fxn here but bc we need it else where, we write it separately
  };  
  
  submitProduct = async () => {
  // create a spinner to show the webpage is processing first(not oligatory)
    let spinner = document.querySelector(".spinner-border")
    spinner.classList.toggle("d-none");
    let myProduct = {
      imageUrl:document.querySelector("#imageUrl").value,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      brand: document.querySelector("#brand").value,
      price: document.querySelector("#price").value,
    };
    console.log("MYPRODUCT", myProduct);    
    let response;

    if (id){
      response = await editProduct(id, myProduct)
    }else{
      response = await saveProduct(myProduct)
    }
    
    console.log("RESPONSE FROM THE SAVEPRODUCT", response);
    if (response.ok) {
      alert("Product created successfully");
      spinner.classList.toggle("d-none");
      location.assign("index.html");
    } else {
      spinner.classList.toggle("d-none")
      alert("product NOT created succesfully");
    }
  };



  // for the detail.html page

  const getSingleProduct = async (id)=> {
    let response = await fetch(url + id, {
      "method":"GET",
      "headers":{
        "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
      }  });

      const data = await response.json()
      return data;
 
  }


  // Delete function
  const deleteProduct = async (id) =>{
  let response = await fetch(url + id,{
    method: "DELETE",
    "headers":{
      "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
    }  }); 
    return response;

  }

  const handleDelete = async () =>{
    const response = await deleteProduct(id);
    if(response.ok){
      alert("Event deleted successfully");
      window.location.assign("index.html")
    }else{
      alert("Event has not been deleted successfully")
    }
  }


  // Edit function

  const editProduct = async (id,product)=> {
    let response = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify(product),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')    }),
    });
    return response;
  };

window.onload = async () =>{
  let urlParams = new URLSearchParams(window.location.search)
  id =urlParams.get("id");
  if(id){
    console.log("ID IS PRESENT, FETCHING DETAILS", id);
    let pdt = await editProduct(id);
    console.log("PRODUCT DETAILS", product);
       document.querySelector("#imageUrl").value = pdt.img;
       document.querySelector("#name").value = pdt.name;
       document.querySelector("#description").value= pdt.description;
       document.querySelector("#brand").value = pdt.brand
       document.querySelector("#price").value= pdt.price

  }else{
    console.log("I WANT TO CREATE AN ELEMENT FROM SCRATCH")
  }

}

  const handleEdit = () => {
    window.location.href = "backoffice.html?id =" + id;

  };