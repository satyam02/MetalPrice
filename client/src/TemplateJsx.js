import React from 'react';
import './Style.css';
import './slide.css';
export const TemplateJsx = () => {
 return (
   <div>
   <div className="logoN1"> <img height="95px" src={ require('./images/logo.jpg') } alt="SVBC GOLD" /></div>
  <div className="livepriceN1">
     <table id="LPriceTbl" width="100%" style={{position: 'relative'}}>
        <tbody>
           <tr className="headerN1">
             <td>
                <div className="greyrowN1">
                   <div className="titledivN1">Gold</div>
                   <div className="purityN1">Current</div>
                   <div className="priceClassImgN1"><img className="imgClassN1" src={ require('./images/dollar1.png') } alt="" /></div>
                   <div className="priceClassN1"><font color="Green">{this.state.goldC.price}</font></div>
                </div>
             </td>
           </tr>
           <tr className="headerN1">
              <td>
                 <div className="greyrowN1">
                    <div className="titledivN1">Gold</div>
                    <div className="purityN1">Yesterday</div>
                    <div className="priceClassImgN1"><img className="imgClassN1" src={ require('./images/dollar1.png') } alt="" /></div>
                    <div className="priceClassN1"><font color="Green">{this.state.goldY.price}</font></div>
                 </div>
              </td>
           </tr>
           <tr className="headerN1">
             <td>
                <div className="greyrowN1">
                   <div className="titledivN1">Silver</div>
                   <div className="purityN1">Current</div>
                   <div className="priceClassImgN1"><img className="imgClassN1" src={ require('./images/dollar1.png') } alt="" /></div>
                   <div className="priceClassN1"><font color="Green">{this.state.silverC.price}</font></div>
                </div>
             </td>
           </tr>
           <tr className="headerN1">
              <td>
                 <div className="greyrowN1">
                    <div className="titledivN1">Silver</div>
                    <div className="purityN1">Yesterday</div>
                    <div className="priceClassImgN1"><img className="imgClassN1" src={ require('./images/rupee1.png') } alt="" /></div>
                    <div className="priceClassN1"><font color="Black">{this.state.silverY.price}</font></div>
                 </div>
              </td>
           </tr>
        </tbody>
     </table>
  </div>
  </div>
)
}
