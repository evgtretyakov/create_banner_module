/* Instruments */
import { counterSlice, bannerSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  banner: bannerSlice.reducer,
}
