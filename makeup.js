 let container= document.getElementById("makeup-container")
 let filter=document.getElementById("filter")
 let filteredData=[]
 filter.addEventListener("change" , ()=>{
   let filtered = filteredData.filter((e)=>{
     if(e.category === filter.value){
       return true
     }
     return false
   })
   displayProducts(filtered)
 })


 fetchData()

 function fetchData(){
    let promise= fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    promise.then((responseObj)=>{
        return responseObj.json();
    })
    .then((acctualData)=>{
        let myNeededData= acctualData.map((element)=>{
           let obj={
            image_link : element.image_link,
            name : element.name,
            price : element.price,
            currency : element.currency,
            category : element.category,
           }
           return obj;
        })
        filteredData=myNeededData;
        displayProducts(myNeededData);
    })
    .catch((Error)=>{
        console.log(Error);
    })
}



function displayProducts(data){
    container.innerHTML=null;
    data.forEach((element) => {
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
        let bag= document.createElement("button")
        bag.innerText="add to bag";
        bag.addEventListener("click",()=>{
            alert("Added to the bag")
            let bagdata=JSON.parse(localStorage.getItem("cart")) || []
            bagdata.push(element)
            localStorage.setItem("cart",JSON.stringify(bagdata))
        })
        card.append(image_link,name,price,currency,category,bag)
        container.append(card);
    });
}
