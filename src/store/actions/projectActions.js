export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('projects').add({})
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};
