import './style.css';

interface RippleLoaderProps {
  width: string | number | undefined;
  height: string | number | undefined;
}

export function RippleLoader({ height, width }: RippleLoaderProps) {
  return (
    <div className="lds-ellipsis" style={{ width, height }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
