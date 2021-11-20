import React from 'react';
import ReactECharts from 'echarts-for-react';
import styles from './styles/App.module.scss';

const App = () => {
    const data = [
        {
            value: 120,
            itemStyle: {
                color: '#ebdba4',
            },
        },
        {
            value: 200,
            itemStyle: {
                color: '#f2d643',
            },
        },
        {
            value: 150,
            itemStyle: {
                color: '#ffb248',
            },
        },
        {
            value: 100,
            itemStyle: {
                color: '#eb8146',
            },
        },
        {
            value: 80,
            itemStyle: {
                color: '#d95850',
            },
        },
        {
            value: 450,
            itemStyle: {
                color: '#893448',
            },
        },
    ];

    return (
        <div className={styles.container}>
            <h1>#hackaTUM</h1>
            <div className={styles.chart}>
                <ReactECharts
                    opts={{ renderer: 'svg' }}
                    option={{
                        xAxis: {
                            type: 'category',
                            show: false,
                        },
                        yAxis: {
                            show: false,
                        },
                        series: [
                            {
                                data,
                                type: 'bar',
                                colorBy: 'data',
                            },
                        ],
                        grid: {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        },
                        animationDelay: (index: number) => index * 100,
                    }}
                />
            </div>
        </div>
    );
};

export default App;
