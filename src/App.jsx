import { useState } from "react";
import Cards from "./components/Cards";
import Inputs from "./components/Inputs";
import Success from "./components/Success";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center desktop:flex-row dekstop:gap-[349px]">
        <Cards />
        {isSuccess ? (
          <Success />
        ) : (
          <Inputs onSuccess={() => setIsSuccess(true)} />
        )}
      </div>
    </>
  );
}

export default App;
