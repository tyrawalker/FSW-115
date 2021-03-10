//First API (todos) GET request
todosGet=()=>{
axios.get("https://api.vschool.io/twalker/todo")
.then(res=>{
    todosDisplay(res.data)
})
.catch(err=>console.log (err))
}
todosGet()


//Display Buildout
const todosDisplay =(todos)=>{
    console.log(todos)
    let flexBox = document.getElementById("flex-box")
    

    todos.forEach(todo =>{
        console.log(todo)

        let task = document.createElement("div")

        let title= document.createElement('h2')
        title.textContent= `Title: ${todo.title}`
        task.appendChild(title)

        let description= document.createElement('p')
        description.textContent= `Description: ${todo.description}`
        task.appendChild(description)

        let price= document.createElement('p')
        price.textContent= `Price: $${todo.price}`
        task.appendChild(price)

        let Id= document.createElement('h6')
        Id.textContent= `Id: ${todo._id}`
        task.appendChild(Id)

        flexBox.appendChild(task)
        task.classList.add("taskers")

        //Second API (Chuck Norris Jokes) GET request
        norrisGet=()=>{
            axios.get("https://api.chucknorris.io/jokes/random")
            .then(res=>{
                norrisDisplay(res.data)
            })
            .catch(err=>console.log (err))
            }
            norrisGet()
        
            const norrisDisplay= (jokes)=>{
                console.log(jokes.value)

                let value= document.createElement('p')
                value.textContent=`Motivation: ${jokes.value}`
                task.appendChild(value)
            }
            
        //line break
        let br= document.createElement("br")
        task.appendChild(br)
        
        //delete button
        let deleteButton = document.createElement('button')
         deleteButton.addEventListener('click', deleteTodo)
         deleteButton.id= Id.textContent
         deleteButton.textContent= "Delete"
         task.appendChild(deleteButton)
        
        //completed button
        let completeButton = document.createElement('button')
        completeButton.addEventListener('click', updateTodo)
        completeButton.id= Id.textContent

        let checkComplete = ""
        todo.completed === true ? checkComplete = "Mark Incomplete": checkComplete = "Mark Complete"
        completeButton.value= todo.completed
        completeButton.textContent= checkComplete
        task.appendChild(completeButton)
    }) 
}

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
     


