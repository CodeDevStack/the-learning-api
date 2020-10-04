# The Learning API

You can use this app to generate mock data locally and practice you Web dev skills.

Generate random:

- Users
- Cashflow and expenses
- Websocket stock ticker
- More to come!

## Getting started

Clone this repository and then install its dependencies

```bash
git clone https://github.com/CodeDevStack/the-learning-api.git
cd thelearningapi
npm i

npm run start
```

### Users

```javascript
axios.get("http://localhost:3000/rest/users?amount=1");
```

Returns

```json
{
  "result": [
    {
      "name": "Navy",
      "lastName": "Rivera",
      "username": "NavyRivera",
      "email": "navyrivera@thelearningapi.com",
      "picture": "https://thispersondoesnotexist.com/image",
      "id": "8be97367-c674-4a9f-9857-eb74baa2963a"
    }
  ]
}
```

### Cashflow and expenses

```javascript
axios.get("http://localhost:3000/rest/cashflow?amount=2");
```

Returns

```json
{
  "result": [
    {
      "amount": "-24.51",
      "concept": "Homeowners or renters insurance",
      "date": "2020-10-01",
      "id": "b20bd34c-2888-4591-9d57-42759534fe83"
    },
    {
      "amount": "439.53",
      "concept": "Salary",
      "date": "2020-10-02",
      "id": "6421269c-4e6f-49e1-8b3e-3ab99b189e76"
    }
  ]
}
```

### Websocket stock ticker

```javascript
const socket = io("http://localhost:3000");
socket.on("connect", function () {
  socket.emit("stock", { symbols: ["APPL", "TSLA"] });
});
socket.on("stock", function (data) {
  console.log("event", data);
});
```

Returns events

```json
[
  {
    "price": "100.00",
    "symbol": "APPL",
    "timestamp": 1601773818230
  },
  {
    "price": "99.36",
    "symbol": "TSLA",
    "timestamp": 1601773818230
  }
]
```
