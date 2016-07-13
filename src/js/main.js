$(() => {
    $.get('/search', (data) => {
        console.log(data);
        
    }, 'json');
});