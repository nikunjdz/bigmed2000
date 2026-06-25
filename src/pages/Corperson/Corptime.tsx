import { useEffect } from "react";

const CorpersonCorptime = () => {
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

  const html = `<a href="${BASE_URL}corperson/index.html"><img src="${BASE_URL}graph/BIGBODBM.jpg" width="117" height="300" hspace="12"  border="0" align="left" alt="Return to Personhood Index"></a>

<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055>TIMELINE OF PERSONHOOD RIGHTS<br>
</font>
by Rick Beach and Jan Edwards</STRONG>
<br>


<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>

<font color="#FF0000"></font>

<DIV ALIGN="LEFT"><TABLE >
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2 color="#FF0000"><I>PEOPLE GAIN OR LOSE
RIGHTS</I></FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2 color="#FF0000"><I>YEAR</I></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2 color="#FF0000"><I>CORPORATIONS GAIN <br>
&nbsp;&nbsp;&nbsp;OR LOSE
RIGHTS</I></FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2 color="#FF0000"><I>NOTE/GENERAL</I></FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1776</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Revolutionary War begins</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Bill of Rights - White males of property over 21
(literacy, poll taxes)</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1791</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Constitution </FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1803</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Marbury v. Madison - Supreme Court becomes
Supreme</I></FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1819</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Dartmouth College v. Woodward</I> - A
corporate charter is a contract and can't be altered by
government</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Dred Scott - Slaves are Property and Congress
cannot deprive citizens of their property. Slaves are not citizens of any
State.</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1857</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1861</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Civil War begins</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>13th Amendment - Slavery
abolished</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1865</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>14th Amendment - Black males get equal
protection</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1868</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Paul v. Virginia</I> - Corporations NOT
persons under Article IV, Section 2</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>15th Amendment - Black males
vote</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1870</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2><I>Minor v. Happersett</I> - Women seek 14th
Amendment but NO - only for black males</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1874</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1877</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Munn V. Illinois</I> - 14th Amendment CANNOT
be used to protect corporations from state law, but didn't actually rule on
personhood </FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1886</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Santa Clara County v. Southern Pacific
Railroad</I> - Corporations get personhood under the 14th
Amendment</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1890</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Sherman Anti-Trust Act - Sections 7&amp;8 define
corporations as persons</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=5 VALIGN="MIDDLE">
<DIV ALIGN="LEFT"><FONT SIZE=2>Of the 14th Amendment cases brought before
Supreme Court between 1890 and 1910, 19 dealt with Negroes, 288 dealt with
corporations</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1893</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Noble v. Union River Logging</I> - 5th
Amendment (due process) - first Bill of Rights</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2><I>Plessy v. Ferguson</I> &#8211;
&#8220;Separate but equal&#8221; - black males lose 14<SUP>th</SUP> amendment
rights</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1896</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1906</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Hale v. Henkle</I> - Corporations get 4th
Amendment "search and seizure" protection</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1910</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>19th Amendment - Women get the
vote</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1920</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1925</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Gitlow rules constitutional protections for
corporations include 14th Amendment, press, speech, and 5th
Amendment</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Supreme Court Justice Hugo Black challenges
corporate personhood - dissent Connecticut General Life <I>Insurance v.
Johnson</I></FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1938</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>The Corporation won this case</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Supreme Court Justice William O. Douglas
dissents <I>Wheeling Steel Corporation v. Glander</I></FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1949</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>The Corporation won this case</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2><I>Brown v. Board of Education</I> - "Separate
is not equal"</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1954</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>24<SUP>th</SUP> Amendment - No poll
taxes</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1964</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>26th Amendment - 18-year-olds vote.
</FONT><BR></DIV>
<DIV ALIGN="RIGHT"><FONT SIZE=2>Women included in 14th
Amendment</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1971</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1976</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Buckley v. Valeo</I> - money equals
speech</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1976</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>US v. Martin Linen Supply</I> - corporation
uses 5th Amendment to protect against double jeopardy to avoid retrial in
anti-trust case</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Slavery is the legal fiction</FONT><BR></DIV>
<DIV ALIGN="LEFT"><FONT SIZE=2>that a person is property.</FONT><BR></DIV>
<DIV ALIGN="LEFT"><BR></DIV>
<DIV ALIGN="LEFT"><FONT SIZE=2>Corporate Personhood is the
legal</FONT><BR></DIV>
<DIV ALIGN="LEFT"><FONT SIZE=2>fiction that property is a
person.</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1976</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Virginia Board of Pharmacy v. Virginia
Consumer Council</I> - Advertising is free speech. [Commercial
Speech]</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1977</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Marshall v. Barlow</I> - 4th Amendment used to
thwart federal occupational health and safety inspections</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1977</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>First National Bank of Boston v. Bellotti</I>
- 1st Amendment used to overturn state restrictions on corporate spending on
political referenda</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
</TABLE></DIV>
<DIV ALIGN="LEFT"><BR></DIV>

<br><div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
<div align="center"><font SIZE="-1" face="Verdana,Arial,Helvetica"><a href="${BASE_URL}newchau/ccgoals.html">Goals</a> | <a href="${BASE_URL}newchau/ccplay.html">Play</a> |  <a href="${BASE_URL}newchau/gospels.html">Study</a> | <a href="${BASE_URL}newchau/ccnews.html">News</a> | <a href="${BASE_URL}newchau/faq.html">FAQ</a> | <a href="${BASE_URL}newchau/contact.html">Contact</a> | <a href="${BASE_URL}newchau/cchelp.html">Help</a> | <a href="${BASE_URL}newchau/nchistry.html">Archives</a></font></div>
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

export default CorpersonCorptime;
