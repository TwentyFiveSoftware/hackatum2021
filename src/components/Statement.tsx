import React from 'react';
import Anime, { anime } from 'react-anime';
import styles from '../styles/Statement.module.scss';

interface Props {
    text: string;
    animationEnded: boolean;
    onAnimationEnd: () => void;
}

const Statement = ({ text, animationEnded, onAnimationEnd }: Props) => {
    return (
        <div className={styles.statement + ' statement'}>
            <div className={styles.statementInner + ' statementInner'}>
                <Anime
                    duration={500}
                    delay={(_: never, i: number) => 150 * i}
                    easing={'easeOutCubic'}
                    translateY={[-20, 0]}
                    opacity={'100%'}
                    complete={(_: never) => {
                        if (animationEnded) return;

                        anime({
                            targets: '.statementInner',
                            easing: 'easeOutCubic',
                            duration: 1000,
                            paddingTop: [0, 80],
                            scale: [1.3, 1],
                        });

                        onAnimationEnd();
                    }}
                >
                    {text.split(' ').map((word, index) =>
                        word.startsWith('*') ? (
                            <b key={index}>
                                {word.substring(1)}
                            </b>
                        ) : (
                            <span key={index}>{word}</span>
                        ),
                    )}
                </Anime>
            </div>
        </div>
    );
};

export default Statement;
