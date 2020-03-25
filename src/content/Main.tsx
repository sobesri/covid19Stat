import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api.service';
import { Response_data, Full_response_data } from '../types';
import { Col, Row, Button } from 'reactstrap';
import { Chart } from 'primereact/chart';

import moment from 'moment';

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
            'New',
            'In Hospital',
            'Deaths',
            'New Deaths',
            'Recovered'
          ],
          datasets: [
            {
              label: 'Local Cases',
              data: [
                res.local_new_cases,
                res.local_total_number_of_individuals_in_hospitals,
                res.local_deaths,
                res.local_new_deaths,
                res.local_recovered
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
              ],
              borderWidth: 0
            }
          ]
        };

        const gDataGlobal = {
          labels: [
            'New',
            'Deaths',
            'New Deaths',
            'Recovered'
          ],
          datasets: [
            {
              label: 'Local Cases',
              data: [
                res.global_new_cases,
                res.global_deaths,
                res.global_new_deaths,
                res.global_recovered
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
              ],
              borderWidth: 0
            }
          ]
        };

        setDataLocal(gDataLocal);
        setDataGlobal(gDataGlobal);
      });
  }


  return <>
    <div className="header-row">
      <h1>Covid-19 (Sri Lanka)</h1>
      <p>
        Updated at {moment(new Date(updatedDate)).format('ddd, MMM D hh:mm:ss')}
      </p>
      Data from <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">HPB | Live updates on New Coronavirus (COVID-19) outbreak</a>
    </div>
    <Row className="refresh-button-panel">
      <Col>
        <Button type="button" onClick={() => getData()}>Reload data</Button>
      </Col>
    </Row>
    <div >
      <Row className="data-panel">
        <Col>
          <Col md={12} className="header">
            Local Cases
          </Col>
          <Col md={12}>
            <Chart width="" type="pie" data={dataLocal} />
          </Col>
          <Col className="footer">
            <h2>{data && data.local_total_cases}</h2>
            <p>total confirmed cases</p>
          </Col>
        </Col>
        <Col>
          <Col md={12} className="header">
            Global Cases
          </Col>
          <Col md={12}>
            <Chart width="" type="pie" data={dataGlobal} />
          </Col>
          <Col className="footer">
            <h2>{data && data.global_total_cases}</h2>
            <p>total confirmed cases</p>
          </Col>
        </Col>
      </Row>
    </div>
  </>
}

export default Main;