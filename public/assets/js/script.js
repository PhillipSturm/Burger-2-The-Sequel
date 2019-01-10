$("#devour").on("click", function (event) {
  event.preventDefault()
  if ($("#user").val().trim()) {
    var user = {
      burgerId: $(".burger_id").val().trim(),
      user_name: $("#user").val().trim()
    }
    $.post("/burgers/eaten", user).then(function (response) {
      $.ajax("/burgers/update/" + user.burgerId, { type: "PUT" }).then(function (res) {
        window.location.reload(true)
      })
    })
  }

})
