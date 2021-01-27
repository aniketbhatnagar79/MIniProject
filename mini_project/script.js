
function call(){
    fetch('http://27.7.29.206:5000/getalldata')
    .then(res=>res.json())
.then(data =>{
    console.log(data);
    // document.getElementById("id1").innerText=data[0].id;

    
});

}
document.querySelector(".button").addEventListener("click",call);