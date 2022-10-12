// Function used to show data in cards
function showData(...args){
    // Selector is used to decide what element to target 
    let selector= (args[0]==1)? document.querySelector(".default"): this;
    // If the selector already have a active status then go out the function
    if(selector.classList.contains("active")){
        return false
    }
    // Remove active status form others dom elements
    if(document.querySelector(".active")){
        document.querySelector(".active").classList.remove("active")
    }
   selector.classList.add("active")
    let range = selector.id;
    let cards = document.querySelectorAll(".card.c-data")
    let currentHours= document.querySelectorAll(".hours-main span");
    let previousHours= document.querySelectorAll(".hours-last .hours");
    cards.forEach((element)=>{
        
        element.classList.remove("dataShow")
        // Used to wait animation effect of .dataShow then remove the latter
        element.offsetWidth 
       })
   cards.forEach((element)=>{
    // add .dataShow in order to get an animation effect when data changes
    element.classList.add("dataShow")
    
   })
//    Fetching cards data from data.json file
    fetch("../data/data.json")
    .then((data)=>data.json())
    .then((result)=>{
        result.forEach((element,index)=>{
            currentHours[index].innerHTML = element.timeframes[range].current;
            previousHours[index].innerHTML = element.timeframes[range].previous;
           
        })

    })
   
}

    // document.querySelector(".default").addEventListener("DOMContentLoaded",()=>{
    //     alert(55)
    // })
// Call show data function in order to put default data when page changes or reload 
showData(1)
// Adding click event with showData function to all .time-range a tags
let timeRange = document.querySelectorAll(".time-range a");
timeRange.forEach((element)=>{
    element.addEventListener("click", showData)
})
