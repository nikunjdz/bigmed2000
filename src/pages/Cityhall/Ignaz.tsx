import { useEffect } from "react";

const CityhallIgnaz = () => {
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
<CENTER><FONT  SIZE=2><EM>New dimensions in flaming futility.<BR>Thomas Kuhn, he hardly knew you...</EM></FONT><BR><BR>
<TABLE BORDER=4  ALIGN=CENTER CELLPADDING="4">
<CAPTION ALIGN=bottom><FONT  SIZE=2>Ignaz Semmelweis. M.D. <BR><FONT  SIZE=-1>(1818-1865)</FONT></FONT></CAPTION>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/ignaz200.jpg" ALT="Uncle Iggie the Unrequited" WIDTH=142 HEIGHT=200 BORDER=2></TD></TR>
</TABLE></CENTER>
<HR WIDTH=80% ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=1>
<HR WIDTH=80% ALIGN=center SIZE=2>
<TABLE CELLPADDING=3 CELLSPACING=3>
<TR><TD><IMG SRC="${BASE_URL}bulls/dot_clea.gif" WIDTH=3 HEIGHT=1></TD><TD>

<STRONG>Dr. Ignaz Semmelweis, hapless 19th century Hungarian physician, who grew aggrieved and then apoplectic watching nearly a quarter of all birthing mothers die in septic agony in his era's hospitals,  while hearing his seniors pompously lament the inescapable (and perhaps deserved)  tortures of motherhood.  Ignaz should have shrugged resignedly with his colleagues right there and accepted the inevitable scourge of puerperal (childbed) fever and the mysterious ways of Miasma and/or the Lord. Unfortunately he walked out hyperventilating into the world instead, and discovered that few if any were dying among those who birthed at home. He returned to his hospital aflame and was soon struck with the bolt of insight that would incinerate his career. 
<P>
He awoke to the fact his fellow doctors were commuting directly from the pathology dissection labs to the birthing bays without rinsing a single gory digit. "Eureka," he thought, "We are the ones spreading the plague, and all we have to do to stop it is wash our bloody hands." Which he did, and pretty soon he started pulling over 96% of his mothers through, just like a good second-rate midwife. To his fatal inconvenience, however, no one had gotten around to discovering the germ in those days, which rendered all Ignaz's attempts at spreading his little hygenic revolution "ridiculous", "heretical" or "insane". His incensed superiors threw him out of his hospital, and saw to it that he was professionally mocked and publicly ridiculed. After years of this treatment , Ignaz resignedly packed it in, escaped Vienna, and set up a modest obstetric practice in the provinces where: 

<BLOCKQUOTE>"he continued to be plagued by the failure of the profession to accept his doctrine and thereby save the lives of countless young women." <div align=right><STRONG>Encyclopedia Britannica '69</STRONG></div></BLOCKQUOTE>

In a terminal series of ironies, after fleeing Vienna Semmelweis finally settles in the city of Pest where a careless scalpel knick infects and kills him with his very own plague. Thus Ignaz dies: 

<BLOCKQUOTE>"a victim of the very disease for which he had sacrificed his health, fortune and peace of mind."<DIV align=right>{<STRONG>Ibid</STRONG>}</DIV></BLOCKQUOTE>

The year Ignaz bites the dust, Louis Pasteur finally discovers "germs" and makes a big name and medical history. "So that's what old Ignaz was foaming about," his friends mused. "Poor bastard, too bad it wasn't 'science' then."
<P>

<P>Although this all happened over a century ago, in many ways our worlds are equal. The main difference, perhaps, is that there are a lot lot more of us infected mothers these days, we take a bit longer to perish, and we take a lot more of the natural surround with us when we go. But the central commonality remains - we and Ignaz' moribund mommas are/were both afflicted by  unrecognized pathogens - unrecognized in Ignaz' day because they were too small, and in ours because they are too vast.  <P>

"Corporate pathogens? Intriguing metaphor," the kindest folks in my audiences say and offer a sympathetic smile. Most reactions, however, are too chilly or scalding to gladly recall. So that's the nightmare - another two decades of Ignaz impersonations and then getting squashed by a Coke truck...</STRONG>
<P></TD></TR>
</TABLE>


<CENTER><IMG SRC="${BASE_URL}bulls/fdline5.gif" WIDTH=80% HEIGHT=4 VSPACE=6>



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

export default CityhallIgnaz;
