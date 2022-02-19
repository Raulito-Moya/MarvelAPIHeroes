async function  execute() {

    let hero = await  getheroes()

    async function  getheroes() {
      
       let result = await fetch('http://gateway.marvel.com/v1/public/comics/98445?limit=100&ts=1&apikey=15a44bbc665f23487ee7c99819510473&hash=fb2fa27cdf6b33ecfca9a99f456d09e8',{ mode: 'cors'})
       .then(res => {
         return   res.json()
       }).then( data => {
         console.log(data);
         return data?.data?.results[0]
       }).catch(error => {
           console.log(error)
       })
   
     /*  let creators = await fetch(' http://gateway.marvel.com/v1/public/comics/98445/creators&ts=1&apikey=15a44bbc665f23487ee7c99819510473&hash=fb2fa27cdf6b33ecfca9a99f456d09e8',{ mode: 'no-cors'})
       .then(res => {
         return   res.json()
       }).then( data => {
         console.log(data);
         return data?.data?.results[0]
       }).catch(error => {
           console.log(error)
       })
      console.log(creators);*/

    return  result
   
   }

 console.log(hero);

 let container = document.getElementsByClassName('background')[0]
 container.setAttribute('style', 'background-image: url('+hero.thumbnail.path+'.'+hero.thumbnail.extension+'); background-repeat: no-repeat; background-size: cover; height: 100%;   filter: brightness(0.5)')

 //console.log(container)

 let image = document.getElementsByClassName('imageContainer')[0]
 image.innerHTML = `<img class="image" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="">`

 let title = document.getElementsByClassName('title')[0]
  title.innerHTML = `<h1>${hero.title}</h1>`

  let description = document.getElementsByClassName('descriptionText')[0]
  description.innerHTML = `${hero.description}`
  
  const creators = hero.creators.items

  let items = document.getElementsByClassName('add')
  items[0].innerHTML = `${creators[0].name}`
  items[1].innerHTML = `${creators[1].name}`
  items[2].innerHTML = `${creators[3].name}`
  items[3].innerHTML = `${creators[1].name}`
}

execute()






