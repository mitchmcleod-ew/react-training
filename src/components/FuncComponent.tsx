import { FC, PropsWithChildren, useState } from 'react';

export type FuncComponentProps = {
  someProp: string;
};

export const FuncComponent: FC<PropsWithChildren<FuncComponentProps>> = ({ someProp }) => {
  const [count, setCount] = useState<number>(0);

  const incButtonClicked = () => {
    setCount(count + 1);
  }

  return <div>
    <div className="FuncComponent">Functional Component -- {someProp} -- Count: {count}</div>
    <button onClick={incButtonClicked}>Increment Count</button>
  </div>

};
