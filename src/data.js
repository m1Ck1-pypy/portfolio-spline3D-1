import { IoDiamondOutline, IoLogoGithub, IoLogoYoutube, IoLogoVk, IoLogoTwitch, IoLogoWhatsapp } from "react-icons/io5";

import img1 from './images/img1.png';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';



export const Experience = [
    {
        id: 1,
        data: "2016 - present",
        title: "Creative Director",
        srcIcon: <IoDiamondOutline />,
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 2,
        data: "2014 - 2016",
        title: "Creative Director",
        srcIcon: <IoDiamondOutline />,
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 3,
        data: "2013 - 2014",
        title: "Creative Director",
        srcIcon: <IoDiamondOutline />,
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 4,
        data: "2012 - 2013",
        title: "Creative Director",
        srcIcon: <IoDiamondOutline />,
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: 5,
        data: "2010 - 2012",
        title: "Creative Director",
        srcIcon: <IoDiamondOutline />,
        location: "Doha, Qatar",
        description:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    }
];


export const Projects = [
    {
        id: 1,
        name: "Music Player UI-Design",
        imageSrc: img1,
        techs: "ReactJS, Redux, Material UI",
        github: "#"
    },
    {
        id: 2,
        name: "Gambling Dashboard Design",
        imageSrc: img2,
        techs: "ReactJS, Redux, Tailwind CSS",
        github: "#"
    },
    {
        id: 3,
        name: "Dashboard Dark Mockup",
        imageSrc: img3,
        techs: "ReactJS, Chakra UI, MobX",
        github: "#"
    },
    {
        id: 4,
        name: "Music Player Figma Design",
        imageSrc: img4,
        techs: "Figma",
        github: "#"
    },
    {
        id: 5,
        name: "Dashboard Vector Charts",
        imageSrc: img5,
        techs: "ReactJS, Spline 3D, Tailwind CSS",
        github: "#"
    },
    {
        id: 6,
        name: "App Weather UI/UX Design",
        imageSrc: img6,
        techs: "Figma",
        github: "#"
    }
];

export const Connect = [
    {
        id: 1,
        iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
        name: "Github",
        link: "#"
    },
    {
        id: 2,
        iconSrc: <IoLogoVk className="text-colorVk text-3xl cursor-pointer" />,
        name: "Vkontakte",
        link: "#"
    },
    {
        id: 3,
        iconSrc: <IoLogoYoutube className="text-colorYT text-3xl cursor-pointer" />,
        name: "YouTube",
        link: "#"
    },
    {
        id: 4,
        iconSrc: <IoLogoTwitch className="text-colorTwitch text-3xl cursor-pointer" />,
        name: "Twitch",
        link: "#"
    },
    {
        id: 5,
        iconSrc: <IoLogoWhatsapp className="text-colorWA text-3xl cursor-pointer" />,
        name: "Whatsapp",
        link: "#"
    },

]