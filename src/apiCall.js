import Juicees from "./Juicees.js";

export default {
  getJuices: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Juicees);
      }, 500);
    });
  },
  juices: (action, juiceId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(juiceId);
      }, 100);
    });
  }
};
