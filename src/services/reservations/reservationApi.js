export async function getRestaurants() {
  // mock list
  return [
    {
      id: 'r1',
      name: 'The Gourmet Haven',
      address: '123 Culinary Lane, Foodville, CA 90210',
      defaultTable: 'Window View (Table 12)',
    },
    {
      id: 'r2',
      name: 'Seaside Bistro',
      address: '88 Oceanfront Drive, Bayview, CA 94019',
      defaultTable: 'Ocean Terrace (Table 6)',
    },
  ];
}

export async function getTimeSlots({ restaurantId, date }) {
  // mock time slots; in real app, use restaurantId and date
  return ['6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM'];
}

export async function createReservation(payload) {
  // pretend network delay
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, id: String(Date.now()), ...payload };
}


