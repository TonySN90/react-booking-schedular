export const bookings = [
  // Cabin 1
  {
    id: 1,
    startDate: "2024-05-28T10:00:00+00:00",
    endDate: "2024-06-04T10:00:00+00:00",
    numGuests: 2,
    status: "checkedIn",
    cabin: {
      id: 1,
    },
    guests: {
      id: 1,
      fullName: "Daniela Ulmich",
    },
  },
  {
    id: 2,
    startDate: "2024-06-05T10:00:00+00:00",
    endDate: "2024-06-12T10:00:00+00:00",
    numGuests: 2,
    status: "unconfirmed",
    cabin: {
      id: 1,
    },
    guests: {
      id: 2,
      fullName: "Max Mustermann",
    },
  },
  {
    id: 3,
    startDate: "2024-06-20T10:00:00+00:00",
    endDate: "2024-06-26T10:00:00+00:00",
    numGuests: 1,
    status: "unconfirmed",
    cabin: {
      id: 1,
    },
    guests: {
      id: 3,
      fullName: "Maria Musterfrau",
    },
  },
  // Cabin 2
  {
    id: 4,
    startDate: "2024-05-30T10:00:00+00:00",
    endDate: "2024-06-05T10:00:00+00:00",
    numGuests: 3,
    status: "checkedOut",
    cabin: {
      id: 2,
    },
    guests: {
      id: 4,
      fullName: "John Doe",
    },
  },
  {
    id: 5,
    startDate: "2024-06-05T10:00:00+00:00",
    endDate: "2024-06-12T10:00:00+00:00",
    numGuests: 2,
    status: "checkedIn",
    cabin: {
      id: 2,
    },
    guests: {
      id: 5,
      fullName: "Jane Smith",
    },
  },
  {
    id: 6,
    startDate: "2024-06-12T10:00:00+00:00",
    endDate: "2024-06-20T10:00:00+00:00",
    numGuests: 4,
    status: "unconfirmed",
    cabin: {
      id: 2,
    },
    guests: {
      id: 6,
      fullName: "Alice Johnson",
    },
  },
  // Cabin 3
  {
    id: 7,
    startDate: "2024-05-29T10:00:00+00:00",
    endDate: "2024-06-02T10:00:00+00:00",
    numGuests: 3,
    status: "checkedOut",
    cabin: {
      id: 3,
    },
    guests: {
      id: 7,
      fullName: "Bob Brown",
    },
  },
  {
    id: 8,
    startDate: "2024-06-03T10:00:00+00:00",
    endDate: "2024-06-07T10:00:00+00:00",
    numGuests: 2,
    status: "checkedOut",
    cabin: {
      id: 3,
    },
    guests: {
      id: 8,
      fullName: "Charlie Green",
    },
  },
  {
    id: 9,
    startDate: "2024-06-07T10:00:00+00:00",
    endDate: "2024-06-14T10:00:00+00:00",
    numGuests: 1,
    status: "checkedIn",
    cabin: {
      id: 3,
    },
    guests: {
      id: 9,
      fullName: "Diana Blue",
    },
  },
  {
    id: 10,
    startDate: "2024-06-15T10:00:00+00:00",
    endDate: "2024-06-29T10:00:00+00:00",
    numGuests: 3,
    status: "unconfirmed",
    cabin: {
      id: 3,
    },
    guests: {
      id: 10,
      fullName: "Eve Black",
    },
  },
  // Cabin 4
  {
    id: 11,
    startDate: "2024-06-01T10:00:00+00:00",
    endDate: "2024-06-05T10:00:00+00:00",
    numGuests: 2,
    status: "checkedOut",
    cabin: {
      id: 4,
    },
    guests: {
      id: 11,
      fullName: "Frank White",
    },
  },
  {
    id: 12,
    startDate: "2024-06-05T10:00:00+00:00",
    endDate: "2024-06-11T10:00:00+00:00",
    numGuests: 4,
    status: "checkedIn",
    cabin: {
      id: 4,
    },
    guests: {
      id: 12,
      fullName: "Grace Pink",
    },
  },
  {
    id: 13,
    startDate: "2024-06-11T10:00:00+00:00",
    endDate: "2024-06-18T10:00:00+00:00",
    numGuests: 1,
    status: "unconfirmed",
    cabin: {
      id: 4,
    },
    guests: {
      id: 13,
      fullName: "Hank Red",
    },
  },
  // Cabin 5
  {
    id: 14,
    startDate: "2024-05-30T10:00:00+00:00",
    endDate: "2024-06-04T10:00:00+00:00",
    numGuests: 3,
    status: "checkedOut",
    cabin: {
      id: 5,
    },
    guests: {
      id: 14,
      fullName: "Ivy Grey",
    },
  },
  {
    id: 15,
    startDate: "2024-06-04T10:00:00+00:00",
    endDate: "2024-06-12T10:00:00+00:00",
    numGuests: 4,
    status: "checkedIn",
    cabin: {
      id: 5,
    },
    guests: {
      id: 15,
      fullName: "Jack Yellow",
    },
  },
  {
    id: 16,
    startDate: "2024-06-12T10:00:00+00:00",
    endDate: "2024-06-25T10:00:00+00:00",
    numGuests: 2,
    status: "unconfirmed",
    cabin: {
      id: 5,
    },
    guests: {
      id: 16,
      fullName: "Kate Purple",
    },
  },
  // Cabin 6
  {
    id: 17,
    startDate: "2024-05-29T10:00:00+00:00",
    endDate: "2024-06-03T10:00:00+00:00",
    numGuests: 1,
    status: "checkedOut",
    cabin: {
      id: 6,
    },
    guests: {
      id: 17,
      fullName: "Leo Orange",
    },
  },
  {
    id: 18,
    startDate: "2024-06-03T10:00:00+00:00",
    endDate: "2024-06-09T10:00:00+00:00",
    numGuests: 2,
    status: "checkedOut",
    cabin: {
      id: 6,
    },
    guests: {
      id: 18,
      fullName: "Mia Brown",
    },
  },
  {
    id: 19,
    startDate: "2024-06-09T10:00:00+00:00",
    endDate: "2024-06-16T10:00:00+00:00",
    numGuests: 3,
    status: "checkedIn",
    cabin: {
      id: 6,
    },
    guests: {
      id: 19,
      fullName: "Noah Blue",
    },
  },
  {
    id: 20,
    startDate: "2024-06-17T10:00:00+00:00",
    endDate: "2024-06-30T10:00:00+00:00",
    numGuests: 4,
    status: "unconfirmed",
    cabin: {
      id: 6,
    },
    guests: {
      id: 20,
      fullName: "Olivia Green",
    },
  },
  // Additional bookings to fill the month
  {
    id: 21,
    startDate: "2024-06-26T10:00:00+00:00",
    endDate: "2024-07-03T10:00:00+00:00",
    numGuests: 1,
    status: "unconfirmed",
    cabin: {
      id: 1,
    },
    guests: {
      id: 21,
      fullName: "Paul Grey",
    },
  },
  {
    id: 22,
    startDate: "2024-06-28T10:00:00+00:00",
    endDate: "2024-07-05T10:00:00+00:00",
    numGuests: 3,
    status: "unconfirmed",
    cabin: {
      id: 2,
    },
    guests: {
      id: 22,
      fullName: "Quincy Black",
    },
  },
  {
    id: 23,
    startDate: "2024-06-29T10:00:00+00:00",
    endDate: "2024-07-06T10:00:00+00:00",
    numGuests: 2,
    status: "unconfirmed",
    cabin: {
      id: 3,
    },
    guests: {
      id: 23,
      fullName: "Rachel White",
    },
  },
  {
    id: 24,
    startDate: "2024-06-30T10:00:00+00:00",
    endDate: "2024-07-10T10:00:00+00:00",
    numGuests: 1,
    status: "unconfirmed",
    cabin: {
      id: 4,
    },
    guests: {
      id: 24,
      fullName: "Steve Brown",
    },
  },
  {
    id: 25,
    startDate: "2024-06-25T10:00:00+00:00",
    endDate: "2024-07-08T10:00:00+00:00",
    numGuests: 4,
    status: "unconfirmed",
    cabin: {
      id: 5,
    },
    guests: {
      id: 25,
      fullName: "Tina Blue",
    },
  },
  {
    id: 26,
    startDate: "2024-07-02T10:00:00+00:00",
    endDate: "2024-07-10T10:00:00+00:00",
    numGuests: 3,
    status: "unconfirmed",
    cabin: {
      id: 6,
    },
    guests: {
      id: 26,
      fullName: "Uma Green",
    },
  },
  // Adding more longer bookings in June
  {
    id: 27,
    startDate: "2024-06-12T10:00:00+00:00",
    endDate: "2024-06-20T10:00:00+00:00",
    numGuests: 2,
    status: "checkedIn",
    cabin: {
      id: 1,
    },
    guests: {
      id: 27,
      fullName: "Victor Blue",
    },
  },
  {
    id: 28,
    startDate: "2024-06-20T10:00:00+00:00",
    endDate: "2024-06-28T10:00:00+00:00",
    numGuests: 4,
    status: "unconfirmed",
    cabin: {
      id: 2,
    },
    guests: {
      id: 28,
      fullName: "Wendy Grey",
    },
  },
  {
    id: 29,
    startDate: "2024-06-16T10:00:00+00:00",
    endDate: "2024-06-25T10:00:00+00:00",
    numGuests: 3,
    status: "unconfirmed",
    cabin: {
      id: 3,
    },
    guests: {
      id: 29,
      fullName: "Xander Black",
    },
  },
  {
    id: 30,
    startDate: "2024-06-18T10:00:00+00:00",
    endDate: "2024-06-30T10:00:00+00:00",
    numGuests: 1,
    status: "unconfirmed",
    cabin: {
      id: 4,
    },
    guests: {
      id: 30,
      fullName: "Yara White",
    },
  },
];

export const cabins = [
  {
    id: 1,
    name: "Zimmer 1",
    category: "Mehrbettzimmer",
    image:
      "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
  },
  {
    id: 2,
    name: "Zimmer 2",
    category: "Doppelzimmer",
    image:
      "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
  },
  {
    id: 3,
    name: "Zimmer 3",
    category: "Einzelzimmer",
    image:
      "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
  },
  {
    id: 4,
    name: "Zimmer 4",
    category: "Doppelzimer",
    image:
      "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
  },
  {
    id: 5,
    name: "Zimmer 5",
    category: "Doppelzimmer",
    image:
      "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
  },
  {
    id: 6,
    name: "Zimmer 6",
    category: "Familensuite",
    image:
      "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
  },
];
