// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:8000',
  url_twitch_endpoint: 'http://localhost:4200'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



//login -> code -> request 1 -> access_token -> request 2 -> user + user_id
// request 1 = curl -X POST "https://id.twitch.tv/oauth2/token?client_id=xn3g12yzv87p0ohpnfsi6o1rh638dm&client_secret=j7pnk23rmd6o630xkhh6ompbkig5n6&code=5skm5jqx1vop8oqosctdofu7frhoka&grant_type=authorization_code&redirect_uri=http://localhost:4200"
//request 2 = curl -H "Accept: application/vnd.twitchtv.v5+json" -H "Authorization: OAuth 21dbohjpreycf4yjja6njgtg17kzsq" -X GET "https://api.twitch.tv/kraken?scope=user:read:email"

//curl -H "Accept: application/vnd.twitchtv.v5+json" -H "Client-ID: xn3g12yzv87p0ohpnfsi6o1rh638dm" -X GET "https://api.twitch.tv/kraken/channels/247653042"

//curl -H "Authorization: Bearer 21dbohjpreycf4yjja6njgtg17kzsq" -H "Client-ID: xn3g12yzv87p0ohpnfsi6o1rh638dm" "https://api.twitch.tv/helix/users"
