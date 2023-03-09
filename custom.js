const form = document.querySelector('#my-form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    //Table
    const tbody = document.querySelector('#tbody');

    const name = document.querySelector('#name').value;
    const product = document.querySelector('#product').value;
    const price = document.querySelector('#price').value;
    //create tr
    const row = document.createElement('tr');
    tbody.appendChild(row);

    if(name=== "" || product === "" || price ===""){
        //creating message
        const message = document.createElement('li');
        message.className = 'list list-group-item list-group-item-info';
        message.innerText = 'PLEASE FILL ALL FIELDS';
        const form = document.querySelector('#my-form');
        const h3 = document.querySelector('.form-group');
        form.insertBefore(message, h3);
        setTimeout((e) =>message.remove(), 1000)
    } else{
        //create td for name
    const namelist = document.createElement('td')
    namelist.appendChild(document.createTextNode(name));
    row.appendChild(namelist);

    //create name in message box
    const message = document.createElement('li');
    message.appendChild(document.createTextNode(`${name}'s product and price has been added`));
    message.className = 'list list-group-item list-group-item-success';
    const form = document.querySelector('#my-form');
        const h3 = document.querySelector('.form-group');
        form.insertBefore(message, h3);
        setTimeout((e) =>message.remove(), 1000)

    //create td for product
    const productlist = document.createElement('td')
    productlist.appendChild(document.createTextNode(product));
    row.appendChild(productlist)

    //create td for price
    const pricelist = document.createElement('td')
    pricelist.appendChild(document.createTextNode(price));
    row.appendChild(pricelist);

    //create td for date
    const datelist = document.createElement('td')
    const date =new Date();
    const kojo = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
    datelist.appendChild(document.createTextNode(kojo));
    row.appendChild(datelist);
    
    //create button
    const deletebtn = document.createElement('button');
    deletebtn.innerText = 'X';
    deletebtn.className = 'delbtn';
    row.appendChild(deletebtn)

    //add event to btn
    deletebtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(confirm('Are You Sure You Want To Remove Customer Name?')){

        //create remove name in message box
        const message = document.createElement('li');
        message.appendChild(document.createTextNode(`${name}'s product and price has been removed`));
        message.className = 'list list-group-item list-group-item-danger';
        const form = document.querySelector('#my-form');
        const h3 = document.querySelector('.form-group');
        form.insertBefore(message, h3);
        setTimeout((e) =>message.remove(), 1000)
            row.remove();
        }
    });
    };
    document.querySelector('#name').value = '';
    document.querySelector('#product').value = '';
    document.querySelector('#price').value = '';
});