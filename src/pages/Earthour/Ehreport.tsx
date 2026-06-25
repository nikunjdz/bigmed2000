import { useEffect } from "react";

const EarthourEhreport = () => {
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
<FONT  COLOR=#FFFFFF><H3><CENTER><EM>Alpha to Omega with Lunar Conspiracy </EM></CENTER></H3>

<BR>
<CENTER><IMG SRC="${BASE_URL}graph/mangets8.jpg"  LOWSRC="${BASE_URL}graph/mangets7.gif"  ALT="Lunatic Attitudes" WIDTH=670 HEIGHT=43><BR>
<BR>

<CENTER><IMG SRC="${BASE_URL}graph/earth3c.jpg"  LOWSRC="${BASE_URL}graph/earthba2.gif" ALT="Terra Erotica" WIDTH=150 HEIGHT=153 HSPACE=5 VSPACE=5 ALIGN=bottom></CENTER>

<BR>

<H2><CENTER>HELP DOCUMENT <BR>THE EVOLUTION OF EARTH HOUR </CENTER></H2>
<H3><CENTER>- Synchronicities, Strange Feelings, Surprising Phenomena<BR> Report It All! </CENTER></H3>

<P><CENTER><FONT  SIZE=5><I>Where reporting history, creates it...</I></FONT></CENTER>
<HR WIDTH=300 ALIGN=center SIZE=2>

<P>
<FONT  SIZE=+1>


<BR>
<CENTER><IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=450 HEIGHT=7><BR><BR>
<H3> Send your reports, observations and suggestions to:<BR><BR><A HREF="mailto:earthour@nancho.net">Earth Hour Decentral</A></H2><BR>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=450 HEIGHT=7></CENTER><BR><BR>

<BR>

<CENTER><A href="${BASE_URL}earthour/earthour.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehconc.gif"  ALT="Concept"></A>

<A href="${BASE_URL}earthour/ehdates.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehcale.gif"  ALT="Calendar"></A>

<A href="${BASE_URL}earthour/ehtactic.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehtact.gif" ALT="Tactics"></A>

<A href="${BASE_URL}earthour/ehrefs.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33  BORDER=0 SRC="${BASE_URL}butts/btehrefs.gif" ALT="References"></A>

<A href="${BASE_URL}arcmain.html#earthour"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btarcnt.gif" ALT="Archive"></A></CENTER>

<BR><HR WIDTH=90% ALIGN=center SIZE=3>
<BR>
<FONT  COLOR=#FFFFFF>
<CENTER><H4>Supported By People Like You (which is to say as yet, By Vanishing Little At All) <BR> - Quickly
Correct This Disgraceful Situation, or At Least Endure <A href="${BASE_URL}thespiel.html">The Spiel</A>.<BR><BR>

LINK US UP ! Help Lay Fuse to Others of your Illustrious Ilk<BR>
</H4>

<H5><A href="${BASE_URL}sharight.html">Shareright</A> (S) 1999 : Nancho Ijin Butai 
</H5></CENTER></FONT>
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

export default EarthourEhreport;
