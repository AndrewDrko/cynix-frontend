# 🎬 CYNIX

**CYNIX** es una aplicación frontend que simula una plataforma moderna de cine, donde los usuarios pueden explorar cartelera, seleccionar funciones, elegir asientos y generar tickets de compra.

Construida con **React + JavaScript + Vite**, CYNIX está diseñada para replicar el flujo real de una app de cine, cuidando tanto la **experiencia de usuario** como la **arquitectura del frontend**.

---

## 🔗 DEMO:

https://cynix-frontend-lime.vercel.app/

---

## 🔗 Backend

Este proyecto cuenta con un backend independiente que gestiona autenticación, usuarios, tickets y lógica de negocio:

👉 https://github.com/AndrewDrko/cynix-api

---

## ✨ Características

- 🎥 Visualización de cartelera de películas
- 🕒 Consulta de funciones disponibles por película
- 🪑 Selección interactiva de asientos
- 🎟️ Simulación de compra de boletos
- 📄 Generación de tickets ficticios
- 🔐 Registro e inicio de sesión de usuarios
- 👤 Endpoint `/me` con información personalizada:
  - historial de tickets
  - cines favoritos
  - datos del usuario
- ⚡ Navegación fluida y rápida

---

## 🛠️ Tecnologías usadas

- **React**
- **JavaScript (ES6+)**
- **Vite**
- **Redux**
- **Context API**
- **React Router**
- **Fetch API y Axios**
- **CSS / Responsive Design**
- **Git / GitHub**

---

## 🖼️ Vista de la aplicación

### 🎬 Cartelera

![Movies](./src/screenshots/movies.gif)

### 🪑 / 🎟️ Funciones, selección de asientos y ticket generado

![Showtimes, Seats and Tickets](./src/screenshots/showtimes-seats.gif)

### 👤 Panel de usuario (/me)

![Profile](./src/screenshots/user.gif)

### 🔒 Login y Signup (Autenticación)

![Authentication](./src/screenshots/authentication.gif)

---

## 🧱 Arquitectura

El proyecto está estructurado para ser escalable y mantenible:

- Manejo global de estado con **Redux + Context API**
- Separación clara por vistas y componentes
- Routing dinámico con **React Router**
- Consumo de datos mediante **Fetch API y Axios**
- Flujo de autenticación simulado

---

## 🎯 Objetivo del proyecto

CYNIX no es solo una UI, es una simulación completa de un sistema real de cine, enfocada en:

- Replicar flujos reales de usuario
- Demostrar manejo de estado complejo
- Construir interfaces interactivas
- Practicar arquitectura frontend escalable
