import { Card, Icon, Link, Navbar, Preloader, Toast } from "konsta/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Loader from "../../components/loader";
import { useDeleteOnePlanet, useGetOnePlanet } from "../../repository";

export default function Planet() {
  const router = useRouter();
  const { query } = router;
  const planetApi = useGetOnePlanet();
  const deletePlanetApi = useDeleteOnePlanet();

  const [state, setState] = useState({ url: "", name: "", created_at: "", description: "" });
  useEffect(() => {
    if (query.planet_id) {
      planetApi.mutateAsync({ id: query.planet_id.toString() }).then((data) => {
        setState(data);
      });
    }
  }, [query.planet_id]);

  useEffect(() => {
    console.log("planetApi", planetApi.data);
  }, [planetApi.data]);

  if (planetApi.isLoading) {
    return <Loader loading={planetApi.isLoading}></Loader>;
  }

  if (planetApi.data) {
    console.log(planetApi.data);
    return (
      <>
        <Navbar
          title={`Planet: ${query.planet_id}`}
          left={
            <Link navbar onClick={router.back}>
              <Icon>
                <BiArrowBack />
              </Icon>
            </Link>
          }
        />

        <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage: `url(${planetApi.data.url})`,
              }}
            >
              {planetApi.data.name}
            </div>
          }
          footer={
            <div className="flex justify-between">
              <Link>Like</Link>
              <Link
                colors={{
                  text: "text-red-500",
                }}
                onClick={() => {
                  deletePlanetApi.mutateAsync({ id: query.planet_id });
                  alert("Planet deleted!");
                  router.push("/");
                }}
              >
                Delete
              </Link>
            </div>
          }
        >
          <div className="text-gray-500 mb-3">Posted on {planetApi.data.created_at.seconds}</div>
          <p>{planetApi.data.description}</p>
        </Card>
      </>
    );
  }

  return <>Nothing to Show</>;
}
