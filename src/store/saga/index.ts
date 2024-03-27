import { call, takeEvery, put } from "redux-saga/effects";

// worker function
function getTodos() {
  console.log("fetchTodos");
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => {
      return response.json();
    }
  );
}

// Worker saga
function* fetchTodosSaga() {
  try {
    const data = yield call(getTodos);
    yield put({ type: "GET_TODOS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GET_TODOS_ERROR" });
  }
}

// sagas
export function* saga() {
  yield takeEvery("GET_TODOS", fetchTodosSaga);
}


// there are steps when saga work
//useDispatch >
//sagas >
// worker saga >
// worker function (async task) >
// work saga >
// put action() >
// reducer >
// update store >
// useSelector >
