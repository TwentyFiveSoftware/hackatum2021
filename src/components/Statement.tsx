import React from 'react';
import Anime from 'react-anime';
import styles from '../styles/Statement.module.scss';

interface Props {
    text: string;
}

const Statement = ({ text }: Props) => {
    return (
        <p className={styles.statement}>
            <Anime
                duration={500}
                delay={(_: never, i: number) => 150 * i}
                easing={'easeOutCubic'}
                translateY={[-20, 0]}
                opacity={'100%'}
            >
                {text.split(' ').map((word, index) =>
                    word.startsWith('*') ? (
                        <b key={index}>
                            {word.substring(1)}
                        </b>
                    ) : (
                        <div key={index}>{word}</div>
                    ),
                )}
            </Anime>
        </p>
    );
};

export default Statement;
