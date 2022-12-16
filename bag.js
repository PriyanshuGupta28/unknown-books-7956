let bagdata=JSON.parse(localStorage.getItem("cart")) || []
let container=document.getElementById("container")
let head1 = document.getElementById("head1")
displayProducts(bagdata)
function displayProducts(data){
    container.innerHTML = null
    data.forEach((element,index) => {
        let card=document.createElement("div")
        let image_link=document.createElement("img")
        image_link.setAttribute("src", element.image_link)
        let name=document.createElement("h2")
        name.innerText=element.name
        let price = document.createElement("h5");
        price.innerText = element.price;
        let currency=document.createElement("p")
        currency.innerText=element.currency;
        let category= document.createElement("p")
        category.innerText=element.category;
        let buynow= document.createElement("button")
        buynow.innerText="Buynow"
        buynow.addEventListener("click",()=>{
            alert("Order Placed")
        })
        let Delete = document.createElement("button");
        Delete.innerText = "Delete";
        Delete.addEventListener("click" ,()=>{
            bagdata.splice(index,1)
            displayProducts(bagdata)
          });
        card.append(image_link,name,price,currency,category,buynow,Delete)
        container.append(card);
    });
}