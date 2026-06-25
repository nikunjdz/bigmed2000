import { useEffect } from "react";

const CityhallKyo1200 = () => {
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
<P>
<CENTER><H4><EM>1996 Report from the Virtual Mayor on Kyoto's 1200th Anniversary</EM></H4>

<CENTER>
<IMG SRC="${BASE_URL}bulls/joshline.jpg" WIDTH=280 HEIGHT=4 vspace=7><BR>

<FONT  SIZE=5>KYOTO REPORT</FONT>
<HR WIDTH=200 ALIGN=center SIZE=3>

<IMG SRC="${BASE_URL}graph/kyoto.gif" WIDTH=200 HEIGHT=84>
<HR WIDTH=200 ALIGN=center SIZE=3>
<BR>
<STRONG><FONT  SIZE=5>THE 1200TH BIRTHDAY <BR>&<BR> BIG BODY BLUES </FONT></STRONG><P><EM>By W. David Kubiak</EM><BR>
<IMG SRC="${BASE_URL}bulls/joshline.jpg" WIDTH=280 HEIGHT=4 vspace=7></CENTER>
<P>
<HR WIDTH=250 ALIGN=center SIZE=3>
                    <H3>A few odd, organic reasons for optimism <BR>
                     amid the gaud, corruption and apathy <BR>
                           of the old city today</H3>
<HR WIDTH=250 ALIGN=center SIZE=3></CENTER>

<P><P><BLOCKQUOTE>
<STRONG>PART I: UNNATURAL HISTORIES: Big Body Belches and Grassroots Groans</STRONG><P>
<FONT  SIZE=+1>
<STRONG>Let's start with the few things that are still perfectly clear in
Kyoto</STRONG> - like the total dominion of the cement lobby, the
big power puppet show of local governance, and the motives of those
flogging ancient corners with the neon gash of 7-11s, MacDownloads,
Shakeys, Kentucky Fried, and their innumerable Nipponized belch-alikes. To anyone retaining the slightest peripheral vision, depth
perception or courage of memory, it is a desperately depressing time
to walk the town. <P>

<STRONG>This is not just the "ya-shoulda-been-here-back-in-'52-mate</STRONG>/twang
the spittoon" voice of old-Asia-hand one-upsmanship. This is a voice
that has gargled away to commiserable silence one too many times on
arriving airport limos, trying to console trembling friends who had
saved mightily for this pilgrimage - their once in a lifetime trip
to the holy land - the Japan that blessed their youth with glimpses
of astonishing craftsmanship, cosmic Zen mania, erotically intense
ways of life-as-art, and hope - the Japan that lives on in Alan
Watts paperbacks, \$50 coffee table tomes, battered haiku anthologies
and tourist training films - the Japan nowhere visible to their
panicking eyes as we whiz along the brutally electrified concrete
gulches pouring traffic into Kyoto. Salvador Dali, paying his last
respects to the town shortly before his death, caught the mood:
"Dios mio, what a trajeeec mess they make of her..." <P>

<STRONG>The tragedy is not just architectural chaos</STRONG>, although demolishing
2,000 graceful wooden buildings a year for two decades in a town
this size does take its toll, especially when they are instantly
replaced with prefab tenements and kitsch facades that would make
New Jersey wince. The tragedy is that one of the most beautifully
crafted cities of the world, the master artisans who created her,
and the spiritual/aesthetic traditions that gave her life can all be
so blithely swept away. And just at a time when the values that "old
Kyoto" epitomized are being trumpeted from every Green and New Age
pulpit as humanity's best/last hope for sanity and survival. But, as
one of my designer draped university students recently challenged,
"If our tradition is so smart, why is it dead?" Excellent question -
turn it around fast. "Alright, class, why do ancient truths and
manifest wisdom fare so wretchedly in today's market place of ideas?
Class...?"<P>

<STRONG>Haven't had much to offer my bereft pilgrims either</STRONG>. Too late and
bootless to point out, "look, I did try to warn you..." or "well,
yeah, but compared to Nagoya..." or "just be cool, 'that Kyoto' is
sure to be reissued soon in VR, interactive CD and all popular
multimedia formats..." But to those of you who still love and admire
Kyoto's lush mythology from afar, it must be said: Stay Home! What
has happened here has/does/will hurt.<P>

<STRONG>If, however, you are less pilgrim than knight or mercenary</STRONG> - seeking
righteous battle, exotic arms, damselary distress or just the Mother
of All Hard Ball with some heavy Big Bodies, get your ass over here!
Local activists - anti-high rise Buddhists, anti-nuclear moms, anti-"development" environmentalists - are all now soliciting foreigners'
aid and abetment under a Gaian "Best of Times/Worst of Times" banner.
(Quietly conceding, of course, that the Best still lurks in spectral
probability waves, out there with Schroedinger's Cheshire Cat, while
the Worst tends to be fully actualized, concretized and in your face.)<P>

<STRONG>There are, however, several unique (or at least strange) reasons </STRONG>to
believe that grassroots partisans of this apparently defeated and
occupied city may not only have a chance, they might have important
new messages for activists everywhere. First, they are starting to
talk strange - using words like <EM>anthroculture</EM>, <EM>ki theft</EM> and <EM>social
endocrinology</EM>. Years of cross-pollination here between ecologically
concerned ki energy groups, radical Buddhists and eastern medical
adepts, on the one hand, and new-lefty community-power coalitions
swayed by Gaian thought and living systems theory, on the other, are
giving birth to a vocabulary of activism that sounds more like meta-medicine than political science.<P>

<STRONG>Second, they are starting to view the world strangely</STRONG>. Heretofore
discrete groups devoted to a wide variety of seemingly
distinct problems (in education, ecology, agriculture, minority/women's rights, health care, etc.) have begun to notice that
whatever their issues, they all end up facing the same enemies: 
a relative handful of huge corporate bodies that they now see as 
the prime generic source of most social/ecological pathologies.<P>

<BLOCKQUOTE>[These are no longer fringe views. Even the staid, republican but
apparently pissed off Japan Architectural Association has toyed with
this analysis. On June 19th, as their sardonic contribution to
Kyoto's 1200th festivities, the JAA sponsored a full-day forum that
decried the common malignant influence of Japan's great corporate
bodies on schools, family life, political integrity, international
relations and the natural environment. (Perhaps the only thing the
Big Bodies weren't explicitly damned for was their recent creation
of in-house architectural divisions that now monopolize 85% of the
rapidly shrinking construction market, idling and impoverishing
hundreds of JAA independents.)]</BLOCKQUOTE><P>

<STRONG>And finally, they are starting to act strange</STRONG>. Like the raggedy
white-shirted Tiannemen hero standing alone against government tanks,
Japanese citizens also face their leviathan foes completely unarmed.
Without exception, citizens banding together here to seek reforms or
redress are denied: nonprofit status (money), access to vital
documents (information), objective press (exposure), non-glacial
court suits (justice), as well as legislative recourse to
initiatives, referenda or even functioning "legislators" (democracy).<P>

<BLOCKQUOTE>[Point of info: Japanese lawmakers do not make laws, they simply
debate bills presented by the ruling bureaucracies. The precious few
"representatives" who even try to represent constituents' interests
in these proceedings are called, with unintended irony, the <EM>shimin-
ha</EM> or "citizen faction." Everyone else represents the well-funded
<EM>ha</EM>s of the LDP, Socialists, Communists, etc. who pay their
electoral pipers and call their incumbent tunes. Thus what goes on
in any "representative" assembly in Japan has little or nothing to
do with citizens, and primarily reflects accommodations among the
bureaucracy, large corporate bodies and local reps of national party
headquarters.]</BLOCKQUOTE><P>

<STRONG>Forget. too, local influence</STRONG>, let alone control, over police, media
or even their children's schools, and you begin to appreciate the
hopelessness of their situation. Their dogged persistence under such
duress, while valiant, has been virtually fruitless, causing immense
frustration, stress and exhaustion. Many citizen groups thus began
exploring ways to revive their spirits and apologize to their bodies
for all the political ravage. Techniques differ - from New Age group
massage, counseling and tree hugging, to ancient animistic retreats,
pranayama and conspiracy (conspiration) rituals. <P>

<STRONG>But whatever their means,</STRONG> many activists here now talk of a moving
"rediscovery" of the body - as a model of noncoercive political
order (cf. Lao Tzu and the Yellow Emperor); an existential compass;
and/or an inspiring source of immune system analogies for future
movement scenarios - with activists cast as "immunogentry," the
restless lymphocytes of Gaia's body politic, and virulent corporate
bodies as the disease organisms. (Ralph Nader as macrophage?) <P>
Such bio-social intuitions also led to the intriguing prospect of
the body as a player. Contemplating humans demographically as
sentient, sacred and highly suppressed animals (rather than as
blacks, women, Christians, unionists, etc.) suggests some very
different social agendas and a vast "new" constituency of support.<P>

<STRONG>In sum, Japan's populists and would-be reformers</STRONG> are racking their
synapses to redefine their impasse as surmountable. Considering the
global stakes, they deserve and need your help, especially help
developing and propagating the categories of thought that render
their visions viable. As a first conspiratorial step toward which,
may I furtively entrust you with the following sampler and brief
evolutionary history of their most fertile concepts. May your force
be with them...<P>
</BLOCKQUOTE>
                     <CENTER><H3>Go to <BR>Part II<P><A href="${BASE_URL}cityhall/rectmeme.html">HISTORY IN YOUR PANTS: <BR>The Rectification of Memes</A><BR>
                                  <EM>Explorations in Bio-Social Anthroculture</EM></H3>
<BR>
<HR WIDTH=250 ALIGN=center SIZE=3>
<A href="${BASE_URL}cityhall/rectmeme.html"> Part II</A> |  <A href="${BASE_URL}arcmain.html#anthrocult">Anthroculture</A> | <A href="${BASE_URL}arcmain.html">Archives</A>
<HR WIDTH=250 ALIGN=center SIZE=3>

</CENTER>


</FONT><P>





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

export default CityhallKyo1200;
