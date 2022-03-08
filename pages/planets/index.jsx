import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { BlockTitle, Link, List, ListItem, Navbar, Preloader } from "konsta/react";
import { useEffect, useRef, useState } from "react";
import firebase from "../../config/firebase";
import { useGetAllPlanets } from "../../repository";

export default function Home(props) {
  const _init_state_ = {
    cities: [],
    city: [],
    planets: [],
    planet: [],
    planetName: "",
    planetList: [],
    planetImage: "",
  };
  const [state, setState] = useState(_init_state_);
  const planetsApi = useGetAllPlanets();
  async function getCities(db) {
    const citiesCollection = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCollection);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }
  async function getPlanets() {
    const planetsCollectionRef = collection(firebase.db, "planets");
    const planetSnapshot = await getDocs(planetsCollectionRef);
    const planetList = planetSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setState({ ...state, planets: planetList, planetList: planetSnapshot });
  }

  async function handleGetCities(event) {
    try {
      const response = await getCities(firebase.db);
      setState({ ...state, cities: response });
    } catch (error) {
      console.log("Error", error);
    }
  }
  async function handlePlanetChange(id) {
    const resp = window.prompt("planet's new name");
    const planetRef = doc(firebase.db, "planets", id);
    try {
      await updateDoc(planetRef, { name: resp });
      window.alert("planet updated");
    } catch (error) {
      window.alert("unable to update planet\n" + JSON.stringify(error, null, 2));
    }
  }

  // async function handleAuthenticate() {
  // firebase.googleSignInWithPopup();
  // }

  useEffect(() => getPlanets(), []);

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

      <List>
        {planetsApi.data ? (
          planetsApi.data.map((planet, index) => <ListItem media={<img src={planet.url} width="30px" height="30px" />} href={`/planets/${planet.id}`} title={planet.name} />)
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignContent: "center", padding: "1rem" }}>
            <Preloader />
          </div>
        )}
      </List>
    </>
  );
}
