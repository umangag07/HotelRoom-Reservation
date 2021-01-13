import b1 from "../src/Assets/images/rooms/bathroom1.jpg";
import b2 from "../src/Assets/images/rooms/bathroom2.jpg";
import b3 from "../src/Assets/images/rooms/bathroom3.jpg";
import b4 from "../src/Assets/images/rooms/bathroom4.jpg";
import c1 from "../src/Assets/images/rooms/closet1.jpg";
import c2 from "../src/Assets/images/rooms/closet2.jpg";
import r1 from "../src/Assets/images/rooms/room1.jpg";
import r3 from "../src/Assets/images/rooms/room3.jpg";
import r4 from "../src/Assets/images/rooms/room4.jpg";
import r5 from "../src/Assets/images/rooms/room5.jpg";
import r7 from "../src/Assets/images/rooms/room7.jpg";
import r8 from "../src/Assets/images/rooms/room8.jpg";
import r9 from "../src/Assets/images/rooms/room9.jpg";
import r10_c from "../src/Assets/images/rooms/room10_couple.jpg";
import r11_d from "../src/Assets/images/rooms/room11_double.jpg";
import r6_d from "../src/Assets/images/rooms/room6_double.jpg";
import r2_d from "../src/Assets/images/rooms/room2_double.jpg";

export default [
  {
    roomId: {
      id: "1",
    },
    roomFields: {
      name: "singl-Economy",
      type: "single",
      price: "1500",
      capacity: 1,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r1,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
      ],
    },
  },
  {
    roomId: {
      id: "2",
    },
    roomFields: {
      name: "Double Economy",
      type: "family",
      price: "2500",
      capacity: 2,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r2_d,
        },
        {
          url: b2,
        },
        {
          url: c2,
        },
      ],
    },
  },
  {
    roomId: {
      id: "3",
    },
    roomFields: {
      name: "single-standard",
      type: "single",
      price: "3000",
      capacity: 1,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r3,
        },
        {
          url: b3,
        },
        {
          url: c1,
        },
      ],
    },
  },
  {
    roomId: {
      id: "4",
    },
    roomFields: {
      name: "Delux",
      type: "family",
      price: "4000",
      capacity: 4,
      breakfast: true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r4,
        },
        {
          url: b4,
        },
        {
          url: c2,
        },
      ],
    },
  },
  {
    roomId: {
      id: "5",
    },
    roomFields: {
      name: "Double standard",
      type: "pair",
      price: "2700",
      capacity: 2,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r5,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
      ],
    },
  },
  {
    roomId: {
      id: "6",
    },
    roomFields: {
      name: "Double delux",
      type: "pair",
      price: "3500",
      capacity: 2,
      breakfast: true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r6_d,
        },
        {
          url: b3,
        },
        {
          url: c2,
        },
      ],
    },
  },
  {
    roomId: {
      id: "7",
    },
    roomFields: {
      name: "single delux",
      type: "single",
      price: "5000",
      capacity: 1,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r7,
        },
        {
          url: b4,
        },
        {
          url: c1,
        },
      ],
    },
  },
  {
    roomId: {
      id: "8",
    },
    roomFields: {
      name: "Delux",
      type: "family",
      price: "6500",
      capacity: 4,
      breakfast: true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r8,
        },
        {
          url: b2,
        },
        {
          url: c2,
        },
      ],
    },
  },
  {
    roomId: {
      id: "9",
    },
    roomFields: {
      name: "Couple Retreat",
      type: "couple",
      price: "7500",
      capacity: 2,
      breakfast: true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r9,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
      ],
    },
  },
  {
    roomId: {
      id: "10",
    },
    roomFields: {
      name: "Couple Retreat",
      type: "couple",
      price: "5500",
      capacity: 2,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r10_c,
        },
        {
          url: b4,
        },
        {
          url: c2,
        },
      ],
    },
  },
  {
    roomId: {
      id: "11",
    },
    roomFields: {
      name: "Double Delux",
      type: "pair",
      price: "4200",
      capacity: 2,
      breakfast: true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.`,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r11_d,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
      ],
    },
  },
];
