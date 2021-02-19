var express = require("express");
var router = express.Router();
let contacts = require('../models/contacts'); 





router.get('/', isLoggedIn,(req, res,next) => {
    
    contacts.find({}).sort({name : 1})
      .then(contactList => {
          
        res.render("buisness_contacts/contact_list", {
          title : 'Business Contacts',
          contactList : contactList
        });

      }) ; 
  });

//EDIT ROUTE
router.get("/edit/:id",(req,res,next) => {
	contacts.findById(req.params.id,(err,foundContact) => {
		if(err){
			console.log(err.message);
			res.end(err);
		}
		else {
			res.render("buisness_contacts/update",{title : 'Update',contact : foundContact});
		}
	});
});

 //UPDATE ROUTE
 router.post("/edit/:id",(req,res,next) => {
   let id = req.params.id;
	contacts.updateOne({_id : id}, req.body.updated,(err, updatedContact) => {
		if(err){
			console.log(err.message);
      res.end(err);
		}
		else {
			res.redirect("/business-contacts");
		}
	});
});  

//DELETE ROUTE
/* router.delete("/delete/:id", (req,res,next) => {
  
contacts.findByIdAndDelete(req.params.id, (err, deletedContact) => {
    if(err){
      console.log(err.message);
      res.end(err);
    }
    else {
        
        console.log(deletedContact);
        res.redirect("/business-contacts");
    }

});
  
}); */

router.get("/delete/:id", (req,res,next) => {
  let id = req.params.id;
  contacts.remove({_id : id}, (err, deletedContact) => {
      if(err){
        console.log(err.message);
        res.end(err);
      }
      else {
          
          console.log(deletedContact);
          res.redirect("/business-contacts");
      }
  
  });
    
  }); 

 
  function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect("/login");
  }

  module.exports = router;