    const inputCities = document.querySelector('.input-cities');
    const main = document.querySelector('.main');
    const selectCities = document.getElementById('select-cities');
    const dropdown = document.querySelector('.dropdown');
    const countryName = document.querySelectorAll('.dropdown-lists__country');
    const cityName = document.querySelectorAll('.dropdown-lists__city');
    const listDefault = document.querySelector('.dropdown-lists__list--default');
    const parentBlock = document.querySelector('.dropdown-lists__list');
    const listSelect = document.querySelector('.dropdown-lists__list--select');
    const listAutoComplete = document.querySelector('.dropdown-lists__list--autocomplete');
    const label = document.querySelector('.label');
    const closeBtn = document.querySelector('.close-button');
    const button = document.querySelector('.button');
    let countres = [];

    class AppData {
        constructor(){
            this.data = 0;
            this.countres = [];
        }
        getData(){
            const request = new XMLHttpRequest();

            request.open('GET', './db_cities.json');

            request.setRequestHeader('Content-type', 'application/json');

            request.send();

            request.addEventListener('readystatechange', (event) => {
                if(request.readyState === 4 && request.status === 200) {
                    this.data = JSON.parse(request.responseText);
                    this.createCountres();
                    this.addEventListeners();
                }
            });
        }
        createCountres(){
            for (let i = 0; i < this.data.RU.length; i++) {
                this.countres.push([this.data.RU[i].country.toLowerCase(), this.data.RU[i].link]);
            
                let c = this.data.RU[i].cities;
            
                c.forEach(el => {
                    this.countres.push([el.name.toLowerCase(), el.link]);
                });
            
            }
            
        }
        createDefault(){
            const listDefault = document.querySelector('.dropdown-lists__list--default');
    
            const countryBlock = document.createElement('div');
            countryBlock.classList.add('dropdown-lists__countryBlock');
        
            const totalLine = document.createElement('div');
            totalLine.classList.add('dropdown-lists__total-line');
        
            const listsCountry = document.createElement('div');
            listsCountry.classList.add('dropdown-lists__country');
            const listsCount = document.createElement('div');
            listsCount.classList.add('dropdown-lists__count');
        
            const newDivLine = () => {
                const listsLine = document.createElement('div');
                listsLine.classList.add('dropdown-lists__line');
        
                countryBlock.appendChild(listsLine);
        
                const listsCity = document.createElement('div');
                listsCity.classList.add('dropdown-lists__city');
                const listsCount = document.createElement('div');
                listsCount.classList.add('dropdown-lists__count');
        
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
        createSelect(b){
            const countryBlock = document.createElement('div');
            countryBlock.classList.add('dropdown-lists__countryBlock');
            const totalLine = document.createElement('div');
            totalLine.classList.add('dropdown-lists__total-line');
            const listsCountry = document.createElement('div');
            listsCountry.classList.add('dropdown-lists__country');
            const listsCount = document.createElement('div');
            listsCount.classList.add('dropdown-lists__count');
            const newDivLine = () => {
                const listsLine = document.createElement('div');
                listsLine.classList.add('dropdown-lists__line');
        
                countryBlock.appendChild(listsLine);
        
                const listsCity = document.createElement('div');
                listsCity.classList.add('dropdown-lists__city');
                const listsCount = document.createElement('div');
                listsCount.classList.add('dropdown-lists__count');
        
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
        addList1(){
        //Создаем блоки с городами и странами
            for (let i = 0; i < this.data.RU.length; i++) {
                this.createDefault();
            }
            // Получаем все div со странами
            const countryName = document.querySelectorAll('.dropdown-lists__country');
            // Получаем все div со городами
            const cityName = document.querySelectorAll('.dropdown-lists__city');
            // Добавляем Названия стран
            countryName.forEach((el, i) => {
                el.textContent = this.data.RU[i].country;
            });
        
            let z = 0;
            // Добавляем Названия городов    
            for (let x = 0; x < this.data.RU.length; x++) {
                for (let y = 0; y <= 2; y++) {
                    cityName[z].textContent = this.data.RU[x].cities[y].name;
                    z++;
                }
        }
        }
        addList2(a, b){
            this.createSelect(b);
            const countryName = document.querySelector('.dropdown-lists__country');
            countryName.textContent = this.data.RU[a].country;
            const cityName = document.querySelectorAll('.dropdown-lists__city');
            cityName.forEach((el, i) => {
                el.textContent = this.data.RU[a].cities[i].name;
            });
        }
        addEventListeners(){
            main.addEventListener('click', (event) => {
                let target = event.target;
                // click по inpit
                if (target === document.getElementById('select-cities')) {
                    if (listDefault.classList.contains('active')) {
                        event.preventDefault();
                    } else {
                        dropdown.classList.add('active-list');
                        this.addList1();
                        listDefault.classList.add('active');
                    }
                    label.classList.add('label_active');
                    closeBtn.style.opacity = '1';
                } else if (target.classList.contains('main') || target.classList.contains('close-button')) {
                    label.classList.remove('label_active');
                    closeBtn.style.opacity = '0';
                }
                // click по city
                if (target.classList.contains('dropdown-lists__country')) {
                    listDefault.classList.remove('active');
                    if (listSelect.classList.contains('active')) {
                        dropdown.classList.remove('active-list');
                        const removeList = () => {
            
                            const countryBlock = document.querySelectorAll('.dropdown-lists__countryBlock');
                            countryBlock.forEach(el => {
                                el.remove();
                            });
                            listSelect.style.display = 'none';
                            dropdown.classList.add('active-list');
                            this.addList1();
                            listDefault.classList.add('active');
                            listDefault.style.display = 'block';
                            listSelect.classList.remove('active');
                        };
                        setTimeout(removeList, 500);
                    } else {
                        dropdown.classList.remove('active-list');
                        const removeList = () => {
                            const countryBlock = document.querySelectorAll('.dropdown-lists__countryBlock');
                            countryBlock.forEach(el => {
                                el.remove();
                            });
                            listDefault.style.display = 'none';
                        };
                        setTimeout(removeList, 500);
            
                        let country = target.textContent;
            
                        const addList = () => {
                            let a;
                            for (let i = 0; i < this.data.RU.length; i++) {
                                if (country === this.data.RU[i].country) {
                                    a = i;
                                }
                            }
                            let b = this.data.RU[a].cities.length;
                            this.addList2(a, b);
                            dropdown.classList.add('active-list');
                        };
                        setTimeout(addList, 510);
                        listSelect.style.display = "block";
                        listSelect.classList.add('active');
                    }
                }
                // click по find
                if (target.classList.contains('search_window')) {
                    selectCities.value = target.textContent;
            
                    countres.forEach((el, i) => {
                        if (target.textContent.toLowerCase() === el[0]) {
                            console.log(el[1]);
                            console.log(button.getAttribute('href'));
                            button.setAttribute('href', el[1]);
                        }
                    });
            
                    let searchWindow = document.querySelectorAll('.search_window');
                    searchWindow.forEach(el => {
                        el.remove();
                    });
                }
                // событие input
                selectCities.addEventListener('input', () => {
                    let res = selectCities.value.toLowerCase();
                    
                    const newDiv = document.createElement('div');
                    newDiv.classList.add('search_window');
                    inputCities.appendChild(newDiv);

                    this.countres.forEach((el, i) => {
                        
                        if (el[0].substring(0, res.length) === res) {
                            newDiv.textContent = el[0][0].toUpperCase() + el[0].slice(1);
                        }
                    });
                
                    if (selectCities.value === '') {
                        let searchWindow = document.querySelectorAll('.search_window');
                        searchWindow.forEach(el => {
                            el.remove();
                        });
                
                    }
                });

            });
        }
    }

let appData = new AppData();
appData.getData();

