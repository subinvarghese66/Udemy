import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repassword: '',
      name: ''
    }
  }

  componentDidMount() {
    const { email, name } = this.props.user;
    document.getElementById("name").value = name;
    document.getElementById("email-address").value = email;
    this.setState({
      email: email,
      name: name
    });
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  onRePasswordChange = (event) => {
    this.setState({repassword: event.target.value})
  };

  onUpdateProfile = () => {
    console.log("In update");
    fetch('https://protected-oasis-81870.herokuapp.com/update', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        repassword: this.state.repassword,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      } else {
          document.getElementById('err').innerHTML = user;
        }
    })
    .catch(console.log)
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="edit-profile" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Profile</legend>
            <div className="mt3">
              <p onClick={() => onRouteChange('home')} className="f6 link dim black db pointer"><u>Close[X]</u></p>
            </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  /*onChange={this.onEmailChange}*/
                  readOnly
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="repassword">Repeat Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="repassword"
                  id="repassword"
                  onChange={this.onRePasswordChange}
                />
              </div>
              <div className="mv3">
                <p id="err" style={{color: 'red'}} className="db fw6 lh-copy f6"></p>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onUpdateProfile}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Update"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Profile;