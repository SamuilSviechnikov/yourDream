
export const createOrder = (orders) => {
  return (dispatch, getState, { getFirestore }) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('orders').add({
      ...orders,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
    dispatch({ type: "CREATE_PROJECT", orders });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    })
  }
}