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

export interface Full_response_data_global {
  Countries: CountrySummaryDto[];
  Date: Date;
}

export interface CountrySummaryDto {
  Country: string,
  NewConfirmed: number,
  NewDeaths: number,
  NewRecovered: number,
  Slug: string,
  TotalConfirmed: number,
  TotalDeaths: number,
  TotalRecovered: number
}

export enum FilterType {
  Confirmed = 0,
  Deaths = 1,
  Recovered = 2,
  NewConfirmed = 3,
  NewDeaths = 4,
  NewRecovered = 5
}

export const FilterSelectOptions: any = [
  { label: 'Total Confirmed', value: FilterType.Confirmed },
  { label: 'Total Deaths', value: FilterType.Deaths },
  { label: 'Total Recovered', value: FilterType.Recovered },
  { label: 'New Confirmed', value: FilterType.NewConfirmed },
  { label: 'New Deaths', value: FilterType.NewDeaths },
  { label: 'New Recovered', value: FilterType.NewRecovered }
]

export const FilterDirectionOptions: any = [
  { label: 'Desc', value: 0 },
  { label: 'Asc', value: 1 }
]