const store = require("./app/store");
const { cakeAction } = require("./features/cake/cakeSlice");
const { icecreamAction } = require("./features/icecream/icecreamSlice");
const fetchUsers = require("./features/user/userSlice").fetchUsers

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("update state", store.getState());
})

store.dispatch(fetchUsers())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))
// store.dispatch(cakeAction.restocked(10))
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(20))
// unsubscribe()