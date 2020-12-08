const ApiKeys = {
  GoogleApiKey: process.env.REACT_APP_GoogleAPIKey,
  MountainProjectKey: process.env.REACT_APP_MountainProjectKey,
  OpenWeatherKey: process.env.REACT_APP_OpenWeatherkey,
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export { ApiKeys, firebaseConfig };
