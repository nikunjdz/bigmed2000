import { useEffect } from "react";

const Av = () => {
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
<CENTER><BR>
<TABLE BORDER=3 CELLPADDING=8>
<TR><TD ALIGN=MIDDLE BGCOLOR=#0080C0><BR><H2>BIG BODY A/V LIBRARY</H2></TD></TR>
</TABLE>

</CENTER>
<UL>
<LI><A HREF="http://www.nancho.net/bigmed2000/bbmusing/milicom.ram"><STRONG>Excerpts from President Dwight D. Eisenhower's Military-Industrial Big Body Alert</STRONG></A><BR>Ike's last and most personally heroic national service</FONT> <BR><FONT  SIZE=2>(This prophetic speech was broadcast on all channels nationwide exactly 40 years ago. <BR>If someone had actually listened, the Sixties might have turned out a hell of a lot differently <BR>- and we wouldn't have to fight off the cynical rebirth of Star Wars today.)</FONT><BR><BR>
<LI>Matt Damon & Ben Affleck's Short Course in Big Body Geo-Politics: <BR>
<B><A HREF="http://www.nancho.net/bigmed2000/bbmusing/goodwill.ram">Why shouldn't YOU join the National Security Agency?</A></B></FONT><BR><FONT  SIZE=2>(Courtesy of Good Will Hunting)</FONT><P>
<LI> <A HREF="http://www.nancho.net/ram/bigspeak.ram"><STRONG>Corporate America Speaks!</STRONG></A> - A fatherly lesson in the real ways of the world<BR> All you anti-globalization ingrates, listen up...
<BR><FONT  SIZE=2>(Courtesy of Network & Paddy Chayefsky)</FONT>
<LI> <STRONG>BIG BODY GENESIS</STRONG>
<UL>
<LI><A HREF="http://www.nancho.net/ram/spermwar.ram"><STRONG>Catholic Sperm Wars</STRONG></A> - Global growth tips from the Mother Big Body of them all.
<BR><FONT  SIZE=2>(Courtesy of Sir Montrose Python)</FONT>
<LI><A HREF="http://www.nancho.net/ram/kingart.ram"><STRONG>Monarchic Manifest Destiny</STRONG></A> - the Camelot Gambit <BR>- wherein mutant political myths overtake the early democrats
<BR><FONT  SIZE=2>(Ibid.)</FONT>

</UL>
</UL>

<HR><P>
<FONT SIZE=4> <STRONG>GUEST SPEAKERS</STRONG> <BR>RealAudio  <P></FONT> 
<TABLE cellspacing=12>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/nader.jpg" WIDTH=122 HEIGHT=150><BR><STRONG>Ralph Nader</STRONG></TD><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/noam1.jpg" WIDTH=110 HEIGHT=150><BR><STRONG>Noam Chomsky</STRONG></TD><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/mosdef.jpg" WIDTH=116 HEIGHT=150><BR><STRONG>Mos Def</STRONG></TD></TR>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/korten15.jpg" WIDTH=116 HEIGHT=150><BR><STRONG>David Korten</STRONG></TD><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/suzuki.jpg" WIDTH=130 HEIGHT=150><BR><STRONG>David Suzuki</STRONG></TD><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/michaelc.jpg" WIDTH=101 HEIGHT=150><BR><STRONG>Michael Crichton</STRONG></TD></TR>
</TABLE><P>








<A HREF="http://www.newdimensions.org/dimensions/f-cabw.ram">David Korten on Life Beyond Corporatism</A><BR><FONT  SIZE=2>
Enjoy the entire hour interview or drag the sound player's slider <BR>
to the 20-minute mark for a particularly rich 10-minute run.</FONT> <BR>

<A HREF="http://www.nancho.net/bigmed2000/bbmusing/noam1.ram">
Noam Chomsky on Corporate Personhood, Primacy &amp; Tyranny</A><BR>
<A HREF="http://www.nancho.net/bigmed2000/bbmusing/mosdef.ram">Mos Def  on the Corporate Brutalization of Hip Hop</A><BR>
<A HREF="http://www.nancho.net/bigmed2000/bbmusing/kortenbb.ram">David Korten on Global Corporate Rule</A><br>
<A HREF="http://www.nancho.net/bigmed2000/bbmusing/ralph1.ram">Ralph Nader on Big Bodies &uuml;ber Alles</A><BR>
<A HREF="http://www.nancho.net/bigmed2000/bbmusing/suzuki.ram">David Suzuki on Big Body Economics' Guarantee to Trash the World</A><BR>
<A HREF="http://www.nancho.net/bigmed2000/bbmusing/crichton.ram">Michael Crichton on Big Body Feudalism</A><BR>
<A HREF="http://www.nancho.net/bigmed2000/bbmusing/ralph2.ram"> Ralph Nader on the Corporate Coup d'Etats in America</A>
<P>

<P>
<STRONG>Still available on-line:</STRONG><BR>
<FONT SIZE=4><A HREF="http://www.nancho.net/bigmed2000/bbintros.html" target="_blank"><B>Big Body Conference Preliminary Papers</B></A> <BR>
<P><P><P>
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

export default Av;
