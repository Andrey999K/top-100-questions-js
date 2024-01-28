(()=>{"use strict";const t=JSON.parse('[{"id":1,"text":"Чем отличается оператор \\"==\\" от \\"===\\"?","img":"","answers":[{"id":1,"text":"\\"==\\" сравнивает значения с приведением типов, в то время как \\"===\\" сравнивает значения без приведения типов"},{"id":2,"text":"\\"==\\" сравнивает значения без приведения типов, в то время как \\"===\\" сравнивает значения с приведением типов"},{"id":3,"text":"\\"==\\" сравнивает значения, а \\"===\\" сравнивает и если значения равны, присваивает значение"},{"id":4,"text":"В JavaScript нет оператора \\"===\\""}],"rightAnswer":2},{"id":2,"text":"Какие основные типы данных есть в JavaScript?","img":"","answers":[{"id":1,"text":"Number, BigInt, String, Boolean, Null, Undefined, Object, Symbol"},{"id":2,"text":"Number, String, Boolean, Object, Function, Null"},{"id":3,"text":"Int, Float, String, Array, Function, Object"},{"id":4,"text":"Number, BigInt, String, Boolean, Null, Undefined, Object"}],"rightAnswer":1},{"id":3,"text":"В чём отличие var, let и const?","img":"","answers":[{"id":1,"text":"let и const отличаются тем, что мы не можем переназначить переменную объявленную с помощью const, а var это устаревший синтаксис let"},{"id":2,"text":"var это устаревший синтаксис let, а const отличается от них тем, что переменную объявленную с помощью const нельзя переназначить"},{"id":3,"text":"let и const имеют блочную область видимости и отличаются тем, что мы не можем переназначить переменную объявленную с помощью const. А var отличается от let тем, что имеет функциональную область видимости"},{"id":4,"text":"var это устаревший синтаксис let. Они имеют функциональную область видимости, а const отличается от них тем, что имеет блочную область видимости"}],"rightAnswer":3},{"id":4,"text":"В чём отличие стрелочной функции от обычной?","img":"","answers":[{"id":1,"text":"У обычной функции в отличии от стелочной есть собственный this и мы можем обратиться к ней до её объявления."},{"id":2,"text":"У стрелочной функции в отличии от обычной есть собственный this и мы можем обратиться к ней до её объявления."},{"id":3,"text":"У обычной функции в отличии от стрелочной есть собственный this и мы не можем обратиться к ней до её объявления."},{"id":4,"text":"У стрелочной функции в отличии от обычной есть собственный this и мы не можем обратиться к ней до её объявления. "}],"rightAnswer":1},{"id":5,"text":"Что такое event.preventDefault()?","img":"","answers":[{"id":1,"text":"Метод, предотвращающий дальнейшее распространение текущего события, т.е. предотвращает всплытие."},{"id":2,"text":"Ссылка на объект, который был инициатором события."},{"id":3,"text":"Ссылка на элемент, в котором в данный момент обрабатывается событие."},{"id":4,"text":"Метод, отменяющий поведение браузера по умолчанию, которое происходит при обработке события."}],"rightAnswer":4},{"id":6,"text":"Что такое event loop?","img":"","answers":[{"id":1,"text":"Это механизм JavaScript, позволяющий реализовать выполнение асинхронного кода и управление событиями в однопоточной среде."},{"id":2,"text":"Это механизм JavaScript, позволяющий добавлять элементам обработчики событий."},{"id":3,"text":"Это добавление события внутри какого-либо цикла."},{"id":4,"text":"Это добавление события элементу при выполнении другого события этого элемента."}],"rightAnswer":1},{"id":7,"text":"Что такое Event.stopPropagation()?","img":"","answers":[{"id":1,"text":"Ссылка на элемент, который был инициатором события."},{"id":2,"text":"Ссылка на элемент, в котором в данный момент обрабатывается событие."},{"id":3,"text":"Метод, предотвращающий дальнейшее распространение текущего события, т.е. предотвращает всплытие."},{"id":4,"text":"Метод, отменяющий поведение браузера по умолчанию, которое происходит при обработке события."}],"rightAnswer":3},{"id":8,"text":"Что такое Event.target?","img":"","answers":[{"id":1,"text":"Метод, предотвращающий дальнейшее распространение текущего события, т.е. предотвращает всплытие."},{"id":2,"text":"Ссылка на элемент, который был инициатором события."},{"id":3,"text":"Ссылка на элемент, в котором в данный момент обрабатывается событие."},{"id":4,"text":"Метод, отменяющий поведение браузера по умолчанию, которое происходит при обработке события."}],"rightAnswer":2},{"id":9,"text":"Что такое Event.currentTarget?","img":"","answers":[{"id":1,"text":"Метод, предотвращающий дальнейшее распространение текущего события, т.е. предотвращает всплытие."},{"id":2,"text":"Ссылка на элемент, который был инициатором события."},{"id":3,"text":"Ссылка на элемент, в котором в данный момент обрабатывается событие."},{"id":4,"text":"Метод, отменяющий поведение браузера по умолчанию, которое происходит при обработке события."}],"rightAnswer":3},{"id":10,"text":"Что вернёт typeof NaN?","img":"","answers":[{"id":1,"text":"null"},{"id":2,"text":"undefined"},{"id":3,"text":"number"},{"id":4,"text":"object"}],"rightAnswer":3},{"id":11,"text":"Что такое side effect?","img":"","answers":[{"id":1,"text":"Это побочный эффект функции, который изменяет состояние за пределами функции."},{"id":2,"text":"Это побочный эффект функции, который происходит, когда мы используем функцию, до её определения."},{"id":3,"text":"Это побочный эффект, из-за которого мы не имеем собственного this в стрелочной функции."},{"id":4,"text":"Это побочный эффект, из-за которого мы можем иметь доступ к переменной, объявленной с помощью var, вне блока объявления."}],"rightAnswer":1},{"id":12,"text":"Что выведет следующий код:","img":"./img/1.jpg","answers":[{"id":1,"text":"1 2 6 7 3 5 4"},{"id":2,"text":"1 2 6 7 3 4 5"},{"id":3,"text":"1 7 2 6 3 5 4"},{"id":4,"text":"1 7 3 5 2 6 4"}],"rightAnswer":4},{"id":13,"text":"Что выведет следующий код:","img":"./img/2.jpg","answers":[{"id":1,"text":"5"},{"id":2,"text":"10"},{"id":3,"text":"undefined"},{"id":4,"text":"Код остановит выполнение с ошибкой."}],"rightAnswer":3},{"id":14,"text":"Одинаковый ли результат вернут эти 2 функции:","img":"./img/3.jpg","answers":[{"id":1,"text":"Нет, вторая функция вернёт undefined т.к. интерпретатор поставит \\";\\" после return и дальнейший код функции не будет выполнен."},{"id":2,"text":"Да, обе функции вернут объект с полем hello и его значением \\"world!\\"."},{"id":3,"text":"Нет, потому что во второй функции код остановит выполнение с ошибкой из-за неправильного синтаксиса."},{"id":4,"text":"Нет, потому что во второй функции код остановит выполнение с ошибкой из-за отсутствия точки с запятой после закрывающей фигурной скобки объекта."}],"rightAnswer":1}]');function e(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}return t}let i=!1,n=!1,s=0,r=0,d=!1;const a=(t,e)=>{const i=document.createElement(t);return i.className=e,i},o=a("div","switch-theme");o.innerHTML='<div class="switch-theme__circle"></div>',document.body.append(o),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(d=!0,o.classList.add("dark"),document.body.classList.add("dark")),o.addEventListener("click",(()=>{d=!d,o.classList.toggle("dark"),document.body.classList.toggle("dark")}));const c=a("div","content");document.body.append(c);const l=()=>{t=e(t).map((t=>({...t,answers:e(t.answers)}))),console.log(t),r=0,s=0,i=!0,n=!1,g()},x=()=>{if(i&&document.querySelector(".start-button")&&document.querySelector(".start-button").removeEventListener("click",l),!n&&document.querySelector(".button-start-again")){document.querySelector(".button-start-again").removeEventListener("click",l)}document.querySelectorAll(".question-answers__item").forEach((t=>t.removeEventListener("click",u)))},u=e=>{const i=e.currentTarget,d=Number(i.getAttribute("data-answer")),a=Number(i.getAttribute("data-question"));t.find((t=>t.id===a)).rightAnswer===d?(r++,i.classList.add("success")):i.classList.add("error"),x(),setTimeout((()=>{++s>=t.length&&(s=0,n=!0),g()}),1e3)};function g(){if(x(),document.body.className=d?"dark":"",c.innerHTML=`\n    <svg class="logo">\n      <use xlink:href="sprite.svg#logo" />\n    </svg>\n    <div class="container">\n      ${i?n?`\n              <div>\n                <h2>Ваш счёт: ${r}/${t.length}</h2>\n                <button class="button-start-again">Начать заново</button>\n              </div>\n            `:`\n              <div class="question">\n                <h2 class="question__text">${t[s].text}</h2>\n                ${t[s].img?`\n                <div class="question__wrapper-image">\n                  <img class="question__image" src="${t[s].img}" alt="">\n                </div>`:""}\n                <ol class="question-answers">\n                  ${t[s].answers.map((e=>`\n                    <li class="question-answers__item" data-answer="${e.id}" data-question="${t[s].id}">\n                      <span>${e.text}</span>\n                    </li>\n                  `)).join("")}\n                </ol>\n              </div>`:'<button class="start-button">Начать тест</button>'}\n    </div>`,n){document.querySelector(".button-start-again").addEventListener("click",l)}if(i){document.querySelectorAll(".question-answers__item").forEach((t=>t.addEventListener("click",u)))}if(!i){document.querySelector(".start-button").addEventListener("click",l)}}g()})();
//# sourceMappingURL=main.ad6a4f6c6dca4622c4ec.js.map