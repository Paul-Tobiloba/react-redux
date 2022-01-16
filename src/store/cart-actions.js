import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = (cart) => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch("https://toby-todo-default-rtdb.europe-west1.firebasedatabase.app/cart.json");

            if (!response.ok) {
                throw new Error("Something went wrong, please try again later.");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    };
};

export const sendCartData = (cart) => {
    return async dispatch => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data to server!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://toby-todo-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        };

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    };
};