import { useEffect } from "react";

const Bigmed2001Advisors = () => {
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

<FONT  COLOR="#000090" SIZE=4><STRONG><CENTER>
"The great heroes of culture are those who <BR>
who have a passion for diffusing, for making prevail <BR>the best knowledge and ideas of their time."<BR>
 </STRONG>Matthew Arnold</FONT><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=500 HEIGHT=5 VSPACE=4><BR>
<FONT  COLOR=#F5FAFC></FONT>
<EM><FONT  SIZE=5 COLOR=#000066><STRONG>"Bonsai the BIG" <br>
Prophets &amp; Advisors</STRONG></FONT></EM><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=500 HEIGHT=5 VSPACE=4></CENTER>
<FONT  size=4 COLOR=#000080>
<BLOCKQUOTE>
<BLOCKQUOTE>Times of great consequence require great sages, lucid visionaries grounded in the green, sweat and wonder of the Real World. Such times also demand great debates on our future course as a species and a sovereign people. Here at the turn of the Millennium with the US at the crest of its potency, we Americans enjoy an unprecedented interlude to assess our past, our gains, our postponed dreams and purposes. To kindle this conversation we called upon the finest, most original minds of our age. Their overlapping perspectives dramatize our corporate bane and/or prefigure a human future far more exciting, just and erotic than anything Big Body politics would ever like us to imagine. 
</BLOCKQUOTE>
</FONT>
<CENTER>
<A NAME="index"></A>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=80% HEIGHT=5 VSPACE=4><BR>

<TABLE CELLPADDING=6 CELLSPACING=2>
<TR><TD>
<STRONG>
<UL>
<LI><A HREF="#banks">Dennis Banks</A>
<LI><A HREF="#brook">Peter Brook</A>
<LI>                 <A HREF="#chick">Ernest Callenbach</A>
<LI>            <A HREF="#fritjof">Frijof Capra</A>
<LI><A HREF="#noam">Noam Chomsky</A>
<LI>         <A HREF="#ry">Ry Cooder</A>
<LI><A HREF="#crichton">Michael Crichton</A>
<LI><A HREF="#richard">Richard Grossman</A>
<LI><A HREF="#hazel">Hazel Henderson</A>
<LI><A HREF="#satish">Satish Kumar</A>
</UL>
</STRONG>
</TD><TD>

<STRONG><UL>
<LI><A HREF="#frances">Frances Moore Lappe</A>
<LI><A HREF="#jerry">Jerry Mander</A>
<LI><A HREF="#vanmatre">Steve Van Matre</A>
<LI><A HREF="#arne">Arne Naess</A>
<LI><A HREF="#nader">Ralph Nader</A>
<LI><A HREF="#diane">Diane Sawyer</A>
<LI><A HREF="#suzuki">David Suzuki</A>
<LI><A HREF="#wallerstein">Immanual Wallerstein</A>
<LI><A HREF="#watson">Lyall Watson</A>
<LI><A HREF="#weil">Andrew Weil</A>
</UL></STRONG>

</TD></TR>
</TABLE>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=80% HEIGHT=5 VSPACE=7><BR>
Click on names for full texts.<BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=80% HEIGHT=5 VSPACE=7></CENTER>

<A NAME="hazel"></A>
<H3>Ecological Economics</H3>
<DL>
<DT><A href="${BASE_URL}advisors/hazel.html"><H4>Hazel Henderson</H4></A><P><dd> <STRONG>"The real wealth of nations is, of course, their citizens and their educational level and their eco-system resources. But now the world is being run on this strange sort of virtual economy,
     you might say, which is a total fiction, and it causes a lot of pain in Third World countries. For most of the people in the world, a
     collapse of that counterfeit symbol system would be a benediction. All it would mean is that
     bulldozers would stop tearing up rainforests and habitat and we could get on with the business
     of reconstructing an honest money system."</STRONG>
<A NAME="suzuki"></A>
<DT><A href="${BASE_URL}advisors/suzuki.html"><H4>David Suzuki</H4></A><dd><STRONG>"Economics is at the heart of the current crisis affecting the planet. And I
     think the fact that every government on earth seems to have bought into the current idea of economics
     virtually assures that we will continue at the same destructive rate. The whole drive for GATT
     agreements, for greater free trade and globalization of the marketplace absolutely assures that we're
     going to destroy the planet. And the reason is because economics - the way it's been constructed - is not
     connected to the real world. If you ask an economist where in your economic graphs - with all these little
     arrows going from the manufacturer to the dealer to the household and so on - where in these graphs of
     how the economy works are air, water, soil and biological diversity? They'll tell you, "oh, those are
     externalities." They've been externalized from the economic system. Well, then these guys live in a loony
     tunes world that's not connected to reality at all...  and the things which sustain our very lives they completely
     discount as of no concern."


</STRONG>
</DL>
<A NAME="wallerstein"></A>
<DL>
<DT><A href="${BASE_URL}advisors/wallerst.html"><H4>Immanual Wallerstein</H4></A><DD><STRONG>

"Large enterprises have never paid the entire costs of their
     production. They have externalized costs, meaning that governments have paid for part of the
     costs through infrastructure that the governments have built on their behalf and thus many
     taxpayers have in effect paid for it. But more importantly, governments have not
     forced enterprises to bear the costs of waste and pollution and the use of natural
     resources. Now that's all very well and good as long there is a seemingly unending supply of
     space into which waste can be dumped, and resources that can be
     utilized. But in fact that is the ecological problem of our age. We have come to the exhaustion
     point for a number of natural resources. We have used up a lot of the space for waste and
     pollution...We can renew our resources,
     we can clean up the waste and pollution. But the cost of that is absolutely enormous, and the
     question is going to be who is going to bear the costs? And that is the major problem  today."
</STRONG>
</DL>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 ><BR>
 <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Post-Corporate Democracy &amp; Politics</H3>
<A NAME="nader"></A>
<DL>
<DT><A href="${BASE_URL}advisors/nadera.html"><H4>Ralph Nader</H4></A><dd><STRONG>"The key focus is
     multinational corporations. They're the dominant institution in the world today. They
     manipulate and control governments.  They are controlling our
     politics, our economics, our culture, our education, our children - increasingly they're raising
     our children - with video,TV, over-medication, addiction industries and so on. They're
     concentrating the media and now they're beginning
     to control the genetic heritance of humankind, the flora and fauna. I mean, there's not much left,
     right?"</STRONG>
<A NAME="frances"></A>
<DT><A href="${BASE_URL}advisors/frances.html"><H4>Frances Moore Lappe</H4></A><dd><STRONG>"Instead of just telling people that we're in big
     trouble, I'm trying to take some of the traditional American themes of freedom and democracy
     and say, "Okay, let's pull from the best of what we have. We don't have to start from scratch, we have some very important traditions
     to draw on. And one of them is the tradition of democracy, democracy understood as we
     citizens taking responsibility for our world rather than the notion that some expert somewhere is going to do it for us. And now, of course,
     with the power of the media, politics has simply become who can put on the best commercials."</STRONG>
</DL>

<A NAME="chick"></A>
<DL>
<DT><A href="${BASE_URL}advisors/chick1.html"><H4>Ernest Callenbach</H4></A><dd><STRONG>"The founders could not have foreseen the growth of enormous concentrations of corporate      wealth and power, and the parallel growth of a huge federal establishment ostensibly serving to
     regulate the corporate sector but in fact mostly coordinating, subsidizing, and administering it,
     supported by taxes on personal as well as business income. In our times, Congress has steadily
     shifted the tax burden from an approximately 50/50 share between corporations and
     individuals at the end of World War II to the present situation where, as a result of both
     general policy and generous provision of loopholes, only some 10% of total taxes weigh on
     corporations."</STRONG>
</DL>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Big Body Banishment</H3>


<A NAME="noam"></A>
<DL>
<DT><A href="${BASE_URL}advisors/drnoam.html"><H4>Noam Chomsky</H4></A><dd><STRONG>"Take a big corporation like General Electric, internally it is a tyranny. It is about as tyrannical as any human institution has ever been. It is a dictatorship run from the top down like a fascist state and it is as close to the totalitarian ideal as any body humans has created, and the same is true of every other big corporation... The problem is not that these bodies have too many rights, it is that they have any rights at all."</STRONG>
</DL>
<A NAME="richard"></A>
<DL>
<DT><A href="${BASE_URL}bigbody/chrtink1.html"><H4>Richard Grossman</H4></A><DD><STRONG>
"Corporations may have taken our political power but they have not taken our Constitutional sovereignty...

     Today, in our names, state legislators give charters to individuals who want to organize businesses. Our
     legislators are also supposed to oversee how every corporation behaves. Corporations cannot operate -
     own property, borrow money, hire and fire, manufacture or trade, sign contracts, sell stock, sue and be
     sued, accumulate assets or debts - without the continued permission of state officeholders.
     Citizens are guaranteed sovereign authority over government officeholders...

     To exercise our sovereign authority over corporations, we must take back our political authority over our
     state governments.
     Our right to charter corporations is as crucial to self-government as our right to vote. Both are basic
     franchises, essential tools of liberty."

</DL>


<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Post-Corporate Ecology</H3>
<A NAME="arne"></A>
<DL>
<DT><A href="${BASE_URL}advisors/anaes.html"><H4>Arne Naess</H4></A><dd><STRONG>"It's not enough to be
lovers of nature and say "oh, how beautiful here and how beautiful
there" and "we should protect this and we should protect that".
As many as possible of the deep ecology supporters should be active in local politics... 
Most people who are very fond of nature, detest politics. So we are
grateful for whatever young or old people do to change policies
so that governments are able to fight the tremendously big transnational firms 
who have more power than nations. There
are powerful international firms much more powerful than, for
instance, the nation Norway or Sweden or Denmark. So, there is
the thing that we should take notice of."</STRONG>
</DL>

<A NAME="banks"></A>
<DL>
<DT><A href="${BASE_URL}advisors/banks.html"><H4>Dennis Banks</H4></A><dd><STRONG>"(Our Indigenous People's Tribunal would) ask the United Nations to create an Environmental Security Commission.. an international forum 
for three things to happen. <P>
   One would be to develop an international code on use of
and protection of water - any ocean, lake,
river, stream, and the rain. If we set these standards then no nuclear facility would be able to use
water the way they use it now... Another would be the establishment of a commission
for the use of and protection of the Earth's soil...  the soils that grow our food.
   The third one would be for the establishment of a commission
for the use and protection of the air.<P>
   So those three could set the stage to
develop real strict, rigid, enforcable standards for the air, for
the water, for the soil. And we'd have to take those ideas to
every village in this world, in every country and
ask people to demand  that each government
enact those kinds of safeguards  for the
environment. Then nothing could get by and nuclear facilities
would of course also have to shut down."</STRONG>
</DL>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<A NAME="satish"></A>
<DL>
<DT><A href="${BASE_URL}advisors/satish.html"><H4>Satish Kumar</H4></A><dd><STRONG>"Industrial, corporate society is a society and a vision of dissatisfaction. Whatever you have is never enough; you should have more, more,  something different. "Throw it away. We have a new product for you. There's a new model."  There's a new something always. So, this is a society of obsolescence, a society of perpetual dissatisfaction and discontentment...We have to realize is that we are fighting tremendously strong
     forces. The entire military is behind the power of globalization; the full governmental
     power of every single nation in the world is behind it. The entire system of education and
     universities are the pillars of the industrial society.... The entire media system and the advertising world -
     the newspapers, the radio, the television, the entire system is behind this global
     corporate power - and you can almost say that in a  subtle way the capitalist system is almost fascist in its unity... Ours is not a challenge against the global  corporate industrial society, it's a challenge to ourselves. Are we prepared, are we ready to create a new world?"</STRONG>
</DL>
<A NAME="watson"></A>
<DL>
<DT><A href="${BASE_URL}advisors/watsonly.html"><H4>Lyall Watson</H4></A><DD><STRONG>
If we have time to do anything at all,  we have time to change the mind, that means the group mind.
We don't have 5,000 million years of evolution to play with. What we have is
     perhaps five. And you can change your mind in a second, but you can't change your
     body in that time. And if the mind is going to change, whether it's by the "hundredth
     monkey" phenomenon of reaching a necessary critical mass where there will be a
     quantum leap, or whether it's a slow osmotic process, I don't
     know which way it's going to work. But I'm rather hoping it's the former because I think
     that's our only hope of salvation -- a quantum leap, brought about by reaching a
     threshold of some kind which will make us completely different willy-nilly, even
     against our will. Probably better that way. I think that's how it works."</STRONG>


</DL>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Post-Corporate Education</H3>
<A NAME="vanmatre"></A>
<DL>
<DT><A href="${BASE_URL}advisors/vanmatt.html"><H4>Steve Van Matre</H4></A><dd><STRONG>"I really think that we've
     blown it badly in America and I don't want anybody else in the world to look at what we've
     done in the field of environmental education as some sort of a model because I think it is a
     model of failure...  To be honest, environmental education tends to be infused with management messages. As if the Earth is our horn of plenty, our cornucopia and all of this is just here for our benefit if we just do a little
     better job of managing it, everything will be all right... I'm afraid that  when you look at environmental education materials around the world, you're going to find that they're being paid for, they're being sponsored by
     some of the very agencies and industries that created the environmental problems to begin
     with."</STRONG>
</DL>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Post-Corporate Health &amp; Medicine</H3>
<A NAME="weil"></A>
<DL>
<DT><A href="${BASE_URL}advisors/weil.html"><H4>Andrew Weil</H4></A><dd> <STRONG>"I think the placebo response is really the heart of medicine...  Placebo responses are pure healing responses
  from within, and that's what you ought to be trying to produce
  more of the time with methods that are less and less directly
  damaging and invasive... There's a very interesting phenomenon that nobody pays
  attention to, and that's if you look at any double blind drug test,
  in the placebo group there will always be
  a small number of individuals who show all of the changes produced
  by the real drug. And that's really interesting. That means that
any change that you can cause in the body
  with a drug can be mimicked in  some individuals who think
  they are getting the drug.That's really remarkable...
     What all of this speaks to is the incredible creative potential
  of the human organism,  with mind and belief being the
  key to this. There's a really strong desire in
  hardcore scientific medicine to rule out placebo responses rather
  than to rule them in and see them as the very heart of medical
  treatment."</STRONG>
</DL>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Sacred Systems</H3>
<A NAME="fritjof"></A>
<DL>
<DT><A href="${BASE_URL}advisors/frijotf.html"><H4>Frijof Capra</H4></A><dd><STRONG> "Deep ecological awareness is ultimately spiritual because the very essence of spiritual experience is the feeling of being connected to the cosmos as a whole... This sense of connectedness,  of embeddedness, constitutes the spiritual grounding of the new paradigm."</STRONG>
</DL>
<A NAME="brook"></A>
<DL>
<DT><A href="${BASE_URL}advisors/brook.html"><H4>Peter Brook</H4></STRONG></A><dd><STRONG>"Everyone in the theatre knows that what you see and experience at the last
     run-through of a play is nothing compared with what happens when the same work,
     perhaps a few hours later, is suddenly surrounded by a thousand people. The moment
     those people are there a chemical process, a physical process, a magnetic
     process comes into operation, and there is a flow of energy. And the flow of energy
     starts through the play by the actor working upon a passive ground, which is the
     audience. But the moment he starts working, he excites it, he awakens something in it. What he awakens
     is the awareness of that audience, and that produces an energy. We don't need to
     express in specific terms what that energy is, because that is beyond our instruments.
     But an energy is produced, an energy that flows back in many, many different ways
     towards the stage. This energy will first of all encourage the actor, and then it will go
     beyond encouragement. It will inspire the actor. The more it inspires the actor, the
     more he gives something back to the audience, which will be inspired in turn and will
     give something back to him."</STRONG>
</DL>



<A NAME="ry"></A>
<DL>
<DT><A href="${BASE_URL}advisors/cooder.html"><H4>Ry Cooder</H4></A><DD><STRONG>
"The corporations tend to so
     heavily process everything that it's remote and the little label comes in and says, 'hey, we can draw 
     listeners closer to the music they want.' People respond gladly. They say, 'yeah, I want to
     have that experience.' Christ, that's what music is. We don't experience it on the village level much any more
     - the beauty of sitting under a tree with some people - that is the music experience.
     Now, we have to have it on tape or radio, TV, CD. But somehow you can still feel that everybody
     wants to be closer, get closer. And that's the job to do - that's the way to handle it if you can. It's just that you can't do it with bodyguards and helicopters and laminated passes and shit like that."
</DL>
</STRONG>

<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
<H3>Big Body Media</H3>

<A NAME="jerry"></A>
<DL>
<DT><A href="${BASE_URL}advisors/mander.html"><H4>Jerry Mander</H4></A><DD><STRONG>
"Television is really an instrument of cloning in the world. It's taking variety, diverse
     mentalities and diverse cultures and homogenizing them into 
     the Western industrialized nations' format. So it's very dangerous. It's Orwellian in its
     implications when used in underdeveloped areas of the world. And its power has been
     magnified as a result. Almost 80% of the world now has television and, they are being
     made over into consumers...Their indigenous cultures are being sacrificed. They're
     being made into workers that will fit into the system and, hopefully, someday
     consumers. The World Bank is in there giving them the money to make it all work.
     The idea is to make people compatible with the dominant economic system. And that's
     what's taking place."</STRONG>

</DL>

<A NAME="crichton"></A>
<DL>
<DT><A href="${BASE_URL}advisors/ejcricht.htm"><H4>Michael Crichton</H4></A><dd><STRONG>"I think we're coming into a difficult time, difficult around the world. And the reason I say that is western societies have elected to permit the rise of multinational corporations. And those corporations are now more powerful than nation-states. And they have very different kinds of structures and allegiances. And in their present form they are, in fact, quite new. So, I think we're going to be feeling our way in this new period in which entities make the world safe for capitalism or for capital and not for people. Exactly how that's going to turn out in terms of national governance or for smaller groups or particularly for individuals is not clear. But it's going to be a very powerful force."</STRONG>
</DL>


<A NAME="diane"></A>
<DL>
<DT><A href="${BASE_URL}advisors/diane.html"><H4>Diane Sawyer</A></H4><dd><STRONG>"If there's a chilling effect (on media investigations), it's not because people want to be
polite to corporations, it's because corporations are a lot
cleverer than they used to be in the States. They're a lot more
inventive about ways to conceal things
that they don't want you to know about and most of them have
hired battalions of people who do nothing but watch out for
investigative reporters. So, that it's harder work than it was
before."</STRONG>
</DL>
</BLOCKQUOTE>
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 >
<BR> <A HREF="#index">INDEX</A><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=150 HEIGHT=3 VSPACE=7 ></CENTER><BR>
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

export default Bigmed2001Advisors;
