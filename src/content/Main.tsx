import React, { useState, useEffect, useLayoutEffect } from 'react';
import { apiService } from '../services/api.service';
import { Response_data, Full_response_data, LOCAL_TIMELINE, CaseSummary, Full_response_data_global, CountrySummaryDto, GlobalSummary } from '../types';
import { Button } from 'reactstrap';
import { Chart } from 'primereact/chart';

import moment from 'moment';
import Global from '../Components/Global';
import CaseSummaryChart from '../Components/Dashboard/caseSummaryChart';
import GlobalSummaryChart from '../Components/Dashboard/globalSummaryChart';

const Main = () => {
  const [data, setData] = useState<Response_data>();
  const [updatedDate, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState(new Date().getTime());
  const [globalData, setGlobalData] = useState<Full_response_data_global>();

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

  useLayoutEffect(() => {
    const handleScroll = () => {
      var goToTop = document.getElementById("goToTopButton");
      var goToGlobal = document.getElementById("goToGlobalButton");

      var globalPanel = document.getElementById("global");

      if (goToTop && goToGlobal) {
        if (window.scrollY > (globalPanel ? globalPanel.offsetTop : 500) / 2)
          goToGlobal.style.display = "none";
        else
          goToGlobal.style.display = "block";
        if (window.scrollY > 900)
          goToTop.style.display = "block";

        else
          goToTop.style.display = "none";

      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onGoToGlobalClicked = () => {
    var globalPanel = document.getElementById("global");
    document.body.scrollTop = globalPanel ? globalPanel.offsetTop : 0;
    document.documentElement.scrollTop = globalPanel ? globalPanel.offsetTop : 0;
  }

  const getData = () => {
    apiService.getStatistics_HPB()
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
      });

    apiService.getStatistics_Global()
      .then((res: Full_response_data_global) => {


        let countries = res.Countries;

        countries = countries.filter((item: CountrySummaryDto, index: number) => {
          return (countries.map(c => c.Slug).indexOf(item.Slug) === index)
        });

        setGlobalData({ ...res, Countries: countries });

      })
  }

  const generateTimeLineChartModal = () => {

    let data = {
      labels: LOCAL_TIMELINE.map((d: CaseSummary) => moment.utc(d.date ? new Date(d.date) : new Date()).local().format('MMM D')),
      datasets: [
        {
          label: 'Confirmed',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => d.confirmed),
          // backgroundColor: '#F1C40F',
          borderColor: 'rgb(0, 0, 0)',
          // borderWidth: 0
        },
        {
          label: 'Active',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => (d.confirmed - d.deaths - d.recovered)),
          // backgroundColor: '#F1C40F',
          borderColor: 'rgb(0, 119, 255)',
          // borderWidth: 0
        },
        {
          label: 'Recovered',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => d.recovered),
          // backgroundColor: '#27AE60',
          borderColor: 'rgb(0, 221, 0)',
          // borderWidth: 0
        },
        {
          label: 'Deaths',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => d.deaths),
          // backgroundColor: '#CB4335',
          borderColor: 'rgb(255, 72, 0)',
          // borderWidth: 0
        }
      ]
    };

    const timelineChartOptions =
    {
      aspectRatio: 1.2,
      responsive: true,
      legend: {
        labels: {
          fontColor: '#fff'
        },
        position: 'bottom'
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 20
        }
      },
      scales: {
        xAxes: [{
          id: 'date',
          type: 'category',
          ticks: {
            callback: function (label: any) {
              var labelArray = label.split(" ");
              return labelArray[1];
            }
          }
        },
        {
          id: 'month',
          type: 'category',
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
          ticks: {
            callback: function (label: any) {
              var labelArray = label.split(" ");
              return labelArray[0];
            }
          }
        }
        ]
      }
    };

    return <>
      <div className='title'>
        <strong>Progression of the outbreak</strong>
      </div>
      <Chart className="padding-top-lg" width="" type="line" data={data} options={timelineChartOptions} />
      <div>
        <small>Data updated manually, last updated at <strong>{moment.utc(new Date(2020, 3, 12, 15, 15, 14)).local().format('ddd, MMM D hh:mm:ss a')}</strong></small>
      </div>
      <div>
        Source:&nbsp;
        <a
          href="http://www.epid.gov.lk/web/index.php?option=com_content&view=article&id=225&Itemid=518&lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          epid.gov.lk/
        </a>
      </div>
    </>
  }

  const getGlobalSummariesChartData = () => {

    let filteredData = globalData && globalData.Countries.sort(compare);

    if (!filteredData) return undefined;

    let firstFew = filteredData.slice(0, 4);

    let data: GlobalSummary[] = firstFew.map((c: CountrySummaryDto) => {
      return ({
        confirmed: c.TotalConfirmed,
        active: c.TotalConfirmed - c.TotalRecovered - c.TotalDeaths,
        deaths: c.TotalDeaths,
        recovered: c.TotalRecovered,
        country: c.Country
      });
    });

    return data;

  }

  const compare = (a: CountrySummaryDto, b: CountrySummaryDto) => {
    let ac = a.TotalConfirmed;
    let bc = b.TotalConfirmed;

    if (ac < bc)
      return 1;
    if (ac > bc)
      return -1;

    return 0;
  }

  return !data ? <></> :
    <>
      <div id="local">
        <div className="header-row">
          <h1>Sri Lankan Covid-19 Outbreak Status</h1>
          <p>
            Updated at {moment.utc(new Date(updatedDate)).local().format('ddd, MMM D hh:mm:ss a')}<br />
            Data source: <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">HPB | Live updates on New Coronavirus (COVID-19) outbreak</a>
          </p>
          <Button className="btn reload" type="button" title="Reload data" onClick={() => getData()}>Reload data</Button>
        </div>
        <div className="data-panel">
          <div className="row border-box-sm">
            <div className="column">
              <div className='chart padding-top-lg'>
                <CaseSummaryChart type="doughnut" summary={{ confirmed: data.local_total_cases, deaths: data.local_deaths, recovered: data.local_recovered }} />
              </div>
              <div className="row-panel padding-top-lg">
                <h2>Total Cases: {data && data.local_total_cases.toLocaleString()}</h2>
              </div>
              <div className="row">
                <div className="column-4 data-border active">Active: {(data.local_total_cases - data.local_recovered - data.local_deaths).toLocaleString()}</div>
                <div className="column-4 data-border recovered">Recovered: {data.local_recovered.toLocaleString()}</div>
                <div className="column-4 data-border deaths">Deaths: {data.local_deaths.toLocaleString()}</div>
              </div>
              <div className="row-panel">
                <div className="updates data-border">
                  Updates <span>: </span>
                  New cases : <strong>{data.local_new_cases.toLocaleString()}</strong> <span>- </span>
                  New deaths : <strong>{data.local_new_deaths.toLocaleString()}</strong> <span>- </span>
                  In Hospital : <strong>{data.local_total_number_of_individuals_in_hospitals.toLocaleString()}</strong>
                </div>
              </div>
            </div>
            <div className="column padding-top-lg">
              <div className='chart line'>
                {generateTimeLineChartModal()}
              </div>
            </div>
          </div>
        </div>
        <div className="padding-top-xlg">
        </div>
      </div>
      <div id="global">
        <div className="padding-top-lg">
        </div>
        <div>
          <div className="header-row">
            <h1>Global Covid-19 Outbreak Status</h1>
            <p>
              Data sources: <br /> <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">HPB | Live updates on New Coronavirus (COVID-19) outbreak</a> <br />
              <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest" target="_blank" rel="noopener noreferrer">Coronavirus COVID19 API</a>
            </p>
          </div>
          <div className="data-panel">
            <div className="row border-box-sm">
              <div className="column">
                <div className='row-panel chart'>
                  <CaseSummaryChart type="doughnut" summary={{ confirmed: data.global_total_cases, deaths: data.global_deaths, recovered: data.global_recovered }} />
                </div>
                <div className="row-panel padding-top-lg">
                  <h2>Global Cases: {data.global_total_cases.toLocaleString()}</h2>
                </div>
                <div className="row">
                  <div className="column-4 data-border active">Active: {(data.global_total_cases - data.global_recovered - data.global_deaths).toLocaleString()}</div>
                  <div className="column-4 data-border recovered">Recovered: {data.global_recovered.toLocaleString()}</div>
                  <div className="column-4 data-border deaths">Deaths: {data.global_deaths.toLocaleString()}</div>
                </div>
                <div className="row-panel">
                  <div className="updates data-border">
                    Updates <span>: </span>
                    New cases : <strong>{data.global_new_cases.toLocaleString()}</strong> <span>- </span>
                    New deaths : <strong>{data.global_new_deaths.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
              <div className="column chart-bar">
                <GlobalSummaryChart summaries={getGlobalSummariesChartData()} />
              </div>
            </div>
          </div>
          <div className="data-panel">
            <div className="row-panel border-box-sm">
              {globalData && <Global data={globalData} />}
            </div>
          </div>
        </div>
      </div >
      <Button
        type="button"
        id="goToTopButton"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        title="Go to top"
      >
        Top
    </Button>
      <Button
        type="button"
        id="goToGlobalButton"
        onClick={onGoToGlobalClicked}
        title="Go to top"
      >
        Global
    </Button>
    </>
}

export default Main;