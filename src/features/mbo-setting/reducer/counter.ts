import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

export const selectCount = (state: RootState) => state['mbo-setting-counter']

export const { increment } = counterSlice.actions

export default counterSlice.reducer
