import Chico1 from "../../assets/images/chico1.png";
import Chico2 from "../../assets/images/chico2.png";

import { useState } from "react";
export function Chico() {
  const [calamidade, setCalamidade] = useState(Chico1);

  function changeChico() {
    if (calamidade === Chico1) {
      setCalamidade(Chico2);
    } else {
      setCalamidade(Chico1);
    }
  }

  return <img src={calamidade} alt="Happy Chico" onClick={changeChico} />;
}
