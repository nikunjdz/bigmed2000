import { useEffect } from "react";

const FdlapKashmirJkstates = () => {
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

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4 VSPACE=6><BR>
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>FDL-AP Archives</EM></STRONG></FONT><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
<BR><BR>
<HR WIDTH=300 ALIGN=CENTER SIZE=3>
<H2>"TALK, DON'T RACE"</H2> 
<H4>Groundbreaking editorial from <BR>the respected Statesman Newspaper<BR>
Calcutta, May 30, 1998</H4>
<HR WIDTH=300 ALIGN=CENTER SIZE=3><BR>
</CENTER>

	<FONT  SIZE=4>

 
<BLOCKQUOTE>
            <STRONG>Paradoxical as it may sound</STRONG>, India and Pakistan are now better
placed to resume bilateral talks than before Pokhran and Chagai. The
nuclear genie is out of the bottle. Both countries have addressed their
respective nuclear angst's - India's complaint that the acknowledged
nuclear powers have shut the door on her, Pakistan's that it has "no
choice" but to follow India. It can be argued, as this newspaper has, that
Pakistan would have been better off without testing. That they passed up
the opportunity is understandable because of domestic pressure. There was
little choice for Nawaz Sharif, who left to himself is not a reflexive
bigot. But now that Nawaz Sharif's hands have been, in part, forced to
press the nuclear button, he and the Indian Prime Minister must take the
lead in heading off hawks in their respective countries from starting the
idiotic folly of an arms race that is not strategically necessary - the
balance of terror is established - and will be economically disastrous.
Instead, the two countries can now use the shade of their nuclear
umbrellas to sit down and talk on issues that have nothing to do with
kilotons but are damaging nonetheless.
<P>
            India, the bigger and arguably the more mature of the two,
            must
take the lead. And no lead is better than a grand policy on Kashmir. Home
Minister L. K. Advani has been vocal on tackling militancy in the valley.
His calls for pro-active action against militants are perhaps in
deliberate and planned contrast to the Prime Minister's moderate approach.
But diplomacy is all about responding to changing situations. And India
should respond to Pakistan's tests and the possibility of escalating
tensions by making a unilateral posture on Kashmir. It can announce that
the government will exhume the nearly five decades old United Nations
proposal to hold a referendum on the question of the valley's (Jammu &
Kashmir) territorial loyalty.
<P>
            This will seem proposterous to the BJP, indeed to many
            Indians.
But an astute political party - and the BJP has shown it can be one - does not
remain a prisoner of conventional wisdom. More, a referendum on and in
Kashmir, internationally supervised, will again put India in a different
league from one defined by sub-continental squabbles - a status the BJP
thinks the country deserves. The "worst" possibility is that Kashmir may
not choose to remain with India. Is that too bad a prospect compared to
the price India pays in blood, money, and a general marring of reputation
when the troops "occasionally" misbehave. A Kashmir referendum will also
blunt global condemnation of the sub-continent as a mad hatter area full
of nuke-wielding hot-heads. As well as force Pakistan to drop its
belligerence, both verbal and clandestine. These are benefits that can be
grabbed only by a government with vision and courage. The question is does
Atal Behari Vajpayee have the vision. Or will he risk the well-worn
grooves of sub-continental charades.
<P>
            Catholics and Protestants have called a truce to violence and
bloodshed in Northern Ireland after a quarter century. Earlier France and
Germany fought bitterly over Alsace Lorraine since the end of the First
World War: now no one remembers who has got it. We can do the same with
Kashmir. Do we have the necessary confidence in ourselves?<P>

<CENTER>END</CENTER></BLOCKQUOTE>



<CENTER>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlalert.html"><STRONG>Back to Alerts</A></STRONG> | 
<A href="${BASE_URL}fdlap/fdlpaper.html#essayarc"><STRONG>Main Archives</A></STRONG><BR>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:Secretariat@fdlap.org"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A href="${BASE_URL}fdlap/kashmir/fdlorg.html#address">Our Address...</A></FONT>
<HR WIDTH=105 ALIGN=LEFT SIZE=2>
<FONT  SIZE=-2 COLOR=#007339>Pagework by Nancho East</FONT>


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

export default FdlapKashmirJkstates;
