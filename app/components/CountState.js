'use client';

import { useState } from 'react';

function calculatePositiveValues(count) {
  if (count >= 0) {
    return [count];
  } else if (count < 0) {
    return [];
  }
}

export default function CountState() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div hidden>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>QTY:{calculatePositiveValues(count)}</div>
    </div>
  );
}
