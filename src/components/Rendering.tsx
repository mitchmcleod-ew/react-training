import { FC, PropsWithChildren, useState } from 'react';

export type RenderingProps = unknown;

const SOME_LIST = [
  'one',
  'two',
  'three',
  'four',
]

export const Rendering: FC<PropsWithChildren<RenderingProps>> = () => {
  const [show, setShow] = useState(false);

  const toggleShowClicked = () => {
    setShow(!show);
  }

  return <div className="Rendering">
    <button onClick={toggleShowClicked}>Toggle Show</button>
    {
      show && <div>Show Me!</div>
    }
    {
      SOME_LIST.map((item, index) => {
        return <div key={index}>{item}</div>
      })
    }
  </div>;
};
