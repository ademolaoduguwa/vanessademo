import React from 'react';



const Wisdomboxmedia = ({handleTheImageUpload}) => {
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
                    <div class="measure">
                        <label for="name" class="f6 b db mb2"> Upload media <span class="normal black-60"></span></label>
                        <input id="name" type= "file" class=" " aria-describedby="name-desc"/>
                        <div class="ph3 mt4">
                            <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" onClick={handleTheImageUpload} href="#0">Share!</a>
                        </div>
                        <small id="name-desc" class="f6 black-60 db mb2"> Share the moment's most funny content.</small>
                    </div>
                    
                </div>
                </form>
                
        </div>
        
    )
}

export default Wisdomboxmedia;

//db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2