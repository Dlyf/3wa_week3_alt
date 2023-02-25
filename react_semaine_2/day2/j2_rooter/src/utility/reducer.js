console.log("test")

const initialState = {
    count: initialCount
  }

  export default reducer = (state, action) => {
    switch (action.type) {
      case 'test':
        return {number: Math.floor(Math.random() * 6) + 1};
      case 'increment':
        return {count: state.count + 1};
      case 'reset':
        return init(action.payload);

    }
  }

