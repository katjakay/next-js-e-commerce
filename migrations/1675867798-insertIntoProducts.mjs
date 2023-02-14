const products = [
  {
    id: 1,
    first_name: 'Pilates Retreat',
    type: 'Service',
    price: '560',
    description:
      'Taking place at the auspicious time of summer solstice, our program is about healing and growth, deep rest, heartfelt sensuality and self acknowledgement: A shedding of the superficial, an ode to the beauty of life, a celebration of re-connection between nature, your body and your mind.',
  },

  {
    id: 2,
    first_name: 'Pilates Class',
    type: 'Service',
    price: '75',
    description:
      'The classes of Ka-linaw Pilates Practice are designed to be modern, dynamic and fun. There are no previous skills needed to start the journey, as all the classes are created and destined for beginner to advanced practitioners.',
  },

  {
    id: 3,
    first_name: 'Ka-linaw Socks',
    type: 'Print',
    price: '34',
    description:
      'Get a grip and hold your pose with our light-weight, cotton Ka-linaw Pilates grip crew socks.',
  },

  {
    id: 4,
    first_name: 'Ka-linaw Hoodie',
    type: 'Garment',
    price: '120',
    description:
      'This new cropped long-sleeve is the perfect layering piece for a chilly morning. The raw hem and dropped shoulder seam are streetwear inspired, while the lightweight Airlume cotton is fit to flatte.',
  },
  {
    id: 5,
    first_name: 'Pilates Trial',
    type: 'Service',
    price: '49',
    description:
      'At Ka-linaw we welcome you to enjoy our authentic signature style that we have become well known for. Our unique class styles, choreographed flows, curated playlists and extensive background in physical therapy will keep you feeling fab, working hard, and craving more!.',
  },
  {
    id: 6,
    first_name: 'Pilates Mat',
    type: 'Merchandise',
    price: '120',
    description:
      'Your mat supports you literally and figuratively — in the studio, during sweaty sequences and healing nidras, and in the world, where the grounding effects of yoga help you to live a life of purpose. Our rigorously tested Warrior Mat is where the magic happens — it’s roomy, perfectly cushioned for joint support, anti-odor, dry-wicking and slip-free, wet or dry. ',
  },
];

export async function up(sql) {
  await sql`
  INSERT INTO products ${sql(
    products,
    'first_name',
    'type',
    'price',
    'description',
  )}
  `;
}

export async function down(sql) {
  for (const product of products) {
    await sql`
    DELETE FROM
    products
    WHERE
    id = ${product.id}
    `;
  }
}
