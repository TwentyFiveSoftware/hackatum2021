import React, { useEffect, useState } from 'react';
import styles from '../styles/Page.module.scss';
import Chart from './Chart';
import Statement from './Statement';
import SquareAnimation from './SquareAnimation';
import type { IPage } from '../App';

interface Props {
    page: IPage,
    onPageEnd: () => void;
}

const Page = ({ page, onPageEnd }: Props) => {
    const [showChart, setShowChart] = useState<boolean>(false);

    useEffect(() => {
        setShowChart(false);
    }, [page]);

    return (
        <div className={styles.page + ' page'}>
            {showChart && <Chart chartType={page.chartType} values={page.values} labels={page.labels} />}
            <Statement text={page.statement} animationEnded={showChart} onAnimationEnd={() => setShowChart(true)}>
                {showChart && <SquareAnimation onAnimationEnd={onPageEnd} />}
            </Statement>
        </div>
    );
};

export default Page;
