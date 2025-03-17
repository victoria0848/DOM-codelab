/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const redFigure = document.getElementById('redFigure');
const yellowFigure = document.getElementById('yellowFigure');

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
redFigure.style.backgroundColor = 'blue';
yellowFigure.style.backgroundColor = 'blue';


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
// 1. Find elementet med id="opgaveTwo"
const container = document.getElementById("opgaveTwo");

  // 2. Opret et <h2> element
  const heading = document.createElement("h2");
  heading.textContent = "Opgave 2.1 løsning";

  // 3. Opret et <p> element
  const paragraph = document.createElement("p");
  paragraph.textContent = "Jeg har løst opgave 2.1";

  // 4. Tilføj begge elementer inde i <div id="opgaveTwo">
  container.appendChild(heading);
  container.appendChild(paragraph);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
const purpleFigures = Array.from(document.getElementsByClassName("purpleFigures"));
    purpleFigures.map(element => {
      element.style.backgroundColor = "red";
    });
// // ELLER querySelectorAll
// const elementsArray = Array.from(document.querySelectorAll(".purpleFigures"));

// elementsArray.map(element => {
// element.style.backgroundColor = "red";
// });

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
// 1. Find alle elementer med klassen "purpleFigures"
const purpleElements = Array.from(document.getElementsByClassName("purpleFigures"));

// 2. Brug map() til at ændre teksten i det første <h3> element i hver purpleFigures
purpleElements.map(element => {
  // Ændrer teksten i første child (h3) til "RED"
  element.children[0].innerHTML = "RED";
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
 // 1. Hent elementet med id "opgaveFour", hvor vi vil indsætte vores DOM-elementer


 // 2. Opret et <article> element, som er semantisk korrekt for at beskrive tigeren
 const article = document.createElement("article");

 // 3. Opret et <header> tag for titlen
 const header = document.createElement("header");
 const h2 = document.createElement("h2");
 h2.innerHTML = myData.name;  // Sæt tigerenavn som tekst
 header.appendChild(h2);  // Tilføj overskriften til headeren

 // 4. Opret et <figure> tag til at indeholde tigerenbilledet
 const figure = document.createElement("figure");
 const img = document.createElement("img");
 img.src = myData.image;  // Sæt kildestien til billedet
 img.alt = "Billede af en tiger";  // Tilføj en beskrivelse af billedet
 figure.appendChild(img);  // Tilføj billedet til figure
 article.appendChild(figure);  // Tilføj figure til article

 // 5. Opret et <section> tag for beskrivelsen
 const section = document.createElement("section");
 const p = document.createElement("p");
 p.innerHTML = myData.description;  // Sæt beskrivelsen
 section.appendChild(p);  // Tilføj beskrivelsen til section
 article.appendChild(section);  // Tilføj section til article

 // 6. Tilføj header, figure og section til article
 article.appendChild(header);
 article.appendChild(figure);
 article.appendChild(section);

 // 7. Tilføj hele article-elementet til containeren
 container.appendChild(article);



