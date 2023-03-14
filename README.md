# Readme

## Índice

* [1. Resumen](#1-Resumen)
* [2. funcionalidades](#2-Funcionalidades)
* [3. Tecnologias utilizadas](#3-Tecnologias-utilizadas)
* [4. Funciones utilizadas](#4-Funciones-utilizadas)
* [5. Como utilizar](#5-como-utilizar)
* [6. Pruebas](#6-Pruebas)
* [7. Historias de Usuario](#7-Historias de usuario)
* [8. Prototipo de baja y alta fidelidad](#8-Prototipo-de-baja-y-alta-fidelidad)

***

## 1. Resumen

Este proyecto es una página web que permite visualizar y manipular un conjunto de datos sobre los 251 Pokémon de la región de Kanto y Johto, junto con sus respectivas estadísticas usadas en el juego Pokémon GO.
La interfaz de usuario de la página web es altamente intuitiva y fácil de navegar, lo que facilitará el acceso a la información de los Pokemones por parte de los usuarios.
Para acceder a la aplicación debe dirigirse a: (página de github desplegada).


## 2. Funcionalidades:
* Visualización de datos de Pokémon.
* Filtrado de datos por tipo de Pokémon, estadísticas y nombre de Pokémon.
* Ordenamiento de datos por nombre y estadísticas.
* Cálculo de la media de los 10 pokémon más fuertes.

## 3. Tecnologías utilizadas:
* HTML.
* CSS.
* JavaScript.

## 4. Funciones utilizadas:

Las funciones utilizadas en este proyecto son: 
* filter(): permite filtrar los datos de los pokémon según su tipo.
* sort(): ordena los datos en orden alfabético ascendente y descendente.
* top10(): compara la fuerza de cada pokémon para determinar los 10 más fuertes.

## 5. Cómo utilizar:

1. Clonar el repositorio en su computadora.
2. Abrir el archivo index.html en un navegador web.
3. Explorar la página y visualizar los datos de Pokémon.
4. Utilizar las opciones de filtrado y ordenamiento para encontrar los datos deseados.
5. Hacer clic en los botones de cálculo para ver las estadísticas agregadas.

## 6. Pruebas:

Con el fin de verificar la calidad del código, se llevaron a cabo pruebas utilizando una herramienta de análisis de código denominada "Eslint". Los resultados de estas pruebas no reportaron ningún tipo de error al finalizar el desarrollo. Además, el proyecto ha sido sometido a pruebas unitarias para evaluar la funcionalidad de las funciones de filtrado, comparación y cálculo. 
Las pruebas unitarias cubren un mínimo del 70% de statements, functions, lines y branches.

## 7. Historias de usuario:

## Historia de usuario 1:

Yo como usuario nuevo, quiero poder ver la lista de todos los pokemones para conocer el poder de los pokemones.

### `Criterios de aceptación:`

* Que sea visible  la lista de pokemones.

* Que el diseño sea igual al boceto.

* Que cuando pase el mouse la ficha se gire y se vea la informacion del pokemon.

### `Definición de terminado:`

* Que debe pasar correctamente los test.

* Que sea responsive.

* Dos usuarios nos dieron el feedback
-Prototipo de baja fidelidad:
- Investigar como exportar la data de pokemon
- (Ordenar) Se ve la lista de pokemones en una tabla de cuatro filas.
-Diseño en CSS: fondo, colores, etc.
-Que sea responsive.

## Historia de usuario 2:

Yo como usuario nuevo, quiero poder ver la lista de pokemones y poder filtrarlo por tipo de cada pokemon.

### `Criterios de aceptación:`

* Que sea visible  la lista de pokemones.

* Que sea responsive

* Que tenga botones de filtro por tipo de cada pokemon.

* Prototipo de alta fidelidad.

### `Definición de terminado:`

* Que debe pasar correctamente los test.

* Que dos usuarios nos den feedback.

* Que este desplegado en git hub.

- Investigar cómo agregar un filtro a nuestra base de datos.
- Implementar el filtro por tipo de cada pokemon
-  Prototipo de alta fidelidad: boceto de balsemiq
-  
## Historia de usuario 3:

Yo como usuario nuevo, quiero poder visualizar la lista de pokemones, asi como tambirn tener dos tipos de filtros por tipo de pokemon y por orden de la lista en forma ascendente y descendente.

### `Criterios de aceptación:`

* Que sea visible la lista de pokemones y que se pueda tener el filtro de ordenar de ascendente y descenden.

### `Definición de terminado:`

* Que debe pasar correctamente los test.

* Que este desplegado en git hub.

- Crear función que permita ordenar los nombres de los pokemones desde la A-Z y desde la Z-A.
- Ordenar el código, mejorar estilos de la página.
-  Escribir una prueba unitaria para la función filtro y ordenamiento.

## Historia de usuario 4:

Yo como usuario al navegar la pagina debe permitirnos mostrarnos los 10 pokemones mas fuertes.

### `Criterios de aceptación:`

* Que sea visible la lista de pokemones.
* Crear una funcion de calculo basica para sacar el promedio de los pokemones mas fuertes.
* Se debe mostrar unicamente 10 pokemones mas fuertes.

### `Definición de terminado:`

* Que debe pasar correctamente los test.

* Que este desplegado en git hub.

* Debe pasar los test unitarios al 100%

*Readme redactado y terminado.

- Crear un cálculo que nos permita mostrar los 10 mejores pokemones en fuerza.
- Hacer un calculo utilizando un bucle que recorra todo el array y/o objeto.
-  Darle la funcionalidad al código del cálculo.
-  Mostrar al usuario los 10 pokemones más fuertes.
- correr los test unitarios.

## 8. Diseño de interfaz del usuario

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

## 8. Prototipo de baja y alta fidelidad:
