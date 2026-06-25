import { useEffect } from "react";

const Bigmed2000Bigstudy = () => {
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
<CENTER>


<IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5><BR>
<BLOCKQUOTE><H2><FONT  COLOR=#000055>N<FONT SIZE=-1>ANCHO </FONT>B<FONT SIZE=-1>IG </FONT> S<FONT SIZE=-1>TUDY</FONT> H<FONT SIZE=-1>ALL</FONT><BR><FONT  SIZE=3>Where Big Knowledge Finally Promises a Little Power</FONT></FONT></H2></BLOCKQUOTE>

<IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5></CENTER>
<BLOCKQUOTE><BLOCKQUOTE><FONT  COLOR=#000080><STRONG>To advance this campaign or lead one of your own, you will need a few basic facts, a couple days of study, and a single gut-wrenching moment of insight that our strange diagnosis is true - Big Bodies are indeed alive, in charge and out of control. This section hopes to accelerate this process with readings that highlight Big Body pathology in society and the environment, as well as their anthrocultural techniques to psychosomatically retard humans for docile incorporation (and incessant consumption). Once you learn to see them on your own, further evidence of their ubiquitous infestation and influence is freely available from your newspapers, TVs and living room windows. </STRONG></FONT></BLOCKQUOTE></BLOCKQUOTE>
<CENTER>
<IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5><P>
<TABLE CELLPADDING=6>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/demonr.gif" WIDTH=84 HEIGHT=150 BORDER=3>
</TD><TD><UL><STRONG>


<LI><A href="${BASE_URL}bigmed2000/gospels/gospels.html">Gospels &amp; Canons</A>
<LI><A href="${BASE_URL}bigmed2000/bigread1.html">Big Books / Texts</A>
<LI><A href="${BASE_URL}bigmed2000/bigally.html">Big Links  &amp;  Groups</A>
<LI><A href="${BASE_URL}bigmed2000/bigview.html">Big Movies  &amp;  Videos</A>
<LI><A href="${BASE_URL}bigmed2000/bigonnet.html">Big Online References</A>
<LI><A href="${BASE_URL}bigmed2000/biggloss.html"">Big Terms &amp; Definitions</A>
<LI><A href="${BASE_URL}bigmed2000/advisors.html">Nancho Consultations</A>
<LI><A href="${BASE_URL}bigmed2000/bigstres.html">Anthroculture Research Hints</A>
</STRONG></UL></TD></TR>
</TABLE>

<IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5>


</CENTER>



<P><P>


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

export default Bigmed2000Bigstudy;
