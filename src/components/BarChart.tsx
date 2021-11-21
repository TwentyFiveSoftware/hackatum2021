import React from 'react';
import ReactECharts from 'echarts-for-react';
import { colorScheme } from '../App';

interface Props {
    values: number[];
    labels: string[];
}

const BarChart = ({ values, labels }: Props) => {
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
                        data: values.map((v, i) => ({
                            value: v,
                            itemStyle: {
                                color: colorScheme.slice(0, values.length)[values.length - i - 1],
                            },
                        })),
                        type: 'bar',
                        colorBy: 'data',
                    },
                ],
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                },
                animationDelay: (index: number) => 700 + index * 100,
            }}
        />
    );
};

export default BarChart;
