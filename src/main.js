import { miFuncionsita } from "./data.js";
import otroObjeto from "./data.js";
import personajes from "./data/lol/lol.js";

miFuncionsita()

console.log('otroObjeto.a: ', otroObjeto.a)
console.log('otroObjeto["b"]: ', otroObjeto['b'])

console.log('personakes: ', personajes)


const AatroxPartye = personajes.data.Aatrox.partype
console.log('AatroxPartye: ', AatroxPartye)

const unH1 = document.createElement('h1')
unH1.textContent = AatroxPartye
document.body.append(unH1)


for (let characterName in personajes.data) {
    const partType = personajes.data[characterName].partype

    const unH1 = document.createElement('h1')
    unH1.textContent = partType
    document.body.append(partType, document.createElement('br'))
}


console.log(example, data);
