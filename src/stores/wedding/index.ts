import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PersonSlice, createPersonSlice } from './person.slice';
import { GuestSlice, createGuestSlice } from './guests.slice';
import { DateSlice, createDateSlice } from './date.slice';
import { ConfirmationSlice, createConfirmationSlice } from './confirmationSlice';

type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createPersonSlice(...a),
      ...createGuestSlice(...a),
      ...createDateSlice(...a),
      ...createConfirmationSlice(...a)
    })
  )
);