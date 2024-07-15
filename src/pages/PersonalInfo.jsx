function PersonalInfo(){
  return <section id="personal-info">
    <form className="row g-3 needs-validation my-form" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter First Name" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Last Name" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Email</label>
    <div className="input-group has-validation">
      
      <input type="email" className="form-control" placeholder="Enter Email Address" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" class="form-label">Country</label>
    <input type="text" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid country.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">City</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option value={'cairo'}>Cairo</option>
      <option value={'alex'}>Alexandria</option>
      <option value={'sharkiya'}>Sharkiya</option>
      <option value={'gharbiya'}>Gharbiya</option>
      <option value={'menofiya'}>Menofiya</option>
      <option value={'sinai'}>Sinai</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required /> 
    {/* <input type="text" /> */}
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <label  className="form-check-label" for="invalidCheck">
        Describe your address
      </label>
  <textarea style={{marginTop:'0'}} id="validationCustom05" className="form-control" name="address" id=""></textarea>
  <div className="col-12" >
    <div style={{display:'flex', justifyContent:'center', alignContent:'center', gap:'0.2rem'}} className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <br />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-success" type="submit">Go to payment method</button>
  </div>
  
</form>
  </section>
}

export default PersonalInfo