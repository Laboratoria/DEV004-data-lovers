
import ghibli from './data/ghibli/ghibli.js';



const principal = document.getElementById('cont-princ');

const films = new Array()

films[0] = ['https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg','Castle in the Sky'], 
films[1] = ['https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg','My Neighbor Totoro'],
films[2] = ['https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg','Kikis Delivery Service'],
films[3] = ['https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg','Grave of the Fireflies'],
films[4] = ['https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg','Only Yesterday'],
films[5] = ['https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg','Porco Rosso'], 
films[6]= ['https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Pom_Poko.jpg','Pom Poko'],
films[7]= ['https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Whisper_of_the_Heart.jpg','Whisper of the Heart'],
films[8] = ['https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Princess_Mononoke.jpg','Princess Mononoke'],
films[9] = ['https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbors_the_Yamadas.jpg','My Neighbors the Yamadas'],
films[10] = ['https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png','Spirited Away'], 
films[11] = ['https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg','The Cat Returns'],
films[12] = ['https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg','Howls Moving Castle'],
films[13] = ['https://static.wikia.nocookie.net/studio-ghibli/images/0/09/%C3%96v%C3%A4rlden.jpg','Tales from Earthsea'],
films[14] = ['https://static.wikia.nocookie.net/studio-ghibli/images/5/50/Ponyo_on_the_Cliff_by_the_Sea.jpg','Ponyo on the Cliff by the Sea'],
films[15] = ['https://static.wikia.nocookie.net/studio-ghibli/images/4/46/The_Borrower_Arrietty.jpg','The Secret World of Arrietty'], 
films[16] = ['https://static.wikia.nocookie.net/studio-ghibli/images/b/bb/From_Up_on_Poppy_Hill.jpg','From Up on Poppy Hill'],
films[17] = ['https://static.wikia.nocookie.net/studio-ghibli/images/2/2d/The_Wind_Rises.jpg','The Wind Rises'],
films[18] = ['https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg','The Tale of the Princess Kaguya'],
films[19] = ['https://static.wikia.nocookie.net/studio-ghibli/images/7/7a/When_Marnie_Was_There.jpg','When Marnie Was There']; 



if (principal) {
  
  for (let i=0; i<films.length; i++) {
    
    const creaDiv = document.createElement('div');
    const creaimg = document.createElement('img');
    creaDiv.setAttribute('class','photo');
    creaDiv.innerHTML = films[i][1];
    creaimg.setAttribute('src',films[i][0])

    principal.appendChild(creaDiv);
    principal.appendChild(creaimg);
  }


}




console.log (ghibli);
