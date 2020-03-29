import React, { useState, useEffect, useLayoutEffect } from 'react';
import { apiService } from '../services/api.service';
import { Response_data, Full_response_data, CountrySummaryDto, Full_response_data_global, FilterType, FilterSelectOptions, FilterDirectionOptions, LOCAL_TIMELINE, CaseSummary } from '../types';
import { Button, ModalHeader, Modal, ModalBody, ModalFooter, Input, Row, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Chart } from 'primereact/chart';
import Select from 'react-select';

import moment from 'moment';

const Main = () => {
  const [data, setData] = useState<Response_data>();
  const [updatedDate, setDate] = useState<Date>(new Date());
  const [globalUpdateTime, setGlobalUpdateTime] = useState<Date>(new Date());
  const [dataLocal, setDataLocal] = useState<any>();
  const [dataGlobal, setDataGlobal] = useState<any>();
  const [time, setTime] = useState(new Date().getTime());
  const [countrySummaries, setSummaries] = useState<CountrySummaryDto[]>();
  const [selectedSummary, setSelected] = useState<CountrySummaryDto>();
  const [searchTerm, setSearchTerm] = useState();
  const [filterType, setFilterType] = useState(FilterType.Confirmed);
  const [filterDirection, setFilterDirection] = useState(FilterType.Confirmed);
  const [showTimeLine, toggleTimeLine] = useState(false);

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

    apiService.getStatistics_Global()
      .then((res: Full_response_data_global) => {
        setSummaries(res.Countries);
        setGlobalUpdateTime(res.Date)
      })
  }

  let chartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1,
    rotation: 0.5 * Math.PI,
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
        bottom: 0
      }
    }
  };

  const generateChartModal = (summary: CountrySummaryDto) => {

    let data = {
      labels: [
        'Active',
        'Deaths',
        'Recovered'
      ],
      datasets: [
        {
          label: 'Local Cases',
          data: [
            summary.TotalConfirmed - summary.TotalRecovered - summary.TotalDeaths,
            summary.TotalDeaths,
            summary.TotalRecovered
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

    return <>
      <Chart width="" type="pie" data={data} options={chartOptions} />
      <div className="modalRow">
        <Row>
          <Col md={6} xs={6}>Total: </Col>
          <Col>{summary.TotalConfirmed.toLocaleString()} ( New: {summary.NewConfirmed.toLocaleString()} )</Col>
        </Row>
        <Row>
          <Col md={6} xs={6}>Total Deaths: </Col>
          <Col>{summary.TotalDeaths.toLocaleString()} ( New: {summary.NewDeaths.toLocaleString()} )</Col>
        </Row>
        <Row>
          <Col md={6} xs={6}>Total Recovered: </Col>
          <Col>{summary.TotalRecovered.toLocaleString()} ( New: {summary.NewRecovered.toLocaleString()} )</Col>
        </Row>
      </div>
    </>
  }

  const generateTimeLineChartModal = () => {

    let data = {
      labels: LOCAL_TIMELINE.map((d: CaseSummary) => moment.utc(new Date(d.date)).local().format('MMM D')),
      datasets: [
        {
          label: 'Confirmed',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => d.confirmed),
          // backgroundColor: '#F1C40F',
          borderColor: '#F1C40F',
          // borderWidth: 0
        },
        {
          label: 'Recovered',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => d.recovered),
          // backgroundColor: '#27AE60',
          borderColor: '#27AE60',
          // borderWidth: 0
        },
        {
          label: 'Deaths',
          data: LOCAL_TIMELINE.map((d: CaseSummary) => d.deaths),
          // backgroundColor: '#CB4335',
          borderColor: '#CB4335',
          // borderWidth: 0
        }
      ]
    };

    return <>
      <Chart width="" type="line" data={data} options={
        {
          maintainAspectRatio: true,
          aspectRatio: 1,
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
              top: 30,
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
        }} />
      <div>
        <small>Data updated manually, last updated at <strong>{moment.utc(new Date(2020, 2, 29, 20, 30, 56)).local().format('ddd, MMM D hh:mm:ss a')}</strong></small>
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
  const compare = (a: CountrySummaryDto, b: CountrySummaryDto) => {
    let ac = a.TotalConfirmed;
    let bc = b.TotalConfirmed;

    switch (filterType) {
      case (FilterType.Deaths):
        ac = a.TotalDeaths;
        bc = b.TotalDeaths;
        break;
      case (FilterType.Recovered):
        ac = a.TotalRecovered;
        bc = b.TotalRecovered;
        break;
      case (FilterType.NewConfirmed):
        ac = a.NewConfirmed;
        bc = b.NewConfirmed;
        break;
      case (FilterType.NewDeaths):
        ac = a.NewDeaths;
        bc = b.NewDeaths;
        break;
      case (FilterType.NewRecovered):
        ac = a.NewRecovered;
        bc = b.NewRecovered;
        break;
    }

    if (filterDirection === 0) {
      if (ac < bc)
        return 1;
      if (ac > bc)
        return -1;
    }

    if (filterDirection === 1) {
      if (ac > bc)
        return 1;
      if (ac < bc)
        return -1;
    }

    return 0;
  }

  const getFilteredResults = (summaries: CountrySummaryDto[]) => {
    return summaries
      .filter(c => c.TotalConfirmed && (!searchTerm || c.Country.toLocaleLowerCase().includes((searchTerm || '').toLocaleLowerCase())))
      .sort(compare);
  }

  const generateFilteredContents = (countrySummaries: CountrySummaryDto[]) => {

    let filtered = getFilteredResults(countrySummaries);

    if (filtered.length > 0)
      return <div className="row">
        {
          filtered
            .map((summary: CountrySummaryDto, index: number) => {
              return <div key={index} className="column-4">
                <div className={"title"}>
                  <h2>{summary.Country}: {summary.TotalConfirmed.toLocaleString()}</h2>
                  <p>
                    Total: {summary.TotalConfirmed.toLocaleString()} ( New: {summary.NewConfirmed.toLocaleString()} )<br />
                    Total Deaths: {summary.TotalDeaths.toLocaleString()} ( New: {summary.NewDeaths.toLocaleString()} )<br />
                    Total Recovered: {summary.TotalRecovered.toLocaleString()} ( New: {summary.NewRecovered.toLocaleString()} )<br />
                  </p>
                  <Button className="btn" type="button" onClick={() => setSelected(summary)}>View {summary.Country}'s Chart</Button>
                </div>
              </div>
            })
        }
      </div>;

    return <div className="fixed-row"><p>No results found for "{searchTerm}"</p></div>

  }

  return <>
    <div id="local">
      <div className="header-row">
        <h1>Covid-19</h1>
        <h3>Sri Lanka</h3>
        <p>
          Updated at {moment.utc(new Date(updatedDate)).local().format('ddd, MMM D hh:mm:ss a')}<br />
        Data from <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">HPB | Live updates on New Coronavirus (COVID-19) outbreak</a>
        </p>
      </div>
      <div className="row-panel">
        <Button className="btn" type="button" onClick={() => getData()}>Reload data</Button>
      </div>
      <div className="data-panel">
        <div className="row">
          <div className="column">
            <div className={"title"}>
              <h2>Local Cases: {data && data.local_total_cases.toLocaleString()}</h2>
              <span>
                <p>
                  <small>
                    {data &&
                      `( Total cases: ${data.local_total_cases.toLocaleString()}, New cases: ${data.local_new_cases.toLocaleString()}, New deaths: ${data.local_new_deaths.toLocaleString()}, In Hospital: ${data.local_total_number_of_individuals_in_hospitals.toLocaleString()} )`}
                  </small>
                </p>
              </span>
            </div>
            <div className={'chart'}>
              <Chart width="" type="pie" data={dataLocal} options={chartOptions} />
            </div>
            <div>
              <Button type="button" onClick={() => toggleTimeLine(true)}>Open Timeline</Button>
            </div>
          </div>
          <div className="column">
            <div className={"title"}>
              <h2>Global Cases: {data && data.global_total_cases.toLocaleString()}</h2>
              <span>
                <p>
                  <small>
                    {data &&
                      `( Total cases: ${data.global_total_cases.toLocaleString()}, New cases: ${data.global_new_cases.toLocaleString()}, New deaths: ${data.global_new_deaths.toLocaleString()} )`}
                  </small>
                </p>
              </span>
            </div>
            <div className={'chart'}>
              <Chart width="" type="pie" data={dataGlobal} options={chartOptions} />
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
      {countrySummaries &&
        <div>
          <div className="header-row">
            <h1>Covid-19</h1>
            <h3>Global Summaries</h3>
            <p>
              Updated at {moment.utc(new Date(globalUpdateTime)).local().format('ddd, MMM D hh:mm:ss a')}<br />
              Data from <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest" target="_blank" rel="noopener noreferrer">Coronavirus COVID19 API</a>
            </p>
          </div>
          <div className="row-panel">
            <div className="row">
              <div className="column">
                <InputGroup>
                  <Input
                    value={searchTerm || ''}
                    onChange={((e: any) => e.target && setSearchTerm(e.target.value))}
                    placeholder="Enter search term here..."
                  />
                  {searchTerm &&
                    <InputGroupAddon className={"addon"} addonType="append">
                      <Button type="button" onClick={() => setSearchTerm(undefined)} title="Clear Search Term">
                        <i className="material-icons">clear</i>
                      </Button>
                    </InputGroupAddon>
                  }
                </InputGroup>
              </div>
              <div className="column">
                <Select
                  value={FilterSelectOptions.filter((v: any) => v.value === filterType)}
                  placeholder="Sort By"
                  options={FilterSelectOptions}
                  onChange={(e: any) => { e && setFilterType(e.value); }} />
              </div>
              <div className="column">
                <Select
                  value={FilterDirectionOptions.filter((v: any) => v.value === filterDirection)}
                  options={FilterDirectionOptions}
                  onChange={(e: any) => { e && setFilterDirection(e.value); }} />
              </div>
            </div>
          </div>
          <div className="data-panel">
            {generateFilteredContents(countrySummaries)}
          </div>
          {selectedSummary &&
            <Modal
              isOpen={selectedSummary !== undefined}
              toggle={() => setSelected(undefined)}
            >
              <ModalHeader className="chart-modal" toggle={() => setSelected(undefined)}>
                <h2>{selectedSummary.Country}</h2>
              </ModalHeader>
              <ModalBody className="chart-modal">
                {generateChartModal(selectedSummary)}
              </ModalBody>
              <ModalFooter className="chart-modal footer">
                <Button className="btn" type="button" onClick={() => setSelected(undefined)}>Close Chart</Button>
              </ModalFooter>
            </Modal>
          }
        </div>
      }
    </div>
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
    <Modal
      className="modal-lg"
      isOpen={showTimeLine}
      toggle={() => toggleTimeLine(false)}
    >
      <ModalHeader className="chart-modal" toggle={() => toggleTimeLine(false)}>
        <h2>Local Timeline</h2>
      </ModalHeader>
      <ModalBody className="chart-modal">
        {generateTimeLineChartModal()}
      </ModalBody>
      <ModalFooter className="chart-modal footer">
        <Button className="btn" type="button" onClick={() => toggleTimeLine(false)}>Close Chart</Button>
      </ModalFooter>
    </Modal>
  </>
}

export default Main;