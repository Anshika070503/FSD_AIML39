function fetchdata(){
const response = fetch("https://dummyjson.com/recipes");
response.then(data=>{
    console.log(data);
    data.json().then((res) => {
        console.log(res.recipes[0].name);
    })
})
.catch(error => console.log(error))
.finally(()=>console.log("hi, finally closed all the resources"))
}