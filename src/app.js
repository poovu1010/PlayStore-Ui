window.addEventListener('DOMContentLoaded', () => {
    let theme = localStorage.getItem("theme");
    console.log(theme)
    if (theme === "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
    shown(appsData)

})


const appsData = [
    {
        id: 1,
        name: "WhatsApp",
        developer: "Meta Platforms",
        category: "Social",
        rating: 4.3,
        reviews: "187M",
        size: "38 MB",
        installs: "5B+",
        version: "2.24.9.81",
        description: "WhatsApp is a free, multi-platform messaging app that lets you make video and voice calls, send text messages, and more — all with just a Wi-Fi connection. Simply log in with your phone number, and you're ready to connect instantly with the people who matter most.",
        image: "https://img.icons8.com/color/120/whatsapp--v1.png",
        screenshots: [],
        tags: ["Messaging", "Video Call", "Free"],
        featured: true
    },
    {
        id: 2,
        name: "Instagram",
        developer: "Meta Platforms",
        category: "Social",
        rating: 4.1,
        reviews: "153M",
        size: "57 MB",
        installs: "5B+",
        version: "320.0.0.0",
        description: "Bringing you closer to the people and things you love. Connect with friends, share moments, explore content, and discover new things all in one place. Instagram is where creativity meets community.",
        image: "https://img.icons8.com/color/120/instagram-new--v1.png",
        screenshots: [],
        tags: ["Photos", "Stories", "Reels"],
        featured: true
    },
    {
        id: 3,
        name: "Spotify",
        developer: "Spotify AB",
        category: "Music",
        rating: 4.4,
        reviews: "89M",
        size: "31 MB",
        installs: "1B+",
        version: "8.9.30",
        description: "With Spotify, you have access to a world of music. You can listen to artists and albums, or create your own playlist of your favorite songs. Want to discover new music? Choose a ready-made playlist that suits your mood or get personalized recommendations.",
        image: "https://img.icons8.com/color/120/spotify--v1.png",
        screenshots: [],
        tags: ["Music", "Podcasts", "Streaming"],
        featured: true
    },
    {
        id: 4,
        name: "YouTube",
        developer: "Google LLC",
        category: "Entertainment",
        rating: 4.4,
        reviews: "132M",
        size: "64 MB",
        installs: "10B+",
        version: "19.10.35",
        description: "Get the YouTube app to watch videos, music, news, and more on your Android phone and tablet. See what the world is watching – from the hottest music videos to what's trending in gaming, entertainment, news, and more.",
        image: "https://img.icons8.com/color/120/youtube-play.png",
        screenshots: [],
        tags: ["Video", "Streaming", "Music"],
        featured: false
    },
    {
        id: 5,
        name: "Google Maps",
        developer: "Google LLC",
        category: "Tools",
        rating: 4.2,
        reviews: "98M",
        size: "119 MB",
        installs: "10B+",
        version: "11.122.0101",
        description: "Navigate your world faster and easier with Google Maps. Over 220 countries and territories mapped and hundreds of millions of businesses and places on the map. Get real-time GPS navigation, traffic, and transit info, and explore local neighborhoods by knowing where to eat, drink and go.",
        image: "https://img.icons8.com/color/120/google-maps-new.png",
        screenshots: [],
        tags: ["Navigation", "Maps", "GPS"],
        featured: false
    },
    {
        id: 6,
        name: "Duolingo",
        developer: "Duolingo",
        category: "Education",
        rating: 4.6,
        reviews: "24M",
        size: "22 MB",
        installs: "500M+",
        version: "5.149.5",
        description: "Learn a language for free. Forever. Duolingo is the most popular language-learning platform and the most downloaded education app in the world, with more than 300 million learners. The science-based teaching method is proven to foster long-term retention.",
        image: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/120/external-duolingo-language-learning-platform-with-free-learning-facility-logo-color-tal-revivo.png",
        screenshots: [],
        tags: ["Learning", "Languages", "Free"],
        featured: true
    },
    {
        id: 7,
        name: "Candy Crush Saga",
        developer: "King",
        category: "Games",
        rating: 4.4,
        reviews: "45M",
        size: "80 MB",
        installs: "1B+",
        version: "1.269.0.2",
        description: "Start playing Candy Crush Saga today – a legendary puzzle game loved by millions of players around the world. Switch and match your way through hundreds of levels in this divine puzzle adventure. Progress through the episodes on the Candy Kingdom and meet wonderful characters.",
        image: "https://img.icons8.com/color/120/candy--v1.png",
        screenshots: [],
        tags: ["Puzzle", "Casual", "Match-3"],
        featured: false
    },
    {
        id: 8,
        name: "Microsoft Teams",
        developer: "Microsoft Corporation",
        category: "Productivity",
        rating: 4.0,
        reviews: "12M",
        size: "75 MB",
        installs: "500M+",
        version: "1416/1.0.0.2024",
        description: "Microsoft Teams is your hub for teamwork, which brings together everything a team needs: chat and threaded conversations, meetings & video conferencing, calling, content collaboration with the power of Microsoft 365 applications, and the ability to create and join teams and channels.",
        image: "https://img.icons8.com/color/120/microsoft-teams.png",
        screenshots: [],
        tags: ["Work", "Video Calls", "Collaboration"],
        featured: false
    },
    {
        id: 9,
        name: "Netflix",
        developer: "Netflix, Inc.",
        category: "Entertainment",
        rating: 4.3,
        reviews: "17M",
        size: "53 MB",
        installs: "1B+",
        version: "8.116.0",
        description: "Looking for the most talked about TV shows and movies from the around the world? They're all on Netflix. From dramas to comedies, documentaries, animation, and more. The more you watch, the better Netflix gets at recommending TV shows and movies you'll love.",
        image: "https://img.icons8.com/color/120/netflix--v1.png",
        screenshots: [],
        tags: ["Movies", "TV Shows", "Streaming"],
        featured: true
    },
    {
        id: 10,
        name: "Notion",
        developer: "Notion Labs",
        category: "Productivity",
        rating: 4.5,
        reviews: "8M",
        size: "44 MB",
        installs: "100M+",
        version: "1.5.7",
        description: "Notion is the all-in-one workspace for notes, docs, wikis, tasks, and more. Notion makes it easy to create documents of all kinds – take notes, create to-do lists, build wikis, manage projects with Kanban boards and calendars, track data in spreadsheets.",
        image: "https://img.icons8.com/color/120/notion--v1.png",
        screenshots: [],
        tags: ["Notes", "Planning", "Wiki"],
        featured: false
    },
    {
        id: 11,
        name: "PUBG Mobile",
        developer: "Krafton Inc.",
        category: "Games",
        rating: 4.1,
        reviews: "52M",
        size: "890 MB",
        installs: "500M+",
        version: "3.1.0",
        description: "PUBG MOBILE delivers the most intense free-to-play multiplayer action on mobile. Drop in, gear up, and compete. Survive epic 100-player classic battles, payload mode and fast-paced 4v4 team deathmatch and zombie modes. Survival is key and the last one standing wins.",
        image: "https://img.icons8.com/color/120/pubg.png",
        screenshots: [],
        tags: ["Battle Royale", "Multiplayer", "FPS"],
        featured: true
    },
    {
        id: 12,
        name: "Google Chrome",
        developer: "Google LLC",
        category: "Tools",
        rating: 4.3,
        reviews: "71M",
        size: "152 MB",
        installs: "10B+",
        version: "124.0.6367.179",
        description: "Google Chrome is a fast, easy to use, and secure web browser. Designed for Android, Chrome brings you personalized news articles, quick links to your favorite sites, downloads, and Google Search built in. Download now to enjoy the same Chrome web browser experience you love across all your devices.",
        image: "https://img.icons8.com/color/120/chrome--v1.png",
        screenshots: [],
        tags: ["Browser", "Web", "Internet"],
        featured: false
    },
    {
        id: 13,
        name: "Zoom",
        developer: "Zoom Video Communications",
        category: "Productivity",
        rating: 3.9,
        reviews: "9M",
        size: "66 MB",
        installs: "500M+",
        version: "5.17.10",
        description: "Stay connected wherever you go – start or join a secure meeting with flawless video and audio, instant screen sharing, and cross-platform instant messaging - for free! Zoom is #1 in customer satisfaction and the best unified communications experience on mobile.",
        image: "https://img.icons8.com/color/120/zoom.png",
        screenshots: [],
        tags: ["Video Call", "Meetings", "Work"],
        featured: false
    },
    {
        id: 14,
        name: "Minecraft",
        developer: "Mojang",
        category: "Games",
        rating: 4.5,
        reviews: "31M",
        size: "950 MB",
        installs: "100M+",
        version: "1.21.0.23",
        description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs.",
        image: "https://img.icons8.com/color/120/minecraft.png",
        screenshots: [],
        tags: ["Sandbox", "Adventure", "Building"],
        featured: true
    },
    {
        id: 15,
        name: "Khan Academy",
        developer: "Khan Academy",
        category: "Education",
        rating: 4.7,
        reviews: "5M",
        size: "18 MB",
        installs: "50M+",
        version: "7.4.0",
        description: "Khan Academy offers practice exercises, instructional videos, and a personalized learning dashboard that empower learners to study at their own pace in and outside of the classroom. We tackle math, science, computing, history, art history, economics, and more.",
        image: "https://img.icons8.com/color/120/khan-academy.png",
        screenshots: [],
        tags: ["Learning", "Math", "Science"],
        featured: false
    },
    {
        id: 16,
        name: "TikTok",
        developer: "TikTok Pte. Ltd.",
        category: "Social",
        rating: 4.5,
        reviews: "91M",
        size: "110 MB",
        installs: "1B+",
        version: "35.4.4",
        description: "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you're a sports fanatic, a pet enthusiast, or just looking for a laugh, there's something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don't.",
        image: "https://img.icons8.com/color/120/tiktok--v1.png",
        screenshots: [],
        tags: ["Videos", "Trending", "Short-form"],
        featured: true
    }
];

const categorie = ["All", "Social", "Music", "Entertainment", "Tools", "Education", "Games", "Productivity"];

// global select
const theme_btn = document.querySelector(".mode");
const body = document.querySelector(".light");
const all_apps_section = document.querySelector(".all-apps");
const all_apps_Container = document.querySelector(".scrollY-app-div")
const Trending_apps_Container = document.querySelector(".scrollX-app-div")
const search_bar_nav = document.querySelector(".search-bar-nav")
const Installed_apps = document.querySelector("#Installed-apps")
const categories = document.querySelector(".categories")

// id selectors
const all_cat = document.querySelector("#All")
const Social_cat = document.querySelector("#Social")
const Music_cat = document.querySelector("#Music")
const Tools_cat = document.querySelector("#Tools")
const Education_cat = document.querySelector("#Education")
const Games_cat = document.querySelector("#Games")
const Entertainment = document.querySelector("#Entertainment")

function clickbtn(btn) {

    btn.classList.toggle("installed");
    if (btn.classList.contains("installed")) {
        btn.textContent = "Uninstall";
        btn.style.background = "black"
    } else {
        btn.textContent = "Install";
        btn.style.background = "green"
    }
};
// darktheme and light
function HandleEvent() {

    body.classList.toggle("dark");
    localStorage.setItem("theme", "dark")
    theme_btn.setAttribute("src", "./assets/icons/lightmode.svg")
    if (body.classList.contains("dark") || body.classList.contains("")) {
        body.classList.remove("light");



    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light")
        theme_btn.setAttribute("src", "./assets/icons/darkmode.svg")

    }
}
//search
search_bar_nav.addEventListener('input', (e) => {
    let fill = searchFilter(search_bar_nav.value);
    shown(fill);
})
function searchFilter(social) {

    return appsData.filter((img) => {

        return img.name.toLowerCase().includes(social.toLowerCase())


    })
}



// categories
Social_cat.addEventListener("click", () => {

    const fill = filtering("Social")
    shown(fill);



})
Music_cat.addEventListener("click", () => {
    const fill = filtering("Music")
    shown(fill);


})
Education_cat.addEventListener("click", () => {
    const fill = filtering("Education")
    shown(fill);


})
Tools_cat.addEventListener("click", () => {
    const fill = filtering("Tools")
    shown(fill);


})
Games_cat.addEventListener("click", () => {
    const fill = filtering("Games")
    shown(fill);


})
Entertainment.addEventListener("click", () => {
    const fill = filtering("Entertainment")
    shown(fill);
    console.log(fill)

})
// all apps
all_cat.addEventListener("click", () => {
    const fill = filtering(true)
    shown(appsData);
    all_apps_Container.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


Installed_apps.addEventListener("click", () => {
    let arr = getInstalledApps();

    let filtered = appsData.filter(img =>
        arr.includes(img.id)
    );

    shown(filtered);
});
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;

    // show
    toast.classList.add("show");

    // hide after 2 sec
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

appsData.map((img) => {

    // 
    const appX_box = document.createElement("div")
    appX_box.className = "appX-box"
    // 
    const row_div = document.createElement("div")
    row_div.className = "row-div"
    // 
    const appX_icon_div = document.createElement("div")
    appX_icon_div.className = "appX-icon-div"
    // 
    let imgtag = document.createElement("img")
    imgtag.className = "appX-img"
    imgtag.setAttribute("src", img.image);
    imgtag.setAttribute("alt", "img");
    // 
    const appX_name_div = document.createElement("div")
    appX_name_div.className = "appX-name-div"
    // 
    // 

    const app_name = document.createElement("p")
    app_name.className = "appX-name"
    app_name.textContent = img.name
    // 
    const companay_name = document.createElement("p")
    companay_name.className = "companyX-name"
    companay_name.textContent = img.developer
    // 
    const install_div = document.createElement("div");
    install_div.className = ("installX-div");
    // 
    const app_size = document.createElement("p")
    app_size.className = "appXsize"
    app_size.textContent = img.size
    // 
    const install_btn = document.createElement("button");
    install_btn.className = ("installX-btn");
    install_btn.textContent = "install"

    appX_box.style.cursor = "pointer";
appX_box.addEventListener("click", (e) => {
    if (e.target.classList.contains("installX-btn")) return;
    window.location.href = `detail.htmlid=${img.id}`;
});


    appX_icon_div.append(imgtag);
    appX_name_div.append(app_name, companay_name)
    row_div.append(appX_icon_div, appX_name_div)
    install_div.append(app_size, install_btn)
    appX_box.append(row_div, install_div);
    Trending_apps_Container.append(appX_box)

})


// // allcatagories function
// function allCategories() {
//     appsData.map((img) => {
//         setTimeout(() => {


//             // 
//             const appY_box = document.createElement("div")
//             appY_box.className = "appY-box"
//             // 
//             const app_icon_div = document.createElement("div")
//             app_icon_div.className = "app-icon-div"
//             // 
//             let imgtag = document.createElement("img")
//             imgtag.className = "app-img"
//             imgtag.setAttribute("src", img.image);
//             imgtag.setAttribute("alt", "img");
//             // 
//             const app_name_div = document.createElement("div")
//             app_name_div.className = "app-name-div"
//             // 
//             const app_name = document.createElement("p")
//             app_name.className = "app-name"
//             app_name.textContent = img.name
//             // 
//             const companay_name = document.createElement("p")
//             companay_name.className = "company-name"
//             companay_name.textContent = img.developer
//             // 
//             const install_div = document.createElement("div");
//             install_div.className = ("install-div");
//             // 
//             const app_size = document.createElement("p")
//             app_size.className = "appsize"
//             app_size.textContent = img.size
//             // 
//             const install_btn = document.createElement("button");

//             install_btn.className = ("install-btn");
//             install_btn.textContent = "install"
//             install_btn.addEventListener("click", () => {
//                 console.log(img.id)
//                 clickbtn(install_btn)
//             })

//             app_icon_div.append(imgtag);
//             app_name_div.append(app_name, companay_name)
//             install_div.append(app_size, install_btn)
//             appY_box.append(app_icon_div, app_name_div, install_div);
//             all_apps_Container.append(appY_box)
//         }, 200)

//     })
// }

function filtering(social) {

    return appsData.filter((img) => {

        return img.category == social


    })
}
function filteringid(social) {

    return appsData.filter((img) => {

        return img.od.includes(social)


    })
}
function getInstalledApps() {
    return JSON.parse(localStorage.getItem("installedApps")) || [];
}
function setInstalledApps(data) {
    localStorage.setItem("installedApps", JSON.stringify(data));
}
function toggleInstall(appId, btn) {
    let installed = getInstalledApps();

    if (installed.includes(appId)) {
        // remove
        installed = installed.filter(id => id !== appId);
        btn.textContent = "Install";
        btn.style.background = "green";
    } else {
        // add
        installed.push(appId);
        btn.textContent = "Uninstall";
        btn.style.background = "black";
    }

    setInstalledApps(installed);
}



function shown(data) {
    all_apps_Container.textContent = ""
    data.forEach(img => {

        const installed = getInstalledApps();
        const appY_box = document.createElement("div")
        appY_box.className = "appY-box"
        // 
        const app_icon_div = document.createElement("div")
        app_icon_div.className = "app-icon-div"
        // 
        let imgtag = document.createElement("img")
        imgtag.className = "app-img"
        imgtag.setAttribute("src", img.image);
        imgtag.setAttribute("alt", "img");
        // 
        const app_name_div = document.createElement("div")
        app_name_div.className = "app-name-div"
        // 
        const app_name = document.createElement("p")
        app_name.className = "app-name"
        app_name.textContent = img.name
        // 
        const companay_name = document.createElement("p")
        companay_name.className = "company-name"
        companay_name.textContent = img.developer
        // 
        const install_div = document.createElement("div");
        install_div.className = ("install-div");
        // 
        const app_size = document.createElement("p")
        app_size.className = "appsize"
        app_size.textContent = img.size
        // 
        const install_btn = document.createElement("button");
        install_btn.className = ("install-btn");
        install_btn.textContent = "install"

        if (installed.includes(img.id)) {
            install_btn.textContent = "Uninstall";
            install_btn.style.background = "black";
        } else {
            install_btn.textContent = "Install";
            install_btn.style.background = "green";
        }

        // click event
        install_btn.addEventListener("click", () => {
            toggleInstall(img.id, install_btn);
        });




        app_icon_div.append(imgtag);
        app_name_div.append(app_name, companay_name)
        install_div.append(app_size, install_btn)
        appY_box.append(app_icon_div, app_name_div, install_div);
        all_apps_Container.append(appY_box)

        appY_box.style.cursor = "pointer";
        appY_box.addEventListener("click", (e) => {
            // Don't navigate if they clicked the install button
            if (e.target.classList.contains("install-btn")) return;
            window.location.href = `detail.html?id=${img.id}`;
        });

    })
}
const reightbtn = document.querySelector(".reightbtn");

window.addEventListener("DOMContentLoaded", () => {

    const categories = document.querySelector(".categories");
    const main = document.querySelector("main");

    reightbtn.addEventListener('click', () => {
        categories.classList.toggle("click");
        //  reightbtn.style.display="block";

        if (categories.classList.contains("click")) {
            main.style.marginLeft = "251px";
            main.style.width = "85%";
            //  reightbtn.style.display="block";
        } else {
            main.style.marginLeft = "51px";
            main.style.width = "96%";
        }
    });
});

