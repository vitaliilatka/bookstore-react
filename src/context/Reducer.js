const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            const bookToAdd = state.books.find(book => book.id === action.payload);
            const existingCartItem = state.carts.find(
                cartItem => cartItem.book.id === action.payload
            );
            if (existingCartItem) {
                return {
                    ...state,
                    carts: state.carts.map(cartItem =>
                        cartItem.book.id === action.payload
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    )
                };
            } else {
                return {
                    ...state,
                    carts: [...state.carts, { book: bookToAdd, quantity: 1 }]
                };
            }
        case "FETCH_CART":
            return {
                ...state,
                carts: action.payload
            };
        case "UPDATE_CART":
            return {
                ...state,
                carts: state.carts.map(cartItem =>
                    cartItem.book.id === action.payload.id
                        ? { ...cartItem, quantity: action.payload.quantity }
                        : cartItem
                )
            };
        case "REMOVE_CART":
            return {
                ...state,
                carts: state.carts.filter(cartItem => cartItem.book.id !== action.payload)
            };
        case "GET_SEARCHED_STRING":
            return {
                ...state,
                searchString: action.payload
            };
        case "GET_SEARCHED_BOOKS":
            const searchedBooks = state.books.filter(book =>
                book.title.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                searchedBooks
            };
        case "CLEAR_SEARCH":
            return {
                ...state,
                searchString: null,
                searchedBooks: []
            };

        default:
            return state;
    }
};

export default reducer;