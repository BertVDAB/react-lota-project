import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hamburgermenu from "./Hamburgermenu";

export default function CloseMenuAtPageLoad() {
  const { pathname } = useLocation();

  useEffect(() => {
    
  }, [pathname]);

  return null;
}
