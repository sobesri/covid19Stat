export interface Response_data {
  local_new_cases: number;
  local_total_cases: number;
  local_total_number_of_individuals_in_hospitals: number;
  local_deaths: number;
  local_new_deaths: number;
  local_recovered: number;

  global_new_cases: number;
  global_total_cases: number;
  global_deaths: number;
  global_new_deaths: number;
  global_recovered: number;
}

export interface Full_response_data extends Response_data {
  update_date_time: string;
}