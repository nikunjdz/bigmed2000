import { useEffect } from "react";

const Bigmed2001Epistles = () => {
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


<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5><BR>
<BLOCKQUOTE><H2><FONT  COLOR=#000055>T<FONT SIZE=-1>HE</FONT> N<FONT SIZE=-1>ANCHO </FONT> E<FONT SIZE=-1>PISTLES</FONT><BR><FONT  SIZE=3>For a Smaller, Fairer, More Sensual World</FONT></FONT></H2></BLOCKQUOTE>

<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5></CENTER>
<BLOCKQUOTE><BLOCKQUOTE><FONT  COLOR=#000080><STRONG>In the absence of vast media budgets or virtually any budgets at all, we resort to the ancient ways and test the nimble phosphors of the pen against some mighty Big Swords. These Epistles are thus addressed to our variously flavored constituents and focus on their peculiar powers, exquisite futures and currently erroneous ways.  </STRONG></FONT></BLOCKQUOTE></BLOCKQUOTE>
<CENTER>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5><P>
<TABLE CELLPADDING=6>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/demonr.gif" WIDTH=84 HEIGHT=150 BORDER=3>
</TD><TD><UL><STRONG>


<LI>Mothers
<LI>Students
<LI>Teachers
<LI>Union Members
<LI>Blacks (separately)
<UL>
<LI>Homies
<LI> Afro-Americans 
<LI>The Corporate Colored 
</UL>
<LI> Sensual Adventurers (All preferences)
<LI>Feminists
<LI>Sixties Survivors
<LI>The Rich
<LI>The Poor
<LI>The Green
<LI>The Libertarian
<LI> The Irrevocably Incorporated
<LI> The ImmunoGentiles
<UL>
<LI>MIGs (IG men)
<LI>WIGs (IG women)
</UL>

<LI>The Newly Aged
<LI> <A href="${BASE_URL}adepintr.html">Hackers, Nerds &amp; Netizens</A>
<LI>Catholics &amp; Christians
<LI> Buddhists &amp; Hindus
<LI> The Hierarchic Semite Spectrum
<LI>The Non-Voting Majority
<LI> The Voteless World
</STRONG></UL></TD></TR>
</TABLE>

<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5>
<CENTER>To be augmented regularly from the spring...</CENTER>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5>


</CENTER>



<P><P>


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

export default Bigmed2001Epistles;
