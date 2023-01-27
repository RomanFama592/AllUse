# AllUse: **To Do** and **MORE**

## _Proyecto en equipo usando Vue y más tecnologias en un sistema de micro servicios._

<div align="center" style="padding: 5%; transform: scale(1.5, 1.5);"><img src=https://img.shields.io/badge/Contributiones-Bienvenidas-brightgreen.svg></div>

# Indice:

- _[Requisitos](#requisitos)_
- _[Inicializar micro-services](#inicializar-micro-services)_
  - _[Instalar las dependencias de todos los micro-services](#instalar-las-dependencias-de-todos-los-micro-services)_
  - _[Iniciar todos los micro-services](#iniciar-todos-los-micro-services)_
- _[Inicializar app-web ***(frontend)***](#inicializar-app-web-frontend)_
  - _[Instalar las dependencias de app-web](#instalar-las-dependencias-de-app-web)_
  - _[Iniciar app-web](#iniciar-app-web)_
- _[Contribuidores](#contribuidores)_

<br>

# Requisitos:

- ### **Node.js** v18.12

<br>

# Inicializar micro-services:

<U>

## _Instalar las dependencias de todos los micro-services:_

</U>

_entrar en la carpeta "micro-services" a través de una terminal y ejecutar este comando:_

```powershell
node install_dependency.js "el comando que usas para instalar paquetes de Node.js"

#Ejemplo:
node install_dependency.js "pnpm i"
```

<br>

<U>

## _Iniciar todos los micro-services:_

</U>

_siguiendo desde el paso anterior ejecutar este otro comando:_

```powershell
node open_all_services.js
```

<br>

# Inicializar app-web **_(Frontend)_**:

<U>

## _Instalar las dependencias de app-web:_

</U>

_simplemente entrar a "app-web" y ejecutar el comando para instalar paquetes de un proyecto de su manejador de paquetes favorito._

<br>

<U>

## _Iniciar app-web:_

</U>

_siguiendo desde el paso anterior puede iniciar con los siguientes comandos:_

```powershell
#desplegar el servidor para desarrollo.
npm run dev
```

```powershell
#desplegar el servidor para produccion.
npm start
```

<br>

_ambos comandos aceptan la bandera `--host` para ver la pagina en tu red local._

<br>

# Contribuidores:

- **_RomanFama592:_** _Project Manager y Backend developer._
- **_manialCode:_** _Frontend developer._

<a href="#alluse-to-do-and-more" style="position: absolute; right:5%">🔝 Volver arriba del todo.</a>

<style>
    *{
        font-family: Georgia;
    }
</style>
