// 輸入 database 網址

var admin = require("firebase-admin");

var serviceAccount = require("./fir-test-fa2a6-firebase-adminsdk-grpp1-a58bb26db5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-test-fa2a6.firebaseio.com"
});


module.exports = admin.database();