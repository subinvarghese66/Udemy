const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password, repassword } = req.body;

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  if (!name) {
    return res.status(400).json('Name must not be blank');
  }

  if (!email) {
    return res.status(400).json('Email must not be blank');
  }

  if(!reg.test(email)) {
    return res.status(400).json('Email not in correct format');
  }

  if (!password) {
    return res.status(400).json('Password must not be blank');
  }
  if (password.length < 6) {
    return res.status(400).json('Password must be more than six characters');
  }
  if (password !== repassword) {
    return res.status(400).json('Passwords not matching');
  }
 db.select('email').from('login')
   .where({
       email : email
    })
   .then(emails => {
     if(emails.length > 0) {
       return res.status(400).json('Email already exists');
     } 
  })  
  const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
  handleRegister: handleRegister
};


