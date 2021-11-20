import React from 'react';
import Anime from 'react-anime';
import styles from '../styles/Chart.module.scss';
import BarChart from './BarChart';

interface Props {
    values: number[];
    xAxisLabels: string[];
}

const Chart = ({ values, xAxisLabels }: Props) => {
    return (
        <div className={styles.chart}>
            <Anime
                duration={1000}
                easing={'easeOutCubic'}
                opacity={[0, 1]}
                translateY={[50, 0]}
            >
                <BarChart values={values} xAxisLabels={xAxisLabels} />
            </Anime>
        </div>
    );
};

export default Chart;
