import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "980127576035"
  });
}
export const Permisos = async () => {
   

  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token de usuario:', token);

    const url =`https://iid.googleapis.com/iid/v1/${token}/rel/topics/senderos`;
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "key=AAAA5DQn7-M:APA91bHq8UzsCvz8z-2nwVi8PgwDQEFgBQYqJLtzRsy1oz7bqFWYi83YjKiaBTXAMpn4CjUwII5YpQv9mVwG9gV6hrd5V3Q9-UGYbc39o_AfU-9YeFoyHqa1aeenhK7X68QTbHpypMjg"}              
    };

    console.log(url);
    console.log(opts);

    fetch(url, opts)        
        .then(console.log)
        .catch(console.log("DATOS INCORRECTOS"))    
    
    return token;
  } catch (error) {
    console.error(error);
  }
}