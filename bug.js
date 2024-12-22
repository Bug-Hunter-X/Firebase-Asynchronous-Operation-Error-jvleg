The Firebase SDK may throw an error if you try to access a property of a document snapshot before the snapshot has been fully populated.  This is common when using asynchronous operations and promises. For example, if you call `.get()` on a document reference and then immediately try to access a field, the field might not yet be available.

```javascript
db.collection('users').doc('someId').get().then(doc => {
  console.log(doc.data().name); //This might throw an error if the data hasn't loaded yet.
});
```