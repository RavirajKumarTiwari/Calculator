function storeData(newValue){
    let txtInput = document.getElementById('txtInput');
    let oldValue = txtInput.value;
    let lastChr = oldValue[oldValue.length - 1];
    //txtInput.value = oldValue + newValue;
    // console.log(lastChr);
    
    let oprSym = ["+", "-", "*", "/", "."];
    if(oprSym.includes(newValue))
    {
        if(oprSym.includes(lastChr)){
            let removeLast = oldValue.slice(0,-1);
            txtInput.value = removeLast + newValue; 
        }
            else{
                txtInput.value = oldValue + newValue;
            }
    }
    else{
        txtInput.value = oldValue + newValue;
    }
}
function calData()
    {
        let txtInput = document.getElementById('txtInput');
        // eval calculate the string type mathematical input
        let oldValue = eval(txtInput.value);
        txtInput.value = oldValue;
    }
function clearTheScreen()
    {
        document.getElementById('txtInput').value='';
    }