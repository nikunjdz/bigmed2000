import { useEffect } from "react";

const Thespiel = () => {
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

<CENTER><H2>Big Medicine Needs You!</H2></CENTER>
<CENTER>

<FONT  COLOR=#DB0702 SIZE=+2><B>Cascade!</B></FONT>
<IMG SRC="${BASE_URL}graph/spielbeg.jpg"  LOWSRC="${BASE_URL}graph/armcomb5.jpg" ALT="Looking for Handouts with Dr. Manual Feelgood" ALIGN=ABSMIDDLE WIDTH=244 HEIGHT=270 HSPACE=12 VSPACE=2 BORDER=3>
<FONT  COLOR=#DB0702 SIZE=+2><B>Conspire!</B></FONT><BR>

<FONT  SIZE=+1 COLOR=#DB0702><STRONG><BIG><U>And if the Spirit Moves You, <BR>Lend a Hand...</U></BIG></STRONG></FONT><BR><BR><BR>
<img align=middle src="${BASE_URL}bulls/spieline.gif" WIDTH=450 HEIGHT=6><P>

<H2>We need everything you got!</H2>
<H3>Wit, bile, rage, lust, <BR>bizarre near useless talents...</H3>
<img align=middle src="${BASE_URL}bulls/spieline.gif" WIDTH=450 HEIGHT=6><P>

<FONT SIZE=3 COLOR=#DDD142><STRONG><U><BIG>Mix or Match the Following</BIG></U></STRONG></FONT>
<! -DB0702 Bright red- >

<HR WIDTH=400 ALIGN=center SIZE=3>
<FONT  SIZE=+1 COLOR=#CA4326><STRONG>YOUR AREAS OF INSPIRATION, ANGST OR EXPERTISE</STRONG></FONT><BR>

<HR WIDTH=400 ALIGN=center SIZE=3>
<FONT SIZE=+1  COLOR=#DDD142><A href="${BASE_URL}spielist.html#talents">Unusual Art | Eccentric Ideas | Trivial Pursuits | Educative Ardor <BR><BR> Reckless Resources | 

Subversive Acquisition | Alpha Affinity | Salubrious Science<BR><BR> PR Precocity | Holistic Hacking | 

Sex | Drugs | Rock'nRoll</A></FONT>
<BR><BR>
<HR WIDTH=400 ALIGN=center SIZE=3>
<FONT  SIZE=+1 COLOR=#CA4326><STRONG>NANCHO NEEDS OF THE HOUR</STRONG></FONT><BR><BR>
<FONT SIZE=+1  ><A href="${BASE_URL}spielist.html#needs">Art Work | Medical/Scientific Info | Ideas for Promoting Ideas | Movie "Quotes" 
<BR><BR>
Contagious Music | Video/CDROM Project Support | Sex | Drugs | Rock'nRoll
<BR><BR>
Reconnaisance on Current Locations of Sixties Survivors</A>
<HR WIDTH=400 ALIGN=center SIZE=3><BR>


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

export default Thespiel;
