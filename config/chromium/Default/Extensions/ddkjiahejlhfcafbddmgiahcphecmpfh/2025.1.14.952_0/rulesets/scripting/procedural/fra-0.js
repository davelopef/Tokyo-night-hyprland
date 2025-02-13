/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: fra-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".place-items-center\",\"tasks\":[[\"has\",{\"selector\":\"> div:only-child:not([class], [id]) > p.text-right\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}]]}","{\"selector\":\"p.text-right\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}"],["{\"selector\":\".zone > div.area\",\"tasks\":[[\"has\",{\"selector\":\"> div.area__title > p\",\"tasks\":[[\"has-text\",\"Contenus partenaires\"]]}]]}"],["{\"selector\":\".fig-footer-ranking > div.fig-grid4\",\"tasks\":[[\"has\",{\"selector\":\"> span.fig-grid4__main-title\",\"tasks\":[[\"has-text\",\"Partenaires\"]]}]]}"],["{\"selector\":\"div[id^=\\\"custom-gpt-\\\"]\",\"tasks\":[[\"upward\",\"div\"]]}","{\"selector\":\"span[shape=\\\"circle\\\"] + span\",\"tasks\":[[\"has-text\",\"Publicité\"],[\"upward\",2]]}"],["{\"selector\":\".l-section\",\"tasks\":[[\"has\",{\"selector\":\"> div.l-section-h > div.g-cols > div > div.vc_column-inner > div.wpb_wrapper > div.w-separator > div.w-separator-h > h6 > span\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\"#main-container .blog__content\",\"tasks\":[[\"has\",{\"selector\":\"> .title-wrap--pr > h3\",\"tasks\":[[\"has-text\",\"Annonces\"]]}]]}"],["{\"selector\":\".g-bg-gray-light-v4 > .text-center\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}"],["{\"selector\":\"#blockPubGalleryWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-xl-4 > .align-items-center > .text-right > span\",\"tasks\":[[\"has-text\",\"/^PUBLICITÉ$/\"]]}"],["{\"selector\":\"#mainContent > div > div#lht-space-ad\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".undefined\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}","{\"selector\":\"a[data-test-id]\",\"tasks\":[[\"has\",{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\".container-fluid > .mt-1 > h3\",\"tasks\":[[\"has-text\",\"/^Liens commerciaux$/\"]]}"],["{\"selector\":\"div[align=\\\"center\\\"]\",\"tasks\":[[\"has-text\",\"PUBLICITÉ\"]]}"],["{\"selector\":\".article-list > .article-list__item\",\"tasks\":[[\"has\",{\"selector\":\"> .article-list__text-wrapper > a > .article-list__label\",\"tasks\":[[\"has-text\",\"/^Contenu sponsorisé$/\"]]}]]}"],["{\"selector\":\"#side > div[style^=\\\"float\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}]]}","{\"selector\":\"#side > div[style^=\\\"float\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Partenaires$/\"]]}]]}"],["{\"selector\":\"#node-story > h2.story_subtitle_title\",\"tasks\":[[\"has-text\",\"/^Ailleurs sur le web$/\"]]}"],["{\"selector\":\".article-wrapper\",\"tasks\":[[\"has\",{\"selector\":\".subheading\",\"tasks\":[[\"has-text\",\"Partenaire\"]]}]]}","{\"selector\":\".homepage-section.supplement-section\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Partenaires\"]]}]]}","{\"selector\":\".sticky-sidebar-block > div.bloc\",\"tasks\":[[\"has-text\",\"Annonces légales\"]]}"],["{\"selector\":\".af-album-ctn > div.cols-right-album > div.ad-container\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > div[id^=\\\"RAD_\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"a[href=\\\"/streaming-video.html\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[style=\\\"min-height: 0px;\\\"] > div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"] > div[data-m32-ad]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".habpage\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"pub\\\"]\",\"tasks\":[[\"has-text\",\"adsbygoogle\"]]}"],["{\"selector\":\".posts-list-row > .posts-list-row-item > .card-item > .ad-wrapper\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".posts-list-row > .posts-list-row-item > .card-item > div[data-ad-unit-path]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".alderaan-sous-article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"publicité\"]]}]]}","{\"selector\":\".app-main > article.post > div:not([class^=\\\"entry-\\\"]):not([class^=\\\"comments-\\\"])\",\"tasks\":[[\"has-text\",\"Article sponsorisé\"]]}","{\"selector\":\"[class*=\\\"sous-categories\\\"]\",\"tasks\":[[\"has-text\",\"Lien partenaire\"]]}","{\"selector\":\"div > hr + article.type-post\",\"tasks\":[[\"has\",{\"selector\":\"header:has(a[href^=\\\"http://bit.ly/\\\"])\"}]]}","{\"selector\":\"div > hr + article.type-post\",\"tasks\":[[\"has\",{\"selector\":\"header:has(a[href^=\\\"http://bitly.com/\\\"])\"}]]}"],["{\"selector\":\"#fullad-active\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".discussion_box > .post_simple_contener\",\"tasks\":[[\"has\",{\"selector\":\"> .post_simple > .postsimple_post_cell > .postsimple_head_cell > .postsimple_poster_info > div > .postsimple_pseudo > a > span\",\"tasks\":[[\"has-text\",\"/^Auto-promo$/\"]]}]]}"],["{\"selector\":\"#sidebar-right > div.blockbox\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidetitle > i\",\"tasks\":[[\"has-text\",\"Annonces\"]]}]]}"],["{\"selector\":\"[class$=\\\"Container-right\\\"] > div.m-top-md\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".results-container > div.result\",\"tasks\":[[\"has\",{\"selector\":\"> div.url > span.info\",\"tasks\":[[\"has-text\",\"Annonce\"]]}]]}"],["{\"selector\":\".main-right > h2\",\"tasks\":[[\"has-text\",\"Partenaires\"]]}"],["{\"selector\":\".post > aside.sidebar-before-comments\",\"tasks\":[[\"has\",{\"selector\":\"> [class=\\\"default-title\\\"] > span\",\"tasks\":[[\"has-text\",\"/Ailleurs sur le web|A lire sur le même sujet/\"]]}]]}"],["{\"selector\":\"section > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> p\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}]]}"],["{\"selector\":\".main ~ table.messagetable > tbody > tr.message div[id^=\\\"div-gpt-ad-\\\"]\",\"tasks\":[[\"upward\",\"table.messagetable\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\".brand\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}"],["{\"selector\":\"a[data-test-id]\",\"tasks\":[[\"has\",{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"/À la une|Sponsorisé|Urgent/\"]]}]]}"],["{\"selector\":\"[data-testid=\\\"tweet\\\"]\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}"],["{\"selector\":\".clusterTop\",\"tasks\":[[\"has\",{\"selector\":\".teaser\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Paid Post\"]]}]]}]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has\",{\"selector\":\".hz-Listing-priority\",\"tasks\":[[\"has-text\",\"Pub au top\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"sponsorisés\"]]}]]}"],["{\"selector\":\"._2FypS\",\"tasks\":[[\"has\",{\"selector\":\"._1rKqn\",\"tasks\":[[\"has-text\",\"/AD|Annonce|إعلان/\"]]}]]}","{\"selector\":\".search-item-card-wrapper-gallery\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"multi--ax\\\"]\",\"tasks\":[[\"has-text\",\"/AD|Annonce|إعلان/\"]]}]]}"],["{\"selector\":\".news-card\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}"],["{\"selector\":\".boutonlink\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/VPN|rencontre/\"]]}]]}","{\"selector\":\".bp-fin\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/VPN|rencontre/\"]]}]]}"],["{\"selector\":\".breve\",\"tasks\":[[\"has\",{\"selector\":\".breve-info\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\".post-nonfeatured\",\"tasks\":[[\"has\",{\"selector\":\".title-studio\",\"tasks\":[[\"has-text\",\"Contenu Sponsorisé\"]]}]]}"],["{\"selector\":\".ccm_list_catch__item\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}"],["{\"selector\":\".o-block\",\"tasks\":[[\"has\",{\"selector\":\".o-block__content:has(.c-sponsoredMentions)\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\".prdtBlocInline:has(.c-sponsoredMentions)\"}]]}"],["{\"selector\":\".riverPost\",\"tasks\":[[\"has\",{\"selector\":\".tag-desktop\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".ccm_list_catch__item\",\"tasks\":[[\"has-text\",\"Annonces\"]]}"],["{\"selector\":\".bot-card\",\"tasks\":[[\"has\",{\"selector\":\".lib\",\"tasks\":[[\"has-text\",\"Promoted\"]]}]]}","{\"selector\":\".bot-card\",\"tasks\":[[\"has\",{\"selector\":\".lib:has(img)\"}]]}"],["{\"selector\":\".News1\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\"[id^=\\\"nume_html_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mfe-card-group\",\"tasks\":[[\"has\",{\"selector\":\".mfe-card-group-title\",\"tasks\":[[\"has-text\",\"sponsorisées\"]]}]]}]]}","{\"selector\":\"[id^=\\\"nume_html_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mfe-header\",\"tasks\":[[\"has\",{\"selector\":\".mfe-pull-left\",\"tasks\":[[\"has-text\",\"sponsorisés\"]]}]]}]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/ANONYME|Anonyme|anonyme|PREMIUM|Premium|premium|RAPIDE|Rapide|Usenet|VPN|Vpn/\"]]}"],["{\"selector\":\".postcontainer\",\"tasks\":[[\"has\",{\"selector\":\".username\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".highlight-item\",\"tasks\":[[\"has\",{\"selector\":\".word-wrapper\",\"tasks\":[[\"has-text\",\"sponso\"]]}]]}","{\"selector\":\".item.full.gameblog\",\"tasks\":[[\"has\",{\"selector\":\".post-details\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has-text\",\"/ANONYME|Anonyme|anonyme|Usenet|VPN|Vpn/\"]]}","{\"selector\":\"table[style]\",\"tasks\":[[\"has-text\",\"/ANONYME|Anonyme|anonyme|Usenet|VPN|Vpn/\"]]}"],["{\"selector\":\".news-bloc\",\"tasks\":[[\"has\",{\"selector\":\".article-type\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".sidebar-artitle\",\"tasks\":[[\"has-text\",\"/📣|📌/\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/📣|📌/\"]]}]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".date\",\"tasks\":[[\"has-text\",\"Sponso\"]]}]]}"],["{\"selector\":\".anchorMiddleOne\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}","{\"selector\":\".anchorWrapper\",\"tasks\":[[\"has\",{\"selector\":\".cardHorizontalList__footer\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}","{\"selector\":\".card\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}","{\"selector\":\".item-small-pres\",\"tasks\":[[\"has\",{\"selector\":\"a:has(.sponsored-prefix)\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"a:has(.sponsored-prefix)\"}]]}"],["{\"selector\":\"div[class^=\\\"Flex-styled__StyledFlex-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Produits sponsorisés\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"div + span\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".boxed\",\"tasks\":[[\"has\",{\"selector\":\".tag\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}","{\"selector\":\".repo-component\",\"tasks\":[[\"has\",{\"selector\":\"label\",\"tasks\":[[\"has-text\",\"sponsored\"]]}]]}"],["{\"selector\":\".isnotmobi\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}","{\"selector\":\"tbody\",\"tasks\":[[\"has\",{\"selector\":\"i\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}"],["{\"selector\":\".widget_article\",\"tasks\":[[\"has\",{\"selector\":\".title_widget\",\"tasks\":[[\"has-text\",\"/PUBLI INFO|Publi-info/\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\"[data-index-number]\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}"],["{\"selector\":\".article-thumbnail\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/Sponsored|sponsorisé/\"]]}]]}"],["{\"selector\":\"app-home-item\",\"tasks\":[[\"has\",{\"selector\":\".article:has(.sponsored)\"}]]}"],["{\"selector\":\".post-card\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"sponso\"]]}]]}"],["{\"selector\":\".uk-margin-remove-last-child\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PUBLICITÉ\"]]}]]}]]}"],["{\"selector\":\".v-container\",\"tasks\":[[\"has\",{\"selector\":\".o-section-heading\",\"tasks\":[[\"has-text\",\"/Ad|Publicité|Sponsored|Sponsorisées|Stores à la une|إعلان|إعلانات في المقدمة|متاجر في المقدمة/\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"sponso\"]]}]]}"],["{\"selector\":\"[data-identifier]\",\"tasks\":[[\"has\",{\"selector\":\"div:has(.sponsor-color)\"}]]}"],["{\"selector\":\".post\",\"tasks\":[[\"has\",{\"selector\":\".postprofile\",\"tasks\":[[\"has\",{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Ad Machine\"]]}]]}]]}"],["{\"selector\":\".owl-item\",\"tasks\":[[\"has\",{\"selector\":\"figure:has(img[src^=\\\"publicites/\\\"])\"}]]}"],["{\"selector\":\".post.has-profile\",\"tasks\":[[\"has\",{\"selector\":\".postbody:has(.adsbygoogle)\"}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\".inboxSenderEmail\",\"tasks\":[[\"has-text\",\"AD | Temp Number\"]]}]]}"],["{\"selector\":\".panel\",\"tasks\":[[\"has\",{\"selector\":\".panel-heading\",\"tasks\":[[\"has\",{\"selector\":\".panel-title\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}]]}"],["{\"selector\":\".wm-module\",\"tasks\":[[\"has-text\",\"Contenu sponsorisé\"]]}"],["{\"selector\":\".jwpv-desktop\",\"tasks\":[[\"has-text\",\"Publicité\"]]}"],["{\"selector\":\"div[style*=\\\"width: 300px\\\"]\",\"tasks\":[[\"has-text\",\"/Publicité|Publicités/\"]]}","{\"selector\":\"table[class=\\\"post\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"tbody\",\"tasks\":[[\"has-text\",\"/annonces|annonceurs/\"]]}]]}"],["{\"selector\":\".custom-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/Partenaires|Publicité/\"]]}]]}"]];

