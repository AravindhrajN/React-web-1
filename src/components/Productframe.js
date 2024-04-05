
const Productframe=()=>{

    return(
   <>
 <div className="frame base">
    <div className="container m-3 border border-2 border-danger">
      <div className="row">
        <div className="col border border-2 border-primary ">
        <figure class="figure p-3">
  <img src="./pictures/Moisturizer-1.png" class="figure-img img-fluid rounded" alt="moisture"/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
        </div>
        <div className="col border border-2 border-success ">
            <p>Fproducts_description </p>
            <div className="applytype">
                <h4>HOW TO APPLY</h4>
                <p>By adding gutter modifier classes, you can have control over the gutter width in as well the inline as block direction. Also requires the $enable-grid-classes Sass variable to be enabled (on by default).</p>
            </div>
           
        </div>
      </div>
      <div className="row bg-danger">
      <div className=" col quant">
                <label for="inputquantity" >
                    Quantity:<input type="number" id="inputquantity" min="1" max="5"/>
                </label>
                
            </div>
            <div className="col"> <p>price</p></div>
      </div>
      <div className="row  bg-success">
  

  <form class="  needs-validation" novalidate>
  <h4>ENTER YOUR DETAILS</h4>
  <div class="col ">
    <label for="validationCustom01" class="form-label">Name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col">
    <label for="validationCustom02" class="form-label">Mobile no</label>
    <input type="tel" class="form-control" id="validationCustom02"  placeholder="+91" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">Street,Door no</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">
        Please type a street,door no.
      </div>
    </div>
  </div>
  <div class="col">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required />
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Tamilnadu</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col">
    <label for="validationCustom05" class="form-label">Pincode</label>
    <input type="text" class="form-control" id="validationCustom05" inputmode="numeric" maxlength="6" required/>
    <div class="invalid-feedback">
      Please provide a valid pincode.
    </div>
  </div>
  
  <div class="col">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
  </div>
  <div className="row payment p-3">
    <div className="col p-3 text-center"><Link to="/order.js" ><button className="cash on pay" >CASH ON PAY</button></Link></div>
    <div className="col p-3 text-center"><button>ONLINE MODE</button></div>
    
  </div>
      </div>
    </div>
 

   </>
    )
}

export default Productframe;