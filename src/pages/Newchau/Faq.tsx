import { useEffect } from "react";

const NewchauFaq = () => {
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

<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=1><P>


<h3>FREQUENTLY ASKED QUESTIONS</h3>

<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=1><P></CENTER>

<br>
<br>
<blockquote><hr align="left" width="250" size="3">
<STRONG> <FONT  SIZE=3 COLOR=#000055> UNDER HEAVY CONSTRUCTION
<hr align="left" width="250" size="3"><br><br>

<font color="#800000"><h4>A FEW QUESTIONS WE'VE HEARD THUS FAR</h4></font>
<font size="+1" color="#FF0000">About our agenda</font><br><br>
<font color="#800000"><strong>Isn't this campaign just out to demonize business or capitalism?</strong></font>
<blockquote>Not at all. You miss the point. Our primary demon is monstrous corporate scale and the crippling power these bodies exert on our democracy. Small, human-scale business and capitalism will remain vital, and already offer over 80% of our nation�s jobs. With a little help and forethought, they can pick up the slack when the Big Corporate Bodies begin to melt down. </blockquote><p>
<font color="#800000"><strong>Why do you want revoke corporate personhood and their civil rights?</strong></font>
<blockquote>A century ago, a deranged Supreme Court awarded Big Corporate Bodies the same Constitutional rights as natural persons without any rationale, logic or  legislative consent. Corporations have since exploited these protections and their enormous wealth to subvert our institutions, leaders and public agenda. Corporations are hierarchic authoritarian systems that deny their members the most basic democratic rights and thus can hardly be expected to value or nurture democratic values in society as a whole. <a href="${BASE_URL}newchau/gospels.html#cp">More...</a> </blockquote>
<font color="#800000"><strong>Big corporations now control so much of our society and economy. Shouldn�t that give them some political rights? </strong></font>
<blockquote>Never! Democracy became our political ideal because people, real living persons, can generally be trusted to act from an extended sense of self-interest that encompasses economic advantage, familial welfare, social justice, community well-being, moral values, spiritual/sensual response to the environment, etc. Big Bodies are just not that evolved. They are monotonic commercial organisms that can only see the world economically, as a food source or toilet. They have no more conscience or benevolence than a tumor, and are obviously far too primitive to deserve social power. </blockquote>
<font size="+1" color="#FF0000">Lots more to come...</font>

</blockquote>


<p>
<p>
<div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
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

export default NewchauFaq;
