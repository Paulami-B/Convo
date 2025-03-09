import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { TbSettings } from "react-icons/tb";

export type TitleType = 'message' | 'groups' | 'call' | 'settings'

type SideBarType = {
    title: TitleType,
    icon: React.ReactNode,
    link: string
}

export const sidebarMenuItems: SideBarType[] = [
    {
        title: 'message',
        icon: <AiOutlineMessage strokeWidth={5} className="text-2xl" />,
        link: `/`
    }, {
        title: 'groups',
        icon: <GrGroup className="text-2xl" />,
        link: `/`
    }, {
        title: 'call',
        icon: <FiPhone className="text-2xl" />,
        link: `/`
    }, {
        title: 'settings',
        icon: <TbSettings className="text-2xl" />,
        link: `/`
    }
];