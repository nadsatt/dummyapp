parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iWoG":[function(require,module,exports) {
"use strict";var e,t;function n(n,o){n&&(e=n),o&&(t=o),document.getElementById(t).innerHTML="".concat(e())}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"gMFv":[function(require,module,exports) {
"use strict";function e(e){Object.assign(window.dataStore,e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"hy1s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initialDataStore=void 0;var e={content:"banner",breeds:null,breedsLoadingError:"",breedsBreed:0,breedsOrder:"asc",breedsLimit:5,breedId:null,breedNames:null,breedNamesLoadingError:"",images:null,imagesLoadingError:"",galleryBreed:0,galleryType:"all",galleryOrder:"asc",galleryLimit:5,searchResults:null,searchResultsLoadingError:"",search:"",searchTimer:null,searchTimeoutPassed:!1};exports.initialDataStore=e;
},{}],"1HCi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.icons=void 0;var t={logo:'<svg width="106" height="24" viewBox="0 0 106 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0)">\n  <path d="M7.84067 12.4577C7.84067 9.90778 9.90775 7.8407 12.4576 7.8407L19.3831 7.8407C21.9329 7.8407 24 9.90778 24 12.4577C24 15.0075 21.9329 17.0746 19.3831 17.0746H12.4576C9.90775 17.0746 7.84067 15.0075 7.84067 12.4577Z" fill="#FF868E"/>\n  <path d="M12.4576 24C9.90775 24 7.84067 21.9329 7.84067 19.383L7.84067 12.4576C7.84067 9.90772 9.90775 7.84063 12.4576 7.84063C15.0075 7.84063 17.0746 9.90772 17.0746 12.4576V19.383C17.0746 21.9329 15.0075 24 12.4576 24Z" fill="#FF868E"/>\n  <path d="M11.5424 2.8856C11.5424 4.47927 10.2505 5.7712 8.65678 5.7712C7.06311 5.7712 5.77118 4.47927 5.77118 2.8856C5.77118 1.29193 7.06311 0 8.65678 0C10.2505 0 11.5424 1.29193 11.5424 2.8856Z" fill="#FF868E"/>\n  <path d="M5.7712 16.7366C5.7712 18.3302 4.47927 19.6222 2.8856 19.6222C1.29193 19.6222 0 18.3302 0 16.7366C0 15.1429 1.29193 13.851 2.8856 13.851C4.47927 13.851 5.7712 15.1429 5.7712 16.7366Z" fill="#FF868E"/>\n  <path d="M19.6221 2.8856C19.6221 4.47927 18.3302 5.7712 16.7365 5.7712C15.1428 5.7712 13.8509 4.47927 13.8509 2.8856C13.8509 1.29193 15.1428 0 16.7365 0C18.3302 0 19.6221 1.29193 19.6221 2.8856Z" fill="#FF868E"/>\n  <path d="M5.7712 8.65684C5.7712 10.2505 4.47927 11.5424 2.8856 11.5424C1.29193 11.5424 0 10.2505 0 8.65684C0 7.06317 1.29193 5.77124 2.8856 5.77124C4.47927 5.77124 5.7712 7.06317 5.7712 8.65684Z" fill="#FF868E"/>\n  <path d="M31.8944 18.8V6.43518H37.6928C38.6656 6.43518 39.4592 6.62078 40.0736 6.99198C40.7008 7.36318 41.168 7.86878 41.4752 8.50878C41.7824 9.14878 41.936 9.87838 41.936 10.6976C41.936 11.5296 41.7568 12.2656 41.3984 12.9056C41.0528 13.5456 40.5536 14.0448 39.9008 14.4032C39.2608 14.7488 38.4992 14.9216 37.616 14.9216H34.4864V18.8H31.8944ZM34.4864 12.8672H37.0784C37.8208 12.8672 38.3776 12.6752 38.7488 12.2912C39.1328 11.8944 39.3248 11.3632 39.3248 10.6976C39.3248 9.98078 39.1456 9.43678 38.7872 9.06558C38.4288 8.68158 37.8912 8.48958 37.1744 8.48958H34.4864V12.8672Z" fill="#1D1D1D"/>\n  <path d="M48.1118 18.992C46.5374 18.992 45.2894 18.6016 44.3678 17.8208C43.4462 17.0272 42.9854 15.8304 42.9854 14.2304C42.9854 12.784 43.3694 11.6384 44.1374 10.7936C44.9182 9.93598 46.0766 9.50718 47.6126 9.50718C49.0206 9.50718 50.0958 9.87838 50.8382 10.6208C51.5934 11.3504 51.971 12.3104 51.971 13.5008V15.152L45.3854 15.152C45.5262 15.8816 45.859 16.3808 46.3838 16.6496C46.9214 16.9184 47.6766 17.0528 48.6494 17.0528C49.1358 17.0528 49.6286 17.008 50.1278 16.9184C50.6398 16.8288 51.075 16.7136 51.4334 16.5728V18.416C51.011 18.608 50.5182 18.7488 49.955 18.8384C49.3918 18.9408 48.7774 18.992 48.1118 18.992ZM45.3854 13.5584H49.7054V13.0592C49.7054 12.5344 49.5518 12.1248 49.2446 11.8304C48.9374 11.5232 48.419 11.3696 47.6894 11.3696C46.8318 11.3696 46.2302 11.5424 45.8846 11.888C45.5518 12.2336 45.3854 12.7904 45.3854 13.5584Z" fill="#1D1D1D"/>\n  <path d="M57.3853 18.992C56.3357 18.992 55.5549 18.7168 55.0429 18.1664C54.5437 17.616 54.2941 16.8672 54.2941 15.92V11.696H53.0077V9.69918H54.2941V7.74078L56.8861 6.97278V9.69918H59.1901L59.0365 11.696H56.8861V15.7472C56.8861 16.2464 57.0013 16.592 57.2317 16.784C57.4621 16.9632 57.8205 17.0528 58.3069 17.0528C58.6653 17.0528 59.0365 16.9888 59.4205 16.8608V18.6464C59.1389 18.7616 58.8317 18.8448 58.4989 18.896C58.1661 18.96 57.7949 18.992 57.3853 18.992Z" fill="#1D1D1D"/>\n  <path d="M63.9571 18.992C63.2787 18.992 62.6323 18.9408 62.0179 18.8384C61.4035 18.7488 60.9107 18.6336 60.5395 18.4928V16.3424C60.9875 16.5216 61.4931 16.6624 62.0563 16.7648C62.6195 16.8544 63.1379 16.8992 63.6115 16.8992C64.2515 16.8992 64.6995 16.8608 64.9555 16.784C65.2243 16.7072 65.3587 16.5344 65.3587 16.2656C65.3587 15.9584 65.1539 15.7344 64.7443 15.5936C64.3475 15.4528 63.7523 15.2544 62.9587 14.9984C62.1267 14.7168 61.4867 14.3776 61.0387 13.9808C60.5907 13.584 60.3667 12.9952 60.3667 12.2144C60.3667 11.344 60.6803 10.6784 61.3075 10.2176C61.9475 9.74398 62.9715 9.50718 64.3795 9.50718C64.9427 9.50718 65.4739 9.55198 65.9731 9.64158C66.4723 9.71838 66.8947 9.81438 67.2403 9.92958V12.0608C66.8947 11.8944 66.4979 11.7728 66.0499 11.696C65.6019 11.6064 65.1859 11.5616 64.8019 11.5616C64.2515 11.5616 63.8099 11.6 63.4771 11.6768C63.1571 11.7536 62.9971 11.92 62.9971 12.176C62.9971 12.4576 63.1699 12.656 63.5155 12.7712C63.8739 12.8864 64.4243 13.0592 65.1667 13.2896C65.8963 13.5072 66.4659 13.744 66.8755 14C67.2851 14.256 67.5731 14.5632 67.7395 14.9216C67.9059 15.2672 67.9891 15.7024 67.9891 16.2272C67.9891 18.0704 66.6451 18.992 63.9571 18.992Z" fill="#1D1D1D"/>\n  <path d="M69.7882 18.8V6.43518L75.5866 6.43518C76.5594 6.43518 77.353 6.62078 77.9674 6.99198C78.5946 7.36318 79.0618 7.86878 79.369 8.50878C79.6762 9.14878 79.8298 9.87838 79.8298 10.6976C79.8298 11.5296 79.6506 12.2656 79.2922 12.9056C78.9466 13.5456 78.4474 14.0448 77.7946 14.4032C77.1546 14.7488 76.393 14.9216 75.5098 14.9216H72.3802V18.8H69.7882ZM72.3802 12.8672H74.9722C75.7146 12.8672 76.2714 12.6752 76.6426 12.2912C77.0266 11.8944 77.2186 11.3632 77.2186 10.6976C77.2186 9.98078 77.0394 9.43678 76.681 9.06558C76.3226 8.68158 75.785 8.48958 75.0682 8.48958H72.3802V12.8672Z" fill="#1D1D1D"/>\n  <path d="M83.749 18.992C83.173 18.992 82.6354 18.8896 82.1362 18.6848C81.6498 18.4672 81.253 18.1536 80.9458 17.744C80.6514 17.3216 80.5042 16.7968 80.5042 16.1696C80.5042 15.2736 80.8178 14.5568 81.445 14.0192C82.085 13.4816 83.0258 13.2128 84.2674 13.2128H86.9554V12.9632C86.9554 12.4 86.7954 12.0032 86.4754 11.7728C86.1682 11.5424 85.541 11.4272 84.5938 11.4272C83.557 11.4272 82.5586 11.5872 81.5986 11.9072V10.0832C82.021 9.91678 82.533 9.78238 83.1346 9.67998C83.749 9.56478 84.4146 9.50718 85.1314 9.50718C86.501 9.50718 87.557 9.78878 88.2994 10.352C89.0546 10.9024 89.4322 11.792 89.4322 13.0208V18.8H87.1858L87.0514 17.9744C86.693 18.2944 86.2514 18.544 85.7266 18.7232C85.2018 18.9024 84.5426 18.992 83.749 18.992ZM84.4594 17.2832C85.0354 17.2832 85.5346 17.1872 85.957 16.9952C86.3794 16.8032 86.7122 16.56 86.9554 16.2656V14.8256H84.325C83.3138 14.8256 82.8082 15.2416 82.8082 16.0736C82.8082 16.88 83.3586 17.2832 84.4594 17.2832Z" fill="#1D1D1D"/>\n  <path d="M93.0479 18.8L90.6479 9.69918H93.2399L94.6223 15.6128L96.1391 10.8704V9.69918H98.1167L99.8447 15.6128L101.189 9.69918H103.762L101.381 18.8H98.9999L97.2527 13.4816L95.4671 18.8H93.0479Z" fill="#1D1D1D"/>\n  </g>\n  <defs>\n  <clipPath id="clip0">\n  <rect width="106" height="24" fill="white"/>\n  </clipPath>\n  </defs>\n  </svg>',back:'\n  <svg class="back-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <rect class="back-icon__background" width="40" height="40" rx="10" fill="#FBE0DC"/>\n  <g clip-path="url(#clip0)">\n  <path class="back-icon__content" d="M14.7098 20.9901L23.3095 29.5896C23.8565 30.1369 24.7435 30.1369 25.2903 29.5896C25.8371 29.0427 25.8371 28.1558 25.2903 27.6091L17.6809 19.9999L25.29 12.391C25.8369 11.8439 25.8369 10.9571 25.29 10.4103C24.7432 9.86324 23.8563 9.86324 23.3093 10.4103L14.7096 19.0098C14.4362 19.2834 14.2996 19.6415 14.2996 19.9998C14.2996 20.3583 14.4364 20.7167 14.7098 20.9901Z" fill="#FF868E"/>\n  </g>\n  <defs>\n  <clipPath id="clip0">\n  <rect width="20" height="20" fill="white" transform="translate(10 10)"/>\n  </clipPath>\n  </defs>\n  </svg>',loader:'\n  <?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="margin-right:-2px;display:block;background-repeat-y:initial;background-repeat-x:initial;background-color:rgb(255, 255, 255);animation-play-state:paused" ><g transform="translate(80,50)" style="transform:matrix(1, 0, 0, 1, 80, 50);animation-play-state:paused" ><g transform="rotate(0)" style="transform:matrix(1, 0, 0, 1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.125" transform="matrix(1.0625,0,0,1.0625,0,0)" style="transform:matrix(1.0625, 0, 0, 1.0625, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(71.21320343559643,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 71.2132, 71.2132);animation-play-state:paused" ><g transform="rotate(45)" style="transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.25" transform="matrix(1.125,0,0,1.125,0,0)" style="transform:matrix(1.125, 0, 0, 1.125, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(50,80)" style="transform:matrix(1, 0, 0, 1, 50, 80);animation-play-state:paused" ><g transform="rotate(90)" style="transform:matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.375" transform="matrix(1.1875,0,0,1.1875,0,0)" style="transform:matrix(1.1875, 0, 0, 1.1875, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(28.786796564403577,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 28.7868, 71.2132);animation-play-state:paused" ><g transform="rotate(135)" style="transform:matrix(-0.707107, 0.707107, -0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.5" transform="matrix(1.25,0,0,1.25,0,0)" style="transform:matrix(1.25, 0, 0, 1.25, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(20,50.00000000000001)" style="transform:matrix(1, 0, 0, 1, 20, 50);animation-play-state:paused" ><g transform="rotate(180)" style="transform:matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.625" transform="matrix(1.3125,0,0,1.3125,0,0)" style="transform:matrix(1.3125, 0, 0, 1.3125, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(28.78679656440357,28.786796564403577)" style="transform:matrix(1, 0, 0, 1, 28.7868, 28.7868);animation-play-state:paused" ><g transform="rotate(225)" style="transform:matrix(-0.707107, -0.707107, 0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.75" transform="matrix(1.375,0,0,1.375,0,0)" style="transform:matrix(1.375, 0, 0, 1.375, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(49.99999999999999,20)" style="transform:matrix(1, 0, 0, 1, 50, 20);animation-play-state:paused" ><g transform="rotate(270)" style="transform:matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.875" transform="matrix(1.4375,0,0,1.4375,0,0)" style="transform:matrix(1.4375, 0, 0, 1.4375, 0, 0);animation-play-state:paused" ></circle></g></g>\n<g transform="translate(71.21320343559643,28.78679656440357)" style="transform:matrix(1, 0, 0, 1, 71.2132, 28.7868);animation-play-state:paused" ><g transform="rotate(315)" style="transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="1" transform="matrix(1.5,0,0,1.5,0,0)" style="transform:matrix(1.5, 0, 0, 1.5, 0, 0);animation-play-state:paused" ></circle></g></g>\x3c!-- generated by https://loading.io/ --\x3e</svg>',heart:'<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FF868E"/>\n  </svg>\n  '};exports.icons=t;
},{}],"BEGz":[function(require,module,exports) {
module.exports="voting.39f35b02.png";
},{}],"le0f":[function(require,module,exports) {
module.exports="breeds.061d041a.png";
},{}],"DIs1":[function(require,module,exports) {
module.exports="gallery.4db3883a.png";
},{}],"3Vv9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Home=r;var e=require("../../assets/data/icons"),n=i(require("../../assets/images/voting.png")),a=i(require("../../assets/images/breeds.png")),t=i(require("../../assets/images/gallery.png"));function i(e){return e&&e.__esModule?e:{default:e}}function r(){return"\n    ".concat(e.icons.logo,'\n    <div class="greeting">\n      <h3 class="greeting__heading">Lovely dog app</h3>\n      <p class="greeting__text">Designed by MacPaw company</p>\n    </div>\n    ').concat(s())}function s(){var e=[{name:"voting",image:n.default},{name:"breeds",image:a.default},{name:"gallery",image:t.default}];return'\n    <nav class="primary-menu">\n      <p class="primary-menu-text">Lets start using The Dog Api</p>\n      <ul class="primary-menu-list">'.concat(e.map(function(e){return c(e)}).join(""),"</ul>\n    </nav>\n  ")}function c(e){var n=e.name,a=e.image,t=dataStore.content;return'\n    <li class="primary-menu-item '.concat(t===n?"primary-menu-item--active":"",'"\n      data-content="').concat(n,'" onclick="window.updateState({...window.initialDataStore, content: \'').concat(n,'\'}), window.renderApp()">\n      <div class="primary-menu-item__image-wrapper">\n        <img class="primary-menu-item__image" src="').concat(a,'">\n      </div>\n      <button class="primary-menu-item__button">').concat(n,"</button>\n    </li>")}
},{"../../assets/data/icons":"1HCi","../../assets/images/voting.png":"BEGz","../../assets/images/breeds.png":"le0f","../../assets/images/gallery.png":"DIs1"}],"8+CH":[function(require,module,exports) {
"use strict";function e(){return'<div class="voting">Voting component works!</div>'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Voting=e;
},{}],"Z5Op":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Loader=e,exports.ErrorAlert=t,exports.InfoAlert=o;var r=require("../../assets/data/icons");function e(){return'<div class="loader">'.concat(r.icons.loader,"</div>")}function t(r){return'<p class="alert error-alert">'.concat(r,"</p>")}function o(r){return'<div class="alert info-alert">'.concat(r,"</div>")}
},{"../../assets/data/icons":"1HCi"}],"B6PR":[function(require,module,exports) {
"use strict";function e(e){return new Promise(function(r,s){if(t(e)){var o=t(e);r(o)}else fetch(e,{headers:{"X-Api-Key":void 0}}).then(function(e){return e.json()}).then(function(t){n(e,t),r(t)}).catch(function(e){var t=e.message;return s(t)})})}function t(e){return JSON.parse(sessionStorage.getItem(e))}function n(e,t){sessionStorage.setItem(e,JSON.stringify(t))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"go79":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBreeds=r,exports.getBreedsBySearch=n;var e=t(require("./api"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){return(0,e.default)("https://api.thedogapi.com/v1/breeds?limit=".concat(t))}function n(t){return(0,e.default)("https://api.thedogapi.com/v1/breeds/search?q=".concat(t)).then(function(e){return Promise.all(e.map(function(e){return u(e)})).then(function(e){return e.filter(function(e){var t=e.name,r=e.url;return t&&r})})})}function u(t){return(0,e.default)("https://api.thedogapi.com/v1/images/".concat(t.reference_image_id)).then(function(e){var r=e.url;return t.url=r,t})}
},{"./api":"B6PR"}],"rmbT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Breeds=c;var e=require("../../assets/data/icons"),n=require("../components/loading"),t=require("./content"),r=require("./../data/breedsApi"),a=d(require("../framework/render")),o=d(require("../framework/update"));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return'\n    <div class="content breeds">\n      <header class="content-header breeds-header">'.concat(i(),'</header>\n      <div class="content-body breeds-body">').concat(s(),"</div>\n    </div>")}function i(){return'\n    <a class="content-header__label content-header__back-label" onclick="window.updateState({...window.initialDataStore, content: \'banner\'}), window.renderApp()">'.concat(e.icons.back,'</a>\n    <a class="content-header__label content-header__name-label content-header__current-label">breeds</a>')}function s(){var e=dataStore,t=e.breedsLoadingError,d=e.breeds;return t?(0,n.ErrorAlert)(t):d?'\n      <form class="content-form breeds-form">'.concat(l(),'</form>\n      <ul class="content-list breeds-list">').concat(u(),"</ul>"):((0,r.getBreeds)(20).then(function(e){(0,o.default)({breeds:e}),(0,a.default)()}).catch(function(e){var n=e.message;(0,o.default)({breedsLoadingError:n}),(0,a.default)()}),(0,n.Loader)())}function l(){var e=dataStore,n=e.breeds,t=e.breedsBreed,r=e.breedsLimit,a=e.breedsOrder;return'\n    <div class="form-control">\n      <label>Breed</label>\n      <select class="form-control" oninput="window.updateState({breedsBreed: +this.value}), window.renderApp()">\n        <option value="0">All breeds</option>\n        '.concat(n.map(function(e){var n=e.name,r=e.id;return'<option value="'.concat(r,'" ').concat(t===r?"selected":"",">").concat(n,"</option>")}).join(""),'\n      </select>\n    </div>\n    <div class="form-control">\n      <label>Limit</label>\n      <select class="form-control" oninput="window.updateState({breedsLimit: +this.value}), window.renderApp()">\n        ').concat([5,10,15,20].map(function(e){return'<option value="'.concat(e,'" ').concat(r===e?"selected":"",">Limit: ").concat(e,"</option>")}).join(""),'\n      </select>\n    </div>\n    <div class="form-control" oninput="window.updateState({breedsOrder: event.target.value}), window.renderApp()">\n      <label for="asc">Asc</label>\n      <input id="asc" type="radio" name="order" value="asc" ').concat("asc"===a?"checked":"",'>\n      <label for="desc">Desc</label>\n      <input id="desc" type="radio" name="order" value="desc" ').concat("desc"===a?"checked":"",">\n    </div>\n  ")}function u(){return dataStore.breeds.filter(function(e){var n=e.id;return 0===window.dataStore.breedsBreed||n===window.dataStore.breedsBreed}).slice(0,window.dataStore.breedsLimit||void 0).sort(function(e,n){var t=e.name,r=n.name;return"asc"===window.dataStore.breedsOrder?t.localeCompare(r):r.localeCompare(t)}).map(function(e){return b(e)}).join("")}function b(e){var n=e.id,r=e.name,a=e.image.url;return'\n    <li class="content-item" onclick="window.updateState({content: \'breed-details\', breedId: '.concat(n,'}), window.renderApp()">\n      ').concat((0,t.ContentItem)(a,r),"\n    </li>")}
},{"../../assets/data/icons":"1HCi","../components/loading":"Z5Op","./content":"veCK","./../data/breedsApi":"go79","../framework/render":"iWoG","../framework/update":"gMFv"}],"8uuw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImagesByQuery=r;var e=t(require("./api"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=t.limit,a=t.order,c=t.type,o=t.breed,i="limit=".concat(r,"&order=").concat(a,"&mime_types=").concat(c)+(o?"&breed_id=".concat(o):"");return(0,e.default)("https://api.thedogapi.com/v1/images/search?".concat(i))}
},{"./api":"B6PR"}],"B57M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Gallery=f;var e=require("../../assets/data/icons"),n=require("../components/loading"),t=require("./content"),r=l(require("../framework/update")),a=require("../data/breedsApi"),o=require("../data/imagesApi");function l(e){return e&&e.__esModule?e:{default:e}}function c(e,n){return m(e)||u(e,n)||s(e,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,n){if(e){if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,a,o=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw a}}return o}}function m(e){if(Array.isArray(e))return e}function f(){return'\n    <div class="gallery content">\n      <header class="gallery-header content-header">'.concat(p(),'</header>\n      <div class="content-body gallery-body">').concat(y(),"</div>\n    </div>")}function p(){return'\n    <a class="content-header__label content-header__back-label" data-content="banner" onclick="window.updateState({...window.initialDataStore, content: \'banner\'}), window.renderApp()">'.concat(e.icons.back,'</a>\n    <a class="content-header__label content-header__name-label content-header__current-label">gallery</a>')}function y(){var e=dataStore,t=e.breedNamesLoadingError,o=e.breedNames;return t?(0,n.ErrorAlert)(t):o?"".concat(g()," ").concat(v()):((0,a.getBreeds)(100).then(function(e){var n=e.map(function(e){return[e.name,e.id]});(0,r.default)({breedNames:n}),renderApp()}).catch(function(e){var n=e.message;(0,r.default)({breedNamesLoadingError:n}),renderApp()}),(0,n.Loader)())}function g(){var e=dataStore,n=e.breedNames,t=e.galleryOrder,r=e.galleryType,a=e.galleryBreed,o=e.galleryLimit;return'\n  <form class="content-form gallery-form">\n    <div class="form-control">\n      <label>Order</label>\n      <select class="form-control" name="galleryOrder">\n        <option value="rand" '.concat("rand"===t?"selected":"",'>Random</option>\n        <option value="desc" ').concat("desc"===t?"selected":"",'>Desc</option>\n        <option value="asc" ').concat("asc"===t?"selected":"",'>Asc</option>\n      </select>\n    </div>\n    <div class="form-control">\n      <label>Type</label>\n      <select class="form-control" name="galleryType">\n        <option value="all" ').concat("all"===r?"selected":"",'>All</option>\n        <option value="static" ').concat("static"===r?"selected":"",'>Static</option>\n        <option value="gif" ').concat("gif"===r?"selected":"",'>Animated</option>\n      </select>\n    </div>\n    <div class="form-control">\n      <label>Breed</label>\n      <select class="form-control" name="galleryBreed">\n        <option value="0" ').concat(0===a?"selected":"",">None</option>\n        ").concat(n.map(function(e){var n=c(e,2),t=n[0],r=n[1];return'<option value="'.concat(r,'" ').concat(a===r?"selected":"",">").concat(t,"</option>")}).join(""),'\n      </select>\n    </div>\n    <div class="form-control">\n      <label>Limit</label>\n      <select class="form-control" name="galleryLimit">\n        ').concat([5,10,15,20].map(function(e){return'<option value="'.concat(e,'" ').concat(o===e?"selected":"",">").concat(e," items per page</option>")}).join(""),'\n      </select>\n    </div>\n    <button role="submit" onclick="event.preventDefault(), window.updateState({images: null, galleryOrder: this.form[0].value, galleryType: this.form[1].value, galleryBreed: +this.form[2].value, galleryLimit: +this.form[3].value}), window.renderApp()">Update items</button>\n    </form>')}function v(){var e=dataStore,t=e.imagesLoadingError,a=e.images,l=e.galleryLimit,c=e.galleryOrder,i=e.galleryType,s=e.galleryBreed;if(t)return(0,n.ErrorAlert)(t);if(a){var d=window.dataStore.images.map(function(e){return b(e)});return d.length?'<ul class="content-list gallery-list">'.concat(d.join(""),"</ul>"):(0,n.InfoAlert)("No item found")}return(0,o.getImagesByQuery)({limit:l,order:c,type:i,breed:s}).then(function(e){(0,r.default)({images:e}),renderApp()}).catch(function(e){var n=e.message;(0,r.default)({imagesLoadingError:n}),renderApp()}),(0,n.Loader)()}function b(e){var n=e.url;return'\n    <li class="content-item">'.concat((0,t.ContentItem)(n),"</li>")}
},{"../../assets/data/icons":"1HCi","../components/loading":"Z5Op","./content":"veCK","../framework/update":"gMFv","../data/breedsApi":"go79","../data/imagesApi":"8uuw"}],"6mrO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BreedDetails=n;var e=require("../../assets/data/icons");function n(){var e=dataStore,n=e.breeds,d=e.breedId,s=n.find(function(e){return e.id===d});return'\n    <div class="content breed-details">\n      <header class="content-header breed-details-header">'.concat(a(d),'</header>\n      <div class="content-body breed-details-body">').concat(t(s),"</div>\n    </div>")}function a(n){return'\n  <a class="content-header__label content-header__back-label" onclick="window.updateState({...window.initialDataStore, content: \'banner\'}), window.renderApp()">'.concat(e.icons.back,'</a>\n  <a class="content-header__label content-header__name-label" onclick="window.updateState({content: \'breeds\'}), window.renderApp()">breeds</a>\n  <a class="content-header__label content-header__id-label content-header__current-label">').concat(n,"</a>")}function t(e){return'\n  <img class="breed-details-body__img" src="'.concat(e.image.url,'">\n  <div class="breed-details-body__about">\n  <h3 class="breed-details-body__name">').concat(e.name,'</h3>\n  <h4 class="breed-details-body__for">').concat(e.bred_for,'</h4>\n  <div class="breed-details-body__info">\n    <div class="breed-details-body__temperament breed-details-body__info-item">\n      <span>Temperament:</span>\n      <span>').concat(e.temperament,'</span>\n    </div>\n    <div class="breed-details-body__height breed-details-body__info-item">\n      <span>Height:</span>\n      <span>').concat(e.height.metric,' cm at the withers</span>\n    </div>\n    <div class="breed-details-body__weight breed-details-body__info-item">\n      <span>Weight:</span>\n      <span>').concat(e.weight.metric,' kg</span>\n    </div>\n    <div class="breed-details-body__lifespan breed-details-body__info-item">\n      <span>Life span:</span>\n      <span>').concat(e.life_span,"</span>\n    </div>\n  </div>\n</div>")}
},{"../../assets/data/icons":"1HCi"}],"Tf8f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Search=s;var e=require("../../assets/data/icons"),r=require("../components/loading"),t=require("./content"),n=o(require("../framework/render")),a=o(require("../framework/update")),c=require("../data/breedsApi");function o(e){return e&&e.__esModule?e:{default:e}}function s(){return'\n    <div class="content search">\n      <header class="content-header search-header">'.concat(u(),'</header>\n      <div class="content-body search-body">').concat(i(),"</div>\n    </div>")}function u(){return'\n    <a class="content-header__label" data-content="banner" onclick="window.updateState({...window.initialDataStore, content: \'banner\'}), window.renderApp()">'.concat(e.icons.back,'</a>\n    <a class="content-header__label content-header__name-label content-header__current-label">search</a>')}function i(){var e=dataStore,t=e.search,c=e.searchTimeoutPassed,o=e.searchTimer;if(t){if(c)return d();clearTimeout(o);var s=setTimeout(function(){(0,a.default)({searchTimeoutPassed:!0}),(0,n.default)()},1e3);return(0,a.default)({searchTimer:s}),(0,r.InfoAlert)("Entering search query..")}return(0,r.InfoAlert)("Please enter search query")}function d(){var e=dataStore,t=e.searchResultsLoadingError,o=e.searchResults,s=e.search;if(t)return(0,r.ErrorAlert)(t);if(o){var u=o.map(function(e){return l(e)}).join("");return u?'<ul class="content-list search-list">'.concat(u,"</ul>"):(0,r.InfoAlert)("No item found")}return(0,c.getBreedsBySearch)(s).then(function(e){(0,a.default)({searchResults:e}),(0,n.default)()}).catch(function(e){var r=e.message;(0,a.default)({searchResultsLoadingError:r}),(0,n.default)()}),(0,r.Loader)()}function l(e){var r=e.url,n=e.name;return'<li class="content-item">'.concat((0,t.ContentItem)(r,n),"</li>")}
},{"../../assets/data/icons":"1HCi","../components/loading":"Z5Op","./content":"veCK","../framework/render":"iWoG","../framework/update":"gMFv","../data/breedsApi":"go79"}],"JCeD":[function(require,module,exports) {
module.exports="girl.7b1eb890.png";
},{}],"YZaV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Banner=n;var e=r(require("../../assets/images/girl.png"));function r(e){return e&&e.__esModule?e:{default:e}}function n(){return'<div class="banner"><img class="banner__image" src='.concat(e.default,"></div>")}
},{"../../assets/images/girl.png":"JCeD"}],"veCK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContentWrapper=s,exports.ContentItem=l;var e=require("../components/voting"),n=require("../components/breeds"),t=require("../components/gallery"),r=require("../components/breed-details"),o=require("../components/search"),a=require("../components/banner"),c=require("../../assets/data/icons");function s(){var c=dataStore.content;return"banner"===c?(0,a.Banner)():i()+("voting"===c?(0,e.Voting)():"breeds"===c?(0,n.Breeds)():"gallery"===c?(0,t.Gallery)():"breed-details"===c?(0,r.BreedDetails)():(0,o.Search)())}function i(){var e=dataStore,n=e.content,t=e.search;return"search"===n&&setTimeout(function(){var e=document.getElementById("search-control");e.value=t,e.selectionStart=t.length,e.selectionEnd=t.length,e.focus()},0),'\n    <nav class="secondary-menu">\n      <input class="form-control"\n       id="search-control"\n       placeholder="Search for breeds"\n       onclick="window.updateState({content: \'search\'}), window.renderApp()"\n       oninput="window.updateState({search: this.value, searchTimeoutPassed: false, searchResults: null}), window.renderApp()"\n       type="text">\n    </nav>'}function l(e,n){return'\n    <img class="content-item__image" src="'.concat(e,'">\n    <div class="content-item__overlap ').concat(n?"content-item__name-overlap":"content-item__heart-overlap",'">\n      <h4 class="content-item__overlap-heading ').concat(n?"content-item__name-overlap-heading":"content-item__heart-overlap-heading",'">').concat(n||c.icons.heart,"</h4>\n    </div>")}
},{"../components/voting":"8+CH","../components/breeds":"rmbT","../components/gallery":"B57M","../components/breed-details":"6mrO","../components/search":"Tf8f","../components/banner":"YZaV","../../assets/data/icons":"1HCi"}],"1d8k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=t;var e=require("../components/home"),n=require("../components/content");function t(){return'\n  <section class="home">'.concat((0,e.Home)(),'</section>\n  <section class="content-wrapper">').concat((0,n.ContentWrapper)(),"</section>")}
},{"../components/home":"3Vv9","../components/content":"veCK"}],"Focm":[function(require,module,exports) {
"use strict";var e=o(require("./framework/render")),r=o(require("./framework/update")),t=require("./data/dataStore"),n=require("./components/app.js");function o(e){return e&&e.__esModule?e:{default:e}}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){u(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}window.initialDataStore=t.initialDataStore,window.dataStore=i({},t.initialDataStore),window.updateState=r.default,window.renderApp=e.default,(0,e.default)(n.App,"main");
},{"./framework/render":"iWoG","./framework/update":"gMFv","./data/dataStore":"hy1s","./components/app.js":"1d8k"}]},{},["Focm"], null)
//# sourceMappingURL=src.ba5e5541.js.map