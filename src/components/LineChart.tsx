import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    values: number[];
    labels: string[];
}

const LineChart = ({ values, labels }: Props) => {
    return (
        <ReactECharts
            opts={{ renderer: 'svg' }}
            style={{
                height: '30rem',
                width: '100%',
            }}
            option={{
                xAxis: {
                    type: 'category',
                    data: labels,
                    axisLabel: {
                        fontSize: 15,
                        fontFamily: 'Inter',
                        color: '#ABB2BF',
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: '#4F575F',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    show: false,
                },
                series: [
                    {
                        data: values,
                        type: 'line',
                        areaStyle: {
                            color: '#d95850',
                            opacity: 0.1,
                        },
                        lineStyle: {
                            color: '#893448',
                        },
                        itemStyle: {
                            color: '#893448',
                        },
                        symbol: 'circle',
                    },
                ],
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                },
                animationDelay: (index: number) => 700 + index * 50,
            }}
        />
    );
};

export default LineChart;
