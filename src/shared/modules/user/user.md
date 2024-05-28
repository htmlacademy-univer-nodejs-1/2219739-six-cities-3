# Пользователи

## Создать нового пользователя

```http
POST http://localhost:5000/users/register HTTP/1.1
Content-Type: application/json

{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "type": "regular",
  "password": "P@ssw0rd123"
}


## Авторизовать пользователя

POST http://localhost:5000/users/login HTTP/1.1
Content-Type: application/json

{
  "email": "alice.johnson@example.com",
  "password": "P@ssw0rd123"
}

###

## Проверить авторизован ли пользователь

GET http://localhost:5000/users/login HTTP/1.1
Content-Type: application/json

{
  "email": "alice.johnson@example.com",
  "password": "P@ssw0rd123"
}

###

## Отправить изображение

POST http://localhost:5000/users/5f2d31b9e0f6a8c7f2086a1b/avatar HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="avatar"; filename="profile_pic.png"
Content-Type: image/png

< C:\Users\Alice\Desktop\profile_pic.png
------WebKitFormBoundary7MA4YWxkTrZu0gW--


##

###

## Проверить токен пользователя
GET http://localhost:5000/users/login HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlLmpvaG5zb25AZXhhbXBsZS5jb20iLCJuYW1lIjoiQWxpY2UgSm9obnNvbiIsImlhdCI6MTY0ODA1NzI2MSwiZXhwIjoxNjQ4MTEzNjYxfQ.mV-5vxf0bYqigjLtbGvHnK2_6wvEvEMqZioYcixXQoc


###