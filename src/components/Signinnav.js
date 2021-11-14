import './Signinnav.css';

// navdata:['','SignIn','SignUp','Sign Out','About'],
// {[this.onSignUp, this.onSignIn]}

const Signinnav = ({actions, data, page }) => {
    let about;
    // let login;
    let signup;
    let signin;
    let signinlink;
    let signuplink;
    let aboutlink;
    // let signpage;
    // let empty;

    if (page ==='home'){
        about=data[4];
        signup=data[0];
        signin=data[3];
        aboutlink="onvanessa.com";
        signuplink="0#";
        signinlink=actions[2];


    }
    else if (page ==='signin'){
        about=data[4];
        signup=data[2];
        signin=data[0];
        aboutlink="onvanessa.com"
        signinlink="0#";
        signuplink=actions[0];

    }
    else if (page ==='signup'){
        about=data[4];
        signup=data[0];
        signin=data[1];
        aboutlink="onvanessa.com"
        signuplink="0#";
        signinlink=actions[1];


    }
   

    return(
       <nav class="flex justify-between bb b--white-10 bc">
        <a class="link white-70 hover-white no-underline flex items-center pa3" href="https://google.com">
            <svg
            class="dib h1 w1"
            data-icon="grid"
            viewBox="0 0 32 32"
            style={{fill:'black'}}>
            <title>Super Normal Icon Mark</title>
            <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
            </path>
            </svg>
        </a>
        <div class="flex-grow pa3 flex items-center">
            <a class="f6 link dib white dim mr3 mr4-ns" href="onvanessa.com" onClick ={aboutlink}>{about}</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0" onClick={signinlink} >{signin}</a>
            <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0" onClick= {signuplink} >{signup}</a>
        </div>
    </nav>

        
    );
}
export default Signinnav;

//{page==="home" ? actions[2] : page==="signin" ? "0#":actions[1]}
//{page==="home" ? "0#" : page==="signin" ? actions[0]:"0#"}
