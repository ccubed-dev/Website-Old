import * as functions from "firebase-functions";
import { getFirestore, useFirestoreEmulator } from "firebase/firestore";

// const db = getFirestore();
// useFirestoreEmulator(db, 'localhost', 8080);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
