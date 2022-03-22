import React from 'react';
class Register extends React.Component{
    render(){
        return<div  class="m-3 col-md-5">
             <div class="mb-3"><h2>Register</h2><hr/></div>
              <div class="mb-3">
  <label for="FName" class="form-label" >Firstname</label>
  <input id="FName " type="text" class="form-control" />
</div>
<div class="mb-3">
  <label for="LName" class="form-label" >Lastname</label>
  <input id="LName" type="text" class="form-control" />
</div>
            <div class="mb-3">
  <label for="email" class="form-label" >Email</label>
  <input id="email" type="email" class="form-control"/>
</div>
<div class="mb-3">
  <label for="password" class="form-label" >Password</label>
  <input id="password" type="password" class="form-control" />
</div>
<div class="mb-3">
    <button className='btn btn-danger'>Register</button>
  
  
</div>
        </div>
    }

}

export default Register;