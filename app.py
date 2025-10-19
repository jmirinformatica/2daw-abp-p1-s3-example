#
# Aquest fitxer el busca automaticament la comanda flask run
#
from my_app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
