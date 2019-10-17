
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
// /config/default.json
{
  "clientId": "YOUR CLIENT ID HERE",
  "clientSecret": "YOUR CLIENT SECRET HERE"
}
```

---

### Example usage

#### Example Request `#`1
```js
var user = ttv.getUser({login: 'shroud'});

user.then((result) => {
  console.log(result);
})
```
#### Example Response `#`1
```js
{ id: '37402112',
  login: 'shroud',
  display_name: 'shroud',
  type: '',
  broadcaster_type: 'partner',
  description: 'Enjoy these highlights/vods, and remember to follow!',
  profile_image_url:
   'https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af
6e4ea5318-profile_image-300x300.png',
  offline_image_url:
   'https://static-cdn.jtvnw.net/jtv_user_pictures/f328a514-0cda-4239-9f99-246
70b7ed7cb-channel_offline_image-1920x1080.png',
  view_count: 363235361 }
```

### Parameters
Reference https://dev.twitch.tv/docs/api/reference for list of required
and optional parameters for each call.
These parameters must be passed along as an object.

```js
ttv.getStreams({first: '3', game_id: '511224'});
```
---

### NewTwitchAPI Endpoints Included

|               Endpoint               | Included |            Endpoint           | Included |
|:------------------------------------:|:--------:|:-----------------------------:|:--------:|
| Get Extension Analytics              |          | Get Moderator Events          |          |
| Get Game Analytics                   |          | Get Streams                   |:heavy_check_mark:|
| Get Bits Leaderboard                 |          | Get Streams Metadata          |          |
| Get Extension Transactions           |          | Create Stream Marker          |          |
| Create Clip                          |          | Get Stream Markers            |          |
| Get Clips                            |:heavy_check_mark:| Get Broadcaster Subscriptions |          |
| Create Entitlement Grants Upload URL |          | Get All Stream Tags           |          |
| Get Code Status                      |          | Get Stream Tags               |:heavy_check_mark:|
| Redeem Code                          |          | Replace Stream Tags           |          |
| Get Top Games                        |:heavy_check_mark:| Get Users                     |:heavy_check_mark:|
| Get Games                            |:heavy_check_mark:| Get Users Follows             |          |
| Check AutoMod Status                 |          | Update User                   |          |
| Get Banned Events                    |          | Get User Extensions           |          |
| Get Banned Users                     |          | Get User Active Extensions    |          |
| Get Moderators                       |          | Update User Extensions        |          |
| Get Webhook Subscriptions            |          | Get Videos                    |          |
