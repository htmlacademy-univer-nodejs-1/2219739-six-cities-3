# Комментарии
## Создать комментарий

```http
POST http://localhost:5000/comments HTTP/1.1
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlLmpvaG5zb25AZXhhbXBsZS5jb20iLCJuYW1lIjoiQWxpY2UgSm9obnNvbiIsImlhdCI6MTY0ODA1NzI2MSwiZXhwIjoxNjQ4MTEzNjYxfQ.mV-5vxf0bYqigjLtbGvHnK2_6wvEvEMqZioYcixXQoc

{
  "comment": "Отличное предложение, всем рекомендую!",
  "rating": 5,
  "offerId": "6c74a85a4bb91427d7b2f72e",
  "user": "6c74a85a4bb91427d7b2f72e"
}


###
