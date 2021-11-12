const ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
const ReloadlyCore = require("@reloadly/reloadly.core");
const express = require("express");

let app = express()
app.use(express.json())

app.get('/token', async (req, res) => {
    let api = new ReloadlyAuthentication.AuthenticationApi("rzcLzmMmxZ919IVPgQlr6MDxiJRkEyjA", "7qpcVxQZ44-DDe1PBoZkM4b7WGnUBY-600Tkaol88NOrPn8yoeojMgQALtFGuDC", ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
    let operation = api.clientCredentials();
    let request = operation.getAccessToken();
    let response = await request.execute();
    console.log(response)
    res.send(`<html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">Top-up App</h1>
        <p class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            We've received your access token
      </p>
      </div>
    </body>
    </html>`)
})

app.listen(3000)