# Contact us Form

In order to get the contact us Form working, we use EmailJs API, for this purpouse we create a free account that provide us a userID, a key and the template ID to connect it with our personal

# Module bundling
If you are stitching together a group of modules (and their dependencies) into a single file, then you can use one of package managers to install EmailJS SDK like a module.

Install EmailJS SDK using npm(opens new window):

   $ npm install @emailjs/browser --save

# Browser script

To start using EmailJS on your website just paste the following code snippet before closing tag, with the correct public key:

<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_PUBLIC_KEY");
   })();
</script>
You can obtain your public key from the Account(opens new window) page in the EmailJS dashboard.