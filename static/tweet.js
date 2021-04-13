$('#author_text_input').innerText = "Please enter a twitter user's handle";
$('#author_submit').click(function () {
    $.ajax({
        url: '/add_user?twitter_handle=' + $('#author_text_input').val(),
        type: 'GET',
    });
});
$('#tweet_text_input').innerText = "Please enter a tweet to classify";
$('#tweet_submit').click(function () {
    $.ajax({
        url: '/predict_author?tweet_to_classify=' + $('#tweet_text_input').val(),
        type: 'GET'
    });
});
