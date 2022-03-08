// Import FirebaseAuth and firebase.
import { Block, BlockTitle, Link, List, ListItem, Navbar } from "konsta/react";
import { useRouter } from "next/router";
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import firebase from "../config/firebase";

// Configure Firebase.
// const config = {
// apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
// authDomain: 'myproject-1234.firebaseapp.com',
// ...
// };
// firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.authProviders.google.PROVIDER_ID],
};

function SignInScreen() {
  const router = useRouter();
  return (
    <>
      <Navbar title="Signin" left={<Link onClick={() => router.push("/")}>Home</Link>} />
      <List inset>
        <BlockTitle color="primary">Planet of the Apps</BlockTitle>
        <ListItem>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth} />
        </ListItem>
      </List>
    </>
  );
}

export default SignInScreen;
