var totalAmount=0;

var remainingAmountEl=document.getElementById('remainingAmount');
var inputItemEl=document.getElementById('inputItem');
var inputAmountEl=document.getElementById('inputAmount');
var inputButton=document.getElementById('submitBtn');
//var containerEl=document.getElementById('profitBox');
var profitContainerEl=document.getElementById('profitContainer');
var expenseContainerEl=document.getElementById('expenseContainer');

console.log(inputAmountEl.value);
inputButton.addEventListener('click',check);

if(totalAmount>0){
    //remainingAmountEl.removeAttribute('class');
    remainingAmountEl.setAttribute('class','positive');
}
else if(totalAmount<0){
    //remainingAmountEl.removeAttribute('class');
    remainingAmountEl.setAttribute('class','negative');
}

else {
    console.log('zero');
    
    //remainingAmountEl.removeAttribute('class');
    remainingAmountEl.setAttribute('class','zero');
}


function check(e){
    //var a=e.target.parentNode;
    //console.log(a);
    
    var b=document.getElementById('inputAmount');
    console.log(b.value);
    
    if(Number(b.value)>=0){
        addProfit();
        //console.log('pos');
        
    }
    else {
        addExpense();
        //console.log('neg');
        
    }
}


// Functions

function addProfit(){
    
    if(inputItemEl.value!=='' && inputAmountEl.value!==''){
        console.log('pos');
        

        var profitEl=document.createElement('div');
        profitEl.setAttribute('id','profitBox');
        profitContainerEl.appendChild(profitEl);


        var rowEl=document.createElement('div');
        rowEl.setAttribute('class','row');
        profitEl.appendChild(rowEl);


        var col8El=document.createElement('div');
        var col4El=document.createElement('div');
        col8El.setAttribute('class','col-sm-8');
        col4El.setAttribute('class','col-sm-4');

        col8El.innerHTML=inputItemEl.value;
        col4El.innerHTML=inputAmountEl.value;
        rowEl.appendChild(col8El);
        rowEl.appendChild(col4El);

        var deleteEl=document.createElement('div');
        deleteEl.setAttribute('class','delete');
        profitEl.appendChild(deleteEl);


        var deleteIconEl=document.createElement('span');
        deleteIconEl.setAttribute('class','material-icons');
        deleteIconEl.innerHTML='clear';
        deleteEl.appendChild(deleteIconEl);

        deleteIconEl.addEventListener('click',removeProfit);

        totalAmount+=Number(inputAmountEl.value);
        remainingAmountEl.innerHTML=totalAmount;

        if(totalAmount>0){
            //remainingAmountEl.removeAttribute('class');
            remainingAmountEl.setAttribute('class','positive');
        }
        else if(totalAmount<0){
            //remainingAmountEl.removeAttribute('class');
            remainingAmountEl.setAttribute('class','negative');
        }
        
        else {
            console.log('zero');
            
            //remainingAmountEl.removeAttribute('class');
            remainingAmountEl.setAttribute('class','zero');
        }
    }
    else {
        alert('Please fill up all fields');
    }


    inputItemEl.value='';
    inputAmountEl.value='';
}

function addExpense(){

    if(inputItemEl.value!=='' && inputAmountEl.value!==''){
        console.log('neg');

        var expenseEl=document.createElement('div');
        expenseEl.setAttribute('id','expenseBox');
        expenseContainerEl.appendChild(expenseEl);


        var rowEl=document.createElement('div');
        rowEl.setAttribute('class','row');
        expenseEl.appendChild(rowEl);


        var col8El=document.createElement('div');
        var col4El=document.createElement('div');
        col8El.setAttribute('class','col-sm-8');
        col4El.setAttribute('class','col-sm-4');

        col8El.innerHTML=inputItemEl.value;
        col4El.innerHTML=inputAmountEl.value;
        rowEl.appendChild(col8El);
        rowEl.appendChild(col4El);

        var deleteEl=document.createElement('div');
        deleteEl.setAttribute('class','delete');
        expenseEl.appendChild(deleteEl);


        var deleteIconEl=document.createElement('span');
        deleteIconEl.setAttribute('class','material-icons');
        deleteIconEl.innerHTML='clear';
        deleteEl.appendChild(deleteIconEl);

        deleteIconEl.addEventListener('click',removeProfit);

        totalAmount+=Number(inputAmountEl.value);
        remainingAmountEl.innerHTML=totalAmount;

        if(totalAmount>0){
            //remainingAmountEl.removeAttribute('class');
            remainingAmountEl.setAttribute('class','positive');
        }
        else if(totalAmount<0){
            //remainingAmountEl.removeAttribute('class');
            remainingAmountEl.setAttribute('class','negative');
        }
        
        else {
            console.log('zero');
            
            //remainingAmountEl.removeAttribute('class');
            remainingAmountEl.setAttribute('class','zero');
        }
    }
    else {
        alert('Please fill up all fields');
    }


    inputItemEl.value='';
    inputAmountEl.value='';
}

function removeProfit(e){
    var select=e.target.parentNode.parentNode;
    select.remove();

    var a=select.getElementsByClassName('col-sm-4');
    
    
    
    totalAmount-=Number(a[0].innerHTML);
    remainingAmountEl.innerHTML=totalAmount;

    if(totalAmount>0){
        //remainingAmountEl.removeAttribute('class');
        remainingAmountEl.setAttribute('class','positive');
    }
    else if(totalAmount<0){
        //remainingAmountEl.removeAttribute('class');
        remainingAmountEl.setAttribute('class','negative');
    }
    
    else {
        console.log('zero');
        
        //remainingAmountEl.removeAttribute('class');
        remainingAmountEl.setAttribute('class','zero');
    }
    
}

