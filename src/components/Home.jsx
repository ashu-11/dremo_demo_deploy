import { lazy, Suspense } from "react";

const User = lazy(() => import("./User"));
const Admin = lazy(() => import("./Admin"));

export default function Home(props) {
  if (props.data === "Admin") {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <Admin />
      </Suspense>
    );
  }

  if (props.data === "user") {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <User />
      </Suspense>
    );
  }

  return <h1>Please enter User or Admin..</h1>;
}
