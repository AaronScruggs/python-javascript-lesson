$(document).ready(function(){
  function getUserInfo (username) {
    $.ajax({
      url: 'https://api.github.com/users/' + username,
      method: 'get',
      success: success,
      error: error
    });
  }

  function success(resp) {
    var profileHtml = `
      <img src="${resp.avatar_url}" />
      <h2>${resp.name}</h2>
      <p>${resp.login}</p>
    `;

    $("#myProfile").html(profileHtml);
  }

  function error(err) {
    console.log(err.responseText);
  }

  getUserInfo('overthemike');
  
});