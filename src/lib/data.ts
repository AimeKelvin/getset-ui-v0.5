const accommodations = [
  {
    id: "mille-collines",
    slug: "mille-collines",
    name: "Hotel des Mille Collines",
    image: "https://i.pinimg.com/736x/15/c7/31/15c7316a6d8bae911a3b1a5e848ca4f5.jpg",
    description:
      "A historic hotel in Kigali offering luxurious accommodations and stunning city views.",
    price: "$120 / Night",
    rooms: [
      { name: "Standard Room", description: "City view", price: "$120" },
      { name: "Executive Suite", description: "Spacious with balcony", price: "$200" },
    ],
  },
  {
    id: "radisson-blu",
    slug: "radisson-blu",
    name: "Radisson Blu Hotel & Convention Centre",
    image: "https://i.pinimg.com/736x/9e/d4/2c/9ed42c503be3c0c803dce627265946d1.jpg",
    description:
      "A 5-star hotel in Kigali with modern amenities and a world-class convention center.",
    price: "$150 / Night",
    rooms: [
      { name: "Superior Room", description: "Modern comfort", price: "$150" },
      { name: "Business Class", description: "With lounge access", price: "$210" },
    ],
  },
  {
    id: "marriott",
    slug: "marriott",
    name: "Kigali Marriott Hotel",
    image:
      "https://media.istockphoto.com/id/1412521055/photo/the-marriott-hotel-in-glasgow.jpg?s=612x612&w=0&k=20&c=6Hyk1miCwsdSFVWeBh084t-PPMOMScNJe1tWtBl1EQk=",
    description:
      "A premium hotel in Kigali offering exceptional service and luxurious facilities.",
    price: "$200 / Night",
    rooms: [
      { name: "Deluxe King", description: "Elegant & comfortable", price: "$200" },
      { name: "Presidential Suite", description: "Top-floor luxury", price: "$400" },
    ],
  },
  {
    id: "the-retreat",
    slug: "the-retreat",
    name: "The Retreat by Heaven",
    image:
      "https://yellowzebrasafaris.com/media/38724/pool-loungers-the-retreat-kigali-rwanda.jpg?width=2048&height=1024&format=jpg&v=1da5e0fc08457b0",
    description:
      "A boutique luxury hotel in Kigali with eco-friendly design and personalized service.",
    price: "$300 / Night",
    rooms: [
      { name: "Luxury Villa", description: "Eco-luxury with pool access", price: "$300" },
      { name: "Spa Suite", description: "Private terrace and spa", price: "$450" },
    ],
  },
  {
    id: "serena",
    slug: "serena",
    name: "Serena Hotel Kigali",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/01/82/64/kigali-serena-hotel.jpg?w=900&h=500&s=1",
    description:
      "A 5-star hotel in Kigali offering a blend of traditional Rwandan hospitality and modern luxury.",
    price: "$250 / Night",
    rooms: [
      { name: "Deluxe Room", description: "Rwandan decor", price: "$250" },
      { name: "Executive Suite", description: "Spacious living area", price: "$350" },
    ],
  },
  {
    id: "gorillas-golf",
    slug: "gorillas-golf",
    name: "Gorillas Golf Hotel",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/60859816.jpg?k=bed3db4c74b585130e208f0b1769f90b47cee18118596921bca37df34be11f76&o=&hp=1",
    description:
      "A serene hotel in Kigali, perfect for business and leisure travelers.",
    price: "$140 / Night",
    rooms: [
      { name: "Standard Room", description: "Comfortable & clean", price: "$140" },
      { name: "Golf View", description: "Overlooks the course", price: "$180" },
    ],
  },
  {
    id: "five-to-five",
    slug: "five-to-five",
    name: "Five to Five Hotel",
    image:
      "https://nezasafaris.rw/wp-content/uploads/2021/03/872298_15071115240032095967.jpg",
    description:
      "A budget-friendly hotel in Kigali offering great service and comfortable rooms.",
    price: "$80 / Night",
    rooms: [
      { name: "Budget Room", description: "Affordable option", price: "$80" },
      { name: "Family Room", description: "Spacious for groups", price: "$100" },
    ],
  },
  {
    id: "lake-kivu-serena",
    slug: "lake-kivu-serena",
    name: "Lake Kivu Serena Hotel",
    image:
      "https://image-tc.galaxy.tf/wijpeg-6e9z5miesbu4tmthbpsshwg9w/hotel-entrance-1.jpg?width=767",
    description:
      "A lakeside resort in Gisenyi offering breathtaking views and luxurious accommodations.",
    price: "$220 / Night",
    rooms: [
      { name: "Lakeside Room", description: "Direct view of Lake Kivu", price: "$220" },
      { name: "Luxury Suite", description: "Private terrace", price: "$350" },
    ],
  },
  {
    id: "nyungwe-house",
    slug: "nyungwe-house",
    name: "One & Only Nyungwe House",
    image:
      "https://1.cdn.connectingtravel.com/dynamic-images/2000-2999/2960/2960_c=(0,2,1200,622)_w=940_h=488_pjpg.jpg?v=1c492915",
    description:
      "A luxury retreat in Nyungwe Forest, perfect for nature lovers and adventure seekers.",
    price: "$1,200 / Night",
    rooms: [
      { name: "Forest Suite", description: "Immersed in nature", price: "$1200" },
      { name: "Canopy Villa", description: "Ultimate forest experience", price: "$1600" },
    ],
  },
];

export { accommodations };
