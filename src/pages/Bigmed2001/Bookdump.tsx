import { useEffect } from "react";

const Bigmed2001Bookdump = () => {
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
<html>
<head>
<title>Big Body Heuristics: BookDump</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<link rel="STYLESHEET" type="text/css" href="${BASE_URL}bigmed2001/bookdump.css">

<!--#include virtual="ssi/javascript.html"-->

</head>

<!--#include virtual="ssi/sidebar.html"-->

<!--=======================================-->
<!--start content cell-->
<!--=======================================-->


<A NAME="Heading1"></A><H1>
Dean Alger </H1>
<DIV ><FONT FACE="Arial"><B><I>Megamedia : How Giant Corporations
Dominate Mass Media, Distort Competition, and Endanger
Democracy</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=91 SRC="${BASE_URL}bigmed2001/skins/alger.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0847683893/qid=952018323/sr=1-17/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading2"></A><H1>
Ernest Callenbach </H1>
<DIV ><FONT FACE="Arial"><B><I>The Web of Life: A New Understanding
of Living
Systems</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=91 SRC="${BASE_URL}bigmed2001/skins/callenba.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0385476760/o/qid=952019866/sr=2-1/104-3855070-3416458.htm">Link to Amazon</A><BR></DIV>

<A NAME="Heading3"></A><H1>
Fritjof Capra </H1>
<DIV ><FONT FACE="Arial"><B><I>The Web of Life: A New Understanding
of Living
Systems</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=90 SRC="${BASE_URL}bigmed2001/skins/capraweb.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0385476760/o/qid=952019866/sr=2-1/104-3855070-3416458.htm">Link to Amazon</A><BR></DIV>

<A NAME="Heading4"></A><H1>
Charles Derber </H1>
<DIV ><FONT FACE="Arial"><B><I>Corporation
Nation</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=100 SRC="${BASE_URL}bigmed2001/skins/derbercn.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0312192886/qid=952018433/sr=1-1/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading5"></A><H1>
David C. Korten </H1>
<DIV ><FONT FACE="Arial"><B><I>The Post-Corporate World : Life After
Capitalism</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=91 SRC="${BASE_URL}bigmed2001/skins/kortenpc.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/1576750515/o/qid=952019747/sr=2-1/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading6"></A><H1>
Frances Moore Lappe </H1>
<DIV ><FONT FACE="Arial"><B><I>The Quickening of America: Rebuilding
Our Nation, Remaking Our Lives
</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=111 SRC="${BASE_URL}bigmed2001/skins/fmlappe.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/1555426050/o/qid=952018581/sr=2-3/104-3855070-3416458">Link to Amazon</A><BR></DIV>
<A NAME="Heading7"></A><H1>
Robert W. McChesney </H1>
<DIV ><FONT FACE="Arial"><B><I>Rich Media, Poor Democracy:
Communication Politics in Dubious Times
</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=86 SRC="${BASE_URL}bigmed2001/skins/mcchesrm.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0252024486/qid=952018643/sr=1-10/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading8"></A><H1>
James Grier Miller </H1>
<DIV ><FONT FACE="Arial"><B><I>Living
Systems</I></B></FONT><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0870813633/qid=952019977/sr=1-1/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading9"></A><H1>
Noam Chomsky &amp; Robert W. McChesney </H1>
<DIV ><FONT FACE="Arial"><B><I>Profit over People: Neoliberalism and
Global
Order</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=91 SRC="${BASE_URL}bigmed2001/skins/noamneo.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/1888363894/qid=952018839/sr=1-1/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading10"></A><H1>
Kirkpatrick Sale </H1>
<DIV ><FONT FACE="Arial"><B><I>Human
Scale</I></B></FONT><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0399506217/qid=952020180/sr=1-19/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading11"></A><H1>
Margaret Wheatley </H1>
<DIV ><FONT FACE="Arial"><B><I>Leadership and the New
Science</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=113 SRC="${BASE_URL}bigmed2001/skins/wheatley.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/1576750558/qid=952002501/sr=1-1/104-3855070-3416458">Link to Amazon</A><BR></DIV>

<A NAME="Heading12"></A><H1>
Elliott Sober &amp; David Sloan Wilson </H1>
<DIV ><FONT FACE="Arial"><B><I>Unto Others : The Evolution and
Psychology of Unselfish
Behavior</I></B></FONT><BR><IMG HEIGHT=139 WIDTH=91 SRC="${BASE_URL}bigmed2001/skins/dswilson.gif"><BR><A HREF="http://www.amazon.com/exec/obidos/ASIN/0674930479/o/qid=952018501/sr=2-2/104-3855070-3416458">Link to Amazon</A><BR></DIV>


<!--=======================================-->
<!--end content cell-->
<!--=======================================-->

<!--#include virtual="ssi/footer.html"-->

</body>

</html>

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

export default Bigmed2001Bookdump;
