

document.getElementById("char").addEventListener("click",function (){
    const getCharacters= ()=> {
        axios.get("https://rickandmortyapi.com/api/character")
        .then (res => {
            renderGetCharacters (res.data.results)
        })
        .catch (err => console.log (err))
    }
    getCharacters()

    const renderGetCharacters= (data => {
        const characterContainer = document.getElementById("characters")
    
        for (let i=0; i<data.length; i++){
            let character = document.createElement("li")
            character.textContent = data[i].name
            characterContainer.appendChild(character)
        }
    })
})

