# 💌 Sorpresa Romántica - Página Web Interactiva

Una página web hermosa e interactiva para hacer una pregunta especial con animaciones, confeti y fotos volando de fondo.

## 📋 Contenido

- `index.html` - Estructura HTML
- `style.css` - Estilos y animaciones
- `script.js` - Lógica interactiva

## 📸 Cómo Agregar Tus Fotos

Hay varias formas de agregar tus fotos:

### Opción 1: Usar imágenes locales (Recomendado)

1. **Coloca tus fotos en la misma carpeta que los archivos**
   - Ejemplo: `Sorpresa/foto1.jpg`, `Sorpresa/foto2.jpg`, etc.

2. **Edita el archivo `index.html`** y reemplaza las URLs:
   ```html
   <div class="photo photo-1" style="background-image: url('foto1.jpg');">
   <div class="photo photo-2" style="background-image: url('foto2.jpg');">
   <div class="photo photo-3" style="background-image: url('foto3.jpg');">
   <div class="photo photo-4" style="background-image: url('foto4.jpg');">
   <div class="photo photo-5" style="background-image: url('foto5.jpg');">
   ```

### Opción 2: Usar URLs de imágenes online
Puedes usar URLs directas:
```html
<div class="photo photo-1" style="background-image: url('https://ejemplo.com/foto.jpg');">
```

### Opción 3: Usar Google Drive
1. Sube tus fotos a Google Drive
2. Haz click derecho en la foto > Obtener enlace
3. Copia el ID de la foto
4. Usa este formato:
   ```html
   <div class="photo photo-1" style="background-image: url('https://drive.google.com/uc?id=TU_ID_AQUI');">
   ```

## 🚀 Cómo Usar

1. **Abre el archivo `index.html` en tu navegador**
   - O usa Live Server en VS Code

2. **Flujo interactivo**:
   - Haz click en el corazón para abrir el sobre
   - Lee el primer mensaje
   - Presiona "Continuar"
   - Lee la pregunta principal
   - Elige "Sí" o "No"
   - Si dice "Sí" → ¡Confeti! ✨

## 📝 Mensajes Personalizados

Puedes editar los mensajes en `index.html`:

- **Primer mensaje**: Busca `messageSection1`
- **Segundo mensaje**: Busca `messageSection2`
- **Mensaje de éxito**: Busca `successMessage`
- **Mensaje de rechazo**: Busca `rejectMessage`

## 🎨 Características

✅ Sobre interactivo con solapa que se abre
✅ Animación de fotos volando de fondo
✅ Corazón pulsante
✅ Flujo de múltiples pasos
✅ Confeti interactivo al decir "Sí"
✅ Diseño responsive para móviles
✅ Mensajes personalizables

## 🎯 Personalización Fácil

### Cambiar colores
En `style.css`, busca `#ff69b4` (rosa) y reemplaza por tu color favorito

### Cambiar texto de botones
En `index.html`, busca los botones y edita el texto

### Agregar más fotos
Duplica una línea de foto y cambia el número y la URL

## 📱 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No necesita servidor web

## 💡 Tips

- Para fotos locales, guárdalas en la misma carpeta que el HTML
- Las fotos deben ser cuadradas para mejor efecto visual
- Usa fotos de alta calidad para mejor presentación
- Puedes cambiar el tamaño de las fotos editando `width` y `height` en `.photo`

¡Buena suerte con tu sorpresa! 💕

## Ejemplo Completo de Fotos

```html
<div class="photo photo-1" style="background-image: url('nosotros.jpg');"></div>
<div class="photo photo-2" style="background-image: url('playa.jpg');"></div>
<div class="photo photo-3" style="background-image: url('cine.jpg');"></div>
<div class="photo photo-4" style="background-image: url('viaje.jpg');"></div>
<div class="photo photo-5" style="background-image: url('momentos.jpg');"></div>
```

