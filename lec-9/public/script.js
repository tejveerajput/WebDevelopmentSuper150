function refreshList(){
    $('#List').empty();
    $.get('/todos',function(data){
        // console.log(data);
        for(let item of data){
            $('#List').append(`<li> ${item}</li>`)
        }

    })
}

refreshList();


$('#btn').on('click',function(){
    let todo=$('#inp').val();
    // $('#List').append(`<li> ${todo}</li>`)
    // console.log(todo);
    $.post('/todos',{todo},function(){
        console.log(data);
        // $('#inp').val("");
    })
    $('#inp').val("");
    refreshList();
})