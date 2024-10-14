import React from 'react';

const LoremParagraph = ({wordsCount}) => {

    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    const getWords = (count) => {
        const paragraphCount = Math.floor(count / loremIpsum.split(' ').length);
        return `${loremIpsum.repeat(paragraphCount)} ${loremIpsum.slice(0, count % Math.floor(loremIpsum.split(' ').length))}`;
    };
    return (
        <p>
            {getWords(wordsCount)}
        </p>
    );
};

export default LoremParagraph;