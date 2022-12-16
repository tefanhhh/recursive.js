import * as datatableReducer from './datatable-reducer.js';

export function accessObjectVal(key, obj) {
  let res = obj;
  const splitKey = key.split('.');
  for (const k of splitKey) {
    res = res[k];
  }
  return res;
}

export datatableReducer;
