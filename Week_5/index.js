axios.get ("https://api.vschool.io/twalker/todo")
.then (response => {
    for (let i=0; i< response.data.length; i++){
        const h1 = document.createElement ("h1")
        h1.textContent.response.data[i].title
        document.body.appendChild(h1)
    }
})

.catch (error => console.log (error))