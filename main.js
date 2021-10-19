//console.log('Hello World!');
/*
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
    window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
    window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
if (!window.indexedDB) {
    alert("Sorry!Your browser doesn't support IndexedDB");
}
var request = window.indexedDB.open("notepad",1)
var database ='';
request.onerror = function(event) {

console.log(event.target.errorCode);

};

request.onsuccess = function(event) {

    database=request.result;

};

request.onupgradeneeded = function(event) {

    var db = event.target.result;

    var objectStore = db.createObjectStore("notes", { keyPath:  "id",autoIncrement:true});

};
*/


let menu= document.getElementById("menu");
let links = document.querySelectorAll(".link")
let tp=2.4
let ancoras=document.querySelector(".links")
let posicao=0 ;
let passo= 0.1;		
//let as= nav.querySelectorAll("a")
menu.addEventListener("click", ()=>{
		if(menu.classList.contains("fechado")){
			for(let i=0;i<links.length;i++){
				links[i].style.left =tp +"cm"
				tp= tp + 2.4
			}
			menu.classList.add("aberto")
			menu.classList.remove("fechado")
			posicao = 0;
			passo= 0.1;
		}else if(menu.classList.contains("aberto")){
			for(let i= 0;i< links.length;i++){
				posicao = posicao + passo;
				links[i].style.left = posicao.toFixed(1)+"cm";	
			}
			menu.classList.add("fechado")
			menu.classList.remove("aberto")
			tp =2.4
		}
		/*
	 for(let i=0;i<links.length;i++){
		 links[i].style.top =tp + i+"cm"
		 tp=tp+ 0.75
	 }
	 */
})