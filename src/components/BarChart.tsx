import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    values: number[];
    labels: string[];
}

const colors: string[] = ['#ebdba4', '#f2d643', '#ffb248', '#eb8146', '#d95850', '#893448'];

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
                                color: colors[i],
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
