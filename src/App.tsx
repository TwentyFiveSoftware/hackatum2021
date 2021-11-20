import React, { useState } from 'react';
import styles from './styles/App.module.scss';
import { ChartType } from './components/Chart';
import Page from './components/Page';

export interface IPage {
    statement: string,
    chartType: ChartType,
    values: number[],
    labels: string[],
}

const App = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(2);

    const nextPage = () => {
        let currentIndex = currentPageIndex;
        setCurrentPageIndex(-1);
        setCurrentPageIndex((currentIndex + 1) % pages.length);
    };

    const pages: IPage[] = [
        {
            statement: 'Last Friday the *smartphone sales where *50% *higher than expected.',
            chartType: ChartType.BAR,
            values: [120, 100, 150, 90, 70, 450],
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        },
        {
            statement: 'The sales of COVID-19 tests kits *decreased *weekly by *5% over the last *5 *months.',
            chartType: ChartType.LINE,
            values: [100, 110, 90, 75, 60, 50],
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        },
        {
            statement: '*Vegetables were responsible for *60% *revenue last week. The average over the last year is 30%',
            chartType: ChartType.PIE,
            values: [60, 20, 15, 5],
            labels: ['Vegetables', 'Diary Products', 'Bakery Products', 'Cosmetics'],
        },
    ];

    return (
        <div className={styles.wrapper}>
            {currentPageIndex >= 0 && <Page page={pages[currentPageIndex]} onPageEnd={nextPage} />}
        </div>
    );
};

export default App;
