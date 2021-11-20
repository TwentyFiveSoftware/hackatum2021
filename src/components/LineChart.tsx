import React from 'react';
import ReactECharts from 'echarts-for-react';
import { colorScheme } from '../App';

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
                            color: colorScheme[1],
                            opacity: 0.1,
                        },
                        lineStyle: {
                            color: colorScheme[0],
                        },
                        itemStyle: {
                            color: colorScheme[0],
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
