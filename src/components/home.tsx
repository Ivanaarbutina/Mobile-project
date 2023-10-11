import Login from "./login";
import { auth, db } from "./../config/firebase";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const Home = () => {
  const [phoneList, setPhoneList] = useState<
    { id: string; name: string; price: number; available: boolean }[]
  >([]);

  // New Phone States
  const [newPhoneName, setNewPhoneName] = useState("");
  const [newPhonePrice, setNewPhonePrice] = useState(0);
  const [isNewPhoneAvailable, setIsNewPhoneAvailable] = useState(false);
  // Update State
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState(0);

  const phonesCollectionRef = collection(db, "mobile phone");

  const getPhoneList = async () => {
    try {
      const data = await getDocs(phonesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        available: doc.data().available,
      }));
      console.log(filteredData);
      setPhoneList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPhoneList();
  }, []);

  const onSubmitPhone = async () => {
    try {
      await addDoc(phonesCollectionRef, {
        name: newPhoneName,
        price: newPhonePrice,
        available: isNewPhoneAvailable,
        userId: auth?.currentUser?.uid,
      });
      getPhoneList();
    } catch (err) {
      console.error(err);
    }
  };

  const deletePhone = async (id: string) => {
    const phoneDoc = doc(db, "mobile phone", id);
    await deleteDoc(phoneDoc);
  };

  const updatePhoneName = async (id: string) => {
    const phoneDoc = doc(db, "mobile phone", id);
    await updateDoc(phoneDoc, { name: updatedName });
  };

  const updatePhonePrice = async (id: string) => {
    const phoneDoc = doc(db, "mobile phone", id);
    await updateDoc(phoneDoc, { price: updatedPrice });
  };
  return (
    <div className="home">
      <div className="login">
        <Login />
      </div>

      <div className="phone-add">
        <h2>Add new product</h2>
        <p>If you want to add a new product, you must log in</p>
        <input
          className="input"
          placeholder="Phone name..."
          onChange={(e) => setNewPhoneName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Price..."
          type="number"
          onChange={(e) => setNewPhonePrice(Number(e.target.value))}
        />
        <input
          className="input"
          type="checkbox"
          checked={isNewPhoneAvailable}
          onChange={(e) => setIsNewPhoneAvailable(e.target.checked)}
        />
        <label> Available</label>
        <button className="btn" onClick={onSubmitPhone}>
          {" "}
          Submit Phone
        </button>
      </div>
      <div>
        {phoneList.map((phone) => {
          return (
            <div key={phone.id} className="phone-card">
              <h1>{phone.name}</h1>
              <p className="phone-card__price">{phone.price} €</p>
              <p>{phone.available ? "available" : "in arrival"}</p>
              <button
                className="btn btn--orange"
                onClick={() => deletePhone(phone.id)}
              >
                {" "}
                Delete Phone
              </button>
              <div>
                <input
                  key={phone.id}
                  className="input"
                  placeholder="new title..."
                  onChange={() => setUpdatedName(phone.id)}
                />
                <button
                  className="btn"
                  onClick={() => updatePhoneName(phone.id)}
                >
                  {" "}
                  Update Name
                </button>
              </div>
              <div>
                <input
                  className="input"
                  placeholder="new price..."
                  onChange={() => setUpdatedPrice(phone.price)}
                />
                <button
                  className="btn"
                  onClick={() => updatePhonePrice(phone.id)}
                >
                  {" "}
                  Update Price
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
