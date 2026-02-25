const sourceId = "robinhood_lib";
const sourceName = "Robin Hood Library";
const baseUrl = "";

const RobinHoodLibrary = {
id: sourceId,
name: sourceName,
site: baseUrl,
version: "1.0.4",
icon: "",

popularNovels: async function (page) {
return [
{
name: "Verdant (Twoony)",
path: "Ver-Two/chap_1.xhtml",
cover: ""
}
];
},

parseNovel: async function (novelPath) {
return {
name: "Verdant (Twoony)",
path: novelPath,
chapters: [{ name: "Capítulo 1", path: novelPath }]
};
},

parseChapter: async function (chapterPath) {
const response = await fetch(this.site + chapterPath);
const html = await response.text();
const parts = html.split('<div class="calibreEbookContent">');
const chapterText = parts.length > 1 ? parts[1].split('<div class="calibreEbNavBottom">')[0] : "Error";
return {
chapterName: "Capítulo 1",
chapterText: chapterText
};
}
};

module.exports = { default: RobinHoodLibrary };
