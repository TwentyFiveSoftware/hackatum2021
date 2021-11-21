import React, { useState } from 'react';
import styles from './styles/App.module.scss';
import { ChartType } from './components/Chart';
import Page from './components/Page';
import { pages } from './data/pages';

export interface IPage {
    statement: string,
    chartType: ChartType,
    values: number[],
    labels: string[],
}

export const colorScheme: string[] = ['#893448', '#d95850', '#eb8146', '#ffb248', '#f2d643', '#ebdba4'];

const App = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

    const nextPage = () => {
        let currentIndex = currentPageIndex;
        setCurrentPageIndex(-1);
        setCurrentPageIndex((currentIndex + 1) % pages.length);
    };

    return (
        <div className={styles.wrapper}>
            {currentPageIndex >= 0 && <Page page={pages[currentPageIndex]} onPageEnd={nextPage} />}
        </div>
    );
};

export default App;
