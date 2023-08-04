// User Signup JSON 
function handleAjaxUserSignup(){
    email = $("#email").val();  //use jQuery to get the email value
     console.log(email);
     email = $("#username").val();  //use jQuery to get the username value
     console.log(username);
     $.ajax({
       url:"ist256.up.ist.psu.edu",
       type: "POST",
       data: 'json={"email":"' + email +'","username": username}',
       success: function (response) {
          console.log(response);
          $("#output").html(JSON.stringify(response));
       },
       error: function () {
          console.log('there was an error!');
      }
     });
    }