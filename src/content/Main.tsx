import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api.service';
import { Response_data, Full_response_data } from '../types';
import { Button } from 'reactstrap';
import { Chart } from 'primereact/chart';

import moment from 'moment';

interface Case {
  total: number,
  active: number,
  recovered: number,
  dead: number
}

const Main = () => {
  const [data, setData] = useState<Response_data>();
  const [updatedDate, setDate] = useState<Date>(new Date());
  const [dataLocal, setDataLocal] = useState<any>();
  const [dataGlobal, setDataGlobal] = useState<any>();
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().getTime());
      getData();
    }, 300000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  const getData = () => {
    apiService.getStatistics()
      .then((res: Full_response_data) => {
        setDate(new Date(res.update_date_time));

        let d: Response_data = {
          local_new_cases: res.local_new_cases,
          local_total_cases: res.local_total_cases,
          local_total_number_of_individuals_in_hospitals: res.local_total_number_of_individuals_in_hospitals,
          local_deaths: res.local_deaths,
          local_new_deaths: res.local_new_deaths,
          local_recovered: res.local_recovered,

          global_new_cases: res.global_new_cases,
          global_total_cases: res.global_total_cases,
          global_deaths: res.global_deaths,
          global_new_deaths: res.global_new_deaths,
          global_recovered: res.global_recovered,
        };

        setData(d);

        const gDataLocal = {
          labels: [
            'Active',
            'Deaths',
            'Recovered'
          ],
          datasets: [
            {
              label: 'Local Cases',
              data: [
                d.local_total_cases - d.local_recovered - d.local_deaths,
                d.local_deaths,
                d.local_recovered
              ],
              backgroundColor: [
                '#F1C40F', // yellow
                '#CB4335', // red
                "#27AE60" // green
              ],
              borderWidth: 0
            }
          ]
        };

        const gDataGlobal = {
          labels: [
            'Active',
            'Deaths',
            'Recovered'
          ],
          datasets: [
            {
              label: 'Global Cases',
              data: [
                d.global_total_cases - d.global_recovered - d.global_deaths,
                d.global_deaths,
                d.global_recovered
              ],
              backgroundColor: [
                '#F1C40F', // yellow
                '#CB4335', // red
                "#27AE60" // green
              ],
              borderWidth: 0
            }
          ]
        };

        setDataLocal(gDataLocal);
        setDataGlobal(gDataGlobal);
      });
  }

  let chartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1,
    legend: {
      position: 'bottom'
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };

  return <>
    <div className="header-row">
      <h1>Covid-19</h1>
      <h2>Sri Lanka</h2>
      <p>
        Updated at {moment(new Date(updatedDate)).format('ddd, MMM D hh:mm:ss')}
      </p>
      Data from <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">HPB | Live updates on New Coronavirus (COVID-19) outbreak</a>
    </div>
    <div className="refresh-button-panel">
      <Button type="button" onClick={() => getData()}>Reload data</Button>
    </div>
    <div className="data-panel">
      <div className="row">
        <div className="column">
          <div className={"title"}>
            <h2>Local Cases</h2>
            <h3>{data && data.local_total_cases}</h3>
            <p>total confirmed cases</p>
            <p>
              {data &&
                <small>( New cases: {data.local_new_cases}, New deaths: {data.local_new_deaths}, In Hospital: {data.local_total_number_of_individuals_in_hospitals} )</small>
              }
            </p>
          </div>
          <div className={'chart'}>
            <Chart width="" type="pie" data={dataLocal} options={chartOptions} />
          </div>
        </div>
        <div className="column">
          <div className={"title"}>
            <h2>Global Cases</h2>
            <h3>{data && data.global_total_cases}</h3>
            <p>total confirmed cases</p>
            <p>
              {data &&
                <small>( New cases: {data.global_new_cases}, New deaths: {data.global_new_deaths} )</small>
              }
            </p>
          </div>
          <div className={'chart'}>
            <Chart width="" type="pie" data={dataGlobal} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Main;