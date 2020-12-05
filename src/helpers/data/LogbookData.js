import axios from 'axios';
import { firebaseConfig } from '../ApiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getAllUserLogs = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/logbook.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const addLogbookEntry = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/logbook.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/logbook/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const getSingleLogbookEntry = (climbId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/logbook/${climbId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const updateLogbook = (object) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/logbook/${object.firebaseKey}.json`, object)
    .then(resolve).catch((error) => reject(error));
});

export {
  getAllUserLogs,
  getSingleLogbookEntry,
  addLogbookEntry,
  updateLogbook,
};
