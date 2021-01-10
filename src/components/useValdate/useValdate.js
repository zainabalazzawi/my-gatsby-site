import { useState } from "react";

export const useValdate = (initialValdate) => {
  const [valdate, setValdate] = useState(initialValdate);

  return [
    valdate,
    (e) => {
      setValdate({
        [e.target.name]: e.target.valdate,
      });
    },
  ];
};
