let lang_url = 'https://dictionary.yandex.net/api/v1/dicservice.json/getLangs?key=';
let lookup_url = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
let api_key = 'dict.1.1.20240118T134043Z.3266350688021b07.3f9c2c9dd3e7f897ab6fca3f73b4ce95dac0ed6f';
let results = document.getElementById("results");
let card = document.getElementById("card");
let user_word = document.getElementById('user-word');
let pos = document.getElementById('pos');
let sinonyms = document.getElementById("sinonyms");
// fetch(lang_url+api_key).then(r=>r.json()).then(data=>{
//     console.log(data);
// });
function getWord() {
    let text_inp = document.getElementById('text');
    fetch(lookup_url + api_key + "&lang=ru-ru&text=" + text_inp.value).then(res => res.json()).then(data2 => {
        console.log(data2);
        user_word.textContent += text_inp.value;
        pos.textContent += data2.def[0].pos;
        for(let i=0;i<data2.def[0].tr.length; i++){
            sinonyms.innerHTML += `<li><span id="sinonym">${data2.def[0].tr[i].text}</span> <span id="sinonym-pos">${data2.def[0].tr[i].pos}</span></li>`;
        }
    });
}