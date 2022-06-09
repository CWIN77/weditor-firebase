import firebase from "./config";

const db = firebase.firestore();

export const getData = async() => {
  db.collection('test').get().then((docs)=>{
    docs.forEach((doc)=>{
      console.log(doc.data())
    })
  })
} 