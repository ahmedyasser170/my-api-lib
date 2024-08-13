import React from 'react';
interface IconeProps {
    params: {
        image: string;
        onClick: () => void;
        width: number;
        height: number;
    };
}
declare const ClickableIcon: React.FC<IconeProps>;
export default ClickableIcon;
