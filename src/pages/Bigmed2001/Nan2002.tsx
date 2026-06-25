import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Bigmed2001Nan2002 = () => {
  // nan2002.html was originally a frameset defining the layout.
  // Since our modern React app already provides the layout (top nav and sidebar),
  // we just need to redirect the user to the main content page (bigmedic.html).
  return <Navigate to="/bigmedic.html" replace />;
};

export default Bigmed2001Nan2002;