const hostnamesMap = new Map([["lexpress.mu",0],["lemonde.fr",1],["lefigaro.fr",2],["lesechos.fr",3],["emugen.net",4],["h2-mobile.fr",5],["automobile-propre.com",6],["lalsace.fr",7],["actu.orange.fr",8],["leboncoin.fr",[9,34]],["orange.fr",10],["minutesports.fr",11],["laprovence.com",12],["cyclismactu.net",13],["jeanmarcmorandini.com",14],["latribune.fr",15],["aufeminin.com",16],["radio.fr",17],["zoneseries.stream",18],["tv5unis.ca",19],["moneyvox.fr",20],["11anim.com",21],["konbini.com",22],["korben.info",23],["lesfrontaliers.lu",24],["forumconstruire.com",25],["extreme-down.ninja",26],["cuisineactuelle.fr",27],["qwant.com",28],["tennisactu.net",29],["mariefrance.fr",30],["ici.tou.tv",31],["forum.hardware.fr",32],["nicematin.com",33],["twitter.com",35],["20min.ch",36],["2ememain.be",37],["algerie-eco.com",38],["aliexpress.com",39],["aliexpress.us",39],["allocine.fr",40],["android-mt.com",41],["blogdumoderateur.com",42],["businessinsider.fr",43],["ccm.net",44],["cdiscount.com",45],["cnetfrance.fr",46],["commentcamarche.com",47],["commentcamarche.net",47],["discordbots.org",48],["top.gg",48],["distrowatch.com",49],["ebay.fr",50],["extreme-down.tools",51],["gktorrent.my",[51,54]],["t911.pw",[51,54]],["torrent.onl",[51,54]],["torrent9.se",[51,54]],["futura-sciences.com",52],["gameblog.fr",53],["hitek.fr",55],["igen.fr",56],["macg.co",56],["watchgeneration.fr",56],["iphonesoft.fr",57],["jeuxvideo.com",58],["krefel.be",59],["lessentiel.lu",60],["libhunt.com",61],["linfoweb.com",62],["macommune.info",63],["maison-islam.com",64],["mediamarkt.be",65],["narcity.com",66],["nextinpact.com",67],["numerama.com",68],["on-mag.fr",69],["ouedkniss.com",70],["phonandroid.com",71],["santemagazine.fr",72],["sketchucation.com",73],["sookbtp.com",74],["starbike.com",75],["temp-mail.org",76],["thesiteoueb.net",77],["tourmag.com",78],["tsa-algerie.com",79],["voyageforum.com",80],["zataz.com",81]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["nicematin.com",[33]],["leboncoin.fr",[34]],["twitter.com",[35]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
