import { useState } from "react";

const Example = () => {

    const [show, setShow] = useState(false);
  
    return (
      <div>
        <p>Show state: {show}</p>
        {show ? (
          <p>You can see me!</p>
        ) : null}
        <button onClick={() => setShow(!show)}></button>
      </div>
    );
  
  };
  
  export default Example;