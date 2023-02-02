'use client';

export default function App() {
  return (
    <>
      <button
        style={{
          color: 'black',
        }}
      >
        Checkout
      </button>
      <button
        onClick={() => {
          console.log('checkout');
        }}
      >
        {' '}
        x
      </button>
    </>
  );
}
