console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=>{
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

    const breedURL = 'https://dog.ceo/api/breeds/list/all'

    fetch(imgUrl).then(res=>res.json()).then(data=>displayImages(data))

    fetch(breedURL).then(res=>res.json()).then(breedlist=>addBreeds(breedlist))

    document.getElementById('breed-dropdown').addEventListener('change', handleChange)

});
// console.log(dogs)


// challenge 1: display random images to dom for each in array of given URL.
function displayImages(dogs){
 const imgContainer = document.getElementById('dog-image-container')   
    dogs.message.forEach(dog=>{
        const img=document.createElement('img');
        img.src=dog
        img.style.margin = '30px';
        img.style.display = 'block';
        img.style.width = '200px';
        img.style.height = '200px';
        imgContainer.appendChild(img)
        });
}

function addBreeds(breeds){
    const breedContainer = document.querySelector('#dog-breeds')
    for(let element in breeds.message){

        let list=document.createElement('li')
        // console.log(element)
        list.textContent = element
        list.className = 'breeds';
        breedContainer.appendChild(list)
    
    }

}

function changeColor(event){
    event.target.style.color = 'red';

    
}

function handleChange(e){
    const container = document.getElementById('dog-breeds')
    const breeds= Array.from(container.querySelectorAll('li'))
    for(const breed of breeds){
        if(breed.textContent.charAt(0)===e.target.value){
            breed.style.display = 'list-item'
        }else{
            breed.style.display = 'none'
        }
    }
}
