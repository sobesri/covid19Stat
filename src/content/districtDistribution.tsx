import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, HeatmapLayer } from '@react-google-maps/api'
import { apiService } from '../services/api.service';
import { DistrictSummaryDto, LatLng } from '../types';
import { Chart } from 'primereact/chart';
import { config } from '../config';

const sriLanka = { lat: 7.8731, lng: 80.7718 };
const DEFAULT_COORDINATES = { lat: 0, lng: 0 };

const District = () => {
  const [summary, setSummary] = useState<DistrictSummaryDto[]>();
  const [data, setData] = useState<LatLng[]>([DEFAULT_COORDINATES]);

  const libs = ['places', 'visualization', 'drawing', 'geometry'];
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.GOOGLE_MAPS_API_KEY,
    libraries: libs,
  })

  useEffect(() => {
    apiService.getDistricts_map()
      .then((res: string) => {
        let rows = res.split(/\r\n|\n/);
        let arr: DistrictSummaryDto[] = [];
        // eslint-disable-next-line
        rows.map((row: string, index: number) => {
          if (index !== 0) {
            let data = row.split(',');
            arr.push({
              District: data[0],
              LatLng: { lat: Number.parseFloat(data[1]), lng: Number.parseFloat(data[2]) },
              Cases: Number.parseInt(data[3])
            })
          }
        });

        setSummary(arr.filter((v: DistrictSummaryDto) => v.LatLng.lat > 0 && v.LatLng.lng > 0));

        let dataArr = data;
        // eslint-disable-next-line
        arr.map((v: DistrictSummaryDto) => {
          for (let i: number = 0; i < v.Cases; i++) {
            dataArr.push(v.LatLng);
          }
        });

        dataArr = dataArr.filter((v: LatLng) => v.lat > 0 && v.lng > 0);


        setData(dataArr);
      })
    // eslint-disable-next-line
  }, [])

  const generateChart = (summaries: DistrictSummaryDto[]) => {

    let data = {
      labels: summaries.map((d: DistrictSummaryDto) => d.District),
      datasets: [
        {
          label: 'Local Cases',
          data: summaries.map((d: DistrictSummaryDto) => d.Cases),
          backgroundColor:
            'white'
          ,
          borderWidth: 0
        }
      ]
    };

    let chartOptions = {
      responsize: true,
      aspectRatio: window.innerWidth > 600 ? 1 : 0.7,
      legend: {
        display: false,
        labels: {
          fontColor: '#fff'
        },
        position: 'bottom'
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 20,
          bottom: 0
        }
      }
    };

    return <Chart width={''} type={'horizontalBar'} data={data} options={chartOptions} />
  }

  const options = {
    zoomControl: false,
    scaleControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  }


  return isLoaded ? <>
    <div>
      <div className="header-row">
        <h2>Nationwide Outbreak Summary - Sri Lanka</h2>
        <p>
          Displayed data may have a delay. <br />
          <span className="source">
            <span className="mobile">
              Sources:&nbsp;
            <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">
                HPB
            </a>
            </span>
            <span className="full">
              Sources:&nbsp;
            <a href="https://hpb.health.gov.lk/" target="_blank" rel="noopener noreferrer">
                HPB | Live updates on New Coronavirus (COVID-19) outbreak
            </a>
            </span>
          </span>
        </p>
      </div>
      <div className="data-panel">
        <div className="row border-box-sm">
          <div className="column">
            <div className='row-panel'>
              <GoogleMap
                id='heat-map'
                options={options}
                zoom={window.innerWidth > 600 ? 8 : 7}
                extraMapTypes={undefined}
                onLoad={(map: any) => {
                  // const bounds = new window.google.maps.LatLngBounds();
                  map.setCenter(sriLanka);
                  // map.setZoom(3);
                  // map.fitBounds(bounds);
                }}
              >
                <HeatmapLayer
                  // required
                  options={{
                    data: data.map((v: LatLng) => new google.maps.LatLng(v)),
                    radius: 40,
                    maxIntensity: 40
                  }}
                  data={data.map((v: LatLng) => new google.maps.LatLng(v))}
                />
              </GoogleMap>
            </div>
          </div>
          <div className="column">
            {summary && generateChart(summary)}
            <div className="row-panel legend">
              Number of cases in each district
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    : <></>
}

export default District;