import { useEffect } from "react";

const NewchauCouptips = () => {
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

<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055> TIPS ON HOW TO OPPOSE CORPORATE RULE</font></STRONG><BR>By Dr. Jane Kelsey<br>


<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>


<hr width="300" size="3">
<P><blockquote><em>One of the strongest critics of the corporate agenda is Dr. Jane Kelsey
of the University of Auckland in New Zealand. Dr. Kelsey has devised what she calls &quot;A Manual for Counter-Technopols&quot;--suggestions
and ideas for actions that challenge corporate rule. <BR>
<BR>
The following is a list of some of her proposed tactics and strategies that
could be adopted by coup &quot;resistance&quot; fighters.</em></blockquote>
<hr width="300" size="3"><strong>
<div align="center"><h3>HOW TO OPPOSE CORPORATE RULE</h3></div>
<OL>
<P><LI> <B>BE SKEPTICAL ABOUT FISCAL AND OTHER &QUOT;CRISES.&QUOT;</B> Examine
the real nature of the problem, who defines it as a crisis, and who stands
to gain. Demand to know the range of possible solutions, and the costs and
benefits of each to whom. If the ansers are not forthcoming, burn the midnight
oil to produce the answers for yourselves. <BR>
<BR>
<LI> <B>DON'T CLING TO A POLITICAL PARTY THAT HAS BEEN CONVERTED TO NEOCONSERVATISM.</B>
Fighting to prevent a social democratic party's capture by right-wing zealots
is important. But once the party has been taken over, maintaining solidarity
on the outside while seeking change from within merely gives them more time.
When the spirit of the party is dead, shed the old skin and create something
new. <BR>
<BR>
<LI> <B>TAKE ECONOMICS SERIOUSLY.</B> Neo-liberal economic fundamentalism pervades
everything. There is no boundary between economic, social, environmental
or other policies. Those who focus on narrow sectoral concerns and ignore
the pervasive economic agenda will lose their own battles and weaken the
collective ability to resist. Leaving economics to economists is fatal.
<BR>
<BR>
<LI> <B>EXPOSE THE WEAKNESSES OF THEIR THEORY.</B> Neo-liberal theories are
riddled with dubious assumptions and internal inconsistencies, and often
lack empirical support. These right-wing theories need to be exposed as
self-serving rationalizations which operate in the interests of the elites
whom the policies empower. <BR>
<BR>
<LI> <B>CHALLENGE HYPOCRISY.</B> Ask who is promoting a strategy as being in
the &quot;national interest,&quot; and who stands to benefit most. Document
cases where self-interest is disguised as public good. <BR>
<BR>
<LI> <B>EXPOSE THE MASTERMINDS.</B> Name the key corporate players behind the
scenes, document their interlocking roles and allegiances, and expose the
personal and corporate benefits they receive. <BR>
<BR>
<LI> <B>MAXIMIZE EVERY OBSTACLE.</B> Federal systems of government, written
constitutions, legal requirements and regulations, supra-national institutions
like the ILO and the UN, and strong local governments can provide barriers
that slow down the pace of the corporate takeover. <BR>
<BR>
<LI> <B>WORK HARD TO MAINTAIN SOLIDARITY.</B> Avoid the trap of divide and
rule. Sectoral in-fighting is self-indulgent and everyone risks losing in
the end. <BR>
<BR>
<LI> <B>DO NOT COMPROMISE THE LABOUR MOVEMENT.</B> Build awareness of the corporate
agenda at union local and workplace levels. Resist concessions that tend
to deepen co-optation and weaken the unions' ability to fight back. <BR>
<BR>
<LI> <B>MAINTAIN THE CONCEPT OF AN EFFICIENT PUBLIC SERVICE.</B> Resist attempts
to discredit and dismantle the public sector by admitting deficiencies and
promoting constructive models for change. Build support among client groups
and the public which stresses the need for public services and the risks
of cutting or privatizing them. <BR>
<BR>
<LI> <B>ENCOURAGE COMMUNITY LEADERS TO SPEAK OUT.</B> Public criticism from
civic and church leaders, folk heroes and other prominent &quot;names&quot;
makes corporate and political leaders uncomfortable. It also makes people
think. Remind community leaders of their social obligations, and the need
to preserve their own self-respect. <BR>
<BR>
<LI> <B>AVOID ANTI-INTELLECTUALISM.</B> A pool of academics and other intellectuals
who can document and expose the fallacies and failures of the corporate
agenda, and develop viable alternatives in partnership with community and
sectoral groups, is absolutely vital. They need to be supported when they
come under attack, and challenged when they fail to speak out or are co-opted
or seduced. <BR>
<BR>
<LI><B> ESTABLISH AN ALTERNATIVE THINK-TANK.</B> If one already exists, make
sure it is adequately funded. Neo-liberal and neoconservative think-tanks
have shown how well-resourced institutes on the right can rationalize and
legitimize the corporate agenda. The need is obvious for one or more equally
well-supported think-tanks on the left. Uncoordinated research by isolated
critics will not suffice. <BR>
<BR>
<LI> <B>INVEST IN THE FUTURE.</B> Provide financial, human and moral support
to sustain alternative analysis, publications, think-tanks, and people's
projects that are working actively to resist the corporate agenda and work
for progressive change. <BR>
<BR>
<LI> <B>SUPPORT THOSE WHO SPEAK OUT.</B> The harassment and intimidation of
critics of the corporate takeover works only if those targeted for attacks
lack personal, popular and institutional support. Withdrawing from public
debate leaves those who remain more exposed. <BR>
<BR>
<LI> <B>PROMOTE ETHICAL INVESTMENT.</B> Support investors who genuinely respond
to social and ecological concerns. Expose unethical investors who don't.
Boycotts have proved a powerful force in environmental, anti-nuclear and
safe product campaigns. Companies that ignore social and environmental concerns
can be embarrassed and called to account. <BR>
<BR>
<LI> <B>THINK GLOBAL, ACT LOCAL.</B> Develop an understanding of the global
nature of economic power, and those forces which are driving current trends.
Draw the links between these global forces and local events. Target local
representatives, meetings and activities which feed into the global economic
machine. <BR>
<BR>
<LI> <B>THINK LOCAL, ACT GLOBAL.</B> Actively support international strategies
for change, such as people's tribunals, non-governmental forums and codes
of conduct, and action campaigns against unethical companies and corporate
practices. Recognize that international action is essential to counter the
collaboration of states and corporations, and to empower civil society to
take back control. <BR>
<BR>
<LI><B> DEVELOP ALTERNATIVE MEDIA OUTLETS.</B> Once mainstream media are captured
by the right, it is difficult for critics to enter the debate, and impossible
to lead it. Alternative media and innovative strategies must be put in place.
Effective communication and exchange of information between sectoral groups
and activists are essential, despite the time and resources involved. <BR>
<BR>
<LI> <B>RAISE THE LEVELS OF POPULAR ECONOMIC LITERACY.</B> Familiarize people
with the basic themes, assumptions and goals of economic fundamentalism.
Convince them that economic policy affects everyone, that everyone has a
right to participate, and that alternatives to the corporate agenda do exist.
<BR>
<BR>
<LI> <B>RESIST MARKET-SPEAK.</B> Maintain control of the language, challenge
its capture by the right, and refuse to convert your discourse to theirs.
Insist on using hard specific terms that convey the hard realities of what
is going on. <BR>
<BR>
<LI> <B>BE REALISTIC.</B> Recognize that the world has changed, in some ways
irreversibly, and that the past was far from perfect. Avoid being trapped
solely into reacting and defending the status quo. Defending the past for
its own sake adds credibility to the claims of the right and wastes opportunities
to work for genuine change. <BR>
<BR>
<LI> <B>BE PRO-ACTIVE.</B> Start rethinking visions, strategies and models
of development for the future. Show that there are workable, preferable
alternatives from the start. This becomes progressively more difficult the
longer you wait to respond to the corporate agenda. <BR>
<BR>
<LI> <B>CHALLENGE THE TINA (&quot;there is no alternative&quot;) CLAIM.</B>
Convince people--individually and collectively--that there are real and
workable alternatives. Present options that combine realism with the prospect
of meaningful change. Actively promote these alternatives and have them
ready to be implemented when the corporate agenda fails. <BR>
<BR>
<LI> <B>PROMOTE PARTICIPATORY DEMOCRACY.</B> Build a constituency for change
through alternative information networks and media. Use community, workplace,
women's, church, union, First Nations and other outlets to encourage people
to take back control. Empower them with the knowledge they need to understand
the right-wing forces affecting them and how they can fight back most effectively.
<BR>
<BR>
<LI> <B>HOLD THE LINE.</B> The corporate takeover is not yet complete. Social
programs have not yet been entirely dismantled. Unions have not yet been
destroyed. Not all environmental protections have been eliminated. There
is still time, through sustained and co-ordinated action, to hold the line.
<BR></ol>
</strong><BR>
<hr align="left" width="280" size="3">
Taken from the <a href="http://infoweb.magi.com/~ccpa/articles/article47t.html" target="_blank">CCPA Monitor, April 1996</a>.
<BR>
<A HREF="http://infoweb.magi.com/~ccpa/articles/samplet.html">Articles
from The CCPA Monitor</A><BR> 

	
	</td>
</tr>
</table></div>


<br><div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
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

export default NewchauCouptips;
