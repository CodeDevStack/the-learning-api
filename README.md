# The Learning API

You can use this app to generate mock data locally and practice you Web dev skills.

Generate random:

- Users
- Cashflow and expenses
- More to come!

## Getting started

Clone this repository and then install its dependencies

```bash
git clone https://github.com/CodeDevStack/thelearningapi.git
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
