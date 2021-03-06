//get request and initial build out
axios.get ("https://api.vschool.io/twalker/todo")
.then (response => {
    
    for (let i=0; i< response.data.length; i++){

        const div = document.createElement("div")
        document.getElementById('flex-box').appendChild(div)

        //title
        let title = document.createElement('h1')
        title.textContent= response.data[i].title
        div.appendChild(title)

        //description
        let description = document.createElement('h3')
        description.textContent= `Description:${response.data[i].description}`
        div.appendChild(description)

        //price
        let price = document.createElement('h3')
        price.textContent= `Price:${response.data[i].price}`
        div.appendChild(price)

        //image
        let image= document.createElement("img")
        image.alt= "image"
        image.src= response.data[i].imgUrl
        image.style.maxWidth= "200px"
        div.appendChild(image)

        //id
        let todoId = document.createElement("h3")
        todoId.textContent= response.data[i]._id
        

        //line break
        let br= document.createElement("br")
        div.appendChild(br)


        //delete button
        let deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', deleteTodo)
        deleteButton.id= todoId.textContent
        deleteButton.textContent= "Delete"
        div.appendChild(deleteButton)
        
        //completed button
        let completeButton = document.createElement('button')
        completeButton.addEventListener('click', updateTodo)
        completeButton.id= todoId.textContent
               
        let checkComplete = ""
        response.data[i].completed === true ? checkComplete = "Mark Incomplete": checkComplete = "Mark Complete"
        completeButton.value= response.data[i].completed
        completeButton.textContent= checkComplete
        div.appendChild(completeButton)
        
        //css styling ref
        div.classList.add("todo-box")
        
    }
})
.catch (error => console.log (error))


//post request
let form = document.getElementById('todoForm')


 const postTodo = (e) =>{
    e.preventDefault()
    let todoTitle = document.getElementById('todoTitle').value
    let todoDescription = document.getElementById('todoDescription').value
    let todoPrice = document.getElementById('todoPrice').value
    let todoImage = document.getElementById('todoImage').value
    let todoCompleted = document.getElementById('todoCompleted').checked
 
 let newTodo= {
    title: todoTitle,
    description:todoDescription,
    price:todoPrice,
    image:todoImage,
    completed:todoCompleted
 } 


 axios.post("https://api.vschool.io/twalker/todo", newTodo)
 .then (response => {
     location.reload()
 })
.catch (error => console.log (error))}

//event listeners
form.addEventListener('submit', postTodo)

//delete request 
const deleteTodo = (e)=> {
 
    axios.delete(`https://api.vschool.io/twalker/todo/${e.target.id}`)
    .then (response => {
    location.reload()
})
.catch (error => console.log (error))

}

//put request

updateTodo= (e)=>{
 changeComplete = null
 e.target.value === "true" ? changeComplete = false : changeComplete= true
  
let updatedTodo= {
    completed:changeComplete
}

 axios.put(`https://api.vschool.io/twalker/todo/${e.target.id}`, updatedTodo)
    .then (response => {
    location.reload()
})
.catch (error => console.log (error))
}
  


