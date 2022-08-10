'use strict';


// const listData = 'item 1';
const listData = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    [
      'Item 5.1',
      'Item 5.2',
      'Item 5.3',
    ],
    'Item 6',
    'Item 7',
  ]

  const tableData = [
    ['Item 1.1', 'Item 1.2', 'Item 1.3'],
    ['Item 2.1', 'Item 2.2', 'Item 2.3'],
    ['Item 3.1', 'Item 3.2', 'Item 3.3'],
    ['Item 4.1', 'Item 4.3'],
    ['Item 5.1', 'Item 5.2', 'Item 5.3'],
  ] 

  const formData = {
    name: 'myForm',
    fieldset: [{
        tagName: 'select',
        name: 'cars',
        id: 'cars',
        label: 'Choose a car:',
        options: ['Volvo', 'Saab', 'Honda', 'Toyota', 'Audi'],
        }, {
        tagName: 'input',
        type: 'text',
        label: 'First name',
        id: 'fname',
        name: 'fname',
        }, {
        tagName: 'input',
        type: 'radio',
        label: 'Male',
        id: 'male',
        name: 'gender',
        value: 'male',
        }, {
        tagName: 'input',
        type: 'radio',
        label: 'Female',
        id: 'female',
        name: 'gender',
        value: 'female',
        }, {
        tagName: 'button',
        type: 'submit',
        }],
    }


// -------------------Функции вывода------------------------------


const listEl = document.querySelector('#list');
const tableEl = document.querySelector('#table');
const formEl = document.querySelector('#form ');
const btnStartEl = document.querySelector('#btn-start');



function showList(dataList, element){
    if (typeof dataList === 'string'){        
        element.append(dataList);
    } else if(typeof dataList === 'object') {
        const ulEl = document.createElement('ul');
               
        for(const i of dataList){
            const liEl = document.createElement('li');
            showList(i, liEl);
            ulEl.append(liEl);
        }
        element.append(ulEl);
    }
}

function showTable(data, element){
    const table = document.createElement('table');
    for(const item of data){
        const trEl = document.createElement('tr');
        for(const cell of item){
            const tdEl = document.createElement('td');
            tdEl.append(cell);
            trEl.append(tdEl);
        }
        table.append(trEl);
        element.append(table);
    }
}

function showForm(data, element){
    const form = document.createElement('form');
    form.setAttribute('name', data.name);
    for(const tag of data.fieldset){
        // console.log(tag);
        const tagEl = document.createElement(tag.tagName)
        for(const attrib in tag){
            if(attrib === 'tagName'){
                continue;
            } else if (attrib === 'options'){
                for(const option of tag[attrib]){
                    //  console.log(option); 
                     const optionTag = document.createElement('option');
                    optionTag.append(option);
                    tagEl.append(optionTag);
                }
            }
            tagEl.setAttribute(attrib, tag[attrib]);
        }
        form.append(tagEl);
    }
    element.append(form);
}

function startDatas(){
    showList(listData, listEl);
    showTable(tableData, tableEl);
    showForm(formData, formEl);
}


btnStartEl.addEventListener('cilck', startDatas);

console.log(btnStartEl);


// for(const i of formData.fieldset){
//     console.log(i);
// }


