const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Récupération des images de flèches (via leur classe)
const flecheDroite = document.querySelector(".arrow_right")
const flecheGauche = document.querySelector(".arrow_left")
//indice de la slide actuelle
let compteur = 0 
// Récupération de l'image de la bannière (via sa classe)
const sourceImage = document.querySelector(".banner-img")
// Récupération des bullet points (via leurs classe)
const bulletPoints = document.querySelectorAll(".dot")
console.log(bulletPoints)
// Fonction pour mettre en évidence le premier point
function highlightFirstPoint() {
    bulletPoints[0].classList.add("dot_selected");
}
// Appel de la fonction pour mettre en évidence le premier point au chargement de la page
highlightFirstPoint();

//Fonction pour changer l'image, le texte et le point actif. 
function nextSlide() {
	// Supprimer la classe du point actuel
	bulletPoints[compteur].classList.remove("dot_selected");
	//Changement de slide en prenant en compte son indice et le nombre d'objets du tableau
	compteur = (compteur + 1) % slides.length;
	//Mise à jour de la source de l'image de la banniere via image dans le tableau slides
	sourceImage.setAttribute("src", slides[compteur].image);
	//MAJ du texte compris dans l'id banner via tagLine dans le tableau slides
	document.querySelector("#banner p").innerHTML = slides[compteur].tagLine;
	//Ajouter la classe au point actuel
	bulletPoints[compteur].classList.add("dot_selected");
}
//Fonction pour changer l'image, le texte et le point actif. 
function previousSlide() {
// Supprimer la classe du point actuel
	bulletPoints[compteur].classList.remove("dot_selected"); 
	//Changement de slide en prenant en compte son indice et le nombre d'objets du tableau
    compteur = (compteur - 1 + slides.length) % slides.length;
	//Mise à jour de la source de l'image de la banniere via image dans le tableau slides
    sourceImage.setAttribute("src", slides[compteur].image);
	//MAJ du texte compris dans l'id banner via tagLine dans le tableau slides
    document.querySelector("#banner p").innerHTML = slides[compteur].tagLine;
	// Mettre en évidence le point correspondant à la diapositive précédente
	bulletPoints[compteur].classList.add("dot_selected"); 
}


flecheDroite.addEventListener("click", function(){
	console.log(flecheDroite) // le clic est repéré sur la flche droite
	nextSlide(); // l'image change au clic
})

flecheGauche.addEventListener("click", function(){
	console.log(flecheGauche)
	previousSlide();
}
)



 

