let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slajd");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2500); 
}

function funk1(){
    document.getElementById("zvuk").src = "barca.mp3";

    zvuk.play();
}

function UcitajS(ulaz){
    document.getElementById("slika").src=ulaz;

}
function opis(x) {

  var name=["Domaći dres <br><br> CENA:100e <br><br>"," Gostujući dres <br><br> CENA:100e <br><br>","Treći dres <br><br> CENA:100e <br><br>","Dres Pedri cena:100e <br><br>","Trenerka kluba<br><br> cena:180e <br><br>"];
  var da= document.getElementById('naziv');
  da.innerHTML=name[x];
}

let visitCount = localStorage.getItem("visitCount");

   
        if (visitCount === null) {
            visitCount = 0;
        }
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem("visitCount", visitCount);
        document.getElementById("visit-count").innerText = `Ova stranica je posjećena ${visitCount} puta.`;