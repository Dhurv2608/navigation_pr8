import React from 'react';
import './Client.css'

const Client = () => {
  return (
    <div>
   <div>
  <header className="header--type2" data-background="https://www.solodev.com/assets/clients/clients.jpg" data-height="35%" style={{minHeight: '353.5px', backgroundImage: 'url(https://www.solodev.com/assets/clients/clients.jpg)'}}>
    <div className="inner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 ">
            <section className="ct-page_title">
              <div className="h1 text-light">
                Clients
              </div>
              <div className="ct-page_title-content" />
            </section>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div className="container ct-u-paddingTop40 ct-u-paddingBottom100">
      <div className="row">
        <div className="col-md-12 ct-content">
          <section className="clients-home mt-5">
            <div className="container">
              <div className="clients-logos text-center">
                {/* starting row div */}
                <div className="row">
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/zeina.html" className="Zeina"><img alt="https://www.solodev.com/assets/clients/logo-zeina.png" src="https://www.solodev.com/assets/clients/logo-zeina.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Zeina
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/logic.html" className="Logic"><img alt="https://www.solodev.com/assets/clients/logic.png" src="https://www.solodev.com/assets/clients/logic.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Logic
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/smart.html" className="Smart"><img alt="https://www.solodev.com/assets/clients/client3.png" src="https://www.solodev.com/assets/clients/client3.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Smart 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/softtech.html" className="Softtech"><img alt="https://www.solodev.com/assets/clients/softtech.png" src="https://www.solodev.com/assets/clients/softtech.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Softtech 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/wheel.html" className="Wheel"><img alt="https://www.solodev.com/assets/clients/logo-target.png" src="https://www.solodev.com/assets/clients/logo-target.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Wheel 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/3designs.html" className="3designs"><img alt="https://www.solodev.com/assets/clients/designx.png" src="https://www.solodev.com/assets/clients/designx.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          3designs 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/heart.html" className="Heart"><img alt="https://www.solodev.com/assets/clients/client7.png" src="https://www.solodev.com/assets/clients/client7.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Heart
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/devtech.html" className="Devtech"><img alt="https://www.solodev.com/assets/clients/devtech.png" src="https://www.solodev.com/assets/clients/devtech.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Devtech 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 client-logos-repeater">
                    <a href="/path/to/detail/chartz.html" className="Chartz"><img alt="https://www.solodev.com/assets/clients/chartz.png" src="https://www.solodev.com/assets/clients/chartz.png" /></a>
                    <div className="logo-title">
                      <div className="displayTable">
                        <div className="displayTableCell">
                          Chartz 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* closing row div */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</div>

    </div>
  );
}

export default Client;
