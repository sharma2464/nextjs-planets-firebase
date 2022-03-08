import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { BlockTitle, Button, Icon, Link, List, ListButton, ListInput, ListItem, Navbar, Radio } from "konsta/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import firebase from "../../config/firebase";
import { useCreateNewPlanet } from "../../repository";
export default function NewPlanet(props) {
  const router = useRouter();
  const _init_state_ = {
    planetName: "",
    description: "",
    planetImage: {},
    planetImageUrl: "",
    isImageUrl: false,
  };
  const [state, setState] = useState(_init_state_);
  const planetImageRef = useRef();
  const createNewPlanetApi = useCreateNewPlanet();

  function handleChangeImageType(type) {
    setState({ ...state, isImageUrl: type });
  }

  async function createPlanetApi(planetName, planetImageUrl) {
    try {
      const newPlanetsCollectionRef = collection(firebase.db, "planets");
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
        console.log("its a string");
        setState({ ...state, planetImage: {} });
        const newPlanet = await createPlanetApi(state.planetName, state.planetImageUrl);
        if (newPlanet) {
          window.alert("Planet created!!");
          console.log(newPlanet);
          return;
        }
        return;
      } else {
        console.log("its a file");
        setState({ ...state, planetImageUrl: "" });
        const storagePlanetsRef = ref(firebase.storage, `planets/${state.planetImage.name}`);
        await uploadBytes(storagePlanetsRef, state.planetImage).then(async (snapshot) => {
          const downUrl = await getDownloadURL(snapshot.ref);

          await createNewPlanetApi
            .mutateAsync({
              name: state.planetName,
              url: downUrl,
              description: state.description,
            })
            .then((newPlanet) => {
              window.alert("Planet created!!");
              console.log(newPlanet);
              router.push("/");
            });

          // const newPlanet = await createPlanetApi(state.planetName, downUrl);
          // if (newPlanet) {
          //   window.alert("Planet created!!");
          //   // console.log(newPlanet);
          //   router.push("/");
          // }
        });
      }
    } catch (error) {
      console.log("create planet error", error);
    }
  }

  function handleSubmit() {
    handleCreatePlanet();
  }

  async function handleFileChange(event) {
    console.log("file", event.target.files[0]);
    setState({ ...state, planetImage: event.target.files[0] });
  }

  function handleInputChange(event) {
    // console.log("event", event.target.value);
    // const { name, value } = event.target;
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <>
      <input type="file" ref={planetImageRef} disabled={state.isImageUrl} name="planetImage" onChange={handleFileChange} value={state.planetImageUrl} style={{ display: "none" }} />
      <Navbar
        title="Create New Planet"
        left={
          <Link navbar onClick={router.back}>
            <Icon>
              <BiArrowBack />
            </Icon>
          </Link>
        }
      />
      <BlockTitle>Planet Name</BlockTitle>
      <List inset>
        <ListInput type="text" name="planetName" placeholder="Planet name" value={state.planetName} onChange={handleInputChange} />
      </List>
      <BlockTitle>Planet description</BlockTitle>
      <List inset>
        <ListInput type="textarea" name="description" placeholder="Planet Description" value={state.description} onChange={handleInputChange} />
      </List>
      <BlockTitle>Upload Image / Paste Image Link</BlockTitle>
      <List inset>
        <ListItem label title="Upload" media={<Radio component="div" value="upload" checked={!state.isImageUrl} onChange={() => handleChangeImageType(false)} />}></ListItem>
        <ListItem label title="Paste" media={<Radio component="div" value="paste" checked={state.isImageUrl} onChange={() => handleChangeImageType(true)} />}></ListItem>
      </List>
      <BlockTitle>{state.isImageUrl ? "Paste Image URL" : "Upload Image"}</BlockTitle>
      <List inset>
        {state.isImageUrl ? (
          <ListInput type="text" name="planetImageUrl" placeholder="https://www.example.com/someimage.jpeg" onChange={handleInputChange} value={state.planetImageUrl} />
        ) : (
          <>
            {state.planetImage ? (
              <ListButton
                onClick={async (e) => {
                  // console.log({ ...planetImageRef.current });
                  await planetImageRef.current.click();
                }}
              >
                Choose File
              </ListButton>
            ) : (
              <ListButton
                onClick={async () => {
                  setState({ ...state, planetImage: "" });
                }}
                color="red"
              >
                Clear
              </ListButton>
            )}
            {state.planetImage && <ListItem title={state.planetImage && state.planetImage.name} />}
          </>
        )}
      </List>
      <List inset>
        <Button onClick={handleCreatePlanet} large>
          Create new planet
        </Button>
      </List>
      {/* 
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
                <input id="planetName" name="planetName" type="text" value={state.planetName} onChange={handleInputChange} className="form-control full-width" />
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
                  <input id="planetImage" name="planetImage" type="file" disabled={state.isImageUrl} ref={planetImageRef} onChange={handleFileChange} className="btn btn-primary full-width" />
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="1" />
              <td>
                <button onClick={handleCreatePlanet} className="btn btn-sm btn-success full-width">
                  Create Planet
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       */}
    </>
  );
}
