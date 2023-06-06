import { db } from "../Services/firebaseconfig";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
 
  const drugcollectionRef = collection(db, "drugs");
  
  class DrugDataService {
    addDrugs = (newdrug) => {
      return addDoc(drugcollectionRef, newdrug);
    };
  
    updateDrug = (id, updatedDrug) => {
      const drugDoc = doc(db, "drugs", id);
      return updateDoc(drugDoc, updatedDrug);
    };
  
    deleteDrug = (id) => {
      const drugDoc = doc(db, "drugs", id);
      return deleteDoc(drugDoc);
    };
  
    getAllDrugs = () => {
      return getDocs(drugcollectionRef);
    };
  
    getDrug = (id) => {
      const drugDoc = doc(db, "drugs", id);
      return getDoc(drugDoc);
    };
  }

  export default new DrugDataService();
  