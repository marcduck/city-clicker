export const shops = [
  // 0 - Lucerne
  {
    name: "Lucerne's Best",
    slogan: "Find everything you need and more!",
    shopkeeper: {
      name: "Maximillian von Holstein",
      age: 52,
      img: "swiss1",
      occupation: "Shopkeeper",
      physicalDescription:
        "Maximillian is a tall, stately man with salt-and-pepper hair and a well-trimmed beard. He has a regal bearing and carries himself with confidence and poise.",
      description:
        "Maximillian comes from a long line of successful merchants and takes great pride in the quality and exclusivity of the items he sells in his shop. He is known for his impeccable taste and attention to detail.",
    },
    items: [
      {
        name: "Swiss Cheese Fondue",
        description:
          "A delicious blend of melted cheese and white wine, perfect for dipping bread and vegetables. Serves 4-6.",
        price: 1200,
        emoji: "🧀",
      },
      {
        name: "Swiss Army Knife",
        description:
          "A versatile tool with a variety of functions, including a knife, scissors, and screwdriver. Made in Switzerland.",
        price: 30000,
        emoji: "🗡️",
      },
      {
        name: "Chocolate Box",
        description:
          "A selection of creamy, rich Swiss chocolates in a variety of flavors. The perfect gift for any chocolate lover.",
        price: 25000,
        emoji: "🍫",
      },
      {
        name: "Cowbell",
        description:
          "A traditional Swiss cow bell handmade in the mountains of Lucerne. Makes a unique addition to any home decor.",
        price: 15000,
        emoji: "🐄",
      },
    ],
    buildings: [
      {
        name: "Alpine Emporium",
        description:
          "Nestled in the heart of Lucerne, this charming building offers a unique opportunity for entrepreneurs and shopkeepers. With its rustic architecture and picturesque surroundings, it attracts both locals and tourists alike. Perfect for a boutique store, art gallery, or specialty shop.",
        price: 85000,
        tags: [
          "Mountain view",
          "Tourist hotspot",
          "Historic charm",
          "Cultural hub",
        ],
        emoji: "🏰",
      },
      {
        name: "Lakeview Pavilion",
        description:
          "Enjoy breathtaking views of Lake Lucerne from this prime property. The elegant façade, spacious terrace, and panoramic windows make it an ideal investment for a lakeside bistro or café. Capture the essence of the serene surroundings and delight your customers with scenic dining experiences.",
        price: 95000,
        tags: [
          "Lake view",
          "Culinary hotspot",
          "Outdoor seating",
          "Scenic location",
        ],
        emoji: "🌊",
      },
      {
        name: "Heritage Corner",
        description:
          "Step into a bygone era with this historical gem located in Lucerne's Old Town. The beautifully restored building features charming storefronts, arched windows, and intricate stonework. Perfect for an antique shop, vintage clothing store, or artisanal crafts boutique.",
        price: 75000,
        tags: [
          "Old Town",
          "Vintage appeal",
          "Architectural beauty",
          "Heritage site",
        ],
        emoji: "🕰️",
      },
      {
        name: "Tranquil Haven",
        description:
          "Escape the hustle and bustle of the city by investing in this tranquil oasis. Nestled in a peaceful corner of Lucerne, this building offers a serene environment for a wellness center or spa. Pamper your guests with rejuvenating massages, yoga classes, and holistic therapies.",
        price: 80000,
        tags: [
          "Tranquil location",
          "Spa facilities",
          "Relaxation",
          "Nature retreat",
        ],
        emoji: "🌿",
      },
      {
        name: "Fashion Fusion",
        description:
          "Make a statement in the world of fashion with this stylish building located in Lucerne's fashion district. The modern design, large display windows, and spacious interiors create a perfect ambiance for a boutique clothing store, designer outlet, or trendy fashion concept store.",
        price: 100000,
        tags: [
          "Fashion district",
          "Trendy location",
          "High foot traffic",
          "Modern aesthetics",
        ],
        emoji: "👗",
      },
      {
        name: "Gourmet Marketplace",
        description:
          "Elevate the culinary scene of Lucerne with this contemporary building ideally suited for a gourmet food market. The sleek glass façade, open-plan layout, and high ceilings create a welcoming atmosphere for food enthusiasts. Offer a wide range of fresh produce, artisanal cheeses, fine wines, and a delightful café area for visitors to savor delicious treats.",
        price: 90000,
        tags: [
          "Food market",
          "Culinary diversity",
          "Epicurean haven",
          "Modern design",
        ],
        emoji: "🍽️",
      },
    ],
    souvenirs: [
      {
        name: "Cocoa Delights",
        price: 20,
        emoji: "🍫",
        description:
          "Indulge in the rich and creamy taste of Swiss chocolate, crafted with love and expertise.",
        type: "Food",
        duration: 60,
      },
      {
        name: "Melody Masters",
        price: 75,
        emoji: "🎵",
        description:
          "Listen to enchanting melodies with this intricately crafted music box by Melody Masters.",
        type: "Music",
        duration: 120,
      },
      {
        name: "Snowy Memories",
        price: 30,
        emoji: "❄️",
        description:
          "Capture the magic of Lucerne with a charming snow globe, featuring iconic landmarks and falling snowflakes.",
        type: "Decor",
        duration: 30,
      },
      {
        name: "Swiss Tool Works",
        price: 100,
        emoji: "🔪",
        description:
          "Embrace Swiss craftsmanship with a versatile Swiss Army Knife by Swiss Tool Works, equipped with various tools for any situation.",
        type: "Tool",
        duration: 90,
      },
      {
        name: "PuzzleLand",
        price: 15,
        emoji: "🧩",
        description:
          "Piece together the beauty of Lucerne's historic landmarks with this captivating jigsaw puzzle by PuzzleLand.",
        type: "Game",
        duration: 45,
      },
      {
        name: "Alpine Adornments",
        price: 10,
        emoji: "🌼",
        description:
          "Adorn your keys with a delicate Edelweiss keychain by Alpine Adornments, symbolizing Alpine resilience and beauty.",
        type: "Accessory",
        duration: 10,
      },
      {
        name: "Swiss Couture",
        price: 25,
        emoji: "👜",
        description:
          "Carry a piece of Lucerne wherever you go with this stylish and eco-friendly tote bag by Swiss Couture.",
        type: "Fashion",
        duration: 60,
      },
      {
        name: "BellChimes",
        price: 12,
        emoji: "🔔",
        description:
          "Bring a touch of Swiss folklore to your fridge with a charming cowbell magnet by BellChimes, echoing the melodies of the Alps.",
        type: "Decor",
        duration: 15,
      },
      {
        name: "Alpine Vistas",
        price: 40,
        emoji: "🏔️",
        description:
          "Admire the breathtaking beauty of the Alps with this stunning poster by Alpine Vistas, capturing their majestic allure.",
        type: "Art",
        duration: 75,
      },
      {
        name: "MugJoy",
        price: 18,
        emoji: "☕",
        description:
          "Savor your morning coffee in a delightful Lucerne-themed mug by MugJoy, showcasing the city's scenic splendor.",
        type: "Drinkware",
        duration: 30,
      },
    ],
  },
  // 1 - Columbus
  {
    name: "Builder's Paradise",
    slogan: "Tools and supplies for the modern builder",
    shopkeeper: {
      name: "Samantha Kim",
      age: 28,
      img: "ohio1",
      occupation: "Shopkeeper and Architectural Designer",
      description:
        "Samantha is a driven and talented young designer with a love for all things building and construction. She is always happy to help customers find the perfect tools and supplies for their projects.",
    },
    items: [
      {
        name: "Construction Drones",
        description:
          "A set of two drones equipped with cameras and sensors for use in construction site mapping and surveying.",
        price: 60000,
        emoji: "🛸",
      },
      {
        name: "Modular Building Blocks",
        description:
          "A set of lightweight and durable blocks for building structures of all sizes. Can be easily modified and rearranged for endless design possibilities.",
        price: 40000,
        emoji: "🧱",
      },
      {
        name: "Virtual Reality Headset",
        description:
          "Experience the future of design and architecture with this advanced VR headset. Great for visualization and immersive design work.",
        price: 70000,
        emoji: "🧑‍🤝‍🧑",
      },
      {
        name: "3D Printing Pen",
        description:
          "A pen that allows you to draw and create 3D objects. Great for artists and designers of all skill levels.",
        price: 50000,
        emoji: "🖋️",
      },
    ],
    buildings: [
      {
        name: "The Curiosity Cabinet",
        description:
          "Unlock the wonders of the world at The Curiosity Cabinet. This eclectic store houses a diverse collection of antiques, artifacts, and oddities from around the globe. From ancient relics to peculiar treasures, it's a place where history and curiosity intertwine.",
        price: 200000,
        tags: [
          "Antiques",
          "Artifacts",
          "Oddities",
          "Curiosity",
        ],
        emoji: "🗝️",
      },
      {
        name: "Pixel Park",
        description:
          "Enter the realm of virtual reality at Pixel Park. This cutting-edge entertainment center offers immersive VR experiences, multiplayer gaming, and interactive simulations. Let your imagination run wild as you explore new dimensions and embrace the future of gaming.",
        price: 250000,
        tags: [
          "Virtual reality",
          "Gaming",
          "Entertainment",
          "Simulation",
        ],
        emoji: "🕹️",
      },
      {
        name: "Architectural Marvel",
        description:
          "Marvel at the architectural splendor of this historical landmark. With its grandiose columns, intricate carvings, and soaring domes, it stands as a testament to the city's rich history and cultural heritage. Embark on a journey through time and admire the craftsmanship of yesteryears.",
        price: 300000,
        tags: [
          "Landmark",
          "Architecture",
          "Historical",
          "Cultural heritage",
        ],
        emoji: "🏛️",
      },
      {
        name: "Serenity Gardens",
        description:
          "Find peace and tranquility at Serenity Gardens, a picturesque oasis in the heart of the city. With its lush greenery, serene ponds, and winding paths, it offers a respite from the urban bustle. Escape the noise and immerse yourself in the beauty of nature.",
        price: 150000,
        tags: [
          "Gardens",
          "Nature",
          "Tranquility",
          "Peaceful",
        ],
        emoji: "🌳",
      },
      {
        name: "Columbus Museum of Art",
        description:
          "Immerse yourself in the vibrant world of art at the Columbus Museum of Art. With its extensive collection of paintings, sculptures, and contemporary works, it celebrates creativity and showcases diverse artistic expressions. Discover inspiration and let art ignite your imagination.",
        price: 280000,
        tags: [
          "Art",
          "Museum",
          "Creativity",
          "Exhibitions",
        ],
        emoji: "🖼️",
      },
      {
        name: "Adrenaline Alley",
        description:
          "Embrace adventure at Adrenaline Alley, a thrilling amusement park featuring exhilarating rides, roller coasters, and heart-pounding attractions. From gravity-defying loops to daring drops, it's the ultimate destination for adrenaline junkies seeking an unforgettable experience.",
        price: 180000,
        tags: [
          "Amusement park",
          "Thrill rides",
          "Roller coasters",
          "Adrenaline",
        ],
        emoji: "🎢",
      },
    ],
    souvenirs: [
      {
        name: "Grant Gourmet Chocolates",
        price: 25,
        emoji: "🍫",
        description:
          "Indulge in the decadent flavors of Grant with this assortment of gourmet chocolates.",
        duration: 120,
        type: "Food",
      },
      {
        name: "Riverside Art Print",
        price: 45,
        emoji: "🖼️",
        description:
          "Add a touch of elegance to your living space with this captivating art print inspired by Riverside.",
        duration: 90,
        type: "Home Decor",
      },
      {
        name: "Summit Trail Hiking Backpack",
        price: 65,
        emoji: "🎒",
        description:
          "Embark on your next adventure with the Summit Trail hiking backpack.",
        duration: 240,
        type: "Outdoor Gear",
      },
      {
        name: "Elmwood Enamel Pin Set",
        price: 20,
        emoji: "📌",
        description:
          "Elevate your style with this Elmwood enamel pin set.",
        duration: 60,
        type: "Fashion Accessories",
      },
      {
        name: "Central Plaza Souvenir Plate",
        price: 35,
        emoji: "🍽️",
        description:
          "Commemorate your visit to Central Plaza with this collectible souvenir plate.",
        duration: 180,
        type: "Home Decor",
      },
      {
        name: "Magnolia Market Tote",
        price: 30,
        emoji: "👜",
        description:
          "Carry your essentials in style with this chic Magnolia Market tote.",
        duration: 120,
        type: "Fashion Accessories",
      },
      {
        name: "Liberty Stadium Football Jersey",
        price: 60,
        emoji: "🏈",
        description:
          "Show your team spirit with the Liberty Stadium football jersey.",
        duration: 150,
        type: "Sports",
      },
      {
        name: "Oakwood Orchard Scented Candle",
        price: 28,
        emoji: "🕯️",
        description:
          "Fill your home with the inviting aroma of Oakwood Orchard.",
        duration: 90,
        type: "Home Decor",
      },
      {
        name: "Waterfront Coffee Blend",
        price: 22,
        emoji: "☕",
        description:
          "Wake up to the rich flavors of Waterfront with this artisanal coffee blend.",
        duration: 120,
        type: "Food",
      },
      {
        name: "Harbor Bay Keychain",
        price: 20,
        emoji: "⚓",
        description:
          "Keep a piece of Harbor Bay close at hand with this nautical-themed keychain.",
        duration: 60,
        type: "Accessories",
      },
    ],
  },
  // 2 - Bonn
  {
    name: "Die Gute Warenhaus",
    slogan: "The best in quality and variety",
    shopkeeper: {
      name: "Hans Muller",
      age: 45,
      img: "bonn1",
      occupation: "Shopkeeper",
      physicalDescription:
        "Hans is a tall, handsome man with short brown hair and piercing blue eyes. He is always impeccably dressed and takes great pride in his shop and its offerings.",
      description:
        "Hans is a no-nonsense businessman with a keen eye for quality. He values customer satisfaction above all else and is always happy to help customers find exactly what they need.",
    },
    items: [
      {
        name: "Eisenbahn Trainset",
        description:
          "A high-quality trainset from the famous German brand Eisenbahn. Comes with a detailed engine, passenger cars, and a variety of track pieces.",
        price: 80000,
        emoji: "🚂",
      },
      {
        name: "Bauhaus Furniture Set",
        description:
          "A sleek and modern furniture set from the renowned German design school Bauhaus. Includes a couch, armchair, and coffee table.",
        price: 120000,
        emoji: "🛋️",
      },
      {
        name: "Bratwurst Grill Set",
        description:
          "Everything you need to grill the perfect bratwurst! Includes a grill pan, tongs, basting brush, and a variety of spices and rubs from the German brand Wurstmeister.",
        price: 40000,
        emoji: "🍔",
      },
      {
        name: "Schneekugel Snow Globe",
        description:
          "A beautifully crafted snow globe featuring a charming winter scene. Shake it up to see a flurry of fake snow! Made by the German brand Glaskunst.",
        price: 25000,
        emoji: "❄️",
      },
    ],
    buildings: [
      {
        name: "The Bavarian Biergarten",
        description:
          "Transport yourself to the heart of Bavaria at The Bavarian Biergarten. This traditional beer garden offers an authentic German experience with long communal tables, hearty Bavarian cuisine, and a wide selection of refreshing beers. Raise your stein, enjoy live music, and embrace the lively atmosphere.",
        price: 550000,
        tags: [
          "Beer garden",
          "Bavarian cuisine",
          "Live music",
          "Lively atmosphere",
        ],
        emoji: "🍻",
      },
      {
        name: "Castle of Legends",
        description:
          "Step into a fairytale at the Castle of Legends, a majestic fortress perched on a hill overlooking Bonn. With its medieval architecture, towering turrets, and sweeping views of the Rhine River, it embodies the charm and history of the region. Explore the castle's secrets and immerse yourself in a world of enchantment.",
        price: 600000,
        tags: [
          "Castle",
          "Medieval architecture",
          "Rhine River",
          "Enchantment",
        ],
        emoji: "🏰",
      },
      {
        name: "The Chocolate Factory",
        description:
          "Indulge your sweet tooth at The Chocolate Factory, a paradise for chocolate lovers. Witness the magic of chocolate making, sample delectable treats, and discover a world of cocoa delights. From pralines to truffles, this immersive experience is a chocolate lover's dream come true.",
        price: 400000,
        tags: [
          "Chocolate factory",
          "Chocolate making",
          "Sweet treats",
          "Cocoa delights",
        ],
        emoji: "🍫",
      },
      {
        name: "Rheinaue Park",
        description:
          "Escape to nature at Rheinaue Park, a sprawling green oasis in Bonn. With its picturesque landscapes, serene lakes, and abundant flora, it's an ideal spot for picnics, leisurely walks, and outdoor activities. Breathe in the fresh air and revel in the beauty of this urban retreat.",
        price: 350000,
        tags: [
          "Park",
          "Nature",
          "Picnic",
          "Outdoor activities",
        ],
        emoji: "🌳",
      },
      {
        name: "Museum of Beethoven",
        description:
          "Pay homage to the legendary composer at the Museum of Beethoven. Housed in a historic building, this museum showcases Beethoven's life, works, and his impact on the world of music. Immerse yourself in his genius and gain a deeper understanding of his profound musical legacy.",
        price: 500000,
        tags: [
          "Museum",
          "Beethoven",
          "Classical music",
          "Musical legacy",
        ],
        emoji: "🎵",
      },
      {
        name: "Café Am Rhein",
        description:
          "Relax and savor the beauty of the Rhine River at Café Am Rhein. This charming café offers panoramic views, delightful pastries, and a selection of aromatic coffees and teas. Whether you're enjoying a leisurely brunch or a cozy afternoon, let the riverside ambiance soothe your soul.",
        price: 300000,
        tags: [
          "Café",
          "Rhine River",
          "Panoramic views",
          "Cozy ambiance",
        ],
        emoji: "☕",
      },
    ],
    souvenirs: [
      {
        name: "Rhine Rhapsody Vinyl",
        price: 25,
        emoji: "🎵",
        description:
          "Experience the soul of Bonn with this limited edition vinyl featuring classical compositions by renowned local artists.",
        type: "Music",
        duration: 60,
      },
      {
        name: "Beethoven's Legacy Statue",
        price: 45,
        emoji: "🎶",
        description:
          "Celebrate Bonn's most famous son with this beautifully crafted statue capturing the essence of Ludwig van Beethoven.",
        type: "Art",
        duration: 90,
      },
      {
        name: "Rheinaue Park Puzzle",
        price: 20,
        emoji: "🧩",
        description:
          "Piece together the natural beauty of Bonn's Rheinaue Park with this scenic 500-piece puzzle, perfect for a cozy afternoon at home.",
        type: "Games",
        duration: 45,
      },
      {
        name: "Bonn Cathedral Snow Globe",
        price: 30,
        emoji: "❄️",
        description:
          "Capture the magical allure of Bonn's stunning cathedral with this intricately designed snow globe, a cherished keepsake for any collector.",
        type: "Home Decor",
        duration: 30,
      },
      {
        name: "Bonn Beer Stein",
        price: 15,
        emoji: "🍺",
        description:
          "Raise a glass to Bonn's brewing heritage with this traditional beer stein, featuring iconic landmarks and a frothy pint of local brew.",
        type: "Drinkware",
        duration: 60,
      },
      {
        name: "Bonn Skyline Poster",
        price: 12,
        emoji: "🌇",
        description:
          "Adorn your walls with a stunning poster showcasing Bonn's distinctive skyline, a blend of historic charm and modern architecture.",
        type: "Art",
        duration: 30,
      },
      {
        name: "Bonn Chocolate Delights",
        price: 8,
        emoji: "🍫",
        description:
          "Indulge your taste buds with a selection of handcrafted chocolates inspired by Bonn's local flavors and confectionery traditions.",
        type: "Food",
        duration: 15,
      },
      {
        name: "Bonn Historical Walking Tour",
        price: 40,
        emoji: "🚶‍♂️",
        description:
          "Embark on an immersive guided walking tour through Bonn's historic streets, unraveling the city's fascinating past and hidden stories.",
        type: "Experience",
        duration: 120,
      },
      {
        name: "Bonn Cityscape Keychain",
        price: 6,
        emoji: "🔑",
        description:
          "Carry a piece of Bonn with you wherever you go with this intricately designed keychain, featuring the city's iconic landmarks.",
        type: "Accessories",
        duration: 15,
      },
      {
        name: "Bonn Botanical Gardens Notebook",
        price: 12,
        emoji: "🌺",
        description:
          "Jot down your thoughts and inspirations in this charming notebook adorned with vibrant illustrations of Bonn's beautiful Botanical Gardens.",
        type: "Stationery",
        duration: 30,
      },
    ],
  },
  // 3 - Suzhou
  {
    name: "Modern Maker's Mart",
    slogan: "Building the future, one project at a time",
    shopkeeper: {
      name: "Liang Chen",
      age: 37,
      img: "suzhou1",
      occupation: "Shopkeeper and Landscape Architect",
      physicalDescription:
        "Liang is a petite and slender woman with long black hair and piercing brown eyes. She has a warm and welcoming demeanor, and always has a smile on her face.",
      description:
        "Liang is a talented landscape architect with a passion for all things botanical. She loves to share her knowledge and expertise with customers, and is always happy to help them find the perfect plants and gardening supplies.",
    },
    items: [
      {
        name: "Bamboo Water Feature",
        description:
          "A beautiful and calming water feature made from bamboo. Perfect for adding a touch of nature to any space.",
        price: 50000,
        emoji: "🌿",
      },
      {
        name: "Suzhou Silk Robes",
        description:
          "Luxurious robes made from the finest Suzhou silk. Available in a variety of colors and patterns.",
        price: 100000,
        emoji: "👘",
      },
      {
        name: "Jin Mao Tower Puzzle",
        description:
          "A challenging 3D puzzle featuring the iconic Jin Mao Tower in Shanghai. Great for fans of architecture and puzzle enthusiasts.",
        price: 40000,
        emoji: "🏙️",
      },
      {
        name: "Dragon Garden Statues",
        description:
          "A set of two beautifully detailed dragon statues, perfect for adding a touch of whimsy to any garden. Made by the Chinese brand Yinglong.",
        price: 200000,
        emoji: "🐉",
      },
    ],
    buildings: [
      {
        name: "Green Valley Villa",
        description:
          "Spacious residential villa with a beautiful garden and scenic views. Features 5 bedrooms, 3 bathrooms, a modern kitchen, and a swimming pool.",
        price: 380000,
        tags: [
          "residential",
          "scenic views",
          "swimming pool",
        ],
        emoji: "🏡",
      },
      {
        name: "City Center Loft",
        description:
          "Contemporary loft located in the heart of the city. Perfect for urban living with an open floor plan, high ceilings, and trendy interior design.",
        price: 320000,
        tags: [
          "residential",
          "city center",
          "modern design",
        ],
        emoji: "🏙️",
      },
      {
        name: "Golden Plaza Office Space",
        description:
          "Prime commercial space in a bustling business district. Ideal for startups and small businesses. Includes multiple private offices, conference rooms, and a reception area.",
        price: 290000,
        tags: [
          "commercial",
          "office space",
          "business district",
        ],
        emoji: "🏢",
      },
      {
        name: "Historic Landmark Manor",
        description:
          "Exquisite historical manor dating back to the 18th century. Immerse yourself in the city's rich heritage with grand architecture, vintage charm, and spacious grounds.",
        price: 400000,
        tags: ["historical", "landmark", "vintage charm"],
        emoji: "🏰",
      },
      {
        name: "Ocean Breeze Beach House",
        description:
          "Stunning beachfront property with breathtaking ocean views. Features a private beach access, outdoor entertainment area, and luxurious amenities.",
        price: 360000,
        tags: ["residential", "beachfront", "ocean views"],
        emoji: "🏖️",
      },
      {
        name: "Skyline Tower",
        description:
          "Modern skyscraper offering luxurious living in the city. Enjoy panoramic city views, high-end amenities, and a convenient location close to shopping and entertainment.",
        price: 380000,
        tags: ["residential", "skyscraper", "city views"],
        emoji: "🏢",
      },
    ],
    souvenirs: [
      {
        name: "Silk Blossoms Scarf",
        price: 35,
        emoji: "🌸",
        description:
          "Wrap yourself in the elegance of Suzhou's silk industry with this exquisite scarf adorned with delicate blossoms and intricate patterns.",
        type: "Fashion",
        duration: 45,
      },
      {
        name: "Classical Garden Tea Set",
        price: 50,
        emoji: "🍵",
        description:
          "Savor the tradition of Suzhou's classical gardens with this tea set, featuring hand-painted motifs inspired by renowned garden designs.",
        type: "Drinkware",
        duration: 60,
      },
      {
        name: "Suzhou Embroidery Artwork",
        price: 80,
        emoji: "🧵",
        description:
          "Admire the skill of Suzhou's renowned embroidery artisans with this stunning artwork, showcasing intricate stitches and vibrant colors.",
        type: "Art",
        duration: 90,
      },
      {
        name: "Jasmine Perfume Oil",
        price: 25,
        emoji: "🌼",
        description:
          "Capture the alluring fragrance of Suzhou's famous jasmine flowers with this exquisite perfume oil, a sensory journey of floral bliss.",
        type: "Beauty",
        duration: 30,
      },
      {
        name: "Suzhou Opera Mask Set",
        price: 45,
        emoji: "🎭",
        description:
          "Embrace the theatrical charm of Suzhou's opera traditions with this set of beautifully crafted opera masks, each representing a unique character.",
        type: "Art",
        duration: 60,
      },
      {
        name: "Suzhou Silk Hand Fan",
        price: 20,
        emoji: "🌬️",
        description:
          "Stay cool in style with this elegant hand fan made from Suzhou silk, featuring intricate designs and a sturdy bamboo frame.",
        type: "Accessories",
        duration: 30,
      },
      {
        name: "Suzhou Street Food Cookbook",
        price: 15,
        emoji: "🍲",
        description:
          "Embark on a culinary adventure with this cookbook filled with authentic recipes of Suzhou's vibrant street food scene, bringing the flavors of the city to your kitchen.",
        type: "Books",
        duration: 45,
      },
      {
        name: "Suzhou Embroidered Slippers",
        price: 30,
        emoji: "🥿",
        description:
          "Step into comfort and elegance with these Suzhou embroidered slippers, featuring soft silk and intricate embroidery motifs inspired by local culture.",
        type: "Fashion",
        duration: 30,
      },
      {
        name: "Suzhou Water Town Painting",
        price: 65,
        emoji: "🖌️",
        description:
          "Adorn your walls with the charm of Suzhou's picturesque water towns with this hand-painted artwork, capturing the idyllic beauty of the region.",
        type: "Art",
        duration: 90,
      },
      {
        name: "Suzhou Silk Jewelry Pouch",
        price: 12,
        emoji: "💍",
        description:
          "Store your precious jewelry in this elegant silk pouch, embroidered with traditional Suzhou patterns, and keep your treasures safe in style.",
        type: "Accessories",
        duration: 15,
      },
    ],
  },
  // 4 - Lima
  {
    name: "El Taller del Artesano",
    slogan:
      "Bringing traditional craftsmanship to the modern world",
    shopkeeper: {
      name: "Sofía Ortiz",
      age: 32,
      img: "lima",
      occupation: "Shopkeeper and Craftswoman",
      physicalDescription:
        "Sofía is a petite and energetic woman with long black hair and dark brown eyes. She is always impeccably dressed and takes great pride in her shop and its offerings.",
      personalDescription:
        "Sofía is a skilled artisan with a passion for traditional Peruvian crafts. She loves to share her knowledge and skills with customers, and is always happy to help them find the perfect piece of handcrafted art.",
    },
    items: [
      {
        name: "Alpaca Wool Scarf",
        description:
          "A beautifully soft and warm scarf made from high-quality alpaca wool. Available in a variety of colors.",
        price: 140000,
        emoji: "🧣",
      },
      {
        name: "Machu Picchu Puzzle",
        description:
          "A challenging 3D puzzle featuring the iconic ancient Incan site of Machu Picchu. Great for history buffs and puzzle enthusiasts.",
        price: 75000,
        emoji: "🏙️",
      },
      {
        name: "Lima Street Art Prints",
        description:
          "A set of three colorful and vibrant prints featuring street art from the vibrant city of Lima. Made by the Peruvian brand Arte Callejero.",
        price: 90000,
        emoji: "🎨",
      },
      {
        name: "Inca Gold Earrings",
        description:
          "A stunning pair of earrings made from genuine Inca gold. Handcrafted by skilled artisans in the traditional Peruvian style.",
        price: 500000,
        emoji: "💰",
      },
    ],
    buildings: [
      {
        name: "Central Mall",
        description:
          "Modern shopping center with over 100 stores and entertainment options.",
        price: 650000,
        tags: ["Commercial", "Shopping", "Entertainment"],
        emoji: "🛍️",
      },
      {
        name: "Sunset Heights",
        description:
          "Luxurious residential apartments with stunning views of the city and ocean.",
        price: 700000,
        tags: ["Residential", "Luxury", "Views"],
        emoji: "🏙️",
      },
      {
        name: "Inca Heritage Museum",
        description:
          "Historical museum showcasing artifacts from the ancient Inca civilization.",
        price: 550000,
        tags: ["Landmark", "Museum", "History"],
        emoji: "🏛️",
      },
      {
        name: "Ocean Breeze Hotel",
        description:
          "Seaside hotel offering comfortable rooms, a spa, and panoramic ocean views.",
        price: 600000,
        tags: ["Commercial", "Hospitality", "Views"],
        emoji: "🏨",
      },
      {
        name: "El Dorado Tower",
        description:
          "Iconic skyscraper housing offices, restaurants, and a rooftop observation deck.",
        price: 650000,
        tags: ["Commercial", "Office Space", "Dining"],
        emoji: "🏢",
      },
      {
        name: "Miraflores Park",
        description:
          "Beautiful park in the heart of the city with green spaces, playgrounds, and walking paths.",
        price: 500000,
        tags: ["Landmark", "Park", "Recreation"],
        emoji: "🌳",
      },
    ],
    souvenirs: [
      {
        name: "InkaTrek Backpack",
        price: 45,
        emoji: "🎒",
        description:
          "Embark on your own urban adventure with the stylish and durable InkaTrek Backpack, perfect for exploring the vibrant streets of Lima.",
        type: "Accessories",
        duration: 60,
      },
      {
        name: "Pachamama Necklace",
        price: 30,
        emoji: "🌺",
        description:
          "Carry the spirit of Peru with you through the elegant Pachamama Necklace, inspired by the rich cultural heritage and natural beauty of Lima.",
        type: "Jewelry",
        duration: 15,
      },
      {
        name: "Ceviche Masterclass",
        price: 75,
        emoji: "🍣",
        description:
          "Unleash your culinary creativity with a Ceviche Masterclass, where you'll learn to prepare this iconic Peruvian dish, influenced by Lima's coastal cuisine.",
        type: "Experience",
        duration: 120,
      },
      {
        name: "Andean Breeze Shawl",
        price: 55,
        emoji: "🧣",
        description:
          "Wrap yourself in warmth and style with the Andean Breeze Shawl, showcasing traditional patterns inspired by the Andean highlands near Lima.",
        type: "Apparel",
        duration: 45,
      },
      {
        name: "Architectural Marvels Puzzle",
        price: 35,
        emoji: "🧩",
        description:
          "Piece together Lima's iconic architectural marvels with this captivating puzzle, featuring renowned landmarks like the Huaca Pucllana and the Basilica of San Francisco.",
        type: "Games",
        duration: 90,
      },
      {
        name: "Lima Nights Candle",
        price: 20,
        emoji: "🕯️",
        description:
          "Immerse your space in the enchanting scents of Lima's vibrant nightlife with the Lima Nights Candle, handcrafted with aromatic Peruvian essences.",
        type: "Home Decor",
        duration: 25,
      },
      {
        name: "Incan Heritage Notebook",
        price: 15,
        emoji: "📔",
        description:
          "Jot down your thoughts and travel memories in the Incan Heritage Notebook, featuring beautiful illustrations inspired by the ancient Incan civilization.",
        type: "Stationery",
        duration: 30,
      },
      {
        name: "Lima Street Art Print",
        price: 40,
        emoji: "🖼️",
        description:
          "Adorn your walls with the vibrant colors of Lima's street art scene, captured in a high-quality print that celebrates the city's urban creativity.",
        type: "Art",
        duration: 20,
      },
      {
        name: "Peruvian Blend Coffee",
        price: 25,
        emoji: "☕",
        description:
          "Awaken your senses with the exquisite flavors of Peruvian Blend Coffee, sourced from the lush coffee plantations surrounding Lima.",
        type: "Food & Beverage",
        duration: 10,
      },
      {
        name: "Huaca Pottery Set",
        price: 50,
        emoji: "🏺",
        description:
          "Experience the ancient art of pottery with the Huaca Pottery Set, inspired by the intricate designs found on archaeological artifacts near Lima.",
        type: "Decorative",
        duration: 40,
      },
    ],
  },
  // 5 - Flores
  {
    name: "La Tienda de Artesanías",
    slogan:
      "Authentic handcrafted treasures from Guatemala",
    shopkeeper: {
      name: "Maria Hernandez",
      age: 26,
      occupation: "Shopkeeper and Weaver",
      physicalDescription:
        "Maria is a young woman with long black hair and warm brown eyes. She has a friendly and welcoming demeanor, and always has a smile on her face.",
      personalDescription:
        "Maria is a talented weaver with a passion for traditional Guatemalan crafts. She loves to share her skills with customers and is always happy to help them find the perfect handcrafted piece.",
    },
    items: [
      {
        name: "Mayan Weaved Blanket",
        description:
          "A beautifully crafted blanket with intricate weaved patterns inspired by traditional Mayan designs. Made from high-quality wool.",
        price: 160000,
        emoji: "🛏️",
      },
      {
        name: "Chichicastenango Pottery Set",
        description:
          "A set of four handcrafted pots in the traditional style of Chichicastenango, Guatemala. Perfect for adding a touch of culture to any home.",
        price: 150000,
        emoji: "🍲",
      },
      {
        name: "Antigua Street Art Prints",
        description:
          "A set of three vibrant prints featuring street art from the historic city of Antigua, Guatemala. Made by the brand Arte Callejero.",
        price: 140000,
        emoji: "🎨",
      },
      {
        name: "Guatemalan Jade Necklace",
        description:
          "A stunning necklace made from genuine Guatemalan jade. Handcrafted by skilled artisans in the traditional Mayan style.",
        price: 220000,
        emoji: "💎",
      },
    ],
    buildings: [
      {
        name: "Villa Del Lago",
        description:
          "Spacious lakeside villa with stunning views, 3 bedrooms, and a private dock.",
        price: 820000,
        tags: ["lakefront", "luxury", "scenic views"],
        emoji: "🏡",
      },
      {
        name: "Casa Azul",
        description:
          "Charming blue house in the heart of Flores, featuring 2 bedrooms and a rooftop terrace.",
        price: 530000,
        tags: ["central location", "rooftop terrace"],
        emoji: "🏠",
      },
      {
        name: "Hacienda de Flores",
        description:
          "Elegant hacienda-style estate with 5 bedrooms, lush gardens, and a pool.",
        price: 960000,
        tags: ["spacious", "swimming pool", "luxurious"],
        emoji: "🏰",
      },
      {
        name: "El Mirador",
        description:
          "Modern apartment with panoramic views, 1 bedroom, and a balcony overlooking the city.",
        price: 600000,
        tags: ["city view", "modern design"],
        emoji: "🏢",
      },
      {
        name: "La Casita",
        description:
          "Cozy cottage with a rustic charm, surrounded by nature, and a fireplace.",
        price: 500000,
        tags: ["rustic", "nature retreat", "fireplace"],
        emoji: "🏘️",
      },
      {
        name: "Penthouse Vista",
        description:
          "Luxurious penthouse with floor-to-ceiling windows, 3 bedrooms, and a rooftop pool.",
        price: 890000,
        tags: [
          "penthouse",
          "panoramic views",
          "rooftop pool",
        ],
        emoji: "🏩",
      },
    ],
    souvenirs: [
      {
        name: "Mayan Sunrise Tote Bag",
        price: 25,
        emoji: "👜",
        description:
          "Carry a piece of Flores with you wherever you go with the vibrant Mayan Sunrise Tote Bag, featuring intricate Mayan patterns inspired by Guatemala's rich heritage.",
        type: "Accessories",
        duration: 30,
      },
      {
        name: "Jungle Adventure Hiking Shoes",
        price: 75,
        emoji: "🥾",
        description:
          "Embark on exciting jungle treks with confidence and style wearing the Jungle Adventure Hiking Shoes, designed for durability and comfort in the rugged terrains surrounding Flores.",
        type: "Footwear",
        duration: 60,
      },
      {
        name: "Guatemalan Handwoven Hammock",
        price: 60,
        emoji: "🌴",
        description:
          "Relax in the ultimate comfort of a traditional Guatemalan Handwoven Hammock, handcrafted by skilled artisans using vibrant threads that represent the beauty of Flores' natural landscapes.",
        type: "Home Decor",
        duration: 45,
      },
      {
        name: "Tikal Temple Puzzle",
        price: 30,
        emoji: "🧩",
        description:
          "Piece together the magnificent Tikal Temple with this captivating puzzle, showcasing the grandeur of one of Guatemala's most iconic archaeological sites near Flores.",
        type: "Games",
        duration: 90,
      },
      {
        name: "Flora and Fauna Ceramic Mug",
        price: 18,
        emoji: "☕",
        description:
          "Savor your morning coffee in a delightful Flora and Fauna Ceramic Mug, adorned with vibrant illustrations of the unique plant and animal species found in the jungles surrounding Flores.",
        type: "Drinkware",
        duration: 30,
      },
      {
        name: "Quetzal Feather Earrings",
        price: 35,
        emoji: "🪶",
        description:
          "Adorn yourself with the elegance of Quetzal Feather Earrings, inspired by the magnificent bird species that are native to the Flores region.",
        type: "Jewelry",
        duration: 15,
      },
      {
        name: "Cacao Chocolate Gift Set",
        price: 40,
        emoji: "🍫",
        description:
          "Indulge in the rich flavors of Guatemalan cacao with the Cacao Chocolate Gift Set, featuring a selection of artisanal chocolates that highlight the country's renowned chocolate-making traditions.",
        type: "Food & Beverage",
        duration: 20,
      },
      {
        name: "Guatemalan Textile Wall Hanging",
        price: 55,
        emoji: "🧵",
        description:
          "Adorn your walls with a captivating Guatemalan Textile Wall Hanging, meticulously woven with vibrant threads that showcase the artistry and cultural heritage of Flores.",
        type: "Art",
        duration: 25,
      },
      {
        name: "Lake Petén Itzá Postcard Set",
        price: 12,
        emoji: "🌅",
        description:
          "Send a piece of Flores to your loved ones with the stunning Lake Petén Itzá Postcard Set, featuring breathtaking views of the picturesque lake and its surrounding landscapes.",
        type: "Stationery",
        duration: 10,
      },
      {
        name: "Mayan Calendar Keychain",
        price: 10,
        emoji: "🗝️",
        description:
          "Carry a symbol of ancient Mayan wisdom with the Mayan Calendar Keychain, a miniature replica of the iconic calendar stone that represents Flores' deep historical roots.",
        type: "Accessories",
        duration: 5,
      },
    ],
  },

  // 6 - ??
  // 7 - ??
  // 8 - ??
]
