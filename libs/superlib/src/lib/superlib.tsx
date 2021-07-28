import cn from './superlib.module.scss';

/* eslint-disable-next-line */
export interface SuperlibProps {}

export function Superlib(props: SuperlibProps) {
  return (
    <div className={ cn.app }>
      <h1>Welcome to superlib!</h1>
    </div>
  );
}

export default Superlib;
