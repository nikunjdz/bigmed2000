import { useEffect } from "react";

const Sharight = () => {
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


<HR WIDTH=400 ALIGN=center SIZE=3>
<H3><FONT  COLOR=#800000><B><U>THE GENESIS OF SHARE-RIGHT   (S)</U></B></FONT></H3>

                     <H4>"YOU MAY REPRODUCE THIS MATERIAL IF<BR>
                       YOUR RECIPIENTS MAY ALSO REPRODUCE IT."</H4>
By Kevin Kelly</CENTER><HR WIDTH=400 ALIGN=center SIZE=3>
  
   <BLOCKQUOTE>  Sometime in the last year or so, announcements like the one
  above were being attached to computer network messages. Unlike
  communication in the public domain, which anyone can use for
  whatever commercial purpose, share-right limits its benefits to
  those willing to share the bounty in the same way they received
  it. Users can take it only if they pass it on with the same
  promise. As Jack Powers, one of the network riders, says, "I like
  this idea of rights which travel together withe merchandise."
  Although share-right was born on the networks, I envision it
  taking root in other decentralized, highly replicating
  communications, like xerox publishing or tape duplicating. Howard
  Rheingold, a host on the Well, calls it "a self-reproducing word
  virus that eats intellectual property."<P>
    As far as I know, the share-right concept first appeared at the
  junction of USENET and Stargate, two network systems of different
  politics. USENET, one of the most libertarian networks running,
  distributes and redistributes messages in an ad hoc style of
  complete non-ownership. You don't post something on USENET without
  expecting it to be copied all over the country, or the world.
  Stargate is a privately run network which beams net news into space
  by hitching the messages to an unused area of information
  transmission in the "blink" between screens on cable TV
  broadcasts. It would bounce news off a satellite, down to distant
  pickup sites, and into local computers again. I'll let Eric Fair,
  a USENET engineer, tell the rest of the story:
  <P>
  "Stargate as originally envisioned was a cheap way to send USENET
  news everywhere by true broadcast. Unfortunately the communication
  legalities were such that they could not claim to be a common
  carrier (like telephone companies), and this led directly into
  Stargate becoming a subscriber service instead (like a publisher).
  Stargate has an agreement that prohibits their subscribers from
  redistributing the articles they get from Stargate because, of
  course, it would erode Stargate's subscriber base if they did.
  <P>
  "Naturally, this caused a bit of a stink on the net, and the
  result was the copyright notices which you see on some people's
  articles ("You can redistribute only if your recipients can."),
  preventing Stargate from transmitting those articles unless their
  subscribers can."<P>
  
     You, reader, are encouraged to duplicate this message, but only
  if your readers may also duplicate it.

<P align=right>
  
                               Kevin Kelly (S) Share-right '87<BR>
                                     Whole Earth Review, Winter, '87</P></BLOCKQUOTE>

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

export default Sharight;
