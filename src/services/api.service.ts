import * as queryString from 'query-string';

import axios, { AxiosRequestConfig, Method, AxiosInstance } from 'axios';
import { Full_response_data, Full_response_data_global } from '../types';

var instanceSl = axios.create({
  baseURL: 'https://hpb.health.gov.lk/api/',
});

var instanceGlobal = axios.create({
  baseURL: 'https://api.covid19api.com/'
})

var instanceDistrictsMap = axios.create({
  baseURL: 'https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts'
})

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const apiService = {
  get,
  getStatistics_HPB,
  getStatistics_Global,
  getDistricts_map,
}

function getDistricts_map() {
  return get<string>(instanceDistrictsMap, '', 'districts_lk.csv', [])
    .then((res: any) => res);
}

function getStatistics_HPB() {
  return get<Full_response_data>(instanceSl, '', 'get-current-statistical', [])
    .then((res: any) => res.data);
}

function getStatistics_Global() {
  return get<Full_response_data_global>(instanceGlobal, '', 'summary', [])
    .then((res: any) => res);
}

function get<T>(instance: AxiosInstance, controller: string, action: string = '', urlParams: string[] = [], queryParams: any = null) {
  return apiRequest<T>(instance, 'get', controller, action, null, urlParams, queryParams);
}

function apiRequest<T>(instance: AxiosInstance, method: Method, controller: string, action: string = '', data: any, urlParams: string[] = [],
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
