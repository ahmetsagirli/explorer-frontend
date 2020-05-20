import { ActionCreatorsMapObject } from 'redux';
import { GET_TOKENS_SUCCESS } from '../constants/tokens.types';
import { UnconfirmedTransactionsService } from '../services/unconfirmed.api.service';

export interface UnconfirmedTransactionsActions
  extends ActionCreatorsMapObject {
  getTokens: (params: any) => any;
}

export const UnconfirmedTransactionsActions: UnconfirmedTransactionsActions = {
  getTokens(params: any) {
    return (dispatch: any) =>
      UnconfirmedTransactionsService.getUnconfirmedTokensList(
        dispatch,
        params
      ).then((data: any) => {
        dispatch({
          payload: {
            offset: params.offset || 0,
          },
          type: GET_TOKENS_SUCCESS,
        });
      });
  },
};
