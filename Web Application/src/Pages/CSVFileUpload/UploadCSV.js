import React, { useState } from 'react';
import { db } from '../Services/firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';

function Import() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const newArray = csvRows.map((i) => {
      const values = i.split(',');
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(newArray);
    return newArray;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = async function (event) {
        const text = event.target.result;
        const newArray = csvFileToArray(text);

        const collectionRef = collection(db, 'drugs');

        newArray.forEach(async (item) => {
          try {
            await addDoc(collectionRef, item);
          } catch (error) {
            console.error('Error adding document: ', error);
          }
        });

        alert('Data uploaded successfully.');
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>If you already have a CSV file, you can upload it here.</h4>
      <form>
        <input type="file" id="csvFileInput" accept=".csv" onChange={handleOnChange} />

        <button onClick={handleOnSubmit}>Upload CSV</button>
      </form>

      <br />

      <table>
        <thead>
          <tr key="header">
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, index) => (
                <td key={index}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Import;
