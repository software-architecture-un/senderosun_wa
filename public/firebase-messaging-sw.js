importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "980127576035"
});

const messaging = firebase.messaging();