import fs from 'node:fs';

export const products = [
  {
    id: 1,
    firstName: 'Pilates Retreat',
    type: 'Service',
    price: '560 €',
    description:
      'Taking place at the auspicious time of summer solstice, our program is about healing and growth, deep rest, heartfelt sensuality and self acknowledgement: A shedding of the superficial, an ode to the beauty of life, a celebration of re-connection between nature, your body and your mind.',
  },
  {
    id: 2,
    firstName: 'Pilates 1:1',
    type: 'Service',
    price: '75 €',
    description:
      'The classes of Ka-linaw Pilates Practice are designed to be modern, dynamic and fun. There are no previous skills needed to start the journey, as all the classes are created and destined for beginner to advanced practitioners.',
  },
  {
    id: 3,
    firstName: 'Ka-linaw Socks',
    type: 'Print',
    price: '34 €',
    description:
      'Get a grip and hold your pose with our light-weight, cotton Ka-linaw Pilates grip crew socks.',
  },
  {
    id: 4,
    firstName: 'Ka-linaw Hoodie',
    type: 'Garment',
    price: '120 €',
    description:
      'This new cropped long-sleeve is the perfect layering piece for a chilly morning. The raw hem and dropped shoulder seam are streetwear inspired, while the lightweight Airlume cotton is fit to flatte.',
  },
];



INSERT INTO products
VALUES
(first_name, type, price, description)
('Pilates Class', 'Service', '75', 'The classes of Ka-linaw Pilates Practice are designed to be modern, dynamic and fun. There are no previous skills needed to start the journey, as all the classes are created and destined for beginner to advanced practitioners.');
