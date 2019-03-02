export const addContentsToState = contents => {
    return {
      type: 'ADD_STATE',
      payload: {
        contents: contents
      }
    }
  }