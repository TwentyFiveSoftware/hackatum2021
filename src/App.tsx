import React from 'react';
import styles from './styles/App.module.scss';
import BarChart from './components/BarChart';

const App = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.page}>
                <div className={styles.split}>
                    <div className={styles.side}>
                        <div className={styles.chart}>
                            <BarChart values={[100, 200, 150, 90, 70, 450]}
                                      xAxisLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />
                        </div>
                    </div>
                    <div className={styles.side}>
                        <p className={styles.statement}>
                            Last Friday the <b>smartphone</b> sales where <b>50% higher</b> than expected
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
