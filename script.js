
 

    // function insertInTableFunction () {

        for(let i=0;i<4;i++){

        const lastName = document.createElement('p');
        lastName.innerText = "John Due";

        const phoneNumber = document.createElement('p');
        phoneNumber.innerText = '995 55 55 55';
        phoneNumber.classList.add('phone-number');

        const xmark = document.createElement('button');
        xmark.innerHTML = '&#10005';
        xmark.classList.add('xmark');

        const onButtonDiv = document.createElement('div'); 
        onButtonDiv.classList.add('table-div');

        const onButton = document.createElement('button');
        onButton.innerHTML = 'ON';
        onButton.classList.add('on-button');

        const circle  = document.createElement('div');
        circle.classList.add('green-circle');

        onButtonDiv.appendChild(onButton);
        onButton.classList.add('on-button');
        onButtonDiv.appendChild(circle);
        const container = document.createElement('div');
       
        const table =  document.createElement('div');
        const row = document.createElement('div');
        row.classList.add('row');

       
        const section = document.getElementById('main-section');
        section.appendChild(container);
        container.classList.add('container');
        container.appendChild(table)
        table.classList.add('table');        
        table.appendChild(row);
        row.appendChild(lastName);
        row.appendChild(phoneNumber);
        row.appendChild(onButtonDiv);
        row.appendChild(xmark);
        


        }
        const third = document.querySelector('.container:nth-child(3) .table .row .table-div .on-button');
        third.innerHTML = "OFF";




    
const regButtonWrap = document.createElement('div');
document.body.appendChild(regButtonWrap);
regButtonWrap.classList.add('reg-button-div')

const regButtonDiv = document.createElement('div');
regButtonWrap.appendChild(regButtonDiv);
regButtonDiv.classList.add('reg-button');

const regButton = document.createElement('button');
regButton.type = 'submit';
regButton.innerHTML = "AJOUTER UN EXAMINATEUR +" ;
regButton.style.backgroundColor = 'rgb(73 132 73)';
regButtonDiv.appendChild(regButton);
regButtonWrap.classList.add('reg-button-wrap');
    
    
const footer = document.createElement('footer');
document.body.appendChild(footer);
const footerContainer = document.createElement('div');
footer.appendChild(footerContainer);
footer.classList.add('footer');

const footerFirstElement = document.createElement('p');
footerFirstElement.innerHTML = '© Fidelp 2022 - Institut la Pleiade SA';
footerContainer.appendChild(footerFirstElement);
footerContainer.classList.add('footer-container');

const footerSecondElement = document.createElement('a');
footerSecondElement.innerHTML = "Conditions d'utulistion";
footerSecondElement.href = '#';
footerSecondElement.classList.add('footer-second-element');;
footerContainer.appendChild(footerSecondElement);

     
        
        
        
        

 