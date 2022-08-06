/**
 * name pas utilisé pour le moment a mettre dans la alt
 * target pour le goTo function qui utilise le router
 * src pour pointé sur le logo a a fficher
 * la class pour le moment c'est pour mettre 3 tailles
 * small medium large
 * exemple
 * {
        name: "",
        target: "",
        src: "",
        class: ""
    }
 */

const Data = [
    {
        name: "Personal",
        target: "PersonalMessages",
        src: "@core/assets/icons/Logo1.svg",
        class: "logo"
    },
    {
        name: "Social",
        target: "Social",
        src: "/src/core/assets/icons/Feed.svg",
        class: "small"
    },
    {
        name: "Play",
        target: "Play",
        src: "@core/assets/icons/Play.svg",
        class: "small"
    },
    {
        name: "Academy",
        target: "Academy",
        src: "/src/core/assets/icons/Academy.svg",
        class: "small"
    },
    {
        name: "Jobs",
        target: "Jobs",
        src: "@core/assets/icons/Jobs.svg",
        class: "small"
    },
    {
        name: "Bootcamps",
        target: "Bootcamps",
        src: "@core/assets/icons/Bootcamps.svg",
        class: "small"
    },
    {
        name: "League",
        target: "League",
        src: "@core/assets/icons/Events.svg",
        class: "small"
    },
    {
        name: "NFTs",
        target: "Nft",
        src: "@core/assets/icons/NFTs.svg",
        class: "small"
    },
    {
        name: "New",
        target: "New",
        src: "@core/assets/icons/News.svg",
        class: "small"
    }
];

export default Data