
import Main2 from "./AppMain-2";
import Listitem from "./List-item";

const Body=()=>{

 return(
  <>
        <div className='Maincontent-1'>

         <div className="Leftside-content" >
         <div className="first-image">
          <img
           src="./pictures/first image.png"
           alt="first beauty girl"
          />
         </div>
        
            <h2 className="head-1"> All Skin <em style={{fontFamily:'"CenturyOldStyleItalic","Times New Roman",serif'}}>essence ---</em></h2>
           <div className="Leftside-description"><p >
Revitalize your skin with our essential skincare lineup, meticulously chosen to combat dryness and embrace hydration. As the cold weather sets in, our hand-picked essentials provide a protective barrier,
 leaving your skin supple and radiant. Elevate your routine with nourishing formulas, ensuring your skin receives the love it deserves.
 Say goodbye to dryness; say hello to essential hydration.</p></div>
         </div>
        

         <div className="Rightside-content"  >
            
                <div className="list-item-wrapper"  >
                  <Listitem />
                </div>
            </div>
            </div>
            <br />
           <div>
            <Main2/>
           </div>
            </>
            
      

     )
}

export default Body;