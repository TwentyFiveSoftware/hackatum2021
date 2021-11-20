import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    values: number[];
    labels: string[];
}

const colors: string[] = ['#893448', '#d95850', '#eb8146', '#ffb248', '#f2d643', '#ebdba4'];

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
                                color: colors[i],
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
