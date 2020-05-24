import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
	items: [],
	item: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log("fetching post with reducer");
			return {
				...state,
				items: action.payload,
			};
		case NEW_POST:
			console.log("creating new post with reducer");
			return {
				...state,
				item: action.payload,
			};
		default:
			return state;
	}
}
