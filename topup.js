const ReloadlyTopup = require('@reloadly/reloadly.airtime');
const ReloadlyCore = require('@reloadly/reloadly.core');
const express = require('express');

let app = express();
app.use(express.json());

app.get('/topup', async (req, res) => {
    let api = new ReloadlyTopup.AirtimeApi("rzcLzmMmxZ919IVPgQlr6MDxiJRkEyjA", "7qpcVxQZ44-DDe1PBoZkM4b7WGnUBY-600Tkaol88NOrPn8yoeojMgQALtFGuDC", null, ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
    let operation;
    try {
        operation = await api.topups();
    }
    catch (err) {
        res.send(err)
    }
    let request = operation.send(new ReloadlyTopup.PhoneTopupRequest(20, 341, new ReloadlyTopup.Phone('08147658720', 'NG'), true, new ReloadlyTopup.Phone('08147658722', 'NG')));
    try {
        let topup = await request.execute();
        console.log(topup)
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
                Your top-up details are Transaction ID: ${topup.transactionId} <br> Delivered Amount: ${topup.deliveredAmount} ${topup.deliveredAmountCurrencyCode} <br> Transaction Date: ${topup.transactionDate}
          </p>
          </div>
        </body>
        </html>`);
    }
    catch (err) {
        res.send(err);
    }
})

app.listen(3000)



















// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const ApiCredentials_1 = require("../ApiCredentials");
// const Airtime_1 = require("../../node-sdk-airtime/src/Airtime");
// const Core_1 = require("../../node-sdk-core/src/Core");
// const express = require("express");
// const Airtime_2 = require("../../node-sdk-airtime/src/Airtime");
// const router = express.Router();
// router.get('/', async (req, res) => {
//     var api = new Airtime_1.AirtimeApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, null, Core_1.Environment.SANDBOX);
//     try {
//         var operation = await api.topups();
//     }
//     catch (err) {
//         res.send(err);
//     }
//     var request = operation.send(new Airtime_2.PhoneTopupRequest(10, 537, new Airtime_2.Phone("+447772235236", "GB"), true, new Airtime_2.Phone("+447772235235", "GB")));
//     try {
//         var result = await request.execute();
//         res.send(result);
//     }
//     catch (err) {
//         res.send(err);
//     }
// });
// exports.default = router;
//# sourceMappingURL=topup.js.map