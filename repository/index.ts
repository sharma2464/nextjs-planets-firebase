import { addDoc, collection, deleteDoc, doc, Firestore, FirestoreSettings, getDoc, getDocs } from "firebase/firestore";
import { useMutation, useQuery } from "react-query";
import firebase from "../config/firebase";

export const useGetAllPlanets = () => {
  return useQuery("planets", async () => {
    try {
      const planetsCollectionRef = collection(firebase.db, "planets");
      const planetSnapshot = await getDocs(planetsCollectionRef);
      const planetList = planetSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return Promise.resolve(planetList);
    } catch (error) {
      return Promise.reject(error);
    }
  });
};

export const useGetOnePlanet = (): any => {
  return useMutation(async (data: { id: any }): Promise<any> => {
    try {
      const planetsCollectionRef = doc(firebase.db, "planets", data.id);
      const planetSnapshot = await getDoc(planetsCollectionRef);
      const planet = planetSnapshot.data();
      return Promise.resolve(planet);
    } catch (error) {
      return Promise.reject(error);
    }
  });
};

export const useDeleteOnePlanet = (): any => {
  return useMutation(async (data: { id: any }): Promise<any> => {
    try {
      const deleted = await deleteDoc(doc(firebase.db, "planets", data.id));
      // const planetSnapshot = await getDoc(planetsCollectionRef);
      // const planet = planetSnapshot.data();
      return Promise.resolve({ deleted });
    } catch (error) {
      return Promise.reject(error);
    }
  });
};

export const useCreateNewPlanet = (): any => {
  return useMutation(async ({ name, url, description }: { name: String; url: String; description: String }) => {
    try {
      const newPlanetsCollectionRef = collection(firebase.db, "planets");
      const newPlanetDoc = await addDoc(newPlanetsCollectionRef, {
        name,
        url,
        description,
        created_at: new Date(),
      });
      return Promise.resolve(newPlanetDoc.id);
    } catch (error) {
      return Promise.reject(error);
    }
  });
};
