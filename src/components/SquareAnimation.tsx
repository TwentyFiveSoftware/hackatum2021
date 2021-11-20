import React from 'react';
import Anime, { anime } from 'react-anime';
import styles from '../styles/Square.module.scss';
import { colorScheme } from '../App';

interface Props {
    onAnimationEnd: () => void;
}

const SquareAnimation = ({ onAnimationEnd }: Props) => {
    let pageAnimationStarted = false;

    return (
        <div className={styles.wrapper}>
            <Anime
                duration={7000}
                delay={(_: never, i: number) => 1500 + 150 * i}
                easing={'easeInOutCubic'}
                keyframes={[
                    { left: anime.stagger(['95%', '100%']), opacity: 1 },
                    { left: anime.stagger(['5%', '0%']) },
                    { left: '180%' },
                ]}
                complete={() => onAnimationEnd()}
                update={(animation: { progress: number }) => {
                    if (animation.progress < 75 || pageAnimationStarted) return;
                    pageAnimationStarted = true;

                    anime({
                        targets: '.page',
                        duration: 1000,
                        easing: 'easeInOutCubic',
                        opacity: [1, 0],
                        translateX: ['0%', '50%'],
                    });
                }}
            >
                {colorScheme.map((color, index) => (
                    <div style={{ backgroundColor: color }} key={index} />
                ))}
            </Anime>
        </div>
    );
};

export default SquareAnimation;
