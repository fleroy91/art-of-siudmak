$(document).ready(function() {
  window.setTimeout(function() {
    $("#formContact").submit(function(event) {
      event && event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var comments = $("#comments").val();
      var pageWeb = document.title;
      $("#name").removeClass("is-danger");
      $("#email").removeClass("is-danger");
      $("#comments").removeClass("is-danger");

      var destinataireMail = "frederic@adikteev.com";

      var textMail = "";
      var good = true;
      if (name !== undefined && name !== "") {
        textMail = textMail + "name : " + name + "\n\r";
      } else {
        $("#name").addClass("is-danger");
        $("#help_name").removeClass("is-hidden");
        good = false;
      }
      if (email !== undefined && email !== "") {
        textMail = textMail + "email : " + email + "\n\r";
      } else {
        $("#email").addClass("is-danger");
        $("#help_email").removeClass("is-hidden");
        good = false;
      }
      if (comments !== undefined && comments !== "") {
        textMail = textMail + "comments : " + comments + "\n\r";
      } else {
        $("#comments").addClass("is-danger");
        $("#help_comments").removeClass("is-hidden");
        good = false;
      }


      function restoreSubmit() {
        $("#submitContact").removeClass("is-danger").removeClass("is-success");
        $("#submitContact")
          .html("<p style='font-size: 1em;' >Send Message</p>")
          .fadeIn("slow");
      }

      function success() {
        $("#submitContact").addClass("is-success");
        $("#submitContact").html("<p>Message sent</p>");
        setTimeout(restoreSubmit, 5000);
        setTimeout(function() {
          $("#name").val("");
          $("#email").val("");
          $("#comments").val("");
        }, 3000);
      }

      function error() {
        $("#submitContact").addClass("is-danger");
        $("#submitContact").html("<p>Error, please try again.</p>");
        setTimeout(restoreSubmit, 3000);
      }

      if(!good) {
        setTimeout(function(){
          $("#name").removeClass("is-danger");
          $("#help_name").addClass("is-hidden");
          $("#email").removeClass("is-danger");
          $("#help_email").addClass("is-hidden");
          $("#comments").removeClass("is-danger");
          $("#help_comments").addClass("is-hidden");
        }, 3000);
        return false;
      }

      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          key: "nfACz2N6pCxazM0q-E6uvg",
          message: {
            from_email: email,
            from_name: name,
            headers: {
              "Reply-To": email
            },
            subject: "Contact",
            text: textMail, //"Email : " + email + "\n\r" + "Country : " + country + "\n\r" + subject + phone + name + "\n\r" + "\n\r" + "Company : " + company + "\n\r" + "\n\r" + "Message : " + "\n\r" + message + "\n\r" + "\n\r" +  "send from - Art-Of-Siudmak.com > " + pageWeb ,
            to: [
              {
                email: destinataireMail,
                name: "Contact Art-Of-Siudmak",
                type: "to"
              }
            ]
          }
        },
        success: success,
        error: error
      });

      return false;
    });
  }, 10);
});
