import { configureStore } from '@reduxjs/toolkit';
import Dataslice from '../slice/Dataslice';
import Contentslice from '../slice/Contentslice';

const store = configureStore({
  reducer: {
    data:Dataslice,
    content:Contentslice,
    // other reducers...
  },
});

export default store;