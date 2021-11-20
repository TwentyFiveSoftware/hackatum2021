import React from 'react';
import ReactECharts from 'echarts-for-react';
import { colorScheme } from '../App';

interface Props {
    values: number[];
    labels: string[];
}

const PieChart = ({ values, labels }: Props) => {
    return (
        <ReactECharts
            opts={{ renderer: 'svg' }}
            style={{
                height: '40rem',
                width: '100%',
            }}
            option={{
                series: [
                    {
                        data: values.map((v, i) => ({
                            value: v,
                            name: labels[i],
                            itemStyle: {
                                color: colorScheme[i],
                            },
                        })),
                        // roseType: 'radius',
                        type: 'pie',
                        colorBy: 'data',
                        radius: '65%',
                    },
                ],
                label: {
                    fontSize: 15,
                    fontFamily: 'Inter',
                    color: '#ABB2BF',
                },
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

export default PieChart;
