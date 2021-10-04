import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBj8RFdimllCHfPCUi7tUd7cBBS6x49jcg",
  authDomain: "test-task-d425a.firebaseapp.com",
  projectId: "test-task-d425a",
  storageBucket: "test-task-d425a.appspot.com",
  messagingSenderId: "847394857179",
  appId: "1:847394857179:web:6c41f17c5581c08b196cfe",
};
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  export  {db};