import { takeEvery } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { increment } from "./counterSlice"

export function* log(action: PayloadAction) {
    console.log('log', action)
}

export default function* counterSaga() {
    console.log('Counter saga')

    // yield takeEvery('*', log)
    // yield takeEvery('counter/increment', log)
    yield takeEvery(increment().type, log)
}