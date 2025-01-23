import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { Suspense } from "react";

function App() {
  return (
    <>
      {/* <AppBar /> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <RouterProvider router={router} />
      {/* </Suspense> */}
    </>
  );
}

export default App;
