import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : [
        { id: 1, name: 'Rizwan', status: 'Active' },
        { id: 2, name: 'Hanzla', status: 'Inactive' },
        { id: 3, name: 'Shehroz', status: 'Active' },
    ]
}

export const slice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    statusUpdate: (state, action) => {
    const idToUpdate = action.payload;
    const userToUpdate = state.value.find((u) => u.id === idToUpdate);
      if (userToUpdate) {
        userToUpdate.status = userToUpdate.status === 'Active' ? 'Inactive' : 'Active';
      }
    },
  },
})

export const { statusUpdate } = slice.actions;
export const statusUpdateSelector = (state) => state.status.value

export default slice.reducer