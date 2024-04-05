import Products from "./Products";


const Body=()=>{

 return(
  <>
        <div className='Maincontent-1  bg-light border border-2 border-secondary rounded-3'>
        <div className="backimg-wrapper">
              <img src="./pictures/back-1.jpg" alt="ingri" className="backimg"/>
           
            
              <img src="./pictures/ingri.jpg" alt="ingri" className="sideimg"/>
              <div className="card cardfirst">
  <div className="card-header ">
    Quote
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
            </div> 
           </div>
           
           <Products />
            </>
            
      

     )
}

export default Body;