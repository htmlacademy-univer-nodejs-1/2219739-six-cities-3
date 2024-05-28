# Предложения

## Получить список предложений

```http
GET http://localhost:5000/offers HTTP/1.1
Content-Type: application/json


###

## Создать предложение

POST http://localhost:5000/offers HTTP/1.1
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlLmpvaG5zb25AZXhhbXBsZS5jb20iLCJuYW1lIjoiQWxpY2UgSm9obnNvbiIsImlhdCI6MTY0ODA1NzI2MSwiZXhwIjoxNjQ4MTEzNjYxfQ.mV-5vxf0bYqigjLtbGvHnK2_6wvEvEMqZioYcixXQoc

{
  "title": "Wonderful apartment in Paris",
  "description": "Luxurious apartment in the heart of Paris",
  "city": {
    "name": "Paris",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "publicationDate": "2023-09-20T08:00:00.000Z",
  "previewImage": "apartment_preview.jpg",
  "photos": ["interior_photo1.jpg", "interior_photo2.jpg"],
  "isPremium": true,
  "isFavorite": true,
  "rating": 5,
  "type": "apartment",
  "rooms": 4,
  "maxGuests": 6,
  "rentCost": 200,
  "amenities": ['Towels'],
  "host": "5f2d31b9e0f6a8c7f2086a1b"
}


###

## Список комментариев к объявлению

GET http://localhost:5000/offers/6c74a85a4bb91427d7b2f72e/comments HTTP/1.1

###

## Получить одно предложение

GET http://localhost:5000/offers/6c74a85a4bb91427d7b2f72e HTTP/1.1
Content-Type: application/json

###