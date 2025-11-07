import { useCallback, useMemo, useState, useEffect } from 'react';
import { getRestaurants, getTimeSlots, createReservation } from '../../services/reservations/reservationApi';

export default function useReservationForm(initial = {}) {
  const [restaurants, setRestaurants] = useState([]);
  const [slots, setSlots] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    restaurantId: initial.restaurantId || null,
    date: initial.date || '',
    timeSlotId: initial.timeSlotId || '',
    guests: initial.guests || 2,
    occasion: initial.occasion || '',
    addDecor: initial.addDecor || false,
  });

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  useEffect(() => {
    if (form.restaurantId && form.date) {
      getTimeSlots({ restaurantId: form.restaurantId, date: form.date }).then(setSlots);
    }
  }, [form.restaurantId, form.date]);

  const handlers = {
    setRestaurant: (id) => setForm((f) => ({ ...f, restaurantId: id })),
    setDate: (date) => setForm((f) => ({ ...f, date })),
    setTimeSlot: (timeSlotId) => setForm((f) => ({ ...f, timeSlotId })),
    setGuests: (guests) => setForm((f) => ({ ...f, guests })),
    setOccasion: (occasion) => setForm((f) => ({ ...f, occasion })),
    setAddDecor: (addDecor) => setForm((f) => ({ ...f, addDecor })),
  };

  const submit = useCallback(async () => {
    setSubmitting(true);
    try {
      await createReservation(form);
      // In a real app, navigate to confirmation
    } finally {
      setSubmitting(false);
    }
  }, [form]);

  return { form, handlers, slots, restaurants, submit, submitting };
}


