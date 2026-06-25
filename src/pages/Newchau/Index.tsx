import { useEffect } from "react";

const NewchauIndex = () => {
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

<table width="165" align="left" cellspacing="2" cellpadding="2" border="5">
<tr>
    <td align=center> <font face="'Comic Sans MS',Arial" size="+1" color="#800000">Maine 2002 <br>Campaign</font>

</td>
</tr>
<tr>

    <td align="center"><a href="${BASE_URL}newchau/ncav.html"><img src="${BASE_URL}graph/no\$flag2.jpg"  width="142" height="180" border="0" alt="Click here for your new flag!"></a>
</td>
</tr>
<tr>
    <td align="center"><font face="'Comic Sans MS',Arial" color="#800000">To Quell<br>a Corporate Coup...</font></div>
	</td>
</tr>
<tr>
    <td align="center">

<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=120 HEIGHT=3 vspace=9><BR>
<STRONG> <FONT  SIZE=2 COLOR=#000055> <strong>
After Chautauqua Talk<br>
The Countercoup Walk
</strong>

</FONT><BR>

<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=120 HEIGHT=3  vspace=9><br>

<FONT  SIZE=3 face="'Comic Sans MS',Arial" color="#800000">
<a href="${BASE_URL}newchau/nchistry.html">New Chautauqua Archives</a></font><BR>
<FONT  SIZE=2 face="'Arial',Helvetica" color="#800000">
Site, events, ideas</font>
<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=120  HEIGHT=3  vspace=9><br>

 <a href="${BASE_URL}wgindex.html" target="_blank">Search</a>

<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=120  HEIGHT=3  vspace=9><br>



<FONT  SIZE=3 face="'Comic Sans MS',Arial" color="#000080">Lottery</STRONG>
<table width="100" align="center" bgcolor="#000080" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td align="center">
	<A HREF="#" onClick="return showFeatures('bbzap.html');"><IMG SRC="${BASE_URL}graph/pulse2.gif" align=absmiddle WIDTH=15 HEIGHT=15 ></A>
	</td>
</tr>
</table><font size="-1">Click a Fortune</font>



<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=120 HEIGHT=3  vspace=9><P>



</td>
</tr>
</table>


<table align="center"  width="430" cellspacing="5" cellpadding="5" border="4" bordercolor="#800000">
<tr> <td>
	<CENTER>

<img src="${BASE_URL}graph/NEWCHAU.gif" border="0" alt="New Chauatauqua Now!">
<br>
<strong><font SIZE="-2" face="Verdana,Arial,Helvetica"><div align="center"><a href="${BASE_URL}newchau/goal.html">Goals</a> | <a href="${BASE_URL}newchau/ccplay.html">Play</a> |  <a href="${BASE_URL}newchau/gospels.html">Study</a> | <a href="${BASE_URL}newchau/ccnews.html">News</a> | <a href="${BASE_URL}newchau/faq.html">FAQ</a> | <a href="${BASE_URL}newchau/contact.html">Contact</a> | <a href="${BASE_URL}newchau/nchelp.html">Help</a> | <a href="${BASE_URL}newchau/nchistry.html">Archives</a></div></font></strong>

</CENTER>
	</td>
	
</tr>
</table>
	<table align="center" width="220" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td align="center">
	<font SIZE="2" face="Verdana,Arial,Helvetica" color="#800000"><SCRIPT language="VBScript">

      <!--

      d=weekday(date)

      if d = 1 then

      today="Sunday"

      elseif d = 2 then

      today="Monday"

      elseif d = 3 then

      today="Tuesday"

      elseif d = 4 then

      today="Wednesday"

      elseif d = 5 then

      today="Thursday"

      elseif d = 6 then

      today="Friday"

      elseif d = 7 then

      today="Saturday"

      end if

      m=month(date)

      if m=1 then 

      mon="January"

      elseif m=2 then 

      mon="February"

      elseif m=3 then

      mon="March"

      elseif m=4 then

      mon="April"

      elseif m=5 then

      mon="May"

      elseif m=6 then 

      mon="June"

      elseif m=7 then

      mon="July"

      elseif m=8 then 

      mon="August"

      elseif m=9 then

      mon="September"

      elseif m=10 then

      mon="October"

      elseif m=11 then 

      mon="November"

      elseif m=12 then 

      mon="December"

      m=month(date)

      end if

      Document.Write today & ", " & mon & " " & day(now)

      --> </SCRIPT> </FONT>
	
	</td>
</tr>
</table>
<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=500 HEIGHT=5  vspace=8><br>




<table width="480" align="center" bgcolor="#F8F3D1" cellspacing="2" cellpadding="2" border="5" frame="vsides">
<tr>
    <td>
	<div align="center"><strong><font color="#FF0000">IMPORTANT MEDITATIONS IN THE WAKE OF 911 </font></strong><br>

	<font face="'Comic Sans MS',Arial" color="#800000"><a href="${BASE_URL}newchau/911meds.html" target="_blank"> Readings to Reclaim Sanity, Perspective, Security</a><br></div>



	</td>
</tr>
</table>

<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=500 HEIGHT=5  vspace=12>
</div></CENTER>
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>



<blockquote>BUILDING MOMENTUM OUT OF UNITY
<ul>
<LI> <a href="${BASE_URL}lsd/lsd.html">October 27th: Lewiston Solidarity Day</a><br>
"Overcoming Global Corporate Control"
<p>

<LI><a href="${BASE_URL}newchau/17th.html" target="_blank">November 17th: Kennebunkport <br>
Anti-Corporate War Rally\Teach-in <br>
Media Archive now available here!</a><p>
<li><a href="http://calendar.maineindymedia.org/month.php?LocationID=" target="_blank">Maine Indy Media Activist Event Calendar</a>
</ul>
THE STRATEGY BEYOND<p>
  Chautauqua participants seemed to agree overall that the corporate coup is indeed a fact and there are only two ways to realistically confront it.<ul>
<li> Radically decrease corporations' political <br>power 
and pathological behavior; and<p>
<li>  Rapidly increase our democratic rights <br>
til we are in fact "sovereign citizens."
</ul>
To realize these goals, three key strategies were accepted <br>
to drive a Maine Countercoup next year:
<ul>
<li> <a href="${BASE_URL}corperson/index.html" target="_blank">Revoking Corporate Personhood</a> <br>

(thus stripping corporations of political rights<br>
and demoting them to properly subordinate entities)<p>
<li> <a href="${BASE_URL}bigdna/index.html" target="_blank">Rewriting the Corporate Code</a> <br>

(thus changing their DNA, extending their responsibilities,<br>
 
and curbing their tumorous, growth-at-any-price behavior)<p>
<li> <a href="${BASE_URL}demorule/index.html" target="_blank">Strengthening Direct Democracy</a> <br>

(thus amplifying the power of our voice <br>

in all public policy decisions)<p>
<li> (We also recognized the need for an ongoing fourth strategy to develop effective post-corporate models of agriculture,  media, health care, education, etc, but unlike our current paralysis in the political sphere, many such promising initiatives are well underway, cf, <a href="http://www.mofga.org" target="_blank">MOFGA</a>, <a href="http://maine.indymedia.org" target="_blank">IMC</a>, <a href="http://www.ithacahours.com/" target="_blank">Ithaca Hours</a>, etc.)
</ul>
</blockquote>

FULL PROPOSAL DRAFTS <br>
<a href="${BASE_URL}cc2002/" target="_blank">Countercoup 2002, Countercoup Maine - The Movie, <br>
and VirtualMaine.net - The Website</a>
</STRONG><p>
</strong>
	</td>
</tr>
</table></div>
<p>
<div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><br>

<font SIZE="-2" face="Verdana,Arial,Helvetica"><div align="center"><a href="${BASE_URL}newchau/ccgoals.html">Goals</a> | <a href="${BASE_URL}newchau/ccplay.html">Play</a> |  <a href="${BASE_URL}newchau/gospels.html">Study</a> | <a href="${BASE_URL}newchau/ccnews.html">News</a> | <a href="${BASE_URL}newchau/faq.html">FAQ</a> | <a href="${BASE_URL}newchau/contact.html">Contact</a> | <a href="${BASE_URL}newchau/cchelp.html">Help</a> | <a href="${BASE_URL}newchau/nchistry.html">Archives</a></div></font>



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

export default NewchauIndex;
