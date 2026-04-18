FROM python:3.12-alpine3.22

RUN apk add --no-cache curl # curl is for healthchecks

WORKDIR /app

# Caching for build-speed-up
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]