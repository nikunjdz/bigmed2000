import { useEffect } from "react";

const EarthourEhdates = () => {
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
<H3><CENTER><EM>Turn On, Tune In, Call Home </EM></CENTER></H3>
<BR><CENTER><IMG SRC="${BASE_URL}graph/mangets8.jpg"  LOWSRC="${BASE_URL}graph/mangets7.gif"  ALT="Lunatic Attitudes" WIDTH=750 HEIGHT=48><BR>
<BR>
<BR><IMG SRC="http://www.magic10percent.net/images/solutions/earth3c.png"   ALT="Terra Erotica" WIDTH=140 HEIGHT=140  HSPACE=5 VSPACE=5 ALIGN=bottom>

<BR>

<H3>THE EARTH HOUR CALENDAR</H3>
<H3>2009-2013</H3>



<BR>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=580 HEIGHT=7>

<H3>Each month at the fullness of the Moon, <BR>Earth Hour begins at dawn or 6:00 AM <BR>over the site of the earliest known human community near Harare, Ethiopia.<BR>For the time in your region, see the list below.</H3>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=580 HEIGHT=7>
<BR>
<BR>

<div align="center"><table border="5" cellspacing="4" cellpadding="4"> <tbody><tr><th>Month</th><th colspan="5" align="center">Full Moon</th></tr> <tr><td align="middle" bgcolor="#040147">&nbsp;</td> <td align="middle" bgcolor="#040147">2009</td> <td align="middle" bgcolor="#040147">2010</td> <td align="middle" bgcolor="#040147">2011</td> <td align="middle" bgcolor="#040147">2012</td> <td align="middle" bgcolor="#040147">2013</td> </tr> <tr> <td align="middle" bgcolor="#040147">January</td> <td align="middle" bgcolor="#040147">11</td> <td align="middle" bgcolor="#040147">30</td> <td align="middle" bgcolor="#040147">19</td> <td align="middle" bgcolor="#040147">9</td> <td align="middle" bgcolor="#040147">27</td> </tr>  <tr> <td align="middle" bgcolor="#040147">February</td> <td align="middle" bgcolor="#040147">9</td> <td align="middle" bgcolor="#040147">28</td> <td align="middle" bgcolor="#040147">18</td> <td align="middle" bgcolor="#040147">7</td> <td align="middle" bgcolor="#040147">25</td> </tr>  <tr> <td align="middle" bgcolor="#040147">March</td> <td align="middle" bgcolor="#040147">11</td> <td align="middle" bgcolor="#040147">30</td> <td align="middle" bgcolor="#040147">19</td> <td align="middle" bgcolor="#040147">8</td> <td align="middle" bgcolor="#040147">27</td> </tr>  <tr> <td align="middle" bgcolor="#040147">April</td> <td align="middle" bgcolor="#040147">9</td> <td align="middle" bgcolor="#040147">28</td> <td align="middle" bgcolor="#040147">18</td> <td align="middle" bgcolor="#040147">6</td> <td align="middle" bgcolor="#040147">25</td> </tr>  <tr> <td align="middle" bgcolor="#040147">May</td> <td align="middle" bgcolor="#040147">9</td> <td align="middle" bgcolor="#040147">27</td> <td align="middle" bgcolor="#040147">17</td> <td align="middle" bgcolor="#040147">6</td> <td align="middle" bgcolor="#040147">25</td> </tr>  <tr> <td align="middle" bgcolor="#040147">June</td> <td align="middle" bgcolor="#040147">7</td> <td align="middle" bgcolor="#040147">26</td> <td align="middle" bgcolor="#040147">15</td> <td align="middle" bgcolor="#040147">4</td> <td align="middle" bgcolor="#040147">23</td> </tr>  <tr> <td align="middle" bgcolor="#040147">July</td> <td align="middle" bgcolor="#040147">7</td> <td align="middle" bgcolor="#040147">26</td> <td align="middle" bgcolor="#040147">15</td> <td align="middle" bgcolor="#040147">3</td> <td align="middle" bgcolor="#040147">22</td> </tr>  <tr> <td align="middle" bgcolor="#040147">August</td> <td align="middle" bgcolor="#040147">6</td> <td align="middle" bgcolor="#040147">24</td> <td align="middle" bgcolor="#040147">13</td> <td align="middle" bgcolor="#040147">2/31</td> <td align="middle" bgcolor="#040147">21</td> </tr> <tr> <td align="middle" bgcolor="#040147">September</td> <td align="middle" bgcolor="#040147">4</td> <td align="middle" bgcolor="#040147">23</td> <td align="middle" bgcolor="#040147">12</td> <td align="middle" bgcolor="#040147">30</td> <td align="middle" bgcolor="#040147">19</td> </tr>  <tr> <td align="middle" bgcolor="#040147">October</td> <td align="middle" bgcolor="#040147">4</td> <td align="middle" bgcolor="#040147">23</td> <td align="middle" bgcolor="#040147">12</td> <td align="middle" bgcolor="#040147">29</td> <td align="middle" bgcolor="#040147">18</td> </tr>  <tr> <td align="middle" bgcolor="#040147">November</td> <td align="middle" bgcolor="#040147">2</td> <td align="middle" bgcolor="#040147">21</td> <td align="middle" bgcolor="#040147">10</td> <td align="middle" bgcolor="#040147">28</td> <td align="middle" bgcolor="#040147">17</td> </tr> <tr> <td align="middle" bgcolor="#040147">December</td> <td align="middle" bgcolor="#040147">2/31</td> <td align="middle" bgcolor="#040147">21</td> <td align="middle" bgcolor="#040147">10</td> <td align="middle" bgcolor="#040147">28</td> <td align="middle" bgcolor="#040147">17</td> </tr> </tbody></table></div>   <div align="center"><a href="http://kalender-365.de/lunar-calendar.php" target="_blank">Source Calendar Here</a>.<br /></div><br />

<BR><BR>

<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=490 HEIGHT=7>
<P><div align="center"><table width="900" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<div align="center"><TABLE>
<TR><TD width="450">
NOTE: The following list displays the monthly time of Earth Hour in each of the planet's thirty timezones. 
The GMT/UTC hour reference indicates how many hours away a specific timezone
is from Coordinated Universal Time (UTC) formerly known as Greenwich Mean Time (GMT). 
Timezones are listed in order from the International Date Line going westward as the New Day 
occurs throughout the world. All times and inter-zone differences are currently listed only in  terms of 
local Standard Times. If your area has adopted a system of daylight savings time, please  adjust your timing accordingly.</TD></TR>
</TABLE></div>
<P>
<div align="center"><IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=490 HEIGHT=7></div>
<P><FONT  SIZE=+1>
<UL>
<LI><STRONG>Timezone 1  (GMT/UTC  + 12 Hours || Earth Hour starts @ 3:00 PM, Same Day)</STRONG><BR><BR>
<CENTER> Fiji, New Zealand, Auckland, Marshall Islands, Petropavlovsk</CENTER><BR><BR>
<LI><STRONG>Timezone 2  (GMT/UTC  + 11 Hours || Earth Hour starts @ 2:00 PM, Same Day)</STRONG><P>
<CENTER>Solomon Islands, Kuril Islands</CENTER><P>
<LI><STRONG>Timezone 3  (GMT/UTC  + 10 Hours || Earth Hour starts @ 1:00 PM, Same Day)</STRONG><BR><BR>
<CENTER>Sydney, Guam, Saipan, Melbourne, New Guinea, Vladivostok, Micronesia</CENTER><P>
<LI><STRONG>Timezone 4  (GMT/UTC  + 9.5 Hours || Earth Hour starts @ 12:30 PM, Same Day)</STRONG><BR><BR>
<CENTER> Mid-Australia, Adelaide</CENTER><P>
<LI><STRONG>Timezone 5  (GMT/UTC  + 9 Hours || Earth Hour starts @ 12:00 PM, Same Day)</STRONG><BR><BR>
<CENTER> Kyoto,Tokyo, Seoul</CENTER><P>
<LI><STRONG>Timezone 6  (GMT/UTC  + 8 Hours || Earth Hour starts @ 11:00 AM, Same Day)</STRONG><BR><BR>
<CENTER>Shanghai, Manila, Taipei, Hong Kong, Perth, Mongolia, Beijing</CENTER><P>
<LI><STRONG>Timezone 7  (GMT/UTC  + 7 Hours || Earth Hour starts @ 10:00 AM, Same Day)</STRONG><BR><BR>
<CENTER>Jakarta, Bangkok, Vietnam, Singapore, Malaysia, Cambodia, Laos</CENTER><P>
<LI><STRONG>Timezone 8 (GMT/UTC  + 6.5 Hours || Earth Hour starts @ 9:30 AM, Same Day)</STRONG><BR><BR>
<CENTER> Burma (Rangoon, Mandalay) </CENTER><P>
<LI><STRONG>Timezone 9  (GMT/UTC  + 6 Hours || Earth Hour starts @ 9:00 AM, Same Day)</STRONG><BR><BR>
<CENTER> Bangladesh, Kazakhstan</CENTER><P>
<LI><STRONG>Timezone 10  (GMT/UTC  + 5.5 Hours || Earth Hour starts @ 8:30 AM, Same Day)</STRONG><BR><BR>
<CENTER>India (Udaipur, New Delhi, Calcutta)</CENTER><P>
<LI><STRONG>Timezone 11  (GMT/UTC  + 5 Hours || Earth Hour starts @ 8:00 AM, Same Day)</STRONG><BR><BR>
<CENTER>Maldives, Pakistan (Karachi, Lahore) </CENTER><P>
<LI><STRONG>Timezone 12  (GMT/UTC  + 4.5 Hours || Earth Hour starts @ 7:30 AM, Same Day)</STRONG><BR><BR>
<CENTER>Afghanistan (Kabul, Qandahar)</CENTER><P>
<LI><STRONG>Timezone 13  (GMT/UTC  + 4 Hours || Earth Hour starts @ 7:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Oman, U.A.E., Azerbaijan, Armenia</CENTER><P>
<LI><STRONG>Timezone 14  (GMT/UTC  + 3.5 Hours || Earth Hour starts @ 6:30 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Iran, Tehran</CENTER><P>
<LI><STRONG>Timezone 15  (GMT/UTC  + 3 Hours || Earth Hour starts @ 6:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Bahrain, Ethiopia, Baghdad, Kenya, Kuwait, Qatar, Saudi Arabia, Tanzania, Uganda,
 Moscow, St. Petersburg</CENTER><P>
<LI><STRONG>Timezone 16  (GMT/UTC  + 2 Hours || Earth Hour starts @ 5:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Botswana, Bulgaria, Cyprus, Cairo, Helsinki, Athens, Jerusalem, Tel Aviv, Amman, Bucharest,
 Cape Town, Istanbul, Zambia, Zimbabwe, Kiev, Minsk</CENTER><P>
<LI><STRONG>Timezone 17  (GMT/UTC  + 1 Hour || Earth Hour starts @ 4:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Rome, Florence, Budapest, Berlin, Paris, Prague, Brussels, Vienna, Amsterdam, Warsaw, Oslo, Madrid, Zurich, Belgrade, Stockholm, Tripoli, Casablanca</CENTER><P>
<LI><STRONG>Timezone 18  (GMT/UTC  + 0 Hours || Earth Hour starts @ 3:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Greenwich, London, Glasgow, Dublin, Lisbon, Iceland, Reykjavik, U.T.C., Mali, Liberia</CENTER><P>
<LI><STRONG>Timezone 19  (GMT/UTC  - 1 Hour || Earth Hour starts @ 2:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Cape Verde</CENTER><P>
<LI><STRONG>Timezone 20  (GMT/UTC  - 2 Hours || Earth Hour starts @ 1:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Mid-Atlantic</CENTER><P>
<LI><STRONG>Timezone 21  (GMT/UTC  - 3 Hours || Earth Hour starts @ 0:00 AM, Same Day)</STRONG><BR>
<BR><CENTER>  Asuncion, Canelone, Buenos Aires, Rio de Janeiro, Thule</CENTER><P>
<LI><STRONG>Timezone 22  (GMT/UTC  - 3.5 Hours || Earth Hour starts @ 11:30 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  New Foundland, St. Johns</CENTER><P>
<LI><STRONG>Timezone 23  (GMT/UTC  - 4 Hours || Earth Hour starts @ 11:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  La Paz, Santiago, Aruba, Labrador, Asuncion, Dominican Republic, Santo Domingo, Puerto Rico, San Juan, Barbados</CENTER><P>
<LI><STRONG>Timezone 24  (GMT/UTC  - 5 Hours || Earth Hour starts @ 10:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  Kennebunkport, Washington, New York, Atlanta, Toronto, Havana, Bogota, Lima, Ecuador, Panama </CENTER><P>
<LI><STRONG>Timezone 25  (GMT/UTC  - 6 Hours || Earth Hour starts @ 9:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  Dallas, Chicago, Kansas City, New Orleans, Nashville, Nicaragua, Honduras, Costa Rica, El Salvador, Guatemala, Mexico City, Guadalajara, Winnipeg</CENTER><P>
<LI><STRONG>Timezone 26  (GMT/UTC  - 7 Hours || Earth Hour starts @ 8:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  Denver, Cheyenne, Salt Lake City, Des Moines, Flagstaff, Edmonton, Calgary, Acapulco</CENTER><P>
<LI><STRONG>Timezone 27  (GMT/UTC  - 8 Hours || Earth Hour starts @ 7:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  Santa Cruz, Los Angeles, San Francisco, Vancouver, Seattle, Tijuana, Mexicali</CENTER><P>
<LI><STRONG>Timezone 28  (GMT/UTC  - 9 Hours || Earth Hour starts @ 6:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  Anchorage, Fairbanks</CENTER><P>
<LI><STRONG>Timezone 29  (GMT/UTC  - 10 Hours || Earth Hour starts @ 5:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>Aleutian Islands,  Hawaii (Honolulu, Maui,)</CENTER><P>
<LI><STRONG>Timezone 30  (GMT/UTC  - 11 Hours || Earth Hour starts @ 4:00 PM, Previous Day)</STRONG><BR>
<BR><CENTER>  American Samoa, Western Samoa
</UL></FONT>
<P>
</td>
</tr>
</table></div>
<CENTER>

<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=580 HEIGHT=7>

<BR><BR><HR WIDTH=90% ALIGN=center SIZE=3>
<BR>

<A href="${BASE_URL}earthour/earthour.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehconc.gif"  ALT="Concept"></A>

<A href="${BASE_URL}earthour/ehtactic.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehtact.gif" ALT="Tactics"></A>

<A href="${BASE_URL}earthour/ehreport.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0 SRC="${BASE_URL}butts/btehrprt.gif" ALT="Reports"></A>

<A href="${BASE_URL}earthour/ehrefs.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33  BORDER=0 SRC="${BASE_URL}butts/btehrefs.gif" ALT="References"></A>

<A href="${BASE_URL}arcmain.html#earthour"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btarcnt.gif" ALT="Archive"></A>

<BR><HR WIDTH=90% ALIGN=center SIZE=3>
<BR>

<H4>Supported By People Like You (which is to say as yet, By Vanishing Little At All) <BR> - Quickly
Correct This Disgraceful Situation, or At Least Endure <A href="${BASE_URL}thespiel.html">The Spiel</A>.<BR><BR>

LINK US UP ! Help Lay Fuse to Others of your Illustrious Ilk<BR>
</H4>

<H5>Shareright (S) 2000 : Big Medicine
</H5>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=480 HEIGHT=5>
<H3>Special Thanks to <A HREF="http://www.hirtlesoftware.com/">Hirtle Software</A> for References &amp; Fine Shareware Chronometers.</H3>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=480 HEIGHT=5>

</CENTER></FONT>
`;

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

export default EarthourEhdates;
