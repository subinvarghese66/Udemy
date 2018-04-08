const handleUpdate = (req, res, db, bcrypt) => {
const { email, name, password, repassword } = req.body;
const hash = bcrypt.hashSync(password);

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

db.transaction(trx => {
db.select('hash')
.from('login')
.where({
  email : email
})
.then(login => {
  return trx('login')
  .returning('*')
  .where({
    email : email
  })
  .update({
    hash : hash
  })
  .into('login')
})
.then(users => {
  return trx('users')
  .returning('*')
  .where({
      email : email
  })
  .update({
    name : name
  })
  .into('users')
  })
  .then(user => {
    res.json(user[0]);
})
.then(trx.commit)
.catch(trx.rollback)
});
}
module.exports = {
handleUpdate: handleUpdate
};