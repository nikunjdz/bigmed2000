import { useEffect } from "react";

const Bigmed2001BignewsBigbnews = () => {
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
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7><BR>
<FONT  SIZE=5 COLOR=#000055><STRONG>N<FONT SIZE=-1>ANCHO </FONT>B<FONT SIZE=-1>IG </FONT>M<FONT SIZE=-1>EDICINE</FONT> N<FONT SIZE=-1>EWS</FONT><BR><FONT  SIZE=3>Wake Up Calls for the Rising Resistance</STRONG></FONT></FONT><BR>


<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7></CENTER>
<P>
<TABLE align=center border=2 BGCOLOR="#B0D0FF" cellpadding=12>
<TR><TD ALIGN=left><FONT  COLOR=#000080 face="arial,helvetica">We first planned to feature "Big Bodies in the News" here, but then realized that would be pretty dumb since Big Bodies largely ARE the news or at least behind 80% of the disastrous tidings not due to clumsy gods. In fact, once you learn to see them yourselves, any old morning paper  is an endlessly rich revelation. Therefore we'll simply present  a few odd, illuminating items here that either clarify their morbid nature, offer acute new angles of immune attack, or chart  the progress of Big Medicine in magnum vivo. </FONT></TD></TR>
</TABLE>
<BR>

<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=3 vspace=5></CENTER>

<CENTER><BLOCKQUOTE><H3>N<FONT SIZE=-1>EWS</FONT> A<FONT SIZE=-1>LERTS</FONT></H3></BLOCKQUOTE></CENTER><STRONG>
<UL>
<LI> Washington Post page 10 Priorities: 
"<A href="${BASE_URL}bigmed2001/bignews/wpostdef.html">Buried 
in Defense Spending Bills' Small Print: Big Benefits for Business</A>" <BR>- 
Starve military pay and operational readiness, <BR>but stuff those Big Bodies...
<LI> Tracking the Anti-Corporate Crowd with "<A href="${BASE_URL}bigmed2001/bignews/bigbware.html">Outrage</A>" <BR>- 
Studying Big Bodies? Watch how Big Bodies study you...

<LI> Some Dare Call It Incest: <A href="${BASE_URL}bigmed2001/bignews/popepsi.html">The Pope's in Bed with Pepsi</A><BR>- Big Body Backscratching at its Most Touching
<LI>The New 3 Rs: Readin', Writin' &amp; Rabid Consumption <BR>- <A href="${BASE_URL}bigmed2001/bignews/classact.html">The Future of Education Under the WTO</A>
</UL>



</STRONG></BLOCKQUOTE><CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=3 vspace=5></CENTER>





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

export default Bigmed2001BignewsBigbnews;
