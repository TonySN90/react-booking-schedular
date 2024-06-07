export const bookings = [
  {
    id: 1,
    created_at: "2024-06-10T09:56:34.223317+00:00",
    startDate: "2024-06-20T10:00:00+00:00",
    endDate: "2024-06-05T10:00:00+00:00",
    numNights: 6,
    numGuests: 2,
    status: "checkedOut",
    cabinPrice: 150,
    extrasPrice: 192,
    totalPrice: 1092,
    isPaid: true,
    hasBreakfast: true,
    cabins: {
      id: 1,
      name: "Zimmer 1",
      image:
        "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.6535224382262741-cabin_02.jpg",
      price: 150,
      category: "Doppelzimmer",
    },
    guests: {
      id: 1,
      city: "Ulmichstadt",
      email: "ulmich@gmail.com",
      phone: 160666666,
      address: "Ulmichstraße 4",
      country: "Deutschland",
      fullName: "Daniela Ulmich",
      postalCode: "18528",
      information: "Kommt zum ersten mal",
    },
  },
];

export const cabins = [
  {
    "0": {
      id: 1,
      created_at: "2024-03-05T10:03:46.414455+00:00",
      name: "Zimmer 1",
      category: "Mehrbettzimmer",
      capacity: 2,
      price: 140,
      discount: 130,
      image:
        "https://dphwgwsehqjvebdyhncn.supabase.co/storage/v1/object/public/cabin_images/0.3285083427361619-cabin_01.jpg",
      description: "super nice!!",
    },
  },
];