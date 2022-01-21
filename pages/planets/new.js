import { useState, useRef, useEffect } from 'react';
import firebase from '../../config/firebase';
import styles from './NewPlanet.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

export default function NewPlanet(props) {
  const _init_state_ = {
    planetName: '',
    planetImage: {},
    planetImageUrl: '',
    isImageUrl: false,
  };
  const [state, setState] = useState(_init_state_);
  const planetImageRef = useRef();

  function handleChangeImageType(type) {
    setState({ ...state, isImageUrl: type });
  }

  async function createPlanetApi(planetName, planetImageUrl) {
    try {
      const newPlanetsCollectionRef = collection(firebase.db, 'planets');
      const newPlanetDoc = await addDoc(newPlanetsCollectionRef, {
        name: planetName,
        url: planetImageUrl,
      });
      return await newPlanetDoc;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreatePlanet() {
    try {
      if (state.isImageUrl) {
        console.log('its a string');
        setState({ ...state, planetImage: {} });
        const newPlanet = await createPlanetApi(
          state.planetName,
          state.planetImageUrl
        );
        if (newPlanet) {
          window.alert('Planet created!!');
          console.log(newPlanet);
          return;
        }
        return;
      } else {
        console.log('its a file');
        setState({ ...state, planetImageUrl: '' });
        const storagePlanetsRef = ref(
          firebase.storage,
          `planets/${state.planetImage.name}`
        );
        await uploadBytes(storagePlanetsRef, state.planetImage).then(
          async (snapshot) => {
            const downUrl = await getDownloadURL(snapshot.ref);
            const newPlanet = await createPlanetApi(state.planetName, downUrl);
            if (newPlanet) {
              window.alert('Planet created!!');
              console.log(newPlanet);
            }
          }
        );
      }
    } catch (error) {
      console.log('create planet error', error);
    }
  }

  function handleSubmit() {
    handleCreatePlanet();
  }

  async function handleFileChange(event) {
    setState({ ...state, planetImage: event.target.files[0] });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  return (
    <>
      <div className={styles.container}>
        <table>
          <tbody>
            <tr>
              <td />
              <td></td>
            </tr>
            <tr>
              <td>Planet Name</td>
              <td>
                <input
                  id="planetName"
                  name="planetName"
                  type="text"
                  value={state.planetName}
                  onChange={handleInputChange}
                  className="form-control full-width"
                />
              </td>
            </tr>
            <tr>
              <td>Select Type</td>
              <td style={{ display: 'flex' }}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="upload"
                    name="planetImage"
                    value="upload"
                    onClick={() => handleChangeImageType(false)}
                  />
                  <label class="form-check-label" htmlFor="upload">
                    Upload Image
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="paste_image"
                    name="planetImage"
                    value="paste"
                    onClick={() => handleChangeImageType(true)}
                  />
                  <label class="form-check-label" htmlFor="paste_image">
                    Paste Image URL
                  </label>
                </div>
                <br />
              </td>
            </tr>
            {state.isImageUrl ? (
              <tr className="full-width">
                <td>Paste img url</td>
                <td>
                  <input
                    id="planetImageUrl"
                    name="planetImageUrl"
                    type="text"
                    placeholder="Ex: planet.com/image.jpeg"
                    disabled={!state.isImageUrl}
                    value={state.planetImageUrl}
                    onChange={handleInputChange}
                    className="form-control full-width"
                  />
                </td>
              </tr>
            ) : (
              <tr className="full-width">
                <td>Upload Image</td>
                <td>
                  <input
                    id="planetImage"
                    name="planetImage"
                    type="file"
                    disabled={state.isImageUrl}
                    ref={planetImageRef}
                    onChange={handleFileChange}
                    className="btn btn-primary full-width"
                    class="form-control form-control-sm full-width"
                  />
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="1" />
              <td>
                <button
                  onClick={handleCreatePlanet}
                  className="btn btn-sm btn-success full-width"
                >
                  Create Planet
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
