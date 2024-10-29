import React from 'react';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { FoundryIcon } from '../../icons/FoundryIcon';
interface NavigateTitle {
    handleNavigate: () => void;
    title: string;
}

const NavigateTitle: React.FC<NavigateTitle> = ({ handleNavigate, title }) => {
    return (
        <div
            className="flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]"
            onClick={handleNavigate}>
            <ArrowLeft className="!relative !w-[24px] !h-[24px]" />
            <FoundryIcon className="!relative !w-[24px] !h-[24px] bg-white rounded-xl" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase">
                {title}
            </div>
        </div>
    )
}

export default NavigateTitle;