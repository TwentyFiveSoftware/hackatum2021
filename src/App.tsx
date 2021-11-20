import React, { useState } from 'react';
import styles from './styles/App.module.scss';
import Chart, { ChartType } from './components/Chart';
import Statement from './components/Statement';

const App = () => {
    const [showChart, setShowChart] = useState<boolean>(false);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.page}>
                {showChart && <Chart chartType={ChartType.BAR}
                                     values={[120, 100, 150, 90, 70, 450]}
                                     labels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />}

                <Statement text={'Last Friday the *smartphone sales where *50% *higher than expected'}
                           animationEnded={showChart}
                           onAnimationEnd={() => setShowChart(true)} />
            </div>
        </div>
    );
};

export default App;
