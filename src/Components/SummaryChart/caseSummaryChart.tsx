import React from 'react';
import { CaseSummary } from '../../types';
import { Chart } from 'primereact/chart';

interface Props {
  summary: CaseSummary;
  type: string
  width?: string
}

const CaseSummaryChart = ({ summary, type, width }: Props) => {
  const { confirmed, deaths, recovered } = summary;

  const data = {
    labels: [
      'Active',
      'Recovered',
      'Deaths'
    ],
    datasets: [
      {
        label: 'Local Cases',
        data: [
          confirmed - recovered - deaths,
          recovered,
          deaths
        ],
        backgroundColor: [
          '#3498db',
          '#2ecc71',
          '#e74c3c',
        ],
        borderWidth: 0
      }
    ]
  };

  let options = {
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

  return <>
    <Chart width={width || ''} type={type} data={data} options={options} />
  </>;
}

export default CaseSummaryChart;