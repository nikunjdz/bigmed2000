import { useEffect } from "react";

const FdlapFdljrnl2 = () => {
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
<EM>Subscribe now to receive the latest reports <BR>on human rights and democracy movements in the Asia-Pacific</EM><P>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4 VSPACE=6><BR>
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>FDL - AP QUARTERLY</FONT><BR><FONT  SIZE=+1>Fall '97</EM>  </STRONG></FONT><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
<P>
<IMG SRC="${BASE_URL}fdlap/graph/fdljrn2.jpg" ALT="FDL-AP QUARTERLY Autumn '97 Issue" HSPACE=12 WIDTH=167 HEIGHT=235>
<P>



 <TABLE BORDER=3 CELLPADDING=5 CELLSPACING=2>
<CAPTION ALIGN=top><STRONG><U>AUTUMN '97 CONTENTS</U></STRONG></CAPTION>
<TR><TD>
<STRONG><U>News</U></STRONG>
<UL>
<LI>FDL-AP holds Young Leaders Workshop
<LI>FDL-AP opens Australia Chapter Office
<LI>Asia-Pacific Young Leaders Declaration on Democracy
<LI>Foreigners Perspectives on Democracy and the Press in Korea
</UL>
<STRONG><U>Workshop Special</U></STRONG>
<UL>
<LI> Dr. Kim Dae-jung's Welcoming Speech
<LI> <A href="${BASE_URL}fdlap/qf97minn.html">Burma's Strategic Importance</A><A href="${BASE_URL}fdlap/qf97minn.htm"></A> by Minn Aung Myint
<LI><A href="${BASE_URL}fdlap/qf97ra.html">Democracy in Asia</A> by Prof. Ra Jong-il, Korea
<LI> <A href="${BASE_URL}fdlap/qf97muka.html">Globalization and the Role of the State</A> by Dr. Ahmed Mukarram, India
<LI> Enriching the Democratic Debate by Dr. J.R. Nereus O. Acosta, Philippines
<LI> NGOs Should Build Greater Alliances by Hendrajit, Indonesia

</UL>

<STRONG><U>Essay</U></STRONG>
<UL>
<LI>Cosmopolitan Democracy by Prof. Craig Murphy
</UL>

<STRONG><U>Speech</U></STRONG>
<UL>
<LI><A href="${BASE_URL}fdlap/qf97stei.html">The Press as Censorate</A> by David Steinberg
</UL>

<STRONG><U>Country Reports</U></STRONG>
<UL>
<LI>Hun Sen Crushed Cambodian Democracy by Son Soubert
</UL>
</TD></TR>
</TABLE><P>


<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlpaper.html#essayarc"><STRONG>Back to Main Archives</A></STRONG><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:FDLAP@chollian.net"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A href="${BASE_URL}fdlap/fdlorg.html#address">Our Address...</A></FONT>
<HR WIDTH=105 ALIGN=LEFT SIZE=2>
<FONT  SIZE=-2 COLOR=#007339>Pagework by Nancho East</FONT>


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

export default FdlapFdljrnl2;
