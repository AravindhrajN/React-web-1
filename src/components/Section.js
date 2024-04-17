const handleclick=(prop,name)=>{
     
  const data1={id:prop,name:name};

  localStorage.setItem('Data', JSON.stringify(data1));

  window.open("/Productframe", '_blank');
    
}
const Section1=()=>{
    return(
        <>
       
           <div className="container-fluid g-0 contcard">
  <div className="row g-0">
    <div className="col-6 col-sm-6 Mainprocard">
    <div className="card maincardwrapper " >
  <img src="./pictures/Sunscreen-1.png" className="card-img-top" alt="procard" />
  <div className="card-body maincard">
    <h5 className="card-title">Sunscreen</h5>
    <p className="cardtext">Say Hello to the Sun,Our Natural Sunscreen to protect us from sunlight.</p>
  </div>
  

   <button className=" maincardbts" onClick={()=>{handleclick(202,"face")}}>Click Me </button>

</div>
    </div>
    <div className="col-6 col-sm-6  Mainprocard">  <div className="card maincardwrapper" >
  <img src="./pictures/soap-1.png" className="card-img-top" alt="procard" />
  <div className="card-body maincard">
    <h5 className="card-title ">Soap</h5>
    <p className="cardtext">Say Bye to Dust,Our Skin Care Beauty Bar, which makes you dust-free from day.</p>
  </div>
  

    <button className=" maincardbts" onClick={()=>{handleclick(401,"body")}}>
    Click Me</button>

  
</div> </div>
</div>
<div className="row g-0">
    <div className="col-6 col-sm-6 Mainprocard"> <div className="card maincardwrapper border border-transparent " >
  <img src="./pictures/Moisturizer-1.png" className="card-img-top" alt="procard" />
  <div className="card-body maincard">
    <h5 className="card-title ">Moisturizer</h5>
    <p className="cardtext">Be fresh with our moisture,it prevents dryness and makes you chill.</p>
  </div>


  <button className=" maincardbts" onClick={()=>{handleclick(203,"face")}}>
    Click Me</button>



</div> </div>
    <div className="col-6 col-sm-6   Mainprocard"> <div className="card maincardwrapper " >
  <img src="./pictures/bodyscrub-1.png" className="card-img-top" alt="procard" />
  <div className="card-body maincard ">
    <h2 className="card-title ">Scrub</h2>
    <p className="cardtext">Don't worry about darkness on your skin our srub products help you from it.</p>
  </div>

  <button className=" maincardbts" onClick={()=>{handleclick(403,"body")}}>
    Click Me</button>


</div> </div>
  </div>
  </div>
           
        </>
    );

}
export default Section1;