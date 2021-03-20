import {createSelector} from 'reselect';

const selectDataState = state => state;

export const selectGnData = createSelector(
  [selectDataState],
  state => state.dataGn
);

export const selectData = createSelector(
  [selectDataState],
  state => state.data
);
export const selectDataLoadingState = createSelector(
  [selectDataState], state => state.loading
);
export const selectGnDataLoadingState = createSelector(
  [selectDataState], state => state.loadingGn
);
