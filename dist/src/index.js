import { CanvasLocal } from './canvasLocal.js';
// Obtener la referencia al elemento canvas y su contexto
const canvas = document.getElementById('circlechart');
const ctx = canvas.getContext('2d');
// Crear una instancia de la clase CanvasLocal
const canvasLocal = new CanvasLocal(ctx, canvas);
// Variables para almacenar los valores de los campos del formulario
let palabra;
let angulo;
let positionX;
let positionY;
let tamaño;
// Variables para el arrastre del canvas
let isDragging = false;
let startMouseX = 0;
let startMouseY = 0;
let startCanvasX = 0;
let startCanvasY = 0;
// Array para almacenar las posiciones de las estrellas en la estela
let starTrail = [];
// Longitud máxima de la estela
const maxTrailLength = 50;
// Obtener el contenedor de las coordenadas
const coordinatesElement = document.getElementById('coordinates-container');
// Obtener los elementos de input
const palabraInput = document.getElementById('palabra');
const anguloInput = document.getElementById('angulo');
const positionXInput = document.getElementById('positionX');
const positionYInput = document.getElementById('positionY');
const tamañoInput = document.getElementById('tamaño');
canvas.addEventListener('click', (e) => {
    e.preventDefault();
    // Obtener los valores de los campos del formulario
    palabra = palabraInput.value;
    angulo = parseInt(anguloInput.value);
    positionX = parseInt(positionXInput.value);
    positionY = parseInt(positionYInput.value);
    tamaño = parseInt(tamañoInput.value);
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    // Realizar transformaciones en el contexto
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate((angulo * Math.PI) / 180);
    ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
    // Pintar el objeto en el canvas utilizando la instancia de CanvasLocal
    canvasLocal.paint(palabra, positionX, positionY, tamaño);
    ctx.restore();
});
canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    startCanvasX = canvas.offsetLeft;
    startCanvasY = canvas.offsetTop;
});
canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startMouseX;
        const deltaY = e.clientY - startMouseY;
        const newCanvasX = startCanvasX + deltaX;
        const newCanvasY = startCanvasY + deltaY;
        // Actualizar la posición del canvas
        canvas.style.left = newCanvasX + 'px';
        canvas.style.top = newCanvasY + 'px';
        // Actualizar las coordenadas basadas en la posición del cursor
        positionX = e.clientX;
        positionY = e.clientY;
        // Agregar la posición actual al array de la estela
        starTrail.push({ x: e.clientX, y: e.clientY });
        // Limitar la longitud de la estela
        if (starTrail.length > maxTrailLength) {
            starTrail.shift();
        }
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Dibujar la estela de estrellas
        for (let i = 0; i < starTrail.length; i++) {
            const { x, y } = starTrail[i];
            drawStar(x, y); // Dibujar estrella en la posición de la estela
        }
        // Dibujar las estrellas actuales utilizando la instancia de CanvasLocal
        canvasLocal.paint(palabra, positionX, positionY, tamaño);
    }
});
canvas.addEventListener('mouseup', (e) => {
    isDragging = false;
    starTrail = []; // Restablecer la estela de estrellas al soltar el mouse
});
canvas.addEventListener('mouseover', () => {
    coordinatesElement.style.display = 'block';
});
canvas.addEventListener('mouseout', () => {
    coordinatesElement.style.display = 'none';
});
canvas.addEventListener('mousemove', (e) => {
    coordinatesElement.style.left = `${e.clientX + 10}px`;
    coordinatesElement.style.top = `${e.clientY + 10}px`;
    coordinatesElement.textContent = `(${positionX}, ${positionY})`;
});
// Escuchar el evento keydown en los elementos de input
palabraInput.addEventListener('keydown', handleKeyDown);
anguloInput.addEventListener('keydown', handleKeyDown);
positionXInput.addEventListener('keydown', handleKeyDown);
positionYInput.addEventListener('keydown', handleKeyDown);
tamañoInput.addEventListener('keydown', handleKeyDown);
// Función para dibujar una estrella en la posición especificada
function drawStar(x, y) {
    const radius = 10; // Ajusta el tamaño de la estrella aquí
    const spikes = 5;
    const rotation = (Math.PI / 2) * 3;
    const xCenter = x;
    const yCenter = y;
    ctx.beginPath();
    ctx.moveTo(xCenter + radius, yCenter);
    for (let i = 0; i < spikes; i++) {
        const x = xCenter + Math.cos(rotation + (i * Math.PI) / spikes) * radius;
        const y = yCenter + Math.sin(rotation + (i * Math.PI) / spikes) * radius;
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
}
// Función para manejar el evento keydown en los elementos de input
function handleKeyDown(e) {
    if (e.key === 'Enter') {
        // Obtener los valores de los campos del formulario
        palabra = palabraInput.value;
        angulo = parseInt(anguloInput.value);
        positionX = parseInt(positionXInput.value);
        positionY = parseInt(positionYInput.value);
        tamaño = parseInt(tamañoInput.value);
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        // Realizar transformaciones en el contexto
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate((angulo * Math.PI) / 180);
        ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
        // Pintar el objeto en el canvas utilizando la instancia de CanvasLocal
        canvasLocal.paint(palabra, positionX, positionY, tamaño);
        ctx.restore();
    }
}
