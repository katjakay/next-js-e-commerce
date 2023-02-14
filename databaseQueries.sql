-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create animals table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  price varchar(30) NOT NULL,
  description varchar(1000),
);

-- Insert some products (C in CRUD - Create)
INSERT INTO products
  (first_name, type, price, description)
VALUES
('Pilates Retreat', 'Service', '560','Taking place at the auspicious time of summer solstice, our program is about healing and growth, deep rest, heartfelt sensuality and self acknowledgement: A shedding of the superficial, an ode to the beauty of life, a celebration of re-connection between nature, your body and your mind.');

('Pilates Class', 'Service', '75','The classes of Ka-linaw Pilates Practice are designed to be modern, dynamic and fun. There are no previous skills needed to start the journey, as all the classes are created and destined for beginner to advanced practitioners.');


('Ka-linaw Socks', 'Print', '34', 'Get a grip and hold your pose with our light-weight, cotton Ka-linaw Pilates grip crew socks.');


('Ka-linaw Hoodie', 'Garment', '120', 'This new cropped long-sleeve is the perfect layering piece for a chilly morning. The raw hem and dropped shoulder seam are streetwear inspired, while the lightweight Airlume cotton is fit to flatte.');



('Pilates Trial',
  'Service','49','At Ka-linaw we welcome you to enjoy our authentic signature style that we have become well known for. Our unique class styles, choreographed flows, curated playlists and extensive background in physical therapy will keep you feeling fab, working hard, and craving more!.');

('Pilates Mat','Merchandise','120','Your mat supports you literally and figuratively — in the studio, during sweaty sequences and healing nidras, and in the world, where the grounding effects of yoga help you to live a life of purpose. Our rigorously tested Warrior Mat is where the magic happens — it’s roomy, perfectly cushioned for joint support, anti-odor, dry-wicking and slip-free, wet or dry. ');

-- Read some products (R in CRUD - Read)
SELECT * FROM products;
