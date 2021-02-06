const xhr = new XMLHttpRequest()

xhr.open("GET",  "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const JSONData = xhr.responseText
        const data = JSON.parse (JSONData)
        console.log (data)
    }
}

function showData (arr){
    for (let i= 0; i<arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent= arr[i].name
        document.body.appendChild(h1)
    }
}