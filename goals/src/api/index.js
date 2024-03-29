const activities = {
  "1546968934": {
    id: "1546968934",
    title: "Learn Vue.js",
    notes: "I started today and it was not good.",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  },
  "1546969212": {
    id: "1546969212",
    title: "Read Witcher Books",
    notes: "These books are super nice",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  }
};
// condition for reject
const canContinue = () => {
  const rdmNum = Math.floor(Math.random() * 10);
  return rdmNum > 3 ? true : false;
};

export const fetchActivities = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canContinue()) {
        resolve(activities);
      } else {
        reject("Can not fetch data");
      }
    }, 2000);
  });
};

const generateUID = () => Math.floor(new Date() * Math.random());

export const createActivityAPI = activity => {
  activity.id = generateUID();
  activity.progress = 0;
  activity.createdAt = new Date();
  activity.updatedAt = new Date();
  return new Promise((resolve, reject) => {
    resolve(activity);
  });
};

export const fetchCategories = () => {
  return {
    "1546969049": {
      text: "books",
      id: "1546969049"
    },
    "1546969225": {
      text: "movies",
      id: "1546969225"
    }
  };
};
export const fetchUser = () => {
  return {
    name: "Filip Jerga",
    id: "Aj34jknvncx98812"
  };
};
