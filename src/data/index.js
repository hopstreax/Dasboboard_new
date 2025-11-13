import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Skatebnoard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban dep within Dashboard as seperate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structre",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Aarav',
      lastName: 'Sharma',
    },
    address: '123 MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
  },
  {
    name: {
      firstName: 'Ananya',
      lastName: 'Verma',
    },
    address: '45 Lodhi Street',
    city: 'New Delhi',
    state: 'Delhi',
  },
  {
    name: {
      firstName: 'Rohan',
      lastName: 'Mehta',
    },
    address: '88 Residency Lane',
    city: 'Ahmedabad',
    state: 'Gujarat',
  },
  {
    name: {
      firstName: 'Kavya',
      lastName: 'Reddy',
    },
    address: '12 Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
  },
  {
    name: {
      firstName: 'Aditya',
      lastName: 'Singh',
    },
    address: '78 Tagore Path',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
  },
  {
    name: {
      firstName: 'Ishita',
      lastName: 'Chakraborty',
    },
    address: '56 Salt Lake Road',
    city: 'Kolkata',
    state: 'West Bengal',
  },
  {
    name: {
      firstName: 'Arjun',
      lastName: 'Nair',
    },
    address: '9 Marine Drive',
    city: 'Kochi',
    state: 'Kerala',
  },
  {
    name: {
      firstName: 'Sneha',
      lastName: 'Patil',
    },
    address: '34 FC Road',
    city: 'Pune',
    state: 'Maharashtra',
  },
  {
    name: {
      firstName: 'Vihaan',
      lastName: 'Rajput',
    },
    address: '222 Sector 15',
    city: 'Chandigarh',
    state: 'Punjab',
  },
];
