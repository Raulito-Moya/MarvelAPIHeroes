(()=>{var e={458:()=>{!async function(){let e=await async function(){return await fetch("https://gateway.marvel.com/v1/public/comics/98445?limit=100&ts=1&apikey=15a44bbc665f23487ee7c99819510473&hash=fb2fa27cdf6b33ecfca9a99f456d09e8",{mode:"cors"}).then((e=>e.json())).then((e=>{var t;return null==e||null===(t=e.data)||void 0===t?void 0:t.results[0]})).catch((e=>{console.log(e)}))}();if(e){document.getElementsByClassName("background")[0].setAttribute("style","background-image: url("+e.thumbnail.path+"."+e.thumbnail.extension+"); background-repeat: no-repeat; background-size: cover; height: 100%;   filter: brightness(0.5)"),document.getElementsByClassName("imageContainer")[0].innerHTML=`<img class="image" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="">`,document.getElementsByClassName("title")[0].innerHTML=`<h1>${e.title}</h1>`,document.getElementsByClassName("descriptionText")[0].innerHTML=`${e.description}`;const t=e.creators.items;let n=document.getElementsByClassName("add");n[0].innerHTML=`${t[0].name}`,n[1].innerHTML=`${t[1].name}`,n[2].innerHTML=`${t[3].name}`,n[3].innerHTML=`${t[1].name}`}}()}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(458);(0,e.execute)()})()})();