import { ChartType } from '../components/Chart';
import { IPage } from '../App';

export const pages: IPage[] = [
    {
        statement: '*Prices in 2019 were on average *41% *higher than in 2018. Therefore the amount of sales was slightly lower.',
        chartType: ChartType.BAR,
        values: [12.144842, 17.290347, 24.388591],
        labels: ['2017', '2018', '2019'],
    },
    {
        statement: 'On 2019/08/20, the store made *6.7 *times more revenue than on most other days.',
        chartType: ChartType.BAR,
        values: [564.82, 1750.71, 1661.05, 761.89, 340.97, 7232.69],
        labels: ['2019/08/15', '2019/08/16', '2019/08/17', '2019/08/18', '2019/08/19', '2019/08/20'],
    },
    {
        statement: 'Average *revenue *per *day has increased *25% yearly.',
        chartType: ChartType.LINE,
        values: [1.735577, 2.049807, 2.581987],
        labels: ['2017', '2018', '2019'],
    },
    {
        statement: '*October 2019 has been *5% better than *September in terms of *revenue.',
        chartType: ChartType.PIE,
        values: [7339, 7713],
        labels: ['Sep', 'Oct'],
    },
    {
        statement: 'Revenue in *October has *increased by an average of *10% over the years.',
        chartType: ChartType.BAR,
        values: [6366, 7339, 7713],
        labels: ['2017', '2018', '2019'],
    },
    {
        statement: 'Mean *sales were *down by more than *6% than last year. Yet *revenue was *higher due to the *increased *prices.',
        chartType: ChartType.BAR,
        values: [0.435598, 0.40645],
        labels: ['2018', '2019'],
    },
    {
        statement: '*Revenue increased more than *9% last year.',
        chartType: ChartType.BAR,
        values: [175934.93, 193065.48],
        labels: ['2018', '2019'],
    },
    {
        statement: '*Max *revenue on one day was *41% higher in year 2019.',
        chartType: ChartType.BAR,
        values: [3517.2, 4686.62, 6640.93],
        labels: ['2017', '2018', '2019'],
    },
];