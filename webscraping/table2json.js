var TableData;

function storeTblValues()
{
    var TableData = new Array();

    $('.table tr').each(function(row, tr){
        TableData[row]={
            "Country" : 13
            , "name" :$(tr).find('td:eq(1)').text()
        }    
    }); 
    TableData.shift();  // first row will be empty - so remove
    return TableData;
}
undefined
storeTblValues()
