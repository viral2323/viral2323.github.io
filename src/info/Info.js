import self from "../img/self.png"
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
            emoji: "💼",
            text: "Currently Looking a Job"
        },
        {
            emoji: "📧",
            text: "viralsangani1920@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/viral.sangani.77?mibextid=ZbWKwL",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        
        {
            link: "https://github.com/viral2323",
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
    bio: "Hello! I'm Viral.Everyone can deliver RESULTS but a few can deliver SATISFACTION. As a React.js Developer, I specialize in designing and developing user interfaces for web applications using the React library. With several years of experience in this role, I have honed my skills in writing clean, reusable, and maintainable code, collaborating with designers and cross-functional teams, troubleshooting and debugging issues, and optimizing application performance.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'material-ui', 'tailwind-css','antd','mongodb'],
            exposedTo: ['nodejs', 'expressjs', 'socket.io','graphql']
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
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://www.webbwe.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock3
        },
        {
            title: "Project 2",
            live: "https://myaccount.swgas.com/Portal/#/",
            source: "",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://master--pizza-app-ui.netlify.app/",
            source: "https://github.com/viral2323/pizza-app",
            image: mock1
        }
    ],
    experience: [
        {
            name: 'opsence technologies',
            position: 'React Js Developer',
            year:'2019-2021',
            duration: '1 year 6 month'
        },
        {
            name: 'BVM Infotech',
            position: 'MERN Stack Developer',
            year: '2021-2023',
            duration: '2 year'
        }
    ]
}