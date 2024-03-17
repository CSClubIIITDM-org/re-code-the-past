import './footer.css'; 

const Footer = () => { 
  return (
    <>

    <footer>
      <div className="footer">
        <div className='privacy'>
        <div className="vertical-line"></div>
          <ul>
            <p><a href="https://policies.warnerbros.com/privacy/children/">PRIVACY POLICY</a></p><br/>  
            <p><a href="https://policies.warnerbros.com/terms/en-us/html/terms_en-us_1.3.0.html" style={{color: 'white'}}>TERMS OF USE</a></p><br/>
            <p><a href='https://cartoonnetworkhelp.zendesk.com/hc/en-us/search' style={{color: 'white'}}>CLOSED CAPTIONING</a></p><br/>
            <p><a href="http://www.tvguidelines.org/" style={{color: 'white'}}>TVE PARENTAL CONTROL</a></p><br/>
            <p><a href="https://cartoonnetworkhelp.zendesk.com/hc/en-us" style={{color: 'white'}}>HELP</a></p><br/>
            <p><a href="https://cartoonnetworkhelp.zendesk.com/hc/en-us/requests/new" style={{color: 'white'}}>CONTACT US</a></p><br/>

          </ul>
        </div>
        <div className="content">
          <br/>
          <br/>
          <br/>
          Cartoon Network is home to your favorite cartoons, full episodes, video clips and free games. <br/>
          Play with your favorite Cartoon Network characters in Teen Titans GO! games, Adventure Time games, Gumball games and more.     Watch episodes and video clips of your favorite TV shows like Adventure Time, Craig of the Creek, The Amazing World of Gumball, Teen Titans GO!, Steven Universe, We Bare Bears, Clarence and more.
          <br/>
          <div className="uses">
            <br/>
            <br/>
            
            {/* Disclaimer */}
            Use of this site signifies your agreement to the Terms of Use.&copy 2024 Cartoon Network. All Rights Reserved. CartoonNetwork.com is part of Turner Entertainment Digital which is part of the Turner Sports & Entertainment Digital Network.
          </div>
        
      
      {/* Acknowledgment */}
      <div className="ack">
        <br/>


        This project was completed with assistance from the Georgia Film Office, a division of the Georgia Department of Economic Development.
      </div>
      </div>
      </div>
      <div></div>
    </footer>
    </>
  );
}

export default Footer; 