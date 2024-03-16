console.log("hello");

const orderFood = document.getElementById("orderFood");

orderFood.addEventListener("click", function(){
 const selectItems = [];
 const checkBoxes = document.getElementsByName("foodItem");
 
 checkBoxes.forEach(function(checkbox){
    if(checkbox.checked){
        selectItems.push(checkbox.value);
    }
 });
 if(selectItems.length === 0){
    alert("Please Select atleast one item");
    return;
 }

 orderFood.disabled = true; 


const foodImage = document.getElementById("foodImage");
const orderIdElement = document.getElementById("orderId");
const orderIdValueElement = document.getElementById("orderIdValue");

orderIdElement.style.display = 'none';
foodImage.style.display = 'none';

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
    }, getRandomTime())
});
promise.then(function(){
    const orderId = getRandomOrderId();
    orderIdValueElement.textContent = orderId;
    orderIdElement.style.display = "block";

    const foodToshow = selectItems[Math.floor(Math.random() * selectItems.length)];

    switch(foodToshow){
        case 'Burger':
            foodImage.src= "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            break;
        case 'Dosa':
            foodImage.src = "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8="
            break;
        case 'Juice':
            foodImage.src = "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             break;
             case 'South-Indian-Thali':
            foodImage.src = "https://media.istockphoto.com/id/1205482399/photo/traditional-south-indian-snacks-dosa-idli-medu-wada-on-banana-leaf.jpg?s=1024x1024&w=is&k=20&c=k9CI5mHQQf4prypiHXK_PgyR7jZHAcmaUj2cvJX7LzA="
            break;
         default:
                foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    }
    foodImage.style.display = 'block';
        orderFood.disabled = false;
});
});


function getRandomTime(){
    return Math.floor(Math.random() * 3000) + 200 
}

function getRandomOrderId(){
    return Math.floor(Math.random() * 100) + 100;  
}
