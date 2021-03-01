axios.get ("https://api.vschool.io/twalker/todo")
.then (response => {
    console.log (response)
    for (let i=0; i< response.data.length; i++){
        console.log (response)
        const h1 = document.createElement("h1")
        h1.textContent= response.data[i].title
        document.body.appendChild(h1)
    }
})

.catch (error => console.log (error))