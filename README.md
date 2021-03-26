# Ricky and Morty

Desarrollo una página web con **React**, consistente en un listado de personajes de Rick and Morty que podemos filtrar por el nombre del personaje. Clickando en la tarjeta del personaje deseado podemos acceder a la tarjeta de detalle de éste con información más extendida.

## Código

### Estructura
**src**


1. components
   -    App.js -> Desarrollado en componentes
   -    CharacterCard.js -> Desarrollado en componentes
   -    CharacterDetail.js -> Desarrollado en componentes
   -    CharacterList.js -> Desarrollado en componentes
   -    ilters.js -> Desarrollado en componentes
   -    FilterByName.js -> Desarrollado en componentes
   -    FilterByOrder.js -> Desarrollado en componentes
   -    FilterByStatus.js -> Desarrollado en componentes
   -    Footer.js -> Contenido del Footer
   -    Header.js -> Contenido del Header
  
2. Images
   -    services
   -       getDataFromApi.js
   -    styleSheets
   -       CharacterCard.js
   -       CardDetail.scss
   -       CharacterList.scss
   -       Filters.scss
   -       Footer.scss
   -       Header.scss
   -       index.scs
   -       Button.scss
   -    index.js

**Stylesheets**

Se han creado diez hojas de estilos utilizando **SASS**, correspondiendo con los cinco componentes anteriormente listados y conteniendo todos los estilos de éstos (Excepto en el caso de App.js, que no tiene estilos propios).

La maquetación de este ejercicio es libre y para llevarla a cabo se ha tomado en consideración la paleta de colores y diseño del logo dado .

En el CardDetail.js, se muestra la especie y el estado de un personaje por escrito, se ha utilizado un **sistema de grid** para mostrar la lista de resultados de personajes, ejercicio responsive en mobile first, con breakpoint a tablet (768px) y desktop (1200px).

**Services**

La carpeta Services contiene al módulo encargado de realizar la petición a la **API**. Posteriormente este servicio es importado a App.js, donde se guardan en el estado estos resultados.

### Arranque del proyecto:
npm install: Para instalar las dependencias
install

npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
start

npm run docs: Para publicar el proyecto a producción
docs

Hecho por @marinadelgado88
