import { img } from "../utils/asset";
export const defaultAgentDetail = {
  descriptionTitle: "Meet James Anderson",
  description: [
    "With over 10 years of experience in residential and commercial real estate, James Anderson is dedicated to helping clients buy, sell, and rent properties with confidence. His market knowledge and client-first approach ensure a seamless experience from start to finish.",
    "James specializes in luxury homes, family residences, apartments, and investment properties. He provides honest advice, accurate property valuations, and skilled negotiation to help clients achieve the best possible results.",
    "Known for professionalism, transparency, and exceptional customer service, James has successfully assisted hundreds of buyers, sellers, and investors in finding the right property solutions tailored to their goals.",
  ],
  listingIds: [1, 2, 3, 4],
  reviews: [
    {
      id: 1,
      name: "Michael Brown",
      date: "July 8, 2026",
      rating: 5,
      image: img("profile-blog.jpg"),
      text: "James made the entire buying process smooth and stress-free. His communication was excellent, and he helped us find the perfect home within our budget.",

      replies: [
        {
          id: 11,
          name: "James Anderson",
          date: "July 9, 2026",
          rating: 5,
          image: img("logo.jpg"),
          text: "Thank you, Michael! It was a pleasure helping you and your family find your new home.",
        },
      ],
    },
    {
      id: 2,
      name: "Sarah Wilson",
      date: "June 24, 2026",
      rating: 5,
      image: img("message.jpg"),
      text: "Professional, knowledgeable, and always available to answer questions. I highly recommend James for anyone looking to sell or purchase property.",
      replies: [],
    },
  ],
};

export const agents = [
  {
    id: 1,
    name: "James Anderson",
    role: "Senior Property Consultant",
    image: img("agent1.jpg"),
    listingsCount: "24 Listings",
    office: "+1 (212) 555-0101",
    mobile: "+1 (917) 555-0125",
    fax: "+1 (212) 555-0199",
    email: "james@OliverWayne.com",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Residential Property Specialist",
    image: img("agent2.jpg"),
    listingsCount: "18 Listings",
    office: "+1 (212) 555-0102",
    mobile: "+1 (917) 555-0136",
    fax: "+1 (212) 555-0198",
    email: "emily@OliverWayne.com",
  },
  {
    id: 3,
    name: "Michael Carter",
    role: "Luxury Property Advisor",
    image: img("agent3.jpg"),
    listingsCount: "31 Listings",
    office: "+1 (212) 555-0103",
    mobile: "+1 (917) 555-0147",
    fax: "+1 (212) 555-0197",
    email: "michael@OliverWayne.com",
  },
  {
    id: 4,
    name: "Lucy Thompson",
    role: "Commercial Real Estate Consultant",
    image: img("agent4.jpg"),
    listingsCount: "16 Listings",
    office: "+1 (212) 555-0104",
    mobile: "+1 (917) 555-0158",
    fax: "+1 (212) 555-0196",
    email: "lucy@OliverWayne.com",
  },
];

export { propertyCategories as agentCategories } from "./filters";
