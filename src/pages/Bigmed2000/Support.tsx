import { useEffect } from "react";

const Bigmed2000Support = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  useEffect(() => {
    document.body.style.backgroundColor = "beige";
    document.body.style.backgroundImage = `url(${BASE_URL}barks/paper2.gif)`;
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  const html = `
 <center>   		<STRONG>"<EM>The only good corporation <BR>is a small corporation <BR>- 500 people tops.</EM>"
<BR>Wilfred Gore, <BR><FONT  SIZE=-1>Inventor/Founder of Goretex</FONT></STRONG>

<table border=0 cellpadding=15 cellspacing=0 width=480>  
<tr>       <td align=middle><IMG SRC="${BASE_URL}graph/demonr.gif" ALT="Nancho Lite" WIDTH=84 HEIGHT=150 ><BR>
Give til<BR> &nbsp; &nbsp;you burp...</TD><TD align=middle>
<IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=300 HEIGHT=5 vspace=5>
<FONT  COLOR=#00008C><H3>BIG MEDICINE<BR>Aid &amp; Abetment Central</H3></FONT>
<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=300  HEIGHT=5>
</td>    </tr>    </table></CENTER>
 <table border=0 cellpadding=0 cellspacing=0 width=550>   
<tr>       
<td width="18"> </td>      <td valign=TOP width="532">         <p><BR>
<font color=#0000cc size=4><b>Invest a Little <BR>in Big Medicine<br>          
</b><font color="#000000">Print out this form and send or fax it to:</font></font></p>        
<p><font size="4" color="#000000">BIG MEDICINE<br>A Research &amp; Education 501(c)(3)<br>
(i.e., your kind donations are all tax-free)<br>
          
Box 13, Kennebunkport, <BR>Maine 04046<br>
Tel: (207) 967-2390<br>

Fax: (207) 967-2808


</font> </p>        <p><font size="4">Please make out your check or money order to Big Medicine <BR>
<FONT  SIZE=-1>(only donations - not orders - qualify as tax-free giving).</FONT></font></p>        
<P><STRONG>See Ki Video info <A href="${BASE_URL}kipower/kipower1.html">Here</A>.  &nbsp; &nbsp; &nbsp; &nbsp;See Tsuyu Typhoon CD info <A href="${BASE_URL}1stlight/coven1.html">Here</A>.<BR>
(Posters, T-shirts, self-dismembering Big Body toys on the way...)</STRONG>

<P>
<form method=POST action="../secure.plx">          <font size=4><font size=4>           <p>
<b><font size="4">Type I</font></b><br>            <select name="select">              <option>Campaign Contribution</option>              <option>Ki Video Series Support</option>              <option>Big Body Video Project Support</option>          
<option>Campaign Video Project Support</option> <option>Tsuyu Typhoon CD (\$20.01)</option>  
<option>Ki Video (Security Deposit: \$50)</option> <option>Gratuity for Big Med Shareware</option>
<option>Chickens, Bootlegs, Racing Tips, etc.</option></select>          <BR> 

<b><font size="4">Type II <FONT  SIZE=3>(if you're feeling eclectic)</FONT></font></b><br>            <select name="select">              <option>Let's see the bang from #1 first...</option> <option>Campaign Contribution</option>              
<option>Ki Video Series Support</option>              <option>Big Body Video Project Support</option>          
<option>Campaign Video Project Support</option> <option>Tsuyu Typhoon CD (\$20.01)</option>  
<option>Ki Video (Security Deposit: \$50)</option> <option>Gratuity for Big Med Shareware</option>
<option>Chickens, Bootlegs, Racing Tips, etc.</option></select>    </font></font><P>
          <table border="0" width="90%">            

<tr>              <td><font size="4">\$ Allocation</font></td>              <td><font size=4><font size=4>                <input type="text" name="textfield" size="45">                </font></font></td>            </tr> 
<tr>              <td>
<font size="4">\$ Total</font></td>              <td><font size=4><font size=4>                <input type="text" name="textfield" size="45">                </font></font></td>            </tr> 
<tr>              <td><b>
<font size="4">Name</font></b></td>              <td><font size=4><font size=4>                <input type="text" name="textfield" size="45">                </font></font></td>            </tr>            <tr>              <td><b>
<font size="4">Address</font></b></td>              <td><font size=4><font size=4>                <input type="text" name="text" size="45">                </font></font></td>            </tr>            <tr>              <td><b>
<font size="4">City</font></b></td>              <td><font size=4><font size=4>                <input type="text" name="text2" size="45">                </font></font></td>            </tr>            <tr>              <td><b>
<font size="4">State</font></b></td>              <td> <font size=4><font size=4>                <input type="text" name="text8" size="45">                </font></font></td>            </tr>            <tr>              <td><b>
<font size="4">Zip</font></b></td>              <td><font size=4><font size=4>                <input type="text" name="text3" size="45">                </font></font></td>            </tr>            <tr>              <td><b>
<font size="4">Country</font></b></td>              <td><font size=4><font size=4>                <input type="text" name="text4" size="45">                </font></font></td>            </tr>            <tr>              <td>
<font size="4"><b>Email</b></font></td>              <td><font size=4><font size=4>                <input type="text" name="text5" size="45">                </font></font></td>            </tr>            <tr>              <td>
<font size="4"><b>Phone</b></font></td>              <td><font size=4><font size=4>                <input type="text" name="text6" size="45">                </font></font></td>            </tr>            <tr>              <td>
<font size="4"><b>Fax</b></font></td>              <td><font size=4><font size=4>                <input type="text" name="text7" size="45">                </font></font></td>            </tr>          </table>          <p><br>          
 
<font size="4"><b>Payment Method </b></font><b>
<font size=4><br>            <input type="radio" name="radiobutton" value="radiobutton">            </font></b>
<font size=4>Visa</font><b><font size=4>             <input type="radio" name="radiobutton" value="radiobutton">  </font></b>
<font size=4>Mastercard</font><b><font size=4>  <input type="radio" name="radiobutton" value="radiobutton">  </font></b>
<font size=4>American Express</font><b><BR><font size=4> <input type="radio" name="radiobutton" value="radiobutton">  </font></b> 
<font size=4>Check/Money Order/Cash Enclosed</font></p>          <p>
<font size="4">Card Number             <input type="text" name="text9" size="25">            <br>            
Expiration Date             <select name="Month">              
<option value="Month">01</option>              <option>02</option>              
<option>03</option>              <option>04</option>              
<option>05</option>              <option>06</option>              
<option>07</option>              <option>08</option>              
<option>09</option>              <option>10</option>              
<option>11</option>              <option>12</option>            </select>            
<select name="Year">              
<option>1999</option>              <option>2000</option>              <option>2001</option>              
<option>2002</option>              <option>2003</option>              <option>2004</option>              
<option>2005</option>              <option>2006</option>              <option>2007</option>            
</select>            </font></p>          <p>
<font size="4">Billing Address (if different from above)<br>            </font></p>          

<table border="0" width="90%">            
<tr>  <td>Name</td>   <td>  <input type="text" name="text10" size="40">              </td>            </tr>            
<tr>              <td>Address</td>              <td>                <input type="text" name="text11" size="40">              </td>            </tr>            
<tr>              <td>City</td>              <td>                <input type="text" name="text12" size="40">              </td>            </tr>            
<tr>              <td>State</td>              <td>                <input type="text" name="text13" size="40">              </td>            </tr>            
<tr>              <td>Zip</td>              <td>                <input type="text" name="text14" size="40">              </td>            </tr>          
</table>          <p>&nbsp;</p>        </form>      

  <font size=4>       <p align="center">Gracias for your once and future aid.         </font>         <p align="center"><font size=3> PS: We honor your privacy --  this information will not be shared with anyone.</font><br>          <br>                </font></td>    </tr>     </table></center>`;

  return (
    <div
      className="min-h-screen w-full legacy-page-wrapper"
      style={{ fontFamily: "Times New Roman, Georgia, serif", backgroundColor: 'beige', backgroundImage: `url(${BASE_URL}barks/paper2.gif)`, backgroundRepeat: 'repeat', color: '#000000' }}
    >
      <style>{`
  a { color: #1a40b8; text-decoration: underline; font-weight: bold; }
  a:hover { color: #cc0000; }
  h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 0.75em; }
  strong, b { font-weight: 900; }
  ul, ol { padding-left: 2em; margin-bottom: 1em; }
  li { margin-bottom: 0.5em; }
  img { max-width: 100%; height: auto; display: inline-block; }
  blockquote {
    padding-left: 1.5em;
    margin: 1em 2em;
  }
  hr {
    border: 0;
    border-top: 2px solid #333;
    margin: 1.5em auto !important;
  }
  /* Center tag should center its children */
  center {
    display: block;
    text-align: center;
  }
  center table, table[align="center"], table[align="CENTER"], [align="center" i] table, [align="middle" i] table {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  center hr, hr[align="center"], hr[align="CENTER"], [align="center" i] hr, [align="middle" i] hr {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  hr[align="left"], hr[align="LEFT"] {
    margin-left: 0 !important;
    margin-right: auto !important;
  }
  hr[align="right"], hr[align="RIGHT"] {
    margin-left: auto !important;
    margin-right: 0 !important;
  }
  
  /* Alignment attribute mappings */
  [align="left"], [align="LEFT"] {
    text-align: left !important;
  }
  [align="right"], [align="RIGHT"] {
    text-align: right !important;
  }
  [align="center"], [align="CENTER"], [align="middle"], [align="MIDDLE"] {
    text-align: center !important;
  }
  
  td, th {
    text-align: left;
  }
  
  /* Responsive styles for screens smaller than 768px */
  @media (max-width: 767px) {
    blockquote {
      margin-left: 0.5em;
      margin-right: 0.5em;
      padding-left: 0.5em;
    }
    hr {
      width: 100% !important;
      margin: 1em auto !important;
    }
    table {
      width: 100% !important;
      display: block !important;
      overflow-x: auto !important;
    }
  }

  .legacy-page-wrapper, .legacy-page-wrapper :where(p, li, td, th, dd, dt, blockquote, div, span, font) { color: inherit; }
  a { color: #007339; }
  a:visited { color: #1866C5; }
`}</style>
      <div className="legacy-page-content">
        <div dangerouslySetInnerHTML={{ __html: html }} className="w-full" />
      </div>
    </div>
  );
};

export default Bigmed2000Support;
