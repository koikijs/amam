
const GETS_START = 'tag/GETS_START';
const GETS_SUCCESS = 'tag/GETS_SUCCESS';
const GETS_FAIL = 'tag/GETS_FAIL';
const SEARCH_START = 'tag/SEARCH_START';
const SEARCH_SUCCESS = 'tag/SEARCH_SUCCESS';
const SEARCH_FAIL = 'tag/SEARCH_FAIL';

const initialState = {
  items: [],
  selected: [],
  loaded: false,
  loading: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETS_START:
      return {
        ...state,
        loading: true
      };
    case GETS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        selected: action.res.body.items
      };
    case GETS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case SEARCH_START:
      return {
        ...state,
        loading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.res.body.items
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}
