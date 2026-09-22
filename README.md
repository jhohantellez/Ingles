# Present Perfect Lab

Aplicación web interactiva construida con **Flask** para enseñar el
**Presente Perfecto Simple** y el **Presente Perfecto Continuo** a
estudiantes universitarios de inglés. Diseño en modo oscuro, minimalista
y bilingüe (inglés / español), con un quiz interactivo de retroalimentación
inmediata.

## Estructura del proyecto

```
english_app/
├── app.py                     # Servidor Flask y rutas
├── requirements.txt           # Dependencias
├── README.md
├── static/
│   ├── css/
│   │   └── style.css          # Estilos (modo oscuro, único archivo)
│   ├── js/
│   │   └── quiz.js            # Lógica del quiz interactivo
│   └── assets/
│       ├── LEEME.txt          # Instrucciones para tus archivos multimedia
│       ├── video1.mp4         # ⚠️ Debes agregar tus propios archivos
│       ├── video2.mp4
│       ├── video3.mp4
│       ├── image1.jpg
│       └── image2.jpg
└── templates/
    ├── base.html               # Plantilla base + navbar
    ├── simple.html              # Página 1: Presente Perfecto Simple
    ├── continuous.html          # Página 2: Presente Perfecto Continuo
    ├── comparison.html          # Página 3: Comparación
    └── quiz.html                # Página 4: Parcial (quiz)
```

## Requisitos previos

- Python 3.9 o superior instalado.
- Visual Studio Code (recomendado, con la extensión de Python).

## Instalación paso a paso

1. **Descarga o clona** la carpeta `english_app` y ábrela en Visual Studio Code
   (`Archivo > Abrir carpeta...`).

2. **Crea un entorno virtual** (recomendado) desde la terminal integrada de VS Code:

   ```bash
   python -m venv venv
   ```

3. **Activa el entorno virtual**:

   - En Windows (PowerShell):
     ```bash
     venv\Scripts\activate
     ```
   - En macOS / Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Instala las dependencias**:

   ```bash
   pip install -r requirements.txt
   ```

5. **Agrega tus archivos multimedia** dentro de `static/assets/` siguiendo
   las instrucciones de `static/assets/LEEME.txt` (necesitas 3 videos y
   2 imágenes; se reutilizan entre páginas, ver detalle abajo).

6. **Ejecuta la aplicación**:

   ```bash
   python app.py
   ```

7. Abre tu navegador en:

   ```
   http://127.0.0.1:5000/
   ```

## Mapa de rutas

| Ruta            | Página                          |
|-----------------|----------------------------------|
| `/`             | Presente Perfecto Simple (inicio)|
| `/simple`       | Presente Perfecto Simple         |
| `/continuous`   | Presente Perfecto Continuo       |
| `/comparison`   | Comparación entre ambos tiempos  |
| `/quiz`         | Parcial (quiz interactivo)       |

## Dónde reemplazar tus archivos multimedia

Busca los comentarios `<!-- 🎬 REEMPLAZA... -->` y `<!-- 🖼️ REEMPLAZA... -->`
dentro de `simple.html`, `continuous.html` y `comparison.html`. Cada uno
indica exactamente qué archivo debe ir en `static/assets/`:

- **Simple** (`simple.html`): `video1.mp4`, `video2.mp4`, `video3.mp4`,
  `image1.jpg`, `image2.jpg` (5 bloques).
- **Continuo** (`continuous.html`): mismos 5 nombres de archivo,
  reutilizados con contenido distinto (5 bloques).
- **Comparación** (`comparison.html`): `video1.mp4`, `image1.jpg`,
  `image2.jpg` (3 bloques).

Si prefieres usar nombres de archivo diferentes, simplemente edita el
atributo `src` dentro de la etiqueta `<video>` o `<img>` correspondiente
en el HTML.

## Personalización rápida

- **Colores y tipografía**: todo el sistema de diseño vive en
  `static/css/style.css`, dentro del bloque `:root` (sección "TOKENS").
  Cada página tiene su propio color de acento (`--page-accent`) definido
  por clase de `body` (`.page-simple`, `.page-continuous`, etc.).
- **Preguntas del quiz**: edita el arreglo `QUIZ_QUESTIONS` en
  `static/js/quiz.js`. Cada pregunta tiene `question`, `options` (4
  opciones), `correctIndex` (índice de la respuesta correcta, empezando
  en 0) y `explanation` (el "porqué" que se muestra tras responder).
- **Contenido teórico**: cada fila de lección en `simple.html`,
  `continuous.html` y `comparison.html` incluye texto en inglés
  (`.text-en`) y en español (`.text-es`); edítalos libremente.

## Notas técnicas

- El servidor corre en modo `debug=True` para desarrollo (recarga
  automática al guardar cambios). Desactívalo antes de desplegar en
  producción.
- No se usa base de datos: todo el contenido está en las plantillas HTML
  y en `quiz.js`, así que no se requiere configuración adicional.
