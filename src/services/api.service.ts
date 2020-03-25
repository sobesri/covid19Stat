import * as queryString from 'query-string';

import axios, { AxiosRequestConfig, Method } from 'axios';
import { Full_response_data } from '../types';

var instance = axios.create({
  baseURL: 'https://hpb.health.gov.lk/api/',
});
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const apiService = {
  get,
  getStatistics
}

function getStatistics() {
  return get<Full_response_data>('', 'get-current-statistical', [])
    .then((res: any) => res.data);
}

function get<T>(controller: string, action: string = '', urlParams: string[] = [], queryParams: any = null) {
  return apiRequest<T>('get', controller, action, null, urlParams, queryParams);
}

function apiRequest<T>(method: Method, controller: string, action: string = '', data: any, urlParams: string[] = [],
  queryParams: any = null) {
  let url = createUrl(controller, action, urlParams, queryParams);
  let options = createRequestOptions(url, method, data);

  return instance.request<T>(options)
    .then(res => res && res.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function createUrl(controller: string, action: string = '', urlParams: string[] = [], queryParams: any = null) {
  let url = controller + (action ? '/' + action : '');

  urlParams.forEach(param => {
    url += '/' + param;
  });

  let params = '';
  if (queryParams) {
    params += '?' + queryString.stringify(queryParams);
  }

  return url += params;
}

function createRequestOptions(url: string, method: Method, data: any, responseType?: any) {
  var options: AxiosRequestConfig = {
    url,
    method,
    data
  }

  if (responseType) {
    options.responseType = responseType;
  }

  return options;
}
