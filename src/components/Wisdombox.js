import React from 'react';



const Wisdombox = ({dropWisdom}) => {
    return (
        <div  className='tc'>
            {/* <textarea id="textareaok"
            className='pa2  tc georgia ba b--black bg-white' 
            type='input' 
            style= {{width:400}}
            height ='90%'
            placeholder="Share anything you'd like people to know and learn about, whether it's fiction, a story or a fact"
            ></textarea> */}
                <form  >
                <div class="tc pa4 black-80" style={{display: 'grid'}}>
                    <label for="what will your friends learn from you today?" class="f6 b db mb2">Share the most funny thing you've discover at the moment?<span class="normal black-60"></span></label>
                    <textarea id="textareaok" name="comment" class="" aria-describedby="comment-desc"></textarea>
                    <div class="measure">
                        <small id="name-desc" class="f6 black-60 db mb2"> Share the moment's most funny content.</small>
                    </div>
                    
                </div>
                </form>
                
            <div class="ph3 mt4">
            <Link  class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" onClick={dropWisdom} to={{ pathname: " ", search: "", hash: "", state: [{ name: "Ademola"}]}}><span>Share</span></Link>
           </div>
           
        </div>
        
    )
}

export default Wisdombox;

//db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2


// // Wisdomboxmedia
// import React from 'react';



// const Wisdomboxmedia = ({handleTheImageUpload}) => {
//     return (
//         <div  className='tc'>
//             {/* <textarea id="textareaok"
//             className='pa2  tc georgia ba b--black bg-white' 
//             type='input' 
//             style= {{width:400}}
//             height ='90%'
//             placeholder="Share anything you'd like people to know and learn about, whether it's fiction, a story or a fact"
//             ></textarea> */}
//             <form  >
//                 <div class="tc pa1 black-80" style={{display: 'grid'}}>
//                     <div class="measure">
//                         {/* <label for="name" class="f6 b db mb2"> Upload media <span class="normal black-60"></span></label> */}
//                         <div class="ph3 mt4">
//                             <input id="name" hidden= "true" type= "file" class=" " aria-describedby="name-desc"/>
//                             <small id="name-desc" class="f6 black-60 db mb2"> Share your moment's most funny content.</small>
//                             <Link class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" onClick={handleTheImageUpload} to={{ pathname: " ", search: "", hash: "", state: [{ name: "Ademola"}]}}><span>Share Media!</span></Link>
//                         </div>
                        
//                     </div>
                    
//                 </div>
//             </form>
                
//         </div>
        
//     )
// }

// export default Wisdomboxmedia;

//db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2