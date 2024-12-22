The solution is to handle the asynchronous nature of Firebase operations using promises or async/await.  Always ensure that you access the data within the callback function of `.then()` or after `await`.

```javascript
//Using Promises
db.collection('users').doc('someId').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data().name);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});


//Using async/await
async function getUserData(userId) {
  try {
    const docRef = db.collection('users').doc(userId);
    const doc = await docRef.get();
    if (doc.exists) {
      return doc.data().name;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null; 
  }
}

getUserData('someId').then(name => {
  console.log(name)
})
```