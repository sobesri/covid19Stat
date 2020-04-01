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

export interface CaseSummary {
  date: Date,
  confirmed: number,
  deaths: number,
  recovered: number
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
];

export const FilterDirectionOptions: any = [
  { label: 'Desc', value: 0 },
  { label: 'Asc', value: 1 }
];


export const LOCAL_TIMELINE: CaseSummary[] = [
  { date: new Date(2020, 2, 11), recovered: 0, deaths: 0, confirmed: 1 },
  { date: new Date(2020, 2, 12), recovered: 0, deaths: 0, confirmed: 1 },
  { date: new Date(2020, 2, 12), recovered: 0, deaths: 0, confirmed: 2 },
  { date: new Date(2020, 2, 13), recovered: 0, deaths: 0, confirmed: 4 },
  { date: new Date(2020, 2, 14), recovered: 0, deaths: 0, confirmed: 6 },
  { date: new Date(2020, 2, 15), recovered: 0, deaths: 0, confirmed: 11 },
  { date: new Date(2020, 2, 16), recovered: 0, deaths: 0, confirmed: 19 },
  { date: new Date(2020, 2, 17), recovered: 0, deaths: 0, confirmed: 29 },
  { date: new Date(2020, 2, 18), recovered: 0, deaths: 0, confirmed: 42 },
  { date: new Date(2020, 2, 19), recovered: 0, deaths: 0, confirmed: 53 },
  { date: new Date(2020, 2, 20), recovered: 0, deaths: 0, confirmed: 66 },
  { date: new Date(2020, 2, 21), recovered: 0, deaths: 0, confirmed: 72 },
  { date: new Date(2020, 2, 22), recovered: 0, deaths: 0, confirmed: 78 },
  { date: new Date(2020, 2, 23), recovered: 0, deaths: 0, confirmed: 87 },
  { date: new Date(2020, 2, 24), recovered: 2, deaths: 0, confirmed: 97 },
  { date: new Date(2020, 2, 25), recovered: 3, deaths: 0, confirmed: 102 },
  { date: new Date(2020, 2, 26), recovered: 3, deaths: 0, confirmed: 102 },
  { date: new Date(2020, 2, 27), recovered: 7, deaths: 0, confirmed: 106 },
  { date: new Date(2020, 2, 28), recovered: 9, deaths: 1, confirmed: 113 },
  { date: new Date(2020, 2, 29), recovered: 11, deaths: 1, confirmed: 117 },
  { date: new Date(2020, 2, 30), recovered: 14, deaths: 2, confirmed: 122 },
  { date: new Date(2020, 2, 31), recovered: 17, deaths: 2, confirmed: 143 },
  { date: new Date(2020, 3, 1), recovered: 17, deaths: 2, confirmed: 143 },
];