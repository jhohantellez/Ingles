"""
Aplicación Flask - Present Perfect Lab
Plataforma interactiva para enseñar Presente Perfecto Simple y Continuo
a estudiantes universitarios.
"""

from flask import Flask, render_template


app = Flask(__name__)

# -----------------------------------------------------------------------
# RUTAS PRINCIPALES
# -----------------------------------------------------------------------

@app.route("/")
def index():
    """Redirige conceptualmente a la primera lección (Presente Perfecto Simple)."""
    return render_template("simple.html", active_page="simple")


@app.route("/simple")
def simple():
    """Página 1: Presente Perfecto Simple (Present Perfect Simple)."""
    return render_template("simple.html", active_page="simple")


@app.route("/continuous")
def continuous():
    """Página 2: Presente Perfecto Continuo (Present Perfect Continuous)."""
    return render_template("continuous.html", active_page="continuous")


@app.route("/comparison")
def comparison():
    """Página 3: Comparación entre ambos tiempos verbales."""
    return render_template("comparison.html", active_page="comparison")


@app.route("/quiz")
def quiz():
    """Página 4: Parcial - Quiz interactivo de 10 preguntas."""
    return render_template("quiz.html", active_page="quiz")


# -----------------------------------------------------------------------
# EJECUCIÓN
# -----------------------------------------------------------------------
@app.route("/test-static")
def test_static():
    import os

    return {
        "static_folder": app.static_folder,
        "static_exists": os.path.exists(app.static_folder),
        "assets_exists": os.path.exists(os.path.join(app.static_folder, "assets")),
        "image_exists": os.path.exists(
            os.path.join(app.static_folder, "assets", "images.png")
        ),
        "video_exists": os.path.exists(
            os.path.join(app.static_folder, "assets", "ladelosplatos.mp4")
        )
    }

if __name__ == "__main__":
    # debug=True habilita recarga automática y mensajes de error detallados.
    # Desactívalo si despliegas esto en producción.
    app.run(debug=True, host="127.0.0.1", port=5000)
