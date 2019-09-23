const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification => {
  return admin.firestore().collection('notification')
  .add(notification)
  .then(doc => console.log('notification added', doc))
})

exports.orderCreated = functions.firestore
  .document('orders/{orderId}')
  .onCreate(doc => {
    const orders = doc.data();
    const notification = {
      content: 'order was placed on',
      thing: `${orders.title}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
    
  })