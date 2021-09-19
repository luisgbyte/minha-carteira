import React, { useState } from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => {
  const [status, setStatus] = useState(false);
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={status}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setStatus(!status)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
