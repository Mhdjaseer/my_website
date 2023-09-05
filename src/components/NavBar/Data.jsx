import React from "react";

// fist menu right  bar
import { AiFillHome } from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import{GiSkills} from "react-icons/gi";
import {GoProjectSymlink} from "react-icons/go";
import {MdOutlineConnectWithoutContact} from 'react-icons/md';

// second menu right to bottom menu bars
import {PiHandPalmDuotone} from 'react-icons/pi'
import {BsFillMicFill,BsFillMouse2Fill} from 'react-icons/bs'
import {ImEye} from 'react-icons/im'


// Right::::menu icons,url and menu text's
export const links=[
    {
        id:1,
        url:'/',
        text:'Home',
        icon:<AiFillHome/>
    },
    {
        id:2,
        url:'/',
        text:'About',
        icon:<FcAbout/>
    },
    {
        id:3,
        url:'/',
        text:'Skills',
        icon:<GiSkills/>
    },
    {
        id:4,
        url:'/',
        text:'Projects',
        icon:<GoProjectSymlink/>
    },
    {
        id:5,
        url:'/',
        text:'Contact',
        icon:<MdOutlineConnectWithoutContact/>
    }
]

// right to bottom icons menu, text and  link 

export const navRightToBottom=[
    {
        id:1,
        url:'/',
        text:'Hand Control',
        // icon:
    },
    {
        id:2,
        url:'/',
        text:'Voice Control',
        // icon:
    },
    {
        id:3,
        url:'/',
        text:'Eye Control',
        // icon:
    },
    {
        id:4,
        url:'/',
        text:'Mouse Control',
        // icon:
    }


]