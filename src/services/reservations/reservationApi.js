export async function getRestaurants() {
  // mock list
  return [
    { id: 'r1', name: 'Premium Eats Downtown' },
    { id: 'r2', name: 'Seaside Bistro' },
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


