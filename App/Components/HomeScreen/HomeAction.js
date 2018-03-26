import ACTION_TYPES from '../../Action/ActionsType';


export function showLoading() {
  return {
    type: ACTION_TYPES.PRODUCT_LIST_FETCHING_DATA
  }
}

export function resetState() {
  return {
    type: ACTION_TYPES.RESET_DATA
  }
}
