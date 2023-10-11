// import { addDoc, collection, getDocs } from "firebase/firestore";
// import { useState } from "react";
// import { auth, db } from "../config/firebase";

// // AddMovie.js
// const AddMovie = () => {
//   const [phoneList, setPhoneList] = useState<{ id: string }[]>([]);
//   const [newPhoneName, setNewPhoneName] = useState("");
//   const [newPhonePrice, setNewPhonePrice] = useState(0);
//   const [isNewPhoneAvailable, setIsNewPhoneAvailable] = useState(false);

//   const phonesCollectionRef = collection(db, "mobile phone");
//   const getPhoneList = async () => {
//     try {
//       const data = await getDocs(phonesCollectionRef);
//       const filteredData = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//         name: doc.data().name,
//       }));
//       setPhoneList(filteredData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getPhoneList();
//   }, []);

//   const onSubmitPhone = async () => {
//     try {
//       await addDoc(phonesCollectionRef, {
//         name: newPhoneName,
//         price: newPhonePrice,
//         available: isNewPhoneAvailable,
//         userId: auth?.currentUser?.uid,
//       });
//       getPhoneList();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <input
//         placeholder="Movie title..."
//         onChange={(e) => setNewMovieTitle(e.target.value)}
//       />
//       <input
//         placeholder="Release Date..."
//         type="number"
//         onChange={(e) => setNewReleaseDate(Number(e.target.value))}
//       />
//       <input
//         type="checkbox"
//         checked={isNewMovieOscar}
//         onChange={(e) => setIsNewMovieOscar(e.target.checked)}
//       />
//       <label> Received an Oscar</label>
//       <button onClick={onSubmitMovie}> Submit Movie</button>
//     </div>
//   );
// };

// export default AddMovie;
