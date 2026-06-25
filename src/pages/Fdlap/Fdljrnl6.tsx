import { useEffect } from "react";

const FdlapFdljrnl6 = () => {
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
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>FDL - AP QUARTERLY</EM></STRONG></FONT><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
<P>
<IMG SRC="${BASE_URL}fdlap/graph/fdljrnl6.jpg" ALT="FDL-AP QUARTERLY Spring, '99 Issue" WIDTH=176 HEIGHT=250 BORDER=3>
<P>


 <TABLE BORDER=3 CELLPADDING=5 CELLSPACING=2>
<CAPTION ALIGN=top><STRONG><U>SPRING '99 CONTENTS</U></STRONG></CAPTION>
<TR><TD>
<CENTER><H3><FONT COLOR=#007339>THEME:<BR>
DEMOCRACY IN ASIA <BR>- T<FONT SIZE=-1>HE ROAD TO PEACE, LIBERTY AND PROSPERITY</FONT></FONT></H3></CENTER>
<STRONG>Letter from Dr. Han Sung-Joo, <BR><FONT  SIZE=2>Acting Resident Co-president, FDL-AP</FONT></STRONG><P>


<STRONG><U>Support Messages from the <BR>FDL-AP International Leadership</U></STRONG>
<UL>
<LI>Madam Corazon Aquino
<LI>Dr. Oscar Arias
<LI>Sen. Aitzaz Ahsan
<LI>Dr. Kamal Hossain
<LI>Dr. Ronald Meinardus
<LI>Mr. H. K. Kuloy
</UL>

<STRONG><U>FDL-AP News</U></STRONG>
<UL>
<LI>FDL-AP Initiatives for 1999
<LI>Korean Membership Meeting
<LI>NED's Visit to the FDL-AP
<LI>Liberal International and Friedrich <BR>Naumann Foundation meet the FDL-AP
<LI>FDL-AP Press Statement on the Tragic Death <BR>of Dr. Michael Aris
</UL>

<STRONG><U>National Chapters and Liaison Offices</U></STRONG>
<UL>
<LI>Austrian Leadership in Promoting Democracy of Asia <BR>by Janelle Saffin MLC
<LI>Singapore's "Untold" Story <BR>by Chee Soon Juan
</UL>

<STRONG><U>Youth Forum</U></STRONG>
<UL>
<LI>Since My Time with the FDL-AP in September, 1996 <BR>by  Sonali Pathirana
</UL>

<STRONG><U>Country Reports</U></STRONG>
<UL>
<LI>New Zealand's Electoral Experiment <BR>by Geoff  Thompson
<LI>Democratic Pilgrimage in Nepal <BR>by Devendra Raj Panday
<LI>Hong Kong Report <BR>by  Emily Lau
<LI>Party-List System in the Philippines <BR>- Political Power Must be Shared, Not Controlled <BR>by Jed Dayang
</UL>

<STRONG><U>Essays</U></STRONG>
<UL>
<LI>Thai Policy Towards Burma <BR>by  Gothom Arya
<LI>People's Forum on Burma <BR>- A Tokyo Based NGO to Promote Democracy in
Burma <BR>by  Kei Nemoto
</UL>

</TD></TR>
</TABLE><P>


<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlpaper.html#essayarc"><STRONG>Back to Main Archives</A></STRONG><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:fdlap@chollian.dacom.co.kr"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
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

export default FdlapFdljrnl6;
