import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import firebase from '../config/firebase';
import {Button} from "konsta/react"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

export default function Home(props) {
  const _init_state_ = {
    cities: [],
    city: [],
    planets: [],
    planet: [],
    planetName: '',
    planetList: [],
    planetImage: '',
  };
  const [state, setState] = useState(_init_state_);
  function handleInputChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  // const [planets, planetsLoading, planetsError] = useCollection(
  //   collection(firebase.db, 'planets'),
  //   {}
  // );

  async function getCities(db) {
    const citiesCollection = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCollection);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }
  async function getPlanets() {
    const planetsCollectionRef = collection(firebase.db, 'planets');
    const planetSnapshot = await getDocs(planetsCollectionRef);
    const planetList = planetSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setState({ ...state, planets: planetList, planetList: planetSnapshot });
    // console.log('planetList', planetList);
    // const citiesCollection = collection(db, 'cities');
    // const citySnapshot = await getDocs(citiesCollection);
    // const cityList = citySnapshot.docs.map((doc) => doc.data());
    // return cityList;
  }
  async function createPlanet() {
    const newPlanetsCollectionRef = collection(firebase.db, 'planets');
    const newPlanetDoc = await addDoc(newPlanetsCollectionRef, {
      name: state.planetName,
    });
    if (newPlanetDoc.id) {
      setState({ ...state, planet: newPlanetDoc });
    } else {
      window.alert('unable to create planet');
    }
  }
  async function handleGetCities(event) {
    try {
      const response = await getCities(firebase.db);
      setState({ ...state, cities: response });
    } catch (error) {
      console.log('Error', error);
    }
  }
  async function handlePlanetChange(id) {
    const resp = window.prompt("planet's new name");
    const planetRef = doc(firebase.db, 'planets', id);
    try {
      await updateDoc(planetRef, { name: resp });
      window.alert('planet updated');
    } catch (error) {
      window.alert(
        'unable to update planet\n' + JSON.stringify(error, null, 2)
      );
    }
  }
  async function handlePlanetDelete(id) {
    const resp = window.confirm(
      'are you sure you want to delete this planet????'
    );
    if (resp) {
      const planetRef = doc(firebase.db, 'planets', id);
      try {
        await deleteDoc(planetRef, { name: resp });
        window.alert('planet deleted');
      } catch (error) {
        window.alert(
          'unable to delete planet\n' + JSON.stringify(error, null, 2)
        );
      }
    }
  }

  async function handleAuthenticate() {
    // firebase.googleSignInWithPopup();
  }

  const planetImageRef = useRef();
  async function handleFileChange(event) {
    const file = event.target.files[0];
    // console.log('file', file);
    const storagePlanetsRef = ref(firebase.storage, `planets/${file.name}`);
    uploadBytes(
      // `${firebase.storagePlanetsRef}_${file.name}_${Date.now()}`,
      storagePlanetsRef,
      file
    )
      .then(async (snapshot) => {
        const downUrl = await getDownloadURL(snapshot.ref);
        return await downUrl;
      })
      .then((url) => console.log('file uploaded', url));
  }

  useEffect(() => getPlanets(), []);

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        {firebase.auth.currentUser && firebase.auth.currentUser.uid ? (
          <>
          <Button rounded >New Planet</Button>
            <a href="/planets/new" className="btn btn-sm btn-success">
              NEW PLANET
            </a>
            <button
              onClick={() => firebase.auth.signOut()}
              className="btn btn-sm btn-danger"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <a href="/signin" className="btn">
            SIGNIN
          </a>
        )}
        <button onClick={handleGetCities} className="btn btn-sm btn-primary">
          GET CITIES
        </button>
        <button onClick={getPlanets} className="btn btn-sm btn-primary">
          GET PLANETS
        </button>
      </div>
      <pre width="400px"></pre>
      <div style={{ display: 'flex' }}>
        <div>
          <table className="table table-striped table-bordered">
            <thead style={{ backgroundColor: 'gray', color: 'white' }}>
              <td>IMAGE</td>
              <td>ID</td>
              <td>NAME</td>
              <td>ACTIONS</td>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div>
          <table className="table table-striped table-bordered">
            <thead style={{ backgroundColor: 'gray', color: 'white' }}>
              <td>IMAGE</td>
              <td>ID</td>
              <td>NAME</td>
              <td>ACTIONS</td>
            </thead>
            <tbody>
              {state.planets
                ? state.planets.map((pl, idx) => (
                    <tr>
                      <td>
                        {pl.url && (
                          <img
                            src={pl.url}
                            alt={pl.name}
                            style={{ maxWidth: '3rem', maxHeight: '3rem' }}
                            className="rounded img-thumbnail"
                          />
                        )}
                      </td>
                      <td>
                        <code>{pl.id}</code>
                      </td>
                      <td>
                        <code>{pl.name}</code>
                      </td>
                      <td style={{ width: '200px', display: 'flex' }}>
                        <button
                          onClick={() => handlePlanetChange(pl.id)}
                          className="btn btn-sm btn-primary"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => handlePlanetDelete(pl.id)}
                          className="btn btn-sm btn-danger"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
