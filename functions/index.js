
const functions = require("firebase-functions");

const admin = require('firebase-admin')

admin.initializeApp();

const db = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.setInitialBalance = functions.auth.user().onCreate(async (user) => {
   const userRef =  db.collection('users').doc(user.uid)

   userRef.get().then((doc) => {
    if (doc.exists) {
        let {difficulty} = doc.data();
        switch (difficulty) {
                          case "seasoned":
                            startBalance = 10000;
                            break;
                          case "ironman":
                            startBalance = 500;
                            break;
                          default:
                            startBalance = 50000;
                            break;
                        }
    userRef.update({balance:startBalance});
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

});

