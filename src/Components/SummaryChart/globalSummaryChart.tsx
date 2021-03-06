import React from 'react';
import { GlobalSummary } from '../../types';
import { Chart } from 'primereact/chart';

interface Props {
  summaries?: GlobalSummary[];
}

const GlobalSummaryChart = ({ summaries }: Props) => {

  let data = summaries ? {
    labels: summaries.map((d: GlobalSummary) => d.country.length > 10 ? d.country.replace(/[a-z ]/g, '') : d.country),
    datasets: [
      {
        label: 'Active',
        data: summaries.map((d: GlobalSummary) => d.active),
        backgroundColor: '#3498db',
        borderWidth: 0
      },
      {
        label: 'Recovered',
        data: summaries.map((d: GlobalSummary) => d.recovered),
        backgroundColor: '#2ecc71',
        borderWidth: 0
      },
      {
        label: 'Deaths',
        data: summaries.map((d: GlobalSummary) => d.deaths),
        backgroundColor: '#e74c3c',
        borderWidth: 0
      }
    ]
  } : null;

  let options = {
    maintainAspectRatio: true,
    aspectRatio: 1,
    rotation: 1,
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

  return data && <>
    <Chart width={''} type={'horizontalBar'} data={data} options={options} />
  </>;
}

export default GlobalSummaryChart;