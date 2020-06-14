window.onload = function () {
    document.body.classList.add('loaded_hiding');
    const main = document.querySelector(".main");
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        main.style.opacity = '1';
    }, 500);
};

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const inputCities = document.querySelector(".input-cities");
    const popup = document.querySelector(".popup");
    const main = document.querySelector(".main");
    const selectCities = document.getElementById("select-cities");
    const dropdown = document.querySelector(".dropdown");
    const countryName = document.querySelectorAll(".dropdown-lists__country");
    const cityName = document.querySelectorAll(".dropdown-lists__city");
    const listDefault = document.querySelector(".dropdown-lists__list--default");
    const parentBlock = document.querySelector(".dropdown-lists__list");
    const listSelect = document.querySelector(".dropdown-lists__list--select");
    const listAutoComplete = document.querySelector(".dropdown-lists__list--autocomplete");
    const label = document.querySelector(".label");
    const closeBtn = document.querySelector(".close-button");
    const button = document.querySelector(".button");
    let countres = [];
    let lang;

    class AppData {
        constructor() {
            this.data = 0;
            this.countres = [];
        }
        getLocalStorage() {
            if (localStorage.data) {
                this.data = JSON.parse(localStorage.data);
                this.getCookie();
                this.addEventListeners();
            } else {
                this.getData();
            }
        }
        // Получаем данные с сервера
        getData() {
            const request = new XMLHttpRequest();
            request.open("GET", "./db_cities.json");
            request.setRequestHeader("Content-type", "application/json");
            request.send();
            request.addEventListener("readystatechange", (event) => {
                if (request.readyState === 4 && request.status === 200) {
                    this.data = JSON.parse(request.responseText);
                    localStorage.data = request.responseText;
                    this.addEventListeners();
                }
            });
            this.getCookie();
        }
        // Получаем cookie, если нет запускаем SetCookie
        getCookie() {
            function getCookies(name) {
                let matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }
            if (getCookies(encodeURIComponent('lang')) === undefined) {

            } else {
                popup.style.display = 'none';
                lang = getCookies(encodeURIComponent('lang'));
            }
            console.log(document.cookie);
        }
        setCookie(name, value) {
            let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

            document.cookie = `${updatedCookie};max-age=260000`;
            console.log(updatedCookie);
        }
        // Записываем города и страны в countres
        createCountres() {
            for (let i = 0; i < this.data[`${lang}`].length; i++) {
                this.countres.push([
                    this.data[`${lang}`][i].country.toLowerCase(),
                    this.data[`${lang}`][i].link,
                ]);
                let c = this.data[`${lang}`][i].cities;
                c.forEach((el) => {
                    this.countres.push([el.name.toLowerCase(), el.link]);
                });
            }
        }
        // Создаем структуру для списка Default
        createDefault() {
            const listDefault = document.querySelector(
                ".dropdown-lists__list--default"
            );
            const countryBlock = document.createElement("div");
            countryBlock.classList.add("dropdown-lists__countryBlock");
            const totalLine = document.createElement("div");
            totalLine.classList.add("dropdown-lists__total-line");
            const listsCountry = document.createElement("div");
            listsCountry.classList.add("dropdown-lists__country");
            const listsCount = document.createElement("div");
            listsCount.classList.add("dropdown-lists__count");

            const newDivLine = () => {
                const listsLine = document.createElement("div");
                listsLine.classList.add("dropdown-lists__line");
                countryBlock.appendChild(listsLine);
                const listsCity = document.createElement("div");
                listsCity.classList.add("dropdown-lists__city");
                const listsCount = document.createElement("div");
                listsCount.classList.add("dropdown-lists__count");
                listsLine.appendChild(listsCity);
                listsLine.appendChild(listsCount);
            };

            listDefault.appendChild(countryBlock);
            countryBlock.appendChild(totalLine);
            totalLine.appendChild(listsCountry);
            totalLine.appendChild(listsCount);
            newDivLine();
            newDivLine();
            newDivLine();
        }
        // Создаем структуру для списка Select
        createSelect(b) {
            const countryBlock = document.createElement("div");
            countryBlock.classList.add("dropdown-lists__countryBlock");
            const totalLine = document.createElement("div");
            totalLine.classList.add("dropdown-lists__total-line");
            const listsCountry = document.createElement("div");
            listsCountry.classList.add("dropdown-lists__country");
            const listsCount = document.createElement("div");
            listsCount.classList.add("dropdown-lists__count");
            const newDivLine = () => {
                const listsLine = document.createElement("div");
                listsLine.classList.add("dropdown-lists__line");

                countryBlock.appendChild(listsLine);

                const listsCity = document.createElement("div");
                listsCity.classList.add("dropdown-lists__city");
                const listsCount = document.createElement("div");
                listsCount.classList.add("dropdown-lists__count");

                listsLine.appendChild(listsCity);
                listsLine.appendChild(listsCount);
            };
            listSelect.appendChild(countryBlock);
            countryBlock.appendChild(totalLine);
            totalLine.appendChild(listsCountry);
            totalLine.appendChild(listsCount);
            for (let i = 0; i < b; i++) {
                newDivLine();
            }
        }
        // Заполняем Default
        addList1() {
            //Создаем блоки с городами и странами
            for (let i = 0; i < this.data[`${lang}`].length; i++) {
                this.createDefault();
            }
            // Получаем все div со странами
            const countryName = document.querySelectorAll(".dropdown-lists__country");
            // Получаем все div со городами
            const cityName = document.querySelectorAll(".dropdown-lists__city");
            // Добавляем Названия стран
            countryName.forEach((el, i) => {
                el.textContent = this.data[`${lang}`][i].country;
                el.nextSibling.textContent = this.data[`${lang}`][i].count;
            });

            let z = 0;
            // Добавляем Названия городов
            for (let x = 0; x < this.data[`${lang}`].length; x++) {
                for (let y = 0; y <= 2; y++) {
                    cityName[z].textContent = this.data[`${lang}`][x].cities[y].name;
                    cityName[z].nextSibling.textContent = this.data[`${lang}`][x].cities[y].count;
                    z++;
                }
            }
        }
        // Заполняем Select
        addList2(a, b) {
            this.createSelect(b);
            const countryName = document.querySelector(".dropdown-lists__country");
            countryName.textContent = this.data[`${lang}`][a].country;
            const cityName = document.querySelectorAll(".dropdown-lists__city");
            cityName.forEach((el, i) => {
                el.textContent = this.data[`${lang}`][a].cities[i].name;
            });
        }
        // Добавить url в link
        addLink(target) {
            this.countres.forEach((el, i) => {
                if (target.textContent.toLowerCase() === el[0]) {
                    button.setAttribute("href", el[1]);
                }
            });
        }
        addEventListeners() {
            main.addEventListener("click", (event) => {
                let target = event.target;
                // click по popup
                if (target.classList.contains('btn')) {
                    popup.style.transform = 'translateX(-100%)';

                    if (target.classList.contains('EN')) {
                        lang = 'EN';
                        this.setCookie('lang', 'EN');
                        this.createCountres();
                    } else if (target.classList.contains('DE')) {
                        lang = 'DE';
                        this.setCookie('lang', 'DE');
                        this.createCountres();
                    } else if (target.classList.contains('RU')) {
                        lang = 'RU';
                        this.setCookie('lang', 'RU');
                        this.createCountres();
                    }
                }


                // click по inpit
                if (target === document.getElementById("select-cities")) {
                    if (listDefault.classList.contains("active")) {
                        event.preventDefault();
                    } else {
                        dropdown.classList.add("active-list");
                        this.addList1();
                        listDefault.classList.add("active");
                    }
                    label.classList.add("label_active");
                    closeBtn.style.opacity = "1";
                } else if (target.classList.contains("main") || target.classList.contains("close-button")) {
                    label.classList.remove("label_active");
                    closeBtn.style.opacity = "0";
                    selectCities.value = '';
                    button.setAttribute("href", '');
                    button.classList.add('disabled');
                }
                // click по country
                if (target.classList.contains("dropdown-lists__country")) {
                    listDefault.classList.remove("active");
                    if (listSelect.classList.contains("active")) {
                        dropdown.classList.remove("active-list");
                        const removeList = () => {
                            const countryBlock = document.querySelectorAll(".dropdown-lists__countryBlock");
                            countryBlock.forEach((el) => {
                                el.remove();
                            });
                            listSelect.style.display = "none";
                            dropdown.classList.add("active-list");
                            this.addList1();
                            listDefault.classList.add("active");
                            listDefault.style.display = "block";
                            listSelect.classList.remove("active");
                        };
                        setTimeout(removeList, 500);

                    } else {
                        dropdown.classList.remove("active-list");
                        const removeList = () => {
                            const countryBlock = document.querySelectorAll(".dropdown-lists__countryBlock");
                            countryBlock.forEach((el) => {
                                el.remove();
                            });
                            listDefault.style.display = "none";
                        };
                        setTimeout(removeList, 500);

                        let country = target.textContent;

                        const addList = () => {
                            let a;
                            for (let i = 0; i < this.data[`${lang}`].length; i++) {
                                if (country === this.data[`${lang}`][i].country) {
                                    a = i;
                                }
                            }
                            let b = this.data[`${lang}`][a].cities.length;
                            this.addList2(a, b);
                            dropdown.classList.add("active-list");
                        };
                        setTimeout(addList, 510);
                        listSelect.style.display = "block";
                        listSelect.classList.add("active");
                    }
                    label.classList.add('label_active');
                    selectCities.value = target.textContent;
                    button.classList.remove('disabled');
                    this.addLink(target);
                }
                // click по city
                if (target.classList.contains("dropdown-lists__city")) {
                    selectCities.value = target.textContent;
                    button.classList.remove('disabled');
                    label.classList.add('label_active');
                    this.addLink(target);
                }
                // click по find
                if (target.classList.contains("search_window")) {
                    selectCities.value = target.textContent;
                    this.addLink(target);
                    let searchWindow = document.querySelectorAll(".search_window");
                    searchWindow.forEach((el) => {
                        el.remove();
                    });
                    button.classList.remove('disabled');
                }
                // событие input
                selectCities.addEventListener("input", () => {
                    let res = selectCities.value.toLowerCase();
                    const searchWindow = document.querySelector('.search_window');

                    if (searchWindow) {

                        let findOk;
                        const find = (el) => {
                            if (el[0].substring(0, res.length) === res) {
                                findOk = el[0][0].toUpperCase() + el[0].slice(1);
                                return true;
                            } else {
                                return false;
                            }
                        };

                        if (this.countres.some(find)) {
                            searchWindow.textContent = findOk;
                        } else {
                            searchWindow.textContent = 'Совпадения не найдены';
                        }

                    } else {
                        const newDiv = document.createElement("div");
                        newDiv.classList.add("search_window");
                        inputCities.appendChild(newDiv);
                    }


                    if (selectCities.value === "") {
                        let searchWindow = document.querySelector(".search_window");
                        searchWindow.remove();
                        button.classList.add('disabled');
                    }
                });

            });
        }
    }

    let appData = new AppData();
    appData.getLocalStorage();

    // document.cookie = "lang=RU; max-age=0";
});