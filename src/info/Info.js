import self from "../img/self.png"
import mock_1 from "../img/mock-1.png"
import mock_2 from "../img/mock-2.png"
import mock_3 from "../img/mock-3.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const info = {
    firstName: "Viral",
    lastName: "Sangnai",
    initials: "🆚", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "📧",
            text: "viralsangani1920@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/viral2305",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/viral2305",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Viral, a React.js Developer with over 4+ years of experience in building and leading front-end solutions. Currently working as a Frontend Team Lead, I specialize in designing and developing responsive, scalable, and high-performance user interfaces using the React.js library. \n\n Throughout my career, I have developed a strong command over writing clean, reusable, and maintainable code. I actively collaborate with UI/UX designers, backend developers, and cross-functional teams to deliver seamless user experiences. My role also involves mentoring junior developers, overseeing code quality, troubleshooting and debugging issues, and continuously optimizing application performance for the best user outcomes.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'next', 'git', 'github', 'bootstrap', 'html5', 'css3', 'material-ui', 'tailwind-css','primeReact','mongodb'],
            exposedTo: ['Agile & Team Management', 'JIRA & Project Management',]
        }
    ,
    hobbies: [
        {
            label: 'coding',
            emoji: '🖥'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'learning',
            emoji: '🏫'
        },
        {
            label: 'tracking',
            emoji: '💹'
        },

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [
        {
            title: 'AssetFusion360',
            live: 'http://lacoe.hexalytics.ai/',
            source: '',
            image: mock_1
        },
        {
            title: 'Apple Sell Out Data Portal',
            live: 'https://analytics.redingtongroup.com/AppleDataUpload/',
            source: '',
            image: mock_2
        },
        {
            title: "Report Card",
            live: "https://aisd-reportcards-dev.austinisd.org/",
            source: "",
            image: mock_3
        },
        {
            title: "Webbwe",
            live: "https://www.webbwe.com/",
            source: "",
            image: mock3
        },
        {
            title: "Southwest Gas",
            live: "https://myaccount.swgas.com/Portal/#/",
            source: "",
            image: mock2
        },
        {
            title: "Pizza App",
            live: "https://master--pizza-app-ui.netlify.app/",
            source: "https://github.com/viral2305/pizza-app",
            image: mock1
        }
    ],
    experience: [
        {
            name: 'Hexalytics PVT. LTD.',
            position: 'Team Lead/Senior Frontend Developer',
            year: '2023-Present',
            duration: '1 year 8 month'
        },
        {
            name: 'BVM Infotech',
            position: 'Frontend Developer',
            year:'2021-2023',
            duration: '2 year 7 month'
        },
    ]
}