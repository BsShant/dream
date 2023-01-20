import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { LayoutContextType } from "../@types/Layout";

export const LayoutContext = React.createContext<LayoutContextType | null>(null);

const LayoutProvider = (props: any) => {

    const [sliderCollapsed, setSliderCollapsed] = useState(false)

    const providerValue: LayoutContextType = {
        sliderCollapsed,
        setSliderCollapsed
    };

    return (
        <LayoutContext.Provider value={providerValue}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export default LayoutProvider;
