import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "753713537723"
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
        headers: { "Content-Type": "application/json", "Authorization": "key=AAAAr3zT4rs:APA91bHhQfQloKGMLyCys0mNeyZuJES29r1Zxvrc9A9LyUNoeRhpaS3MmDMgcAQrzhtrI3XGeqFXe8pbkKR9XhYL0A24ZcRxdSrWvfikcpFJhoSW9MVusopILI3CgyQKxX6wGj2dc-xA"}              
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