'use client';

export default function App() {
  return (
    <>
      <button
        style={{
          color: 'black',
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          console.log('click');
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          console.log('click');
        }}
      >
        +
      </button>
    </>
  );
}
