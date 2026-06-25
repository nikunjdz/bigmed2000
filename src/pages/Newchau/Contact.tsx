import { useEffect } from "react";

const NewchauContact = () => {
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
<p><br>
<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=85% HEIGHT=5 vspace=9><BR>
<font size="+1"><strong>Please send your suggestions, requests, <br>
sponsorship queries and spare change to:</strong></font>
<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=85% HEIGHT=5 vspace=15><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055> 
<table align="center" cellspacing="12" cellpadding="12" border="0">
<tr>
    <td><img src="${BASE_URL}graph/BMDRAG3.gif" width="200" height="161" border="0" alt=""></td>
    <td align="center"><font size="+1" face="Impact,'Arial Black','Times New Roman'">Maine Coordinating Office</font><p>
<strong><font size="+2" face="WandSSK,'Times New Roman'">Big Medicine</font><br>Attention: W. David Kubiak<br>
PO Box 13, 
Kennebunkport, Maine 04046<br>Tel: (207) 967-2390 Fax: (207) 967-2808
<br>Email: <A HREF="mailto:bigmed@nancho.net"> bigmed@nancho.net</A></strong></td>
</tr>
</table>

<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=85% HEIGHT=5  vspace=15><P>
<table align="center" cellspacing="12" cellpadding="12" border="0">
<tr>
    <td><img src="${BASE_URL}graph/jhighbw.gif" width="270" height="142" border="0" alt=""></td>
    <td align="center"><font size="+2" face="Impact,'Arial Black','Times New Roman'"><font size="4">To ignite a new chautauqua<br>
 in your area, contact:</font><br><br>
Hightower Central</font><p>
<strong><font size="+1" face="WandSSK,'Times New Roman'">Attention:  Betsy Moon</font><br>Austin, Texas<br>Tel: 512-477-5588
<br>Email: <A HREF="mailto:betsy@jimhightower.com">betsy@jimhightower.com</A></strong></td>
</tr>
</table><br>
<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=85% HEIGHT=5  vspace=15><P></CENTER><br><br>

<div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a><p>
<font size="-1" face="Arial,Helvitica"><div align="center"><a href="${BASE_URL}newchau/purps.html">Purpose</a> | <a href="${BASE_URL}newchau/players.html">Players</a> | <a href="${BASE_URL}newchau/sponsors.html">Sponsors</a> | <a href="${BASE_URL}newchau/gospels.html">Gospels</a> | <a href="${BASE_URL}newchau/schedule.html">Schedule</a> | <a href="${BASE_URL}newchau/faq.html">FAQ</a> | <a href="${BASE_URL}newchau/contact.html">Contact</a></font></div>
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

export default NewchauContact;
