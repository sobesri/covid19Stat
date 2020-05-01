import React, { useState, useEffect, useLayoutEffect } from 'react';
import { apiService } from '../services/api.service';
import { Response_data, Full_response_data, LOCAL_TIMELINE, CaseSummary, Full_response_data_global, CountrySummaryDto, GlobalSummary } from '../types';
import { Button } from 'reactstrap';
import { Chart } from 'primereact/chart';

import moment from 'moment';
import Global from '../Components/Global';
import CaseSummaryChart from '../Components/SummaryChart/caseSummaryChart';
import GlobalSummaryChart from '../Components/SummaryChart/globalSummaryChart';
import DevDetail from '../Components/DevDetail';
import District from './districtDistribution';

const Content = () => {
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
    var width1 = window.innerWidth;

    const handleResize = () => {
      var width2 = window.innerWidth;
      if (width1 !== width2) {
        width1 = window.innerWidth;
        window.location.reload(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    let timelineData = LOCAL_TIMELINE;

    let caseGrowth = LOCAL_TIMELINE.map((d: CaseSummary, index: number) => {
      if (index === 0) return d.confirmed;
      else return LOCAL_TIMELINE[index].confirmed - LOCAL_TIMELINE[index - 1].confirmed
    })

    let data = {
      labels: timelineData.map((d: CaseSummary) => moment.utc(d.date ? new Date(d.date) : new Date()).local().format('MMM D Y')),
      datasets: [
        {
          type: "line",
          label: 'Confirmed',
          data: timelineData.map((d: CaseSummary) => d.confirmed),
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
        },
        {
          type: "line",
          label: 'Active',
          data: timelineData.map((d: CaseSummary) => (d.confirmed - d.deaths - d.recovered)),
          backgroundColor: '#3498db',
          borderColor: '#3498db',
          fill: false,
        },
        {
          type: "line",
          label: 'Recovered',
          data: timelineData.map((d: CaseSummary) => d.recovered),
          backgroundColor: '#2ecc71',
          borderColor: '#2ecc71',
          fill: false,
        },
        {
          type: "line",
          label: 'Deaths',
          data: timelineData.map((d: CaseSummary) => d.deaths),
          backgroundColor: '#e74c3c',
          borderColor: '#e74c3c',
          fill: false,
        }
      ]
    };

    if (window.innerWidth > 600) {
      data.labels.push("Daily Cases");
      data.datasets.push(
        {
          type: "bar",
          label: 'Daily Cases',
          data: caseGrowth,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderColor: 'rgba(255, 255, 255, 0.4',
          fill: false,
        }
      );
    }

    const timelineChartOptions =
    {
      aspectRatio: window.innerWidth > 600 ? 1.2 : 0.7,
      elements: {
        point: {
          radius: 0,
          hoverRadius: 4,
          hitRadius: 6,
        }
      },
      legend: {
        labels: {
          fontSize: 12,
          fontColor: '#fff'
        },
        position: 'bottom'
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 20,
          bottom: 10
        }
      },
      scales: {
        yAxes: [{
          position: 'right',
          gridLines: {
            color: "rgba(255, 255, 255, 0.06)",
            borderDash: [3]
          },
          ticks: {
            fontSize: 10,
          }
        }],
        xAxes: [{
          id: 'date',
          type: 'category',
          gridLines: {
            color: "rgba(255, 255, 255, 0.04)",
            borderDash: [6]
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            callback: function (label: any) {
              let labelDate = moment.utc(label).toDate();
              if (labelDate.getDay() === 1) {
                var labelArray = label.split(" ");
                return labelArray[1];
              }
            }
          }
        },
        {
          id: 'month',
          type: 'category',
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "rgba(255, 255, 255, 1)",
            callback: function (label: any) {
              let labelDate = moment.utc(label).toDate();
              if (labelDate.getDay() === 1) {
                var labelArray = label.split(" ");
                return `${labelArray[0]}`;
              }
            }
          }
        }
        ]
      }
    };

    return <>
      <div className='title'>
        <strong>Progression of the outbreak</strong><br />
        <small>Data updated manually, last updated at <strong>{moment.utc(new Date(2020, 4, 1, 22, 19, 28)).local().format('ddd, MMM D hh:mm:ss a')}</strong></small><br />
          Source:&nbsp;
        <a
          href="http://www.epid.gov.lk/web/index.php?option=com_content&view=article&id=225&Itemid=518&lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          epid.gov.lk/
          </a>
      </div>
      <Chart width="" data={data} options={timelineChartOptions} />
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

  return (
    <>
      {!data ? <></> :
        <>
          <div id="local">
            <div className="header-row">
              <h1>Sri Lankan Covid-19 Outbreak Status</h1>
              <p>
                Updated at {moment.utc(new Date(updatedDate)).local().format('ddd, MMM D hh:mm:ss a')}<br />
                <span className="source">
                  <span className="mobile">
                    Source:&nbsp;
                <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">
                      HPB
                </a>
                  </span>
                  <span className="full">
                    Source:&nbsp;
                <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">
                      HPB | Live updates on New Coronavirus (COVID-19) outbreak
                </a>
                  </span>
                </span>
              </p>
              <small>
                <DevDetail />
              </small>
              {/* <div className="data-panel row special-box">
            <div className="column-4">සුභ අලුත් අවුරුද්දක් වේවා!</div>
            <div className="column-4">இனிய புத்தாண்டு நாள் வாழ்த்துக்கள்!</div>
            <div className="column-4">Happy Sinhala and Tamil New Year!</div>
            <div className="column-wide"><strong>Gone, but not forgotten. 21-04-2019 </strong><i className="fa fa-fire"></i></div>
          </div> */}
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
          <div id="district">
            <District />
          </div>
        </>
      }
      {!globalData ?
        <>
          <div className="padding-top-lg">
          </div>
          <div>
            <div className="header-row">
              Global Data not found
            </div>
          </div>
        </>
        :
        <div id="global">
          <div className="padding-top-lg">
          </div>
          <div>
            <div className="header-row">
              <h1>Global Covid-19 Outbreak Status</h1>
              <p>
                Updated at {moment.utc(new Date(globalData.Date)).local().format('ddd, MMM D hh:mm:ss a')}<br />
                <span className="source">
                  <span className="mobile">
                    Sources:&nbsp;
                  {/* <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">
                    HPB
                </a>, <br /> */}
                    <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest" target="_blank" rel="noopener noreferrer">
                      postman - Covid19 API
                </a>
                  </span>
                  <span className="full">
                    Sources:&nbsp;
                  {/* <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">
                    HPB | Live updates on New Coronavirus (COVID-19) outbreak</a> , <br /> */}
                    <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest" target="_blank" rel="noopener noreferrer">Coronavirus COVID19 API</a>
                  </span>
                </span>
              </p>
            </div>
            <div className="data-panel">
              <div className="row border-box-sm">
                <div className="column">
                  <div className='row-panel chart'>
                    <CaseSummaryChart type="doughnut" summary={{ confirmed: globalData.Global.TotalConfirmed, deaths: globalData.Global.TotalDeaths, recovered: globalData.Global.TotalRecovered }} />
                  </div>
                  <div className="row-panel padding-top-lg">
                    <h2>Global Cases: {globalData.Global.TotalConfirmed.toLocaleString()}</h2>
                  </div>
                  <div className="row">
                    <div className="column-4 data-border active">Active: {(globalData.Global.TotalConfirmed - globalData.Global.TotalRecovered - globalData.Global.TotalDeaths).toLocaleString()}</div>
                    <div className="column-4 data-border recovered">Recovered: {globalData.Global.TotalRecovered.toLocaleString()}</div>
                    <div className="column-4 data-border deaths">Deaths: {globalData.Global.TotalDeaths.toLocaleString()}</div>
                  </div>
                  <div className="row-panel">
                    <div className="updates data-border">
                      Updates <span>: </span>
                    New cases : <strong>{globalData.Global.NewConfirmed.toLocaleString()}</strong> <span>- </span>
                    New Recovered : <strong>{globalData.Global.NewRecovered.toLocaleString()}</strong> <span>- </span>
                    New deaths : <strong>{globalData.Global.NewDeaths.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>
                <div className="column chart-bar">
                  <GlobalSummaryChart summaries={getGlobalSummariesChartData()} />
                </div>
              </div>
            </div>
            <div className="data-panel">
              <div className="padding-top-md">
              </div>
              <div className="row-panel border-box-sm">
                {globalData && <Global data={globalData} />}
              </div>
            </div>
          </div>
        </div >
      }
      <Button
        className="floating-btn"
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
        className="floating-btn"
        type="button"
        id="goToGlobalButton"
        onClick={onGoToGlobalClicked}
        title="Go to Global"
      >
        Global
      </Button>
      <Button
        className="floating-btn"
        type="button"
        id="reloadButton"
        title="Reload data"
        onClick={() => getData()}>
        <span>
          Reload
          </span>
        <i className="material-icons">
          refresh
          </i>
      </Button>
    </>
  );

}

export default Content;