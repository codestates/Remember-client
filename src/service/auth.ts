import { firebaseApp , firebaseAuth, githubProvider, googleProvider } from './firebase';
//import firebase from 'firebase/app';

class Auth {
  login(name:any) {
      const provider = this.getProvider(name);
      return firebaseAuth.signInWithPopup(provider);
  } 

  logout() {
    firebaseApp.auth().signOut();
  }

  getProvider(name:any) {
      switch(name){
        case 'Github':
          return githubProvider;
        case 'Google':
          return googleProvider;
        default:
          throw new Error(`${name} is unknown provider.`);
      }
  }

};
export default Auth;