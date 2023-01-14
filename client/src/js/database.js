import { openDB } from "idb";

const initdb = async () =>
  // We are creating a new database named 'contact' which will be using version 1 of the database.
  openDB("jate", 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Export a function we will use to POST to the database.
export const postDb = async (content) => {
  // Create a connection to the database database and version we want to use.
  const db = await openDB("jate", 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = db.transaction("jate", "readwrite");
  // Open up the desired object store.
  const store = tx.objectStore("jate");
  // Use the .put() method on the store and pass in the content.
  store.add(content);
  const request = store.add({ id: 1, tx: content });
  // Get confirmation of the request.
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Export a function we will use to GET to the database.
export const getDb = async () => {
  console.log("GET from the database");
  // Create a connection to the database database and version we want to use.
  const db = await openDB("jate", 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = db.transaction("jate", "readonly");
  // Open up the desired object store.
  const store = tx.objectStore("jate");
  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log("result.value", result);
  if (result.value !== null) {
    return result.value;
  } else {
    console.log("result.value is null");
    return result;
  }
};

// Start the database.
initdb();
