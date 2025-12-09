importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// ✅ FIREBASE CONFIG (EXACTLY AS PROVIDED)
const firebaseConfig = {
  apiKey: "AIzaSyAafXkJwyZ5F7Xuax0VktZ9cpqWD4oCvxU",
  projectId: "tournament-97743",
  messagingSenderId: "584797187828",
  appId: "1:584797187828:web:4c643f83dfd9b700adb8a1"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// ✅ BACKGROUND HANDLER (Runs when app is closed)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3233/3233483.png', // App Icon
    badge: 'https://cdn-icons-png.flaticon.com/512/3233/3233483.png'  // Status Bar Icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});