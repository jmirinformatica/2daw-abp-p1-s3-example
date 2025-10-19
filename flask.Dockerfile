# Partim de la imatge oficial: https://hub.docker.com/_/python
FROM python:3.11-bookworm

# Definim el directori de treball
WORKDIR /flask_app

# Definim les variables d'entorn
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Instal·lem les dependències
RUN pip install --upgrade pip
COPY ./requirements.txt /flask_app/requirements.txt
RUN pip install -r requirements.txt
# Requeriment extra per a desplegar amb Gunicorn
RUN pip install -U gunicorn