import { useEffect } from "react";

const Bigmed2001Nantop = () => {
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
<table  width="100%" cellspacing="0" cellpadding="0" border="0">

<tr VALIGN=top>

<TD  align=center BGCOLOR="#3366FF">
<TABLE CELLPADDING=4  BGCOLOR="#000066">
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}bigmed2001/graph/anim/nanlogo9.gif" WIDTH="250" HEIGHT="35" hspace=15 vspace=3></TD></TR>
</TABLE>

</TD>

<TD width=10% BGCOLOR="#0000cc">&nbsp;&nbsp;&nbsp;</TD>
<TD width=10% BGCOLOR="#000099">&nbsp;&nbsp;&nbsp;</TD>
<TD width=10% BGCOLOR="#000066">&nbsp;&nbsp;&nbsp;</TD>
<TD  width=10% BGCOLOR="#000033">&nbsp;&nbsp;&nbsp;</TD>
</tr>
</TABLE>


<table width="100%" cellspacing="0" cellpadding="2" border="0">
<tr><TD bgcolor="#000033"> &nbsp;<A HREF="#" onClick="return showFeatures('bbzap.html');"><IMG SRC="${BASE_URL}bigmed2001/graph/pulse2.gif" align=absmiddle WIDTH=15 HEIGHT=15 ></A></TD>
        <TD bgcolor="#000033" align="LEFT" valign=top><FONT  SIZE=2 FACE=Arial,Helvetica COLOR=#FFFFE8><B> 
<A href="${BASE_URL}bigmed2001/nanmain2.html" target="main">Intro</A>&nbsp;  
| &nbsp;<A href="${BASE_URL}bigmed2001/bigmedic.html" target="main">VP Elect</A>&nbsp;  
| &nbsp;<A href="${BASE_URL}bigmed2001/bigally.html" target="main">Allies</A> &nbsp;
|  &nbsp;<A href="${BASE_URL}bigmed2001/bigcraft.html" target="main">Tactics</A> &nbsp;

| &nbsp;<A href="${BASE_URL}bigmed2001/bignews/bigbnews.html" target="main">News</A>&nbsp;
| &nbsp;<A href="${BASE_URL}bigmed2001/bigstudy.html" target="main">Study</A>&nbsp;
| &nbsp;<A href="${BASE_URL}bigmed2001/epistles.html" target="main">Epistles</A>  &nbsp;  
| &nbsp;<A href="${BASE_URL}bigmed2001/aidabet.html" target="main">Help</A>&nbsp; 
| &nbsp;<A href="${BASE_URL}bigmed2001/bigfaq.html" target="main">FAQ</A>  &nbsp;  
| &nbsp;<A href="${BASE_URL}bigmed2001/av.html" target="main">A/V Cache</A>&nbsp; 
| &nbsp;<A href="${BASE_URL}bigmed2001/nh.html" target="main">NH Win</A> &nbsp;
</FONT>
</TD>
      
</tr>
</table>



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

export default Bigmed2001Nantop;
