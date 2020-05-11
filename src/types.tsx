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
  Global: SummaryDto;
}

export interface SummaryDto {
  NewConfirmed: number,
  NewDeaths: number,
  NewRecovered: number,
  TotalConfirmed: number,
  TotalDeaths: number,
  TotalRecovered: number
}

export interface LatLng {
  lat: number,
  lng: number
}

export interface DistrictSummaryDto {
  District: string,
  LatLng: LatLng,
  Cases: number
}

export interface CountrySummaryDto extends SummaryDto {
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
  date?: Date,
  confirmed: number,
  deaths: number,
  recovered: number
}


export interface GlobalSummary extends CaseSummary {
  active: number,
  country: string;
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
  { date: new Date(2020, 2, 10), recovered: 0, deaths: 0, confirmed: 1 },
  { date: new Date(2020, 2, 11), recovered: 0, deaths: 0, confirmed: 1 },
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
  { date: new Date(2020, 3, 1), recovered: 21, deaths: 2, confirmed: 146 },
  { date: new Date(2020, 3, 2), recovered: 21, deaths: 3, confirmed: 151 },
  { date: new Date(2020, 3, 3), recovered: 22, deaths: 4, confirmed: 151 },
  { date: new Date(2020, 3, 4), recovered: 27, deaths: 5, confirmed: 162 },
  { date: new Date(2020, 3, 5), recovered: 33, deaths: 5, confirmed: 176 },
  { date: new Date(2020, 3, 6), recovered: 38, deaths: 5, confirmed: 178 },
  { date: new Date(2020, 3, 7), recovered: 42, deaths: 6, confirmed: 185 },
  { date: new Date(2020, 3, 8), recovered: 44, deaths: 7, confirmed: 189 },
  { date: new Date(2020, 3, 9), recovered: 49, deaths: 7, confirmed: 190 },
  { date: new Date(2020, 3, 10), recovered: 54, deaths: 7, confirmed: 197 },
  { date: new Date(2020, 3, 11), recovered: 54, deaths: 7, confirmed: 199 },
  { date: new Date(2020, 3, 12), recovered: 56, deaths: 7, confirmed: 210 },
  { date: new Date(2020, 3, 13), recovered: 56, deaths: 7, confirmed: 217 },
  { date: new Date(2020, 3, 14), recovered: 61, deaths: 7, confirmed: 233 },
  { date: new Date(2020, 3, 15), recovered: 63, deaths: 7, confirmed: 238 },
  { date: new Date(2020, 3, 16), recovered: 68, deaths: 7, confirmed: 238 },
  { date: new Date(2020, 3, 17), recovered: 77, deaths: 7, confirmed: 244 },
  { date: new Date(2020, 3, 18), recovered: 91, deaths: 7, confirmed: 254 },
  { date: new Date(2020, 3, 19), recovered: 96, deaths: 7, confirmed: 271 },
  { date: new Date(2020, 3, 20), recovered: 98, deaths: 7, confirmed: 304 },
  { date: new Date(2020, 3, 21), recovered: 102, deaths: 7, confirmed: 310 },
  { date: new Date(2020, 3, 22), recovered: 105, deaths: 7, confirmed: 330 },
  { date: new Date(2020, 3, 23), recovered: 107, deaths: 7, confirmed: 368 },
  { date: new Date(2020, 3, 24), recovered: 109, deaths: 7, confirmed: 420 },
  { date: new Date(2020, 3, 25), recovered: 118, deaths: 7, confirmed: 460 },
  { date: new Date(2020, 3, 26), recovered: 120, deaths: 7, confirmed: 523 },
  { date: new Date(2020, 3, 27), recovered: 126, deaths: 7, confirmed: 588 },
  { date: new Date(2020, 3, 28), recovered: 134, deaths: 7, confirmed: 619 },
  { date: new Date(2020, 3, 29), recovered: 136, deaths: 7, confirmed: 649 },
  { date: new Date(2020, 3, 30), recovered: 154, deaths: 7, confirmed: 665 },
  { date: new Date(2020, 4, 1), recovered: 162, deaths: 7, confirmed: 690 },
  { date: new Date(2020, 4, 2), recovered: 172, deaths: 7, confirmed: 705 },
  { date: new Date(2020, 4, 3), recovered: 184, deaths: 7, confirmed: 718 },
  { date: new Date(2020, 4, 4), recovered: 194, deaths: 8, confirmed: 751 },
  { date: new Date(2020, 4, 5), recovered: 213, deaths: 9, confirmed: 771 },
  { date: new Date(2020, 4, 6), recovered: 215, deaths: 9, confirmed: 797 },
  { date: new Date(2020, 4, 7), recovered: 232, deaths: 9, confirmed: 824 },
  { date: new Date(2020, 4, 8), recovered: 240, deaths: 9, confirmed: 835 },
  { date: new Date(2020, 4, 9), recovered: 260, deaths: 9, confirmed: 847 },
  { date: new Date(2020, 4, 10), recovered: 321, deaths: 9, confirmed: 863 },
  { date: new Date(2020, 4, 11), recovered: 321, deaths: 9, confirmed: 863 },
];
