//Déclaration des variables et création des balises a,article,h3,p
let a = document.createElement("a");
a.setAttribute("href", "./product.html?id=42");
let article = document.createElement("article");
let img = document.createElement("img");
let h3 = document.createElement("h3");
h3.setAttribute("class", "productName");
let p = document.createElement("p");
p.setAttribute("class", "productDescription");

//Affichage des balises "a et article" à la suite de l'id items
var element = document.getElementById("items");
element.appendChild(a);
element.appendChild(article);

//Affichage des balises "img, h3, p" dans la balise "article"
[img, h3, p ].forEach(child => article.appendChild(child));

//Requête de l'API

 let product = fetch("http://localhost:3000/api/products/")
        .then(function(result) {
            if (result.ok) {
            return result.json();
            }
        })
        /*.then(function(value){
            console.log(value);
        })*/
        .then(function(data){
            /*img.src = data[0].imageUrl;
            img.alt = data[0].altTxt;
            h3.innerText = data[0].name;
            p.innerText = data[0].description;*/
            for (var i = 0; i < data.length; i++) {
                img.src = data[i].imageUrl;
                img.alt = data[i].altTxt;
                h3.innerText = data[i].name;
                p.innerText = data[i].description;
            }
            //console.log(data);
        })
        .catch(function(err) {
            // Une erreur est survenue
        });

console.log(product);
    










      
      
