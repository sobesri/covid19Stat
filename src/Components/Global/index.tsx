import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Full_response_data_global, CountrySummaryDto } from '../../types';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Chart } from 'primereact/chart';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Input } from 'reactstrap';
import moment from 'moment';

const chartOptions = {
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

interface Props {
  data: Full_response_data_global;
}

const Global = (props: Props) => {

  const [filteredContents, setContents] = useState<CountrySummaryDto[]>();
  const [selectedSummary, setSelectedSummary] = useState<CountrySummaryDto>();
  const [updatedDate, setUpdatedDate] = useState(new Date());


  const compare = (a: CountrySummaryDto, b: CountrySummaryDto) => {
    let ac = a.TotalConfirmed;
    let bc = b.TotalConfirmed;

    if (ac < bc)
      return 1;
    if (ac > bc)
      return -1;

    return 0
  }

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
          <Col>{summary.TotalConfirmed.toLocaleString()}</Col>
        </Row>
        <Row>
          <Col md={6} xs={6}>Total Active: </Col>
          <Col>{(summary.TotalConfirmed - summary.TotalRecovered - summary.TotalDeaths).toLocaleString()} ( New: {summary.NewConfirmed.toLocaleString()} )</Col>
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

  useEffect(() => {
    setContents(props.data.Countries.sort(compare));
    setUpdatedDate(props.data.Date);
  }, [props.data])

  const openSummaryModal = (val: CountrySummaryDto) => setSelectedSummary(val);

  return (
    <>
      <div className="header-row header">
        <h3>Outbreak summaries across the world</h3>
        <p>
          Updated at {moment.utc(new Date(updatedDate)).local().format('ddd, MMM D hh:mm:ss a')}
        </p>
      </div>
      <Row>
        <Col md={3} xs={0}></Col>
        <Col className="data-panel">
          <Input
            placeholder="Enter search term here..."
            onChange={(e: any) => {
              let value = e.target ? e.target.value : '';
              let results = props.data.Countries;
              setContents(results.filter((c: CountrySummaryDto) => c.TotalConfirmed && (!value || c.Country.toLocaleLowerCase().includes((value || '').toLocaleLowerCase()))));
            }}
          />
        </Col>
        <Col md={3} xs={0}></Col>
      </Row>
      <div className="table-wrapper">
        <DataTable
          value={filteredContents}
          paginator={true}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rows={5}
          responsive
          emptyMessage="No Records Found"
          rowsPerPageOptions={[5, 10, 20]}
          onRowClick={(e: any) => { openSummaryModal(e.data) }}>
          <Column field="Country" header="Country" sortable />
          <Column field="TotalConfirmed" header="Total Confirmed" sortable body={(val: CountrySummaryDto) => val.TotalConfirmed.toLocaleString()} />
          <Column field="TotalActive" header="Total Active" sortable body={(val: CountrySummaryDto) => (val.TotalConfirmed - val.TotalRecovered - val.TotalDeaths).toLocaleString()} />
          <Column field="TotalRecovered" header="Total Recovered" sortable body={(val: CountrySummaryDto) => val.TotalRecovered.toLocaleString()} />
          <Column field="TotalDeaths" header="Total Deaths" sortable body={(val: CountrySummaryDto) => val.TotalDeaths.toLocaleString()} />
          <Column
            body={
              (val: CountrySummaryDto) =>
                <Button
                  type="button"
                  onClick={() => openSummaryModal(val)}
                  title="View Summary"
                >
                  <i className="material-icons">remove_red_eye</i>
                  <span>View Summary</span>
                </Button>
            }
          />
        </DataTable>
      </div>
      {selectedSummary &&
        <Modal
          isOpen={selectedSummary !== undefined}
          toggle={() => setSelectedSummary(undefined)}
        >
          <ModalHeader className="chart-modal" toggle={() => setSelectedSummary(undefined)}>
            <h2>{selectedSummary.Country}</h2>
          </ModalHeader>
          <ModalBody className="chart-modal">
            {generateChartModal(selectedSummary)}
          </ModalBody>
          <ModalFooter className="chart-modal footer">
            <Button className="btn" type="button" onClick={() => setSelectedSummary(undefined)}>Close Chart</Button>
          </ModalFooter >
        </Modal >
      }
    </>
  );
}

export default Global;