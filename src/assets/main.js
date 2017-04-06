$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/bradford_hamilton.json',
    dataType: 'jsonp',
    success: function(response) {
      for (var i = 0; i < response.courses.completed.length; i++) {
        $('#badges').append(
          '<div class="course">' +
          '<h3>' + response.courses.completed[i].title + '</h3>' +
          '<img src="' + response.courses.completed[i].badge + '"/> ' +
          '<a href="' + response.courses.completed[i].url + '" target="_blank" class="btn btn-primary">See Course</a>' +
          '</div>'
        )
      }
    },
    error: function(error) {
      console.log('This is the error from the ajax, sir:', error);
    }
  });
  
});
