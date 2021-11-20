import React from 'react';
import Anime from 'react-anime';
import styles from '../styles/Chart.module.scss';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

export enum ChartType {
    BAR,
    LINE,
    PIE,
}

interface Props {
    chartType: ChartType,
    values: number[];
    labels: string[];
}

const Chart = ({ chartType, values, labels }: Props) => {
    return (
        <div className={styles.chart}>
            <Anime
                duration={1000}
                easing={'easeOutCubic'}
                opacity={[0, 1]}
                translateY={[50, 0]}
            >
                {chartType === ChartType.BAR ? (
                    <BarChart values={values} labels={labels} />

                ) : chartType === ChartType.LINE ? (
                    <LineChart values={values} labels={labels} />

                ) : chartType === ChartType.PIE ? (
                    <PieChart values={values} labels={labels} />

                ) : (
                    <></>
                )}
            </Anime>
        </div>
    );
};

export default Chart;
