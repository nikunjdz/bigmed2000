import { useEffect } from "react";

const EarthourEegsynch = () => {
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
<FONT  COLOR=#FFFFFF><H3><CENTER><EM>Alpha to Omega with Lunar Conspiracy </EM></H3>

<IMG SRC="${BASE_URL}graph/earth3c.jpg" LOWSRC="${BASE_URL}graph/earthba2.gif" ALT="Terra Erotica" WIDTH=150 HEIGHT=153 HSPACE=5 VSPACE=5 ALIGN=bottom><BR><BR>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=480 HEIGHT=7>
<H3>SILENT 'COMMUNICATION' <BR>INCREASES EEG SYNCHRONY</H3>
<H3> Brain Mind Bulletin, July 1988 </H3>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=480 HEIGHT=7></CENTER>
<FONT  SIZE=4 COLOR=#FFFFFF>

<BLOCKQUOTE>  A series of experiments has shown increased brainwave synchrony 
  between the two hemispheres when pairs of subjects are attempting
  to "feel each other's presence." Experimenters also recorded an 
  increasing similarity of EEG pattern between the pairs of 
  communicators over the course of the session. In some instances, 
  the match between subjects during this "empathic communication"
  was dramatic. (See chart. page 8. [not included]). Resemblance
  between the EEG's of partners was found even when they had not met
  or tried to communicate before the experiment. Judges were shown
  all possible combinations of the EEG patterns of individuals
  recorded during communication. Seventy per cent of the time they
  were able to identify those produced by partners. 
  <P>
  Thirteen pairs were studied and four groups of three persons each.
  The three-person group showed a weaker effect than the pairs. 
  Normally the left and right hemispheres are somewhat independent
  in their electrical activity. Synchronous activity has been
  associated with unusual states of focus, meditation or efforts at
  healing. 
  <P>
  "The subject with the highest concordance was the one who most 
  influenced the sessions," said Jacobo Grinberg-Zylerbaum and
  Julieta Ramos of the Universidad Nacional Autonoma de Mexico. In
  other words, the EEG of the individual with less synchronicity
  between hemispheres would gradually come to resemble the EEG of
  the person whose two sides more closely resembled each other. 
  <P>
  Sessions took place in a soundproof and darkened Faraday cage (a 
  lead-screened chamber that filter out all outside electromagnetic 
  activity). Each pair was instructed to close their eyes and to try
  to "communicate by being aware of the other's presence and to
  signal [the experimenter] when you feel this has occurred." 
  EEG analysis showed that during the periods when subjects reported
  communicating "the interhemispheric correlation patterns of each 
  subject are very alike." One subject's EEG became similar to each 
  of three partners with whom he was paired. After one session, when
  the partners reported a feeling of having blended, their EEG 
  patterns had become nearly identical. 
  <P>
  There was no talking or touching during the sessions. Some
  subjects reported feeling physical sensations, and others said
  they had active images and thoughts of their partners. 
  During control sessions, when subjects sat in isolation before and
  after each pair session, subjects showed no increased synchrony 
  between their own hemispheres or between each other. 
  <P>
  The researchers said that they have been studying the phenomena
  for several years, but only recently had access to sophisticated 
  equipment for verification purposes. The findings confirm
  Grinberg-Zylerbaum's theory, proposed in a 1981 book, that
  "neuronal fields" can interact and alter each other.
  <P>
Their report appeared in the //International Journal of
  Neuroscience 36:41-52, Facultad de Psicologia, Universidad
  Nacional Autonoma de Mexico, Mexico City 04510 D.F. </FONT>
</BLOCKQUOTE>
<BR>





<HR>




<BR>
<CENTER><IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=450 HEIGHT=7><BR><BR>
<H3><CENTER>- Please Suggest Other Sources and Send to:<BR><BR><A HREF="mailto:earthour@nancho.net">Earth Hour Decentral</A> </CENTER></H3><BR>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=450 HEIGHT=7></CENTER><BR><BR>

<BR>

<CENTER><A href="${BASE_URL}earthour/earthour.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehconc.gif"  ALT="Concept"></A>

<A href="${BASE_URL}earthour/ehdates.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehcale.gif"  ALT="Calendar"></A>

<A href="${BASE_URL}earthour/ehtactic.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0  SRC="${BASE_URL}butts/btehtact.gif" ALT="Tactics"></A>

<A href="${BASE_URL}earthour/ehreport.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33 BORDER=0 SRC="${BASE_URL}butts/btehrprt.gif" ALT="Reports"></A>

<A href="${BASE_URL}earthour/ehrefs.html"><!-- Graphic Tag --><IMG WIDTH=116 HEIGHT=33  BORDER=0 SRC="${BASE_URL}butts/btehrefs.gif" ALT="References"></A></CENTER>

<BR><HR WIDTH=90% ALIGN=center SIZE=3>
<BR>

<CENTER><H4>Supported By People Like You (which is to say as yet, By Vanishing Little At All) <BR> - Quickly
Correct This Disgraceful Situation, or At Least Endure <A href="${BASE_URL}thespiel.html">The Spiel</A>.<BR><BR>

LINK US UP ! Help Lay Fuse to Others of your Illustrious Ilk<BR>
</H4>

<H5>Shareright (S) 1999 : Nancho Ijin Butai  
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

export default EarthourEegsynch;
