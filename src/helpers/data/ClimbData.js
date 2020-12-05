import axios from 'axios';
import { firebaseConfig } from '../ApiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getClimbs = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/climbs.json`)
    .then((response) => {
      const climbs = response.data;
      const climbsArray = [];
      if (climbs) {
        Object.keys(climbs).forEach((climb) => {
          climbsArray.push(climbs[climb]);
        });
      }
      resolve(climbsArray);
    })
    .catch((error) => reject(error));
});

const getAllUserClimbs = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/climbs.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const addClimb = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/climbs.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/climbs/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const getSingleClimb = (climbId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/climbs/${climbId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const deleteToDoClimb = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/climbs/${firebaseKey}.json`)
    .then(resolve).catch((error) => reject(error));
});

export {
  getClimbs,
  getAllUserClimbs,
  addClimb,
  getSingleClimb,
  deleteToDoClimb,
};
