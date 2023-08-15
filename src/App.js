import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav className="menu">
              <div id="logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="131" height="35.001" viewBox="0 0 131 35.001">
                      <text transform="translate(70 24)" fill="#fff" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">E-Shop</tspan></text>
                      <path d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z" transform="translate(-416 -424)" fill="#fff"/>
                  </svg>
              </div>
              <ul className="menu-product-categories">
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
              </ul>
              <ul className="menu-widgets">
                  <li>
                      <button className="menu-widgets-search" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21.996" height="22" viewBox="0 0 21.996 22">
                              <path d="M14.129,22.253a8.109,8.109,0,0,0,5.061-1.768l7.246,7.246a.917.917,0,1,0,1.3-1.3l-7.246-7.246a8.131,8.131,0,1,0-6.357,3.064ZM9.677,9.677a6.3,6.3,0,1,1,0,8.9A6.253,6.253,0,0,1,9.677,9.677Z" transform="translate(-6.004 -6)" fill="#fff"/>
                          </svg>
                      </button>
                  </li>
                  <li>
                      <button className="menu-widgets-cart" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                              <g id="cart-icon" data-name="cart-icon" transform="translate(-6 -6)">
                                  <path d="M6.917,7.833H8.448l2.295,10.355a3.289,3.289,0,0,0-1.871,3.042,3.133,3.133,0,0,0,2.962,3.275H23.988a.917.917,0,1,0,0-1.833H11.833A1.332,1.332,0,0,1,10.7,21.231a1.332,1.332,0,0,1,1.128-1.442H23.988a.917.917,0,0,0,.863-.606l3.1-8.591a.917.917,0,0,0-.863-1.227H10.665l-.586-2.646A.916.916,0,0,0,9.184,6H6.917a.917.917,0,0,0,0,1.833ZM25.779,11.2l-2.435,6.758H12.568l-1.5-6.758H25.779Z" fill="#fff"/>
                                  <path d="M19.261,50a.917.917,0,0,0,0,1.833h1.164a.917.917,0,1,0,0-1.833Z" transform="translate(-6.687 -23.833)" fill="#fff"/>
                                  <path d="M37.713,50a.917.917,0,0,0,0,1.833h1.164a.917.917,0,1,0,0-1.833Z" transform="translate(-16.682 -23.833)" fill="#fff"/>
                              </g>
                          </svg>
                      </button>
                  </li>
                  <li>
                      <button className="menu-widgets-avatar" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                              <path data-name="avatar-icon" d="M23.144,19.823l-4.2-1.723a.594.594,0,0,1-.375-.548V16.57a.557.557,0,0,1,.119-.349,8.265,8.265,0,0,0,1.721-5.03C20.41,8.086,18.437,6,15.5,6s-4.91,2.086-4.91,5.192a8.266,8.266,0,0,0,1.721,5.03.557.557,0,0,1,.119.348v.981a.594.594,0,0,1-.375.548l-4.2,1.723A2.97,2.97,0,0,0,6,22.575v1.634A.792.792,0,0,0,6.792,25H24.208A.792.792,0,0,0,25,24.208V22.575A2.97,2.97,0,0,0,23.144,19.823Zm.273,3.594H7.583v-.842a1.392,1.392,0,0,1,.874-1.287l4.2-1.723a2.172,2.172,0,0,0,1.357-2.013V16.57a2.145,2.145,0,0,0-.468-1.34,6.729,6.729,0,0,1-1.372-4.038c0-2.66,1.718-3.608,3.327-3.608s3.327.948,3.327,3.608a6.729,6.729,0,0,1-1.372,4.038,2.146,2.146,0,0,0-.468,1.34v.981a2.172,2.172,0,0,0,1.357,2.013l4.2,1.723a1.392,1.392,0,0,1,.874,1.287Z" transform="translate(-6 -6)" fill="#fff"/>
                          </svg>
                      </button>
                  </li>
              </ul>
          </nav>
          <div className="sliders">
              <div className="slider">
                  <h1>The Fairfield Chronograph</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="slider-shop-now-group">
                      <button>
                          <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#ffffff",}} />
                      </button>
                      <span>SHOP NOW</span>
                  </div>
                  <div className="slider-footer">
                      <div className="slider-pills">
                          <div className="pill">
                              <img className="pill-icon" src="" alt=""/>
                              <div className="pill-text-group">
                                  <h6>Free Shipping</h6>
                                  <p>On purchases over $199</p>
                              </div>
                          </div>
                          <div className="pill">
                              <img className="pill-icon" src="" alt=""/>
                              <div className="pill-text-group">
                                  <h6>Free Shipping</h6>
                                  <p>On purchases over $199</p>
                              </div>
                          </div>
                          <div className="pill">
                              <img className="pill-icon" src="" alt=""/>
                              <div className="pill-text-group">
                                  <h6>Free Shipping</h6>
                                  <p>On purchases over $199</p>
                              </div>
                          </div>
                      </div>
                      <div className="slider-arrows">
                          <button className="slider-arrow-left" type="button">
                              <FontAwesomeIcon icon={faArrowLeft} size="sm" style={{color: "#ffff",}} />
                          </button>
                          <button className="slider-arrow-right" type="button">
                              <FontAwesomeIcon icon={faArrowRight} size="sm" style={{color: "#000000",}} />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <main>
          <section id="banners">
              <div className="banner col-2-banner">
                  <p>New arrivals<br/>are now in!</p>
                  <button className="button">Shop Collection</button>
              </div>
              <div className="banner col-1-banner">
                  <p>Basic t-shirts<br/>$29,99</p>
                  <button className="button">More Details</button>
              </div>
              <div className="banner col-1-banner">
                  <div className="sale">-50%</div>
                  <p>Sale this<br/>summer</p>
                  <button className="button">View All</button>
              </div>
          </section>
          <section id="selected-for-you">
              <div className="selected-for-you-header">
                  <div className="section-name">Selected just for you</div>
                  <button className="button">Show more</button>
              </div>
              <div className="product-items">
                  <FontAwesomeIcon icon={faArrowLeft} size="sm" style={{color: "#CECECE",}} />
                  <div className="product-item-sale">
                      <div className="sale">Sale</div>
                      <img src="" alt="product-item"/>
                      <div className="product-name">T-Shirt Summer Vibes</div>
                      <span className="sale-price">$89.99</span>
                      <span className="regular-price-sale">$119.99</span>
                  </div>
                  <div className="product-item">
                      <img src="" alt="product-item"/>
                      <div className="product-name">Loose Knit 3/4 Sleeve</div>
                      <div className="regular-price">$119.99</div>
                  </div>
                  <div className="product-item">
                      <img src="" alt="product-item"/>
                      <div className="product-name">Basic Slim Fit T-Shirt</div>
                      <div className="regular-price">$79.99</div>
                  </div>
                  <div className="product-item">
                      <img src="" alt="product-item"/>
                      <div className="product-name">Loose Textured T-Shirt</div>
                      <div className="regular-price">$119.99</div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} size="sm" style={{color: "#000000",}} />
              </div>

          </section>
          <section id="why-choose">
              <div className="section-name">Why should you choose us?</div>
              <div className="why-choose-items">
                  <div className="why-choose-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                          <rect width="70" height="70" rx="10" fill="#f6f6f6"/>
                          <g transform="translate(16.154 23.333)">
                              <path id="Path_189" data-name="Path 189" d="M47.425,30.727l-1.7-3.949a3.9,3.9,0,0,0-3.6-2.361H39.373V23.41a1.512,1.512,0,0,0-1.51-1.51h-19.2a1,1,0,0,0-1.007,1.007,1.025,1.025,0,0,0,1.007,1.007H37.282v7.433a1.652,1.652,0,0,0,1.665,1.665h6.7v4.684a.347.347,0,0,1-.348.348H44.057a3.725,3.725,0,0,0-3.213-1.858,3.809,3.809,0,0,0-3.213,1.858H27.294a3.725,3.725,0,0,0-3.213-1.858,3.809,3.809,0,0,0-3.213,1.858H17.307a1.007,1.007,0,1,0,0,2.013h3.058a3.72,3.72,0,0,0,7.433,0h9.33a3.72,3.72,0,0,0,7.433,0h.813a2.371,2.371,0,0,0,2.361-2.361v-5.42A4.414,4.414,0,0,0,47.425,30.727ZM24.081,41.6a1.7,1.7,0,1,1,1.7-1.7A1.718,1.718,0,0,1,24.081,41.6Zm16.763,0a1.7,1.7,0,1,1,1.7-1.7A1.718,1.718,0,0,1,40.844,41.6Zm-1.51-15.137h2.749a1.814,1.814,0,0,1,1.7,1.123L45.257,31H39.334Z" transform="translate(-10.958 -21.9)"/>
                              <path id="Path_190" data-name="Path 190" d="M13.307,34.813H20.43a1.007,1.007,0,1,0,0-2.013H13.307A1,1,0,0,0,12.3,33.807,1.025,1.025,0,0,0,13.307,34.813Z" transform="translate(-8.506 -28.58)"/>
                              <path id="Path_191" data-name="Path 191" d="M8.407,44.813H15.53a1.007,1.007,0,1,0,0-2.013H8.407A1,1,0,0,0,7.4,43.807,1.025,1.025,0,0,0,8.407,44.813Z" transform="translate(-5.503 -34.709)"/>
                              <path id="Path_192" data-name="Path 192" d="M11.675,53.807A1,1,0,0,0,10.668,52.8H3.507a1.007,1.007,0,1,0,0,2.013H10.63A.986.986,0,0,0,11.675,53.807Z" transform="translate(-2.5 -40.838)"/>
                          </g>
                      </svg>
                      <div className="why-choose-item-name">Free Shipping</div>
                      <p>All purchases over $199 are eligible for<br/>
                          free shipping via USPS First Class Mail.</p>
                  </div>
                  <div className="why-choose-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                          <rect width="70" height="70" rx="10" fill="#fff3df"/>
                          <g transform="translate(18 18.051)">
                              <path d="M6.938,88.531a.721.721,0,1,1,.513-.21A.721.721,0,0,1,6.938,88.531Z" transform="translate(-4.074 -57.042)" fill="#fbb03b"/>
                              <path d="M6.67,76.642H0V74.915H4.944v-8.85H0V64.339H6.67Z" transform="translate(0 -42.142)" fill="#fbb03b"/>
                              <path d="M31.754,72.171h-9.1v-8.76l.1-.191a5.676,5.676,0,0,1,2.418-2.278,7.49,7.49,0,0,1,6.13-.161,17.948,17.948,0,0,1,1.836.875c.489.256.951.5,1.429.7a4.671,4.671,0,0,0,.617.179,2.767,2.767,0,0,1,2.118,1.352,4.063,4.063,0,0,1,.26,1.875L41.91,65.7l2.255-2.5a2.359,2.359,0,0,1,3.508,3.155l-3.4,3.791Zm-7.368-1.727h7.23l11.78-1.9L46.387,65.2a.632.632,0,0,0-.94-.845l-2.759,3.055L32,67.572l-.025-1.726,3.867-.057a2.766,2.766,0,0,0-.111-1.207c-.066-.15-.641-.292-.95-.368a5.849,5.849,0,0,1-.875-.265c-.544-.23-1.06-.5-1.559-.762a16.41,16.41,0,0,0-1.659-.794,5.767,5.767,0,0,0-4.713.085,4.142,4.142,0,0,0-1.586,1.384Z" transform="translate(-14.842 -39.433)" fill="#fbb03b"/>
                              <path d="M51.989,3.854V2.018L46.489,0,35.867,5.461H26.7V18.313H47.745v-3.64c.286.01.569.021.845.041.173.01.345.017.518.017a8.7,8.7,0,0,0,2.881-.514V12.372l-.024.01a7.094,7.094,0,0,1-3.26.611c-.314-.021-.631-.034-.959-.045-.552-.014-1.121-.01-1.725.01-.831.028-1.722.093-2.694.193l-1.063.11a1.009,1.009,0,0,1-.276-2l4.023-.7a.013.013,0,0,0,.01,0A2.537,2.537,0,0,0,47.745,9.4a2.574,2.574,0,0,0-2.174-3.943H39.637L46.607,1.88ZM45.572,7.186a.822.822,0,0,1,.449.128.85.85,0,0,1,0,1.439.827.827,0,0,1-.3.114l-4.023.7a2.733,2.733,0,0,0,.466,5.427,2.5,2.5,0,0,0,.276-.014s2.808-.262,3.585-.29v1.9h-17.6v-9.4Z" transform="translate(-17.489)" fill="#fbb03b"/>
                              <rect width="1.725" height="1.725" transform="translate(18.984 11.024)" fill="#fbb03b"/>
                          </g>
                      </svg>

                      <div className="why-choose-item-name">Easy Payments</div>
                      <p>All payments are processed instantly<br/>
                          over a secure payment protocol.</p>
                  </div>
                  <div className="why-choose-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                          <rect width="70" height="70" rx="10" fill="#f6f6f6"/>
                          <g transform="translate(16 15.39)">
                              <path d="M33.227,7.946,19.8,4.042a1.074,1.074,0,0,0-.612,0h0L5.763,7.946A1.074,1.074,0,0,0,5,8.977V20.7C5,30.9,18.657,34.433,19.242,34.578a1.052,1.052,0,0,0,.537-.005C20.617,34.363,34,30.808,34,20.7V8.977a1.074,1.074,0,0,0-.773-1.031ZM31.852,20.7c0,7.841-10.547,11.224-12.352,11.724-1.8-.5-12.352-3.867-12.352-11.724V9.788L19.5,6.19,31.852,9.783Z"/>
                              <path d="M27.7,19.074V20.2a3.222,3.222,0,0,0,.537,6.4h1.611a1.074,1.074,0,1,1,0,2.148H26.627a1.074,1.074,0,0,0,0,2.148H27.7v1.074a1.074,1.074,0,1,0,2.148,0V30.889a3.222,3.222,0,1,0,0-6.444H28.238a1.074,1.074,0,0,1,0-2.148H31.46a1.074,1.074,0,0,0,0-2.148H29.849V19.074a1.074,1.074,0,1,0-2.148,0Z" transform="translate(-9.275 -6.483)"/>
                          </g>
                      </svg>
                      <div className="why-choose-item-name">Money-Back Guarantee</div>
                      <p>If an item arrived damaged or you've<br/>
                          changed your mind, you can send it<br/>
                          back for a full refund.</p>
                  </div>
                  <div className="why-choose-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                          <rect width="70" height="70" rx="10" fill="#f6f6f6"/>
                          <g transform="translate(14.385 11.356)">
                              <circle cx="1.032" cy="1.032" r="1.032" transform="translate(15.489 27.354)"/>
                              <path d="M40.881,5.977H17.742V17.506H6.615V40.644H29.753V29.115H40.881V5.977Zm-1.8,4.93-9.326,9.326V17.506h-3.43l9.647-9.647-.08-.08h3.189v3.129ZM27.952,29.057c-1.546-.26-3.946-.553-4.809,2.355a19.028,19.028,0,0,1-2.715,4.772,15.354,15.354,0,0,0-1.643,2.658H15.932a6.191,6.191,0,0,1,1.292-3.814,6.1,6.1,0,0,1,1.358-1.144,6.184,6.184,0,0,0,3.073-4.671,8.928,8.928,0,0,0-.6-5.106,9.078,9.078,0,0,1-.645-4.8h2.638c.074.368.138.749.2,1.151.378,2.276.848,5.108,3.873,6.664.169.087.279.147.349.188a1.288,1.288,0,0,0,.481.315v1.432Zm-14.638,1.6a8.253,8.253,0,0,1,.178-2.744,7.639,7.639,0,0,1,1.232-2.485,10.334,10.334,0,0,0,2-6.123H18.6a10.8,10.8,0,0,0,.763,5.422,7.224,7.224,0,0,1,.516,4.207A4.433,4.433,0,0,1,17.558,32.4a7.59,7.59,0,0,0-1.74,1.5,7.977,7.977,0,0,0-1.687,4.939H12.249A21.928,21.928,0,0,0,13.314,30.659Zm14.638-5.135-.007,0c-2.22-1.142-2.56-3.19-2.92-5.358-.047-.283-.1-.57-.149-.856h3.076Zm-8.408-9.613,8.133-8.133H33.5l-9.727,9.727H19.544ZM25.13,7.778l-5.586,5.586V7.778ZM11.215,19.307a28.132,28.132,0,0,1-1.681,4.645c-.367.872-.75,1.783-1.117,2.727V19.307Zm-2.8,13.747a38.446,38.446,0,0,1,2.777-8.4,25.647,25.647,0,0,0,1.849-5.344h1.88a8.55,8.55,0,0,1-1.7,5.125,9.331,9.331,0,0,0-1.477,3.031,9.94,9.94,0,0,0-.234,3.285,21,21,0,0,1-1.142,8.094H8.417V33.054Zm12.393,5.788c.309-.5.739-1.118,1.094-1.625a20.251,20.251,0,0,0,2.966-5.292c.405-1.365,1.134-1.375,2.963-1.061l.12.02v7.958ZM29.753,22.78l9.326-9.326v6.071L31.29,27.314H29.753V22.78Zm4.084,4.534,5.242-5.242v5.242Z"/>
                          </g>
                      </svg>
                      <div className="why-choose-item-name">Finest Quality</div>
                      <p>Designed to last, each of our products has<br/>
                          been crafted with the finest materials.</p>
                  </div>
              </div>
          </section>
          <section id="products-today">
              <div className="section-name">Products in today</div>
              <div className="product-items">
                  <div className="product-item-sale">
                      <div className="sale">Sale</div>
                      <img src="" alt="product-item"/>
                      <div className="product-name">T-Shirt Summer Vibes</div>
                      <span className="sale-price">$89.99</span>
                      <span className="regular-price-sale">$119.99</span>
                  </div>
                  <div className="product-item">
                      <img src="" alt="product-item"/>
                      <div className="product-name">Loose Knit 3/4 Sleeve</div>
                      <div className="regular-price">$119.99</div>
                  </div>
                  <div className="product-item">
                      <img src="" alt="product-item"/>
                      <div className="product-name">Basic Slim Fit T-Shirt</div>
                      <div className="regular-price">$79.99</div>
                  </div>
                  <div className="product-item">
                      <img src="" alt="product-item"/>
                      <div className="product-name">Loose Textured T-Shirt</div>
                      <div className="regular-price">$119.99</div>
                  </div>
              </div>
          </section>
      </main>
      <footer>
          <div className="newsletter">
              <p>Subscribe to our newsletter and receive exclusive offers every week</p>
              <div className="newsletter-subscribe">
                  <input className="newsletter-email" type="email" value="Enter your email"/>
                  <button className="newsletter-button">Subscribe</button>
              </div>
          </div>
          <div className="footer">
              <div className="footer-left">
                  <div id="logo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="131" height="35.001" viewBox="0 0 131 35.001">
                          <text transform="translate(70 24)" fill="#fff" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">E-Shop</tspan></text>
                          <path d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z" transform="translate(-416 -424)" fill="#fff"/>
                      </svg>
                  </div>
                  <p className="footer-text">
                      House My Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable
                  </p>
                  <div className="social-media-group">
                      <a className="social-media-icon" href="/">
                          <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a className="social-media-icon" href="/">
                          <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                      <a className="social-media-icon" href="/">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                      <a className="social-media-icon" href="/">
                          <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a className="social-media-icon" href="/">
                          <FontAwesomeIcon icon={faYoutube} />
                      </a>
                  </div>
              </div>
              <div className="footer-right">
                  <div className="footer-right-group">
                      <h6>Shopping online</h6>
                      <a className="footer-text footer-link" href="/">Order Status</a>
                      <a className="footer-text footer-link" href="/">Shipping and Delivery</a>
                      <a className="footer-text footer-link" href="/">Returns</a>
                      <a className="footer-text footer-link" href="/">Payment Options</a>
                      <a className="footer-text footer-link" href="/">Contact Us</a>
                  </div>
                  <div className="footer-right-group">
                      <h6>Information</h6>
                      <a className="footer-text footer-link" href="/">Gift Cards</a>
                      <a className="footer-text footer-link" href="/">Find a store</a>
                      <a className="footer-text footer-link" href="/">Newsletter</a>
                      <a className="footer-text footer-link" href="/">Become a member</a>
                      <a className="footer-text footer-link" href="/">Site feedback</a>
                  </div>
                  <div className="footer-right-group">
                      <h6>Contact</h6>
                      <a className="footer-text footer-link" href="/">store@uikit.com</a>
                      <a className="footer-text footer-link" href="/">Hotline: +1 131 138 138</a>
                  </div>
              </div>
          </div>
          <div className="footer-copywriter">
             <p>DESIGN BY ICEO.CO - ©2019. ALL RIGHTS RESERVED.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
