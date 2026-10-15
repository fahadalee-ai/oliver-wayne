import { img } from "../utils/asset";
export const defaultAgencyDetail = {
  descriptionTitle: "About EstatePro Realty",

  description: [
    "EstatePro Realty is a trusted real estate agency dedicated to helping buyers, sellers, renters, and investors achieve their property goals. With years of industry experience, we deliver exceptional service backed by market expertise and local knowledge.",
    "Our team of experienced property consultants specializes in residential, commercial, and luxury real estate. We focus on providing personalized guidance, transparent communication, and seamless transactions from start to finish.",
    "Whether you're searching for your dream home, selling a property, or expanding your investment portfolio, EstatePro Realty is committed to delivering professional advice and outstanding results every step of the way.",
  ],

  listingIds: [1, 2, 3, 4],
  agentIds: [1, 2, 3, 4],

  reviews: [
    {
      id: 1,
      name: "Michael Brown",
      date: "July 12, 2026",
      rating: 5,
      image: img("profile-blog.jpg"),
      text: "Outstanding service from start to finish. The team was professional, responsive, and helped us find the perfect home. Highly recommended.",

      replies: [
        {
          id: 11,
          name: "EstatePro Realty",
          date: "July 13, 2026",
          rating: 5,
          image: img("logo.jpg"),
          text: "Thank you for your kind words. It was a pleasure assisting you, and we wish you all the best in your new home.",
        },
      ],
    },

    {
      id: 2,
      name: "Sarah Wilson",
      date: "June 28, 2026",
      rating: 5,
      image: img("message.jpg"),
      text: "The agents were knowledgeable, honest, and always available to answer our questions. They made the buying process simple and stress-free.",

      replies: [],
    },
  ],
};

export const agencies = [
  {
    id: 1,
    name: "EstatePro Realty",
    location: "Los Angeles, California, USA",
    image: img("agency.jpg"),
    listingsCount: "42 Listings",
    office: "+1 (213) 555-0101",
    mobile: "+1 (310) 555-0123",
    fax: "+1 (213) 555-0199",
    email: "contact@estatepro.com",
  },
  {
    id: 2,
    name: "Prime Homes Realty",
    location: "Miami, Florida, USA",
    image: img("agency1.jpg"),
    listingsCount: "35 Listings",
    office: "+1 (305) 555-0102",
    mobile: "+1 (786) 555-0145",
    fax: "+1 (305) 555-0198",
    email: "info@primehomes.com",
  },
  {
    id: 3,
    name: "UrbanNest Properties",
    location: "Austin, Texas, USA",
    image: img("agency3.jpg"),
    listingsCount: "28 Listings",
    office: "+1 (512) 555-0103",
    mobile: "+1 (737) 555-0167",
    fax: "+1 (512) 555-0197",
    email: "hello@urbannest.com",
  },
  {
    id: 4,
    name: "Summit Real Estate Group",
    location: "Seattle, Washington, USA",
    image: img("agency4.jpg"),
    listingsCount: "51 Listings",
    office: "+1 (206) 555-0104",
    mobile: "+1 (425) 555-0189",
    fax: "+1 (206) 555-0196",
    email: "support@summitreal.com",
  },
];
