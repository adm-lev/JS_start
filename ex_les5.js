'use strict';



function createDesk() {
    const deskEl = document.querySelector('.chess-desk');
    
   
    const titleRow = [];
    // Горизонтальные подписи
    titleRow.push('<p class="chess-row-ang">!</p>');
    for(let i=97; i <= 104; i++){
        titleRow.push(`<p class="chess-col-title">${(String.fromCharCode(i))}</p>`)
    };
    titleRow.push('<p class="chess-row-ang">!</p>');
    
    const cellRow = [];
    cellRow.push('<p class="chess-row-title">a</p>')

    // Заполнил главный Див пустыми контейнерами под ячейки
    deskEl.insertAdjacentHTML('beforeend', '<div class="chess-col-title-cont" id="row0"></div>');
    for(let i = 1; i < 9; i++){
        deskEl.insertAdjacentHTML('beforeend', `<div class="chess-row" id=row${i}></div>`);
    };        
    deskEl.insertAdjacentHTML('beforeend', '<div class="chess-col-title-cont" id="row9"></div>');
    // console.log(deskEl);
    // запол
    for(let i=0; i <= 9; i += 9){
        const titleRowEl = deskEl.querySelector(`#row${i}`);
    for(const title of titleRow){
        titleRowEl.insertAdjacentHTML('beforeend', title);
    }};

    for(let i = 1, k = 8; i <= 8; i++, k--){
      const cellRowEl = deskEl.querySelector(`#row${i}`);
      cellRowEl.insertAdjacentHTML('beforeend', `<p class="chess-row-title">${k}</p>`)
      for(let j = 97; j <= 104; j++){
            cellRowEl.insertAdjacentHTML('beforeend', 
            `<p class="chess-cell" id="${String.fromCharCode(j) + k}"></p>` )
      } 
      cellRowEl.insertAdjacentHTML('beforeend', `<p class="chess-row-title">${k}</p>`) 
    }
}





createDesk();
