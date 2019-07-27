export default function configureMediator(store, router) {
  // listen to mutations
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case "boards/setBoards":
        return store.dispatch("");
    }
  }); // listen to actions
  // note: doesn't not wait for the result of async actions
  store.subscribeAction(({ type, payload }, state) => {
    switch (type) {
      case "auth/signOut":
        return router.push("/auth/signin");
    }
  });

  return store;
}
