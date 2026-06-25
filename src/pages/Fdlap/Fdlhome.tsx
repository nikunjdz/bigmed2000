import { useEffect } from "react";

const FdlapFdlhome = () => {
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

<BR><BR>

<TABLE BORDER=6 CELLPADDING=10 BGCOLOR="#007D00">
<TR><TD BGCOLOR="#003E1F"><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD><TD ALIGN=CENTER BGCOLOR="#008000"><FONT SIZE=+2 COLOR=#0000E6><STRONG>THE FORUM OF DEMOCRATIC LEADERS IN THE ASIA-PACIFIC</STRONG></FONT></TD><TD BGCOLOR="#003E1F"><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD></TR>
</TABLE>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdlogo15.gif" WIDTH=150 HEIGHT=64 VSPACE=6 ALT="FDL-AP Logo"><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4>
<FONT  SIZE=+1 COLOR=#003E1F>

<BLOCKQUOTE><H3>The Forum of Democratic Leaders in the Asia-Pacific (FDL-AP) is a non-profit organization established in December of 1994 with the mission to promote democracy, including all its necessary prerequisite conditions and institutions, within the Asia-Pacific region and beyond.</H3></BLOCKQUOTE><P>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=450 HEIGHT=6><BR><BR></CENTER>




<CENTER><TABLE BORDER=7 CELLPADDING=7 CELLSPACING=5>
<CAPTION ALIGN=top>  <STRONG>CO-PRESIDENTS</STRONG>  </CAPTION>

<TR>
<TD  BGCOLOR="#FAF0D6" ><IMG SRC="${BASE_URL}fdlap/graph/cory.jpg" WIDTH=101 HEIGHT=120 BORDER=2 ALT="Corazon Aquino" ALIGN=BOTTOM Cory></TD>


<TD  BGCOLOR="#FAF0D6" ><IMG SRC="${BASE_URL}fdlap/graph/sonia.jpg" WIDTH=101 HEIGHT=120 BORDER=2 ALT="Sonia Gandhi"></TD>
<TD  BGCOLOR="#FAF0D6" ><IMG SRC="${BASE_URL}fdlap/graph/kim.jpg" WIDTH=101 HEIGHT=120 BORDER=2 ALT="Kim Dae-jung"></TD>
<TD  BGCOLOR="#FAF0D6" ><IMG SRC="${BASE_URL}fdlap/graph/oscar.jpg" WIDTH=101 HEIGHT=120 BORDER=2 ALT="Oscar Arias Sanchez"></TD>
</TR>
<TR>
<TD Align=CENTER  BGCOLOR="#FAF0D6" > <STRONG>Corazon
Aquino</STRONG></TD>

<TD Align=CENTER BGCOLOR="#FAF0D6" > <STRONG>Sonia Gandhi</STRONG></TD>
<TD Align=CENTER  BGCOLOR="#FAF0D6" > <STRONG>Kim Dae-Jung</STRONG></TD>
<TD Align=CENTER  BGCOLOR="#FAF0D6" > <STRONG>Oscar Arias<BR> Sanchez</STRONG></TD>
</TR>
</TABLE>


<TABLE>
<TR>



<TD><UL>
<LI><STRONG>Corazon C. Aquino</STRONG> <FONT  SIZE=3>Former President, Republic of the Philippines</FONT>
<LI><STRONG>Sonia Gandhi</STRONG> <FONT  SIZE=3>Chairperson, Rajiv Gandhi Foundation</FONT>
<LI><STRONG>Kim Dae-Jung</STRONG>  <FONT  SIZE=3>President, National Congress for New Politics</FONT>
<LI><STRONG>Oscar Arias Sanchez</STRONG> <FONT  SIZE=3>Former President, Costa Rica </FONT>
</UL>

<H3><U>HONORARY SENIOR ADVISORS</U></H3></FONT>

<UL>
<LI><STRONG>Aung San Suu Kyi</STRONG> Leader, National League for Democracy. Burma
<LI><STRONG>Desmond Tutu</STRONG> Anglican Archbishop of South Africa
<LI><STRONG>Mikhail Gorbachev</STRONG> Former President of the Soviet Union
<LI><STRONG>Richard von Weizsaecker</STRONG> Former President of Germany
</UL>


</FONT>
</TD></TR>
</TABLE>
</CENTER>
<CENTER>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fmission.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdmiss.jpg" ALT="Mission" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdlorg.html"><IMG SRC="${BASE_URL}fdlap/graph/btgfdorg.jpg" ALT="Organization" WIDTH=136 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdlinits.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdinit.jpg" ALT="Initiatives" WIDTH=136 HEIGHT=38 ></A>
<A href="${BASE_URL}fdlap/fdlpaper.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlit.jpg" ALT="Literature" WIDTH=136 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdllinks.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlink.jpg" ALT="Links" WIDTH=136 HEIGHT=38 ></A><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><BR>
<HR WIDTH=150 ALIGN=center SIZE=3>
<CENTER><A href="${BASE_URL}fdlap/fdlalert.html"> <STRONG><FONT  COLOR=#FF0000><BLINK>!</BLINK> ALERTS <BLINK>!</BLINK></FONT></STRONG></A></CENTER>
<HR WIDTH=150 ALIGN=center SIZE=3>
<P><SMALL>Visitors since 14 July 98:</SMALL><BR><IMG SRC="${BASE_URL}counter/org/bigkarma/fdlap/fdlap.cnt" ALT="counter" WIDTH="90" HEIGHT="20"></P> 

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

export default FdlapFdlhome;
