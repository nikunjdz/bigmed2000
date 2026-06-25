import { useEffect } from "react";

const Bigmed2001Strategy = () => {
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
<TABLE BORDER=3 cellpadding=9 WIDTH=476 HEIGHT=130 BGCOLOR="#000099">
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}bigmed2001/graph/enlight.jpg" ALT="Enlighten the people..." WIDTH=470 HEIGHT=128>
</TD></TR>
</TABLE>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=500  HEIGHT=5 VSPACE=7><BR>
<FONT COLOR=#000066><U><EM>The Nancho Strategy<BR></EM></U>
<STRONG><FONT  SIZE=5 COLOR=#000066>B<FONT SIZE=3>IG </FONT>M<FONT SIZE=3>EDICINE </FONT>2000</FONT><BR>
The Last Five-Year Plan</STRONG></FONT>
<BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=500 HEIGHT=5 VSPACE=7>
</CENTER>
<BLOCKQUOTE>
<STRONG>
<H3><U>About the Strategy</U></H3>
Our strategy, thank God, is foolproof. We just have to attract the power of activist attention to our oddly efficient ends and means. That is, the broad-spectrum shrinkage and salubriation of the corporate pathogens now causing 80% of our eco-social morbidity. 
<P>
We propose to accomplish this in a single unorganized crusade, and invite to that end any fair, foul or other love&amp;war-justified means. Any tactic, that is, that will help swiftly resolve Big Bodies back to human-scale entities rooted in their communities, responsive to the environment, and democratically accountable to their members and neighbors.
<P>
Swiftness is key. (These suckers move and mutate fast.) Big Medicine thus assumes a 5-year deadline for turning around Big pathology in the US and launching a transformative churn through the whole planet's nervous system.<P> 

We are starting this reaction as we speak with a cheap, irrevocable <A href="${BASE_URL}memes/sitstrat.html">cascade of new memes and ideas</A> that expose our bodies -- sensual, corporate and planetic -- in a revelatory new light.  As these  catalytic concepts drift down through the Zeitgeist they will randomly contact the <A href="${BASE_URL}sithere.html">10% of us with immunological instincts or compassionate ardor</A>, and abruptly empower them with contagious insights. It is really that simple. <P>

New concepts permit new perceptions. New perceptions focus consciousness. And focused consciousness is the most powerful, creative and healing force in the world. Period. (You know how experts are always saying we have just enough time and resources left  to solve all our problems, we just lack the political will. Well, Big Medicine will finally focus your attention to fuse and detonate that will.) And you can be an errant unauthorized part of it. When you think about it, you already are.


<H3><U>About the Campaign</U></H3>

This campaign is not an edifying symbolic exercise like the noble Greens and Libertarians treat us to every 4 years. It opens a decisive new front in the war to reclaim the Earth, governance and erotic possibility from Big Body control. (As you shall soon recognize, Big Bodies are the vast corporate organisms that now dominate our economy, media consciousness and public decision-making. They are huge, rich and toxic,  and are collectively responsible for most of our social and planetary dis-ease. Fortunately, they have now reached the end of their era.  Our job is simply to awaken humanity to their pathological nature, and ensure they dissolve swiftly and gracefully. <P>

Since this offensive is empowered by proven science, spiritual insight, and 50 million years of evolutionary yearning, it really cannot be defeated. Since it rejects hierarchy and centralized power, it cannot be betrayed. You need believe us only once: there are insights here worth taking to heart. When you can see Big Bodies clearly yourselves, you yourselves as sovereign citizens (and intelligent animals) should know what you have to do.<P>
 
This  campaign is thus designed to find the mantic ten percent among you on whom all else depends, pour a few enlightening words in  your ear, and speed you on your way. Your gut instincts and the forces of history will draw your maps from there. (Ten percent is deceptive  since you actually pose a double threat - the 10% who command the magic of placebo power and all its evolutionary promise, and the activist 10% or immunogentry who embody our body politic's vital immune forces and need only better reconnaissance to prevail.)  It is a somewhat elitist appeal because you are hardly a majority, but since you are scattered randomly through all classes, races, creeds and professions, it certainly seems democratic enough.<P>

So we depend as much upon biological insight as political philosophy, and see your crucial minority as our last line of eco-social defense. The immunogentry  are not our police or public servants (though some are) nor are you our physicians or politicians (though some are). And certainly you are not our mega-mercenary protectors in the military-industrial complex (though there are even some in there).  This diffusion is your strength and our challenge, because the campaign will have to get pretty damn noisy to reach you all. If something here does touch you, though, please smuggle it on to kindred souls. You can recognize each other better than we can and know who really craves new arms.  




</BLOCKQUOTE></STRONG>

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

export default Bigmed2001Strategy;
