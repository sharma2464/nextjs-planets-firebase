import { Preloader } from "konsta/react";

export default function Loader(props: { loading: Boolean; children?: any }) {
  if (props.loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <Preloader />
      </div>
    );
  }
  return props.children;
}
