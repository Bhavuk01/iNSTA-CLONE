// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL1hojXtYTZxUtkNLw_LbRHWr_KsZb7fA",
  authDomain: "insta-auth-3cdf3.firebaseapp.com",
  projectId: "insta-auth-3cdf3",
  storageBucket: "insta-auth-3cdf3.appspot.com",
  messagingSenderId: "865292713076",
  appId: "1:865292713076:web:00b74262c1ed0da38fa521",
  measurementId: "G-DKV454V4HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics.logEvent('user_engagement', {user_id: '1234'});
export default app;