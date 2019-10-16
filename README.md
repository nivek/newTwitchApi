
# NewTwitchAPI Wrapper




## How to use

Download or copy the newTwitchApi.js file to where you wish to use it.
Make sure you have the axios and config node modules installed in your project.

```bash
$ npm install axios config
```

To utilize the config module create a folder named config with a file named default.json.

default.json should contain your clientID and clientSecret so you don't have to manually enter it each time.

```js
{
  "clientId": "YOUR CLIENT ID HERE",
  "clientSecret": "YOUR CLIENT SECRET HERE"
}
```

---

Example call to getUser endpoint:
```js
var user = ttv.getUser({login: 'shroud'});

user.then((result) => {
  console.log(result);
})
```
