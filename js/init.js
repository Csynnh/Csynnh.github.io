(function () {
   // emailjs.init("MxVfwZgSgfZUFCLOR");

   const menuIcon = document.querySelector(".header-menu");
   const iconClosesidebar = document.querySelector(".sidebar-close");
   const sidebar = document.querySelector(".sidebar");
   const menuOverplay = document.querySelector(".menu-overlay");

   menuIcon.addEventListener("click", () => {
      sidebar.classList.add("is-show");
      menuOverplay.classList.add("is-show");
      document.body.classList.add("is-disabled");
   });
   iconClosesidebar.addEventListener("click", handleClosedSidebar);
   menuOverplay.addEventListener("click", handleClosedSidebar);
   function handleClosedSidebar() {
      sidebar.classList.remove("is-show");
      menuOverplay.classList.remove("is-show");
      document.body.classList.remove("is-disabled");
   }

   const sidebarLinks = document.querySelectorAll(".sidebar-item");
   console.log({ sidebarLinks });
   const contactLink = sidebarLinks[sidebarLinks.length - 1];
   console.log({ contactLink });
   const email = document.getElementById("email");
   const name = document.getElementById("name");
   const subject = document.getElementById("subject");
   const terms = document.getElementById("terms");
   const message = document.getElementById("message");
   const button = document.getElementById("button");
   const formContact = document.querySelector("form");
   let isSubmitting = false;
   formContact.addEventListener("submit", handleSubmitForm);
   async function handleSubmitForm(e) {
      console.log(terms.checked);
      e.preventDefault();
      if (
         name.value.length === 0 ||
         message.value.length === 0 ||
         terms.checked === false
      ) {
         return;
      }
      isSubmitting = true;
      var params = {
         user_name: name.value,
         user_message: message.value,
         user_email: email.value,
      };
      const serviceID = "service_tsuiy04";
      const templateID = "template_j24wzjc";
      button.classList.add("isSubmitting");
      try {
         const res = await emailjs.send(serviceID, templateID, params);
         isSubmitting = false;

         name.value = "";
         message.value = "";
         email.value = "";
         terms.checked = false;
         button.classList.remove("isSubmitting");
         console.log(res);
      } catch (err) {
         console.log(err);
      }
   }
})();
