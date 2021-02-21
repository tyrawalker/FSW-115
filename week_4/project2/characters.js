

document.getElementById("char").addEventListener("onclick",function (){

    const getCharacters= ()=> {
        axios.get("https://rickandmortyapi.com/api/character")
        .then (res => {
            renderGetCharacters (res.data)
        })
        .catch (err => console.log (err))
    }
    
    const renderGetCharacters= (data => {
        const characterContainer = document.getElementById("characters")
    
        for (let i=0; i<data.length; i++){
            let character = document.createElement("h1")
            character.textContent = data[i].name
            characterContainer.appendChild(character)
        }
    })
})

