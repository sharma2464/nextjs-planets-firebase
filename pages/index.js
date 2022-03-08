import { BlockTitle, Link, Navbar } from "konsta/react";
import firebase from "../config/firebase";

export default function Home(props) {
  return (
    <>
      <Navbar
        title="List of Planets"
        left={
          firebase.auth.currentUser && firebase.auth.currentUser.uid ? (
            <Link navbar href="/planets/new">
              Create New
            </Link>
          ) : (
            <Link navbar href="/signin">
              Signin
            </Link>
          )
        }
        right={
          <Link navbar onClick={() => firebase.auth.signOut()}>
            Logout
          </Link>
        }
      />

      <BlockTitle>List starts here</BlockTitle>
    </>
  );
}
