import type { NextPage } from "next";

import { Button } from "@components/button";

const Home: NextPage = () => {
  return (
    <div>
      <Button color="blue">Hello</Button>
      <Button color="purple">Hello</Button>
    </div>
  );
};

export default Home;
