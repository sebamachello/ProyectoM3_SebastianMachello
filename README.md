# Chat Deadpool

Chat Deadpool es una Single Page Application (SPA) desarrollada como Proyecto Integrador del Módulo 3 de la carrera de Desarrollo Full Stack de Henry.

La aplicación permite al usuario mantener una conversación con Deadpool utilizando inteligencia artificial. Las respuestas son con la ayuda de IA , utilizando el modelo "gemini-3.6-flash".

Personaje elegido: Deadpool
Deadpool es un personaje caracterizado por su humor sarcástico, personalidad irreverente y tendencia a romper la cuarta pared. En el chat, la IA busca mantener ese estilo mediante un system prompt con respuestas breves y humorísticas.

## Funcionalidades

* Navegación SPA sin recargar la página.
* Vistas Home, Chat y About.
* Routing mediante History API.
* Navegación mediante los botones Back y Forward del navegador.
* Chat conectado con Google Gemini.
* Historial de conversación durante la sesión.
* Scroll automático en el área de mensajes.
* Estado de carga mientras se espera la respuesta.
* Manejo de errores de la API.
* Diseño responsive y mobile-first.
* API key protegida mediante una Vercel Serverless Function.
* Tests unitarios realizados con Vitest.
* Mocking de `fetch` para simular respuestas sin realizar llamadas reales a la API.

## Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* History API
* Fetch API
* Google Gemini API
* Vercel Serverless Functions
* Vitest
* Git y GitHub

## Estructura del proyecto

```text
chat-deadpool/
│
├── api/
│   └── functions.js
│
├── src/
│   ├── assets/
│   ├── about.js
│   ├── app.js
│   ├── chat.js
│   ├── home.js
│   ├── index.html
│   ├── navigation.js
│   ├── notFound.js
│   ├── router.js
│   ├── styles.css
│   └── utils.js
│
├── tests/
│   ├── app.test.js
│   └── utils.test.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## Instalación y ejecución local

1. Clonar el repositorio.

2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto.

4. Agregar la variable de entorno:

```env
GEMINI_API_KEY=tu_api_key
```

5. Ejecutar el proyecto localmente con Vercel:

```bash
vercel dev
```

6. Abrir en el navegador la dirección indicada por Vercel.

> El archivo `.env` no debe subirse al repositorio porque contiene información sensible.

## Variables de entorno

La aplicación utiliza la siguiente variable:

```env
GEMINI_API_KEY=
```

El repositorio incluye un archivo `.env.example` como referencia, pero la API key real debe configurarse localmente o mediante las Environment Variables de Vercel.

La API key nunca es utilizada directamente desde el frontend.

## Tests

Los tests unitarios fueron realizados utilizando Vitest.

Para ejecutarlos:

```bash
npm test
```

El proyecto incluye tests para validar mensajes y tests utilizando mocking para simular el comportamiento de `fetch` sin realizar peticiones reales a Gemini.

## Deploy

La aplicación está desplegada utilizando Vercel.

**URL pública:**
https://chat-deadpool.vercel.app

## Despliegue en Vercel

1. Subir el proyecto a un repositorio de GitHub.
2. Importar el repositorio desde Vercel.
3. Configurar `GEMINI_API_KEY` en las Environment Variables del proyecto.
4. Seleccionar Production como entorno.
5. Realizar el deployment.
6. Verificar que las rutas y la Serverless Function funcionen correctamente.

## Uso de Inteligencia Artificial durante el desarrollo

Durante el desarrollo del proyecto utilicé herramientas de inteligencia artificial como apoyo para comprender conceptos, detectar errores y analizar posibles soluciones.

Algunos de los prompts utilizados estuvieron relacionados con:

* Comprender el funcionamiento del routing de una SPA utilizando History API.
* Entender el uso de `pushState` y el evento `popstate`.
* Analizar errores durante la integración con Google Gemini.
* Comprender el funcionamiento de `fetch`, `async/await` y el manejo de errores con `try/catch`.
* Comprender y aplicar mocking en tests realizados con Vitest.
* Revisar problemas relacionados con el diseño responsive.
* Analizar el funcionamiento del historial de mensajes durante la navegación entre vistas.

Las respuestas generadas fueron utilizadas como guía durante el desarrollo. Antes de implementar los cambios, se buscó comprender el funcionamiento de cada solución y adaptarla a la estructura y los conocimientos utilizados durante el módulo.

Entre las decisiones tomadas a partir de este proceso se encuentran mantener una estructura simple de módulos, separar el routing de la lógica del chat, mantener el historial de mensajes en memoria durante la sesión y utilizar una Serverless Function para evitar exponer la API key en el frontend.

## Autor

Sebastián Machello

Proyecto Integrador — Módulo 3
Desarrollo Full Stack — Henry
