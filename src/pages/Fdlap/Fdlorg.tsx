import { useEffect } from "react";

const FdlapFdlorg = () => {
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

<TABLE BORDER=6 CELLPADDING=10 BGCOLOR="#003E1F">
<TR><TD><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD><TD ALIGN=CENTER><FONT SIZE=+2 COLOR=#70B0F1><STRONG>THE FORUM OF DEMOCRATIC LEADERS <BR>IN THE ASIA-PACIFIC</STRONG></FONT></TD><TD><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD></TR>
</TABLE>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=12><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdlogo15.gif" WIDTH=150 HEIGHT=64 VSPACE=4 ALT="FDL-AP Logo"><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4>

</CENTER>
<BR>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=550 HEIGHT=6><BR><BR>
 <A HREF="#directors"><STRONG>BOARD OF DIRECTORS</STRONG></A>
| <A HREF="#executive"><STRONG>EXECUTIVE COMMITTEE</STRONG></A>
| <A HREF="#chapters"><STRONG>NATIONAL CHAPTERS</STRONG></A> | <A HREF="#secretariat"><STRONG>SECRETARIAT</STRONG></A><BR><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=550 HEIGHT=6></CENTER>
<BR><BR>
<CENTER>
<HR WIDTH=400 ALIGN=center SIZE=4>
<FONT  COLOR=#003E1F>
<H2><U>ORGANIZATIONAL STRUCTURE</U></H2>
<HR WIDTH=400 ALIGN=center SIZE=4><P>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<H3><U>HONORARY SENIOR ADVISORS</U></H3></FONT>
</CENTER>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P>
<BLOCKQUOTE><UL>
<LI><STRONG>Aung San Suu Kyi</STRONG> Burmese Democratic Leader, National League for Democracy
<LI><STRONG>Desmond Tutu</STRONG> Anglican Archbishop of South Africa
<LI><STRONG>Mikhail Gorbachev</STRONG> Former President of the Soviet Union
<LI><STRONG>Richard von Weizsaecker</STRONG> Former President of Germany
</UL></BLOCKQUOTE>
<BR><BR>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>

<FONT  COLOR=#003E1F>
<CENTER><H3><U>CO-PRESIDENTS</U></H3></CENTER></font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P>
<BR>
<BLOCKQUOTE><UL>
<LI><STRONG>Corazon C. Aquino</STRONG> Former President of the Republic of the Philippines
<LI><STRONG>Oscar Arias Sanchez</STRONG> Former President of Costa Rica and Nobel Peace Prize Laureate
<LI><STRONG>Kim Dae-Jung</STRONG> Chairman for the KDJ Peace Foundation and President of the National Congress for New Politics
<LI><STRONG>Sonia Gandhi</STRONG> Chairperson for the Rajiv Gandhi Foundation
</UL></BLOCKQUOTE>
<BR><BR>

<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<FONT  COLOR=#003E1F>
<CENTER><H3><U>GENERAL  ASSEMBLY</U></H3></CENTER></font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P>
<BR>
<BLOCKQUOTE><UL>
<LI><STRONG>Raul Manglapus</STRONG> Chair, former Foreign Minister, Philippines
<LI><STRONG>Ra Jong-il</STRONG> Vice Chair, Professor, Korea
<LI><STRONG>Aifzaz Ahsan</STRONG> Vice Chair, Senator, Pakistan
</UL></BLOCKQUOTE>
<BR><BR>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<FONT  COLOR=#003E1F>
<CENTER><H3><U><A NAME="directors">BOARD OF DIRECTORS</A></U></H3></CENTER>
</font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P>
<BR>

<BLOCKQUOTE>
<BLOCKQUOTE><H3><U>Korea</U></H3>
<UL>
<LI><STRONG>Sonn Se-il</STRONG> Member of Parliament
<LI><STRONG>Hong Sa-Duk</STRONG> Member of Parliament
<LI><STRONG>Lee Oo-chung</STRONG> Member of Parliament
<LI><STRONG>Hahn Hwa-kap</STRONG> Member of Parliament
<LI><STRONG>Oh Kee-pyung</STRONG> Dean
<LI><STRONG>Ra Jong-il</STRONG> Kyong-hee University, Professor
<LI><STRONG>Han Sang-jin</STRONG> Seoul National University, Professor
<LI><STRONG>Kim Sang Woo</STRONG> Member of Parliament
</UL></BLOCKQUOTE>







<BLOCKQUOTE>
<H3><U>Philippines</U></H3>


<UL>
<LI><STRONG>Heherson Alvarez</STRONG> Senator
<LI><STRONG>Bonfacio H. Gillego</STRONG> Member of Parliament
<LI><STRONG>Amado S. Lagdameo</STRONG> CEO, Public Estate Authority
</UL></BLOCKQUOTE>

<BLOCKQUOTE>
<H3><U>Japan</U></H3>
<UL>
<LI><STRONG>Den Hideo</STRONG> Senator
<LI><STRONG>Mushakoji Kinhide</STRONG> Professor
<LI><STRONG>Sasaki Hidenori</STRONG> Deputy Minister of Law
</UL></BLOCKQUOTE>

<BLOCKQUOTE>
<H3><U>Thailand</U></H3>
<UL>
<LI><STRONG>Gothom Arya</STRONG> Professor, Chulalongkorn University
<LI><STRONG>Surin Pitsuwan</STRONG> Former Deputy Foreign Minister
</UL></BLOCKQUOTE>

<BLOCKQUOTE>
<H3><U>Russia</U></H3>
<UL>
<LI><STRONG>Vitali Savitski</STRONG> Co-Chairman, Russian Duma
<LI><STRONG>Nikolai Koroteev</STRONG> Vice Rector, Moscow state University
</UL></BLOCKQUOTE>

<BLOCKQUOTE>
<H3><U>Others</U></H3>

<UL>
<LI><STRONG>Kamal Hossain</STRONG> Former Foreign Minister, Bangladesh
<LI><STRONG>Harn Yawnghwe</STRONG> Associates to Develop a Democratic Burma, Burma (Canadian Resident)
<LI><STRONG>Son Soubert </STRONG>National Assembly Vice President, Cambodia
<LI><STRONG>Ed Broadbent</STRONG> ICHRDD President, Canada
<LI><STRONG>Emily Lau</STRONG> Legislative Councilor, Hong Kong
<LI><STRONG>B. M. Oza</STRONG> Former Ambassador to Korea, India
<LI><STRONG> Musa Hitam</STRONG> Former deputy Prime Minister, Malaysia
<LI><STRONG>R. Gonchidorj</STRONG> Former vice President, Mongolia
<LI><STRONG>Devendra Raj Panday</STRONG> Former Finance Minister, Cambodia
<LI><STRONG>Geoffrey Thompson </STRONG>President National Party, New Zealand
<LI><STRONG>Roger Miranda Gomez</STRONG> Advisor to the President of Nicaragua
<LI><STRONG>Aizaz Ahsan</STRONG> Senator, Pakistan
<LI><STRONG>James Lilley</STRONG> Former ambassador to Korea, U.S.A.
</UL></BLOCKQUOTE></BLOCKQUOTE>
<BR><BR>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<FONT  COLOR=#003E1F>
<CENTER><H3><U><A NAME="executive">EXECUTIVE COMMITTEE</A></U></H3></CENTER><P>
</font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P><BR>

<BLOCKQUOTE><UL>
<LI><STRONG>Raul S. Manglapus</STRONG> Chair, Philippines
<LI><STRONG>Chang Heng-Hoon</STRONG> Vice Chair, Korea
<LI><STRONG>Amado Lagdameo</STRONG> Philippines
<LI><STRONG>B. M. Oza</STRONG> India
<LI><STRONG>Sonn Se-il</STRONG> Korea
<LI><STRONG>Hahn Hwa-kap</STRONG> Korea
<LI><STRONG>Den Hideo</STRONG> Japan
<LI><STRONG>Gotham Arya</STRONG> Thailand
</UL></BLOCKQUOTE><P><BR>

<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<FONT  COLOR=#003E1F>
<CENTER><H3><U><A NAME="chapters">NATIONAL CHAPTERS</A>  AND LIAISON OFFICES</U></H3></CENTER></font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P><BR>

<BLOCKQUOTE>Since its conception, one of the FDL-AP's objective has been to expand its capability to promote democracy. To achieve this objective, the FDL-AP has opened National Chapters and Liaison Offices in several Asia-Pacific nations. On 1-2 September 1995, the FDL established  offices (in Australia, Cambodia, India, Indonesia, Mongolia, Nepal, New Zealand, Pakistan, Singapore, and Thailand) as well as two National Chapters (in Bangladesh and Philippines). At the end of 1995, there were approximately 500 active members within the FDL-AP network, including a wide range of political, academic and social leaders. Of these, approximately 75% were from Asian nations and the remaining 25% were from the United States, Europe, Eastern Europe, Central and South America.</BLOCKQUOTE><P><BR>

<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<FONT  COLOR=#003E1F>
<CENTER><H3><U>FDL-AP <A NAME="secretariat">SECRETARIAT</A></U></H3></CENTER></font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P>

<BLOCKQUOTE>The Secretary-General will guide the Liaison Offices and direct the FDL-AP Headquarters based in Seoul. The Secretary-General is also responsible for coordinating the FDL-AP Liaison offices and National Chapters in Asia in conjunction with the Advisory Board and Executive Committee, and under the supervision of the Co-Presidents. The Deputy Secretary-General will take care of the daily operations and administration within the Secretariat office. Currently, the FDL-AP Secretariat has four active staff members:<P>

<UL>
<LI><STRONG>Kim Sei-ung</STRONG>, Secretary-General
<LI><STRONG>Park Jun-hee</STRONG>, Program Officer
<LI><STRONG>Phillip Pepper</STRONG>, Program Officer
<LI><STRONG>Han Byong-ok</STRONG>, Program Officer
</UL></BLOCKQUOTE><P><BR>

<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER>
<FONT  COLOR=#003E1F>
<CENTER><H3><U>Financial Support</U></H3></CENTER></font>
<CENTER><IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=3 ></CENTER><P><BR>
<BLOCKQUOTE>The FDL-AP's continuing existence and activities are due in large part  to generous contributions from the Soros Foundation, the Kim Dae-jung Peace Foundation, the Olof Palme International Center, and the Naumann Foundation.</BLOCKQUOTE>

<HR WIDTH=70% ALIGN=center SIZE=2>
<HR WIDTH=80% ALIGN=center SIZE=3>
<HR WIDTH=70% ALIGN=center SIZE=2><P>
<CENTER><FONT  SIZE=+2><STRONG><A NAME="address">The Forum</A> of Democratic Leaders in the Asia-Pacific <BR>welcomes communication and cooperation <BR>with all peoples who share its goals.</STRONG></FONT><P>
Suite #501, Aryung Buiding, 506-20 Changchun-dong<BR>Seodaemun-ku, Seoul, Republic of Korea
<BR>Tel: 82 (2)322-4491
<BR>Fax: 82 (2) 322-4494
<BR><A HREF="mailto:fdlap@chollian.dacom.co.kr">Internet: fdlap@chollian.dacom.co.kr</A></CENTER><P><BR>




<CENTER>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/index.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdhome.jpg" ALT="Home" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fmission.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdmiss.jpg" ALT="Mission" WIDTH=138 HEIGHT=38></A>


<A href="${BASE_URL}fdlap/fdlinits.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdinit.jpg" ALT="Initiatives" WIDTH=136 HEIGHT=38 ></A>
<A href="${BASE_URL}fdlap/fdlpaper.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlit.jpg" ALT="Literature" WIDTH=136 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdllinks.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlink.jpg" ALT="Links" WIDTH=136 HEIGHT=38></A>
<BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9></CENTER><P>

<A HREF="mailto:fdlap@chollian.dacom.co.kr"><STRONG><U>Contact FDLAP...</U></STRONG></A>
<HR WIDTH=100 ALIGN=left SIZE=2>
<FONT  SIZE=-1COLOR=#007339>Pagework by Nancho East</FONT>
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

export default FdlapFdlorg;
