let ondesc = document.querySelector('.js-description');
let onchar = document.querySelector('.js-characteristic')
let char = document.querySelector('.card__characteristic');
let description = document.querySelector('.card__description')
let color = document.querySelector('.color')

ondesc.onclick = function () {
    description.classList.remove('hidden')
    char.classList.add('hidden')
    ondesc.classList.remove('color')
    onchar.classList.add('color')
}
onchar.onclick = function () {
    description.classList.add('hidden')
    char.classList.remove('hidden')
    ondesc.classList.add('color')
    onchar.classList.remove('color')

}




