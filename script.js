let urlParams = new URLSearchParams(window.location.search);

let lastname = urlParams.get('namek');
let spanLastname = document.querySelector('#RecupNom');
spanLastname.innerText = lastname;

let Ages = urlParams.get('age');
let spanAge = document.querySelector('#RecupAge');
spanAge.innerText = Ages;

