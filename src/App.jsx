import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import './App.css';

import { FaBowlFood } from "react-icons/fa6";
import { MdEmojiTransportation } from "react-icons/md";
import Showicons from './Showicons';



function App() {
  const [tag, setTag] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState(null); // State to hold location data

  useEffect(() => {
    // Function to get user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        }, (error) => {
          console.error('Error getting location:', error);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation(); // Get user's location when component mounts
  }, []);

  const addExpense = async (e) => {
    e.preventDefault();
    const priceNumber = parseFloat(price);
    if (!isNaN(priceNumber) && priceNumber > 0) {
      const newExpense = {
        tag,
        price: priceNumber,
        location, // Use location data
        time: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
      };
      try {
        await addDoc(collection(db, 'expense'), newExpense);
        setTag("");
        setPrice("");
        console.log('Expense added successfully');
      } catch (error) {
        console.error('Error adding expense: ', error);
      }
    } else {
      alert('Please enter a valid price');
    }
  };

  return (
    <>
      <h1>Record App</h1>
      <form onSubmit={addExpense} className='form'>
        <Showicons/>
        <label>
          Tag:
          <input 
            type="text" 
            value={tag} 
            onChange={e => setTag(e.target.value)} 
            required 
          />
        </label>
        <label>
          Price:
          <input 
            type="number" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      {location && (
        <p>
          Your current location: Latitude {location.latitude}, Longitude {location.longitude}
        </p>
      )}
    </>
  );
}

export default App;
