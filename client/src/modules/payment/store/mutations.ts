import * as types from './types'

import { STATE_KEY } from '@/modules/payment/store'

export default {
  [types.TOGGLE_PAYMENT_MODAL]: (state, isVisible: boolean) => {
    state[STATE_KEY].isPaymentVisible = isVisible || false
  },
  [types.START_PAYMENT_TIMEOUT_TIMER]: (state, timer: any) => {
    state[STATE_KEY].timer = timer
  },
  [types.CLEAR_PAYMENT_TIMEOUT_TIMER]: (state) => {
    state[STATE_KEY].paymentTimeoutTimer = undefined
  },
  [types.SET_PAYMENT_FEES]: (state, fees: any) => {
    if (fees) {
      state[STATE_KEY].fees = fees
    }
  },
  [types.SET_PAYMENT_REQUEST]: (state, req: any) => {
    state[STATE_KEY].request = req || {}
    sessionStorage.setItem('paymentRequest', JSON.stringify(req))
  },
  [types.SET_PAYMENT_IS_PROCESSING]: (state, isProcessing: boolean) => {
    state[STATE_KEY].isProcessing = isProcessing || false
  },
  [types.SET_PAYMENT]: (state, payment: any) => {
    state[STATE_KEY].payment = payment || {}
  },
  [types.TOGGLE_RECEIPT_MODAL]: (state, isVisible: boolean) => {
    state[STATE_KEY].isReceiptVisible = isVisible || false
  },
  [types.SET_PAYMENT_INVOICE]: (state, invoice: any) => {
    state[STATE_KEY].invoice = invoice || {}
  },
  [types.SET_PAYMENT_RECEIPT]: (state, receipt: any) => {
    state[STATE_KEY].receipt = receipt || {}
  }
}