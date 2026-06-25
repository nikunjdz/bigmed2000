import { useEffect } from "react";

const FdlapFdllinks = () => {
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

<CENTER><TABLE BORDER=6 CELLPADDING=10 BGCOLOR="#003E1F">
<TR><TD><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD><TD ALIGN=CENTER><FONT SIZE=+2 COLOR=#70B0F1><STRONG>THE FORUM OF DEMOCRATIC LEADERS IN THE ASIA-PACIFIC</STRONG></FONT></TD><TD><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD></TR>
</TABLE></CENTER>
<BR>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4><BR><BR>
 <A HREF="#democracy"><STRONG>DEMOCRATIZATION</STRONG></A>
| <A HREF="#rights"><STRONG>HUMAN RIGHTS</STRONG></A>
| <A HREF="#region"><STRONG>REGIONAL ISSUES</STRONG></A>
<BR><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4></CENTER>


<BR><HR WIDTH=200 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+3 COLOR=#FF0000><STRONG><A NAME="democracy"> Asia-Pacific Democracy Issues </A></STRONG></FONT></H2></CENTER><P>
<HR WIDTH=200 ALIGN=center SIZE=3><P>

<CENTER>
<A HREF="http://www.ids.ac.uk/eldis/ggov/asia.html">Democratization in Asia: A Bibliography</A><BR><BR>
<A HREF="http://www.ids.ac.uk/eldis/ggov/asia_dem.html">Democracy in Asia &amp; the Pacific: Sources</A><BR><BR>

<A HREF="http://www.ids.ac.uk/eldis/ggov/asia_sou.html">Democracy in South Asia: Sources</A><BR><BR>
<A HREF="http://jefferson.village.virginia.edu/sixties/HTML_docs/Texts/Scholarly/Boua_Development&Democ.html">Development Aid &amp; Democracy in Cambodia: A Report</A><BR><BR>


<BR><HR WIDTH=200 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+3 COLOR=#FF0000><STRONG>Asia-Pacific <A NAME="rights">Human Rights </A>Issues</STRONG></FONT></H2></CENTER><P>
<HR WIDTH=200 ALIGN=center SIZE=3><P>


<A HREF="http://wings.buffalo.edu/libraries/units/law/guides_handouts/ngo.html">How to Find NGO Publications on Human Rights </A><BR><BR>

        <A HREF="http://lawhome.lawhk.hku.hk/demo/unhrdocs/appen4.html">International Human Rights Documents</A><BR><BR>

        <A HREF="http://www.hri.ca/">Human Rights Internet</A><BR><BR>

   <A HREF="http://www.cac.psu.edu/jbe/rightbib.html">Bibiography on Human Rights &amp; Buddhism</A><BR><BR>

   <A HREF="http://www.derechos.org/human-rights/seasia/index.html">Human Rights in Southeast Asia</A><BR><BR>

   <A HREF="http://www.derechos.org/saran/">Human Rights in South Asia</A><BR><BR>

   <A HREF="http://www.derechos.org/human-rights/nasia/main.html">Human Rights in North Asia</A><BR><BR>

<A HREF="http://soros.org/burma/burmrigh.html">Human Rights in Burma</A><BR><BR>

        <A HREF="http://www.derechos.org/human-rights/seasia/indonesia.html">Human Rights in Indonesia </A><BR><BR>

        <A HREF="http://www.xs4all.nl/~ozgurluk/hrindex.html">Human Rights in Turkey</A><BR><BR>
        <A HREF="http://www.nttls.co.jp/infomofa/viewpoints/hp.html#topics">Japanese Viewpoints on Human Rights</A><BR><BR>
                    

<BR><HR WIDTH=200 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+3 COLOR=#FF0000><STRONG>Asia-Pacific <A NAME="region">Regional </A>Issues</STRONG></FONT></H2></CENTER><P>
<HR WIDTH=200 ALIGN=center SIZE=3><P>

           <A HREF="http://www.jca.or.jp/~pebble/cpr.html">Prison Labor in Japan</A><BR><BR>

            <A HREF="http://www.fva.org/act6.html">Campaign for Prisoners of Conscience in Vietnam</A><BR><BR>

            <A HREF="http://zymurgy.cs.pdx.edu/~amnesty/chinapoc.html">Amnesty: China</A><BR><BR>

            <A HREF="http://danenet.wicip.org/fbc/insein.txt">A report on conditions for political prisoners in Burma's Insein Prison</A><BR><BR>
<A HREF="http://www.efund.com/burma_intro.html">The Burma/Multinational Connection</A><BR><BR>
<A HREF="http://www.aloha.net/%7Eoka/scm/hot0501.html">Journalism and freedom of the press in Malaysia</A><BR><BR>
<A href="${BASE_URL}fdlap/timornet.html">COMPREHENSIVE COLLECTION OF LINKS <BR>ON INDONESIA &AMP; EAST TIMOR</A><BR><BR>
<A HREF="http://www.law.qub.ac.uk/qub_law/timor/Ti1.HTM">East Timor: Historical Overview</A><BR><BR>
<A HREF="http://amadeus.inesc.pt/~jota/Timor/interest/Resources.from.etan.us.html">Resources on East Timor</A><BR><BR>
<A HREF="http://www.uc.pt/Timor/TimorNet.html">TimorNet: An Information Service on East Timor</A><BR><BR>




</CENTER>
<CENTER>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fmission.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdmiss.jpg" ALT="Mission" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdlorg.html"><IMG SRC="${BASE_URL}fdlap/graph/btgfdorg.jpg" ALT="Organization" WIDTH=136 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/index.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdhome.jpg" ALT="Home" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdlinits.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdinit.jpg" ALT="Initiatives" WIDTH=136 HEIGHT=38 ></A>
<A href="${BASE_URL}fdlap/fdlpaper.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlit.jpg" ALT="Literature" WIDTH=136 HEIGHT=38></A>
<BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><P>

<A HREF="mailto:fdlap@chollian.dacom.co.kr"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A href="${BASE_URL}fdlap/fdlorg.html#address">Our Address...</A>
<HR WIDTH=105 ALIGN=center SIZE=2>
<FONT  SIZE=-1 COLOR=#007339>Pagework by Nancho East</FONT>
</CENTER>

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

export default FdlapFdllinks;
