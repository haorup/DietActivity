import React, { createContext, useState, useContext } from 'react';
import { ColorHelper } from './StyleHelper';

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
    // set the default background color
    //as the first background color in the ColorHelper
    const [backgdColor, setBackgdColor] =
        useState(ColorHelper.firstBackgroundColor);

    return (
        <ColorContext.Provider value={{ backgdColor, setBackgdColor }}>
            {children}
        </ColorContext.Provider>
    );
};
