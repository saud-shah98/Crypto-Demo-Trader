
const functions = require("firebase-functions");

const admin = require('firebase-admin')

admin.initializeApp();

const db = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onCall((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.setInitialBalance = functions.auth.user().onCreate(async (user) => {
   console.log(user.uid)
   await db.collection('users').doc(user.uid).set({balance:0,email:user.email})
});

exports.getBalance = functions.https.onCall((request,response) => {
  console.log(user.uid)
  console.log(request)
  // const ref = db.collection('users').doc(request.data)
  response.send("Hello from Firebase!");
  response.sned(request)
});
