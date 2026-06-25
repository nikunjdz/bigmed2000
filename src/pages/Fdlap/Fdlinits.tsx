import { useEffect } from "react";

const FdlapFdlinits = () => {
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
</TABLE><BR><BR>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4 VSPACE=6><BR>
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>Action Areas</EM></STRONG></FONT><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4>

</CENTER>
<BR>


<BR><HR WIDTH=200 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+3 COLOR=#FF0000><STRONG><A NAME="democracy">  RECENT INITIATIVES </A></STRONG></FONT></H2></CENTER><P>
<HR WIDTH=200 ALIGN=center SIZE=3><P>

<H3><U>FDL-AP Special Commission on Burma</U></H3><P>

<BLOCKQUOTE>The FDL-AP established the Special Commission on Burma's democratization. The members of the Special Commission on Burma are Kamal Hossain (Bangladesh, Co-Chair and Coordinator), Ed Broadbent (Canada, Co-Chair), Hong Sa-duk (Korea, Co-Chair), Kosugi Takashi (Japan, Co-Chair) and Stephen Solarz (USA., Co-Chair).  In addition, 10 more members may be designated by the Co-Presidents<P>

In July, 1995 the Burma Commission traveled to the US and met with UN officials and members of Congress. The Burma Commission has developed several strategies concerning issues related to the development of democracy in Burma.</BLOCKQUOTE><P>

<H3><U>Book Series on Asian Democracy</U></H3><P>

<BLOCKQUOTE>This research initiative will be carried out in conjunction with the Kim Dae Jung Peace Foundation research committee, and will include intellectual contributions from over 40 international scholars. The primary objective of the research is to develop a comprehensive theory of Asian democracy intrinsically based in Asian culture and ideas. This theory can then be used as a foundation for constructing a comprehensive view of "global democracy" for the 21st century.  Four volumes will produced from this research, in both Korean and English.</BLOCKQUOTE><P>

<H3><U>FDL-AP Burma Seminar Meeting</U></H3><P>


<BLOCKQUOTE>From September 3-4, 1996, the FDL-AP sponsored the Burma Seminar in Seoul, Korea which discussed the following topics: the current situation in Burma; policies which would facilitate the democratization process in Burma; the role of NGOs in fostering political change in Burma; and the FDL-AP initiatives concerning Burma.</BLOCKQUOTE><P>

<H3><U>Commission for Women's Rights</U></H3><P>

<BLOCKQUOTE>The Commission of Women's Rights is committed to acting in the interest of peaceful coexistence and wholesome living for all peoples, by fostering an environment of fair and equal treatment for women, men and children and by promoting the conditions necessary to allow women the equal opportunities and freedom to fully develop their human potential, and consequently the capability to make a positive contribution to society and humankind.</BLOCKQUOTE><P>



<CENTER>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/index.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdhome.jpg" ALT="Home" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fmission.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdmiss.jpg" ALT="Mission" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdlorg.html"><IMG SRC="${BASE_URL}fdlap/graph/btgfdorg.jpg" ALT="Organization" WIDTH=136 HEIGHT=38></A>

<A href="${BASE_URL}fdlap/fdlpaper.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlit.jpg" ALT="Literature" WIDTH=136 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdllinks.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlink.jpg" ALT="Links" WIDTH=136 HEIGHT=38 ></A>
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

export default FdlapFdlinits;
