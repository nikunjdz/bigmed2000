import { useEffect } from "react";

const CorpersonCpnader = () => {
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

  const html = `<a href="${BASE_URL}corperson/index.html"><img src="${BASE_URL}graph/BIGBODBM.jpg" width="117" height="300" hspace="12"  border="0" align="left" alt="Return to Personhood Index"></a>

<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055>CORPORATIONS ARE NOT PERSONS<br>
</font>
By Ralph Nader & Carl J. Mayer</STRONG><br>
New York Times, April 9, 1988
<br>


<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>

<P>  

 
Our constitutional rights were intended for real persons, not artificial creations. The Framers knew about corporations but chose not to mention these contrived entities in the Constitution. For them, the document shielded living beings from arbitrary government and endowed them with the right to speak, assemble, and petition.<p>
Today, however, corporations enjoy virtually the same umbrella of constitutional protections as individuals do. They have become in effect artificial persons with infinitely greater power than humans. This constitutional equivalence must end.<p>
Consider a few noxious developments during the last 10 years. A group of large Boston companies invoked the First Amendment in order to spend lavishly and thus successfully defeat a referendum that would have permitted the legislature to enact a progressive income tax that had no direct effect on the property and business of these companies. An Idaho electrical and plumbing corporation cited the Fourth Amendment and deterred a health and safety investigation. A textile supply company used Fifth Amendment protections and barred retrial in a criminal anti-trust case in Texas.<p>
The idea that the Constitution should apply to corporations as it applies to humans had its dubious origins in 1886. The Supreme Court said it did "not wish to hear argument" on whether corporations were "persons" protected by the 14th Amendment, a civil rights amendment designed to safeguard newly emancipated blacks from unfair government treatment. It simply decreed that corporations were persons.<p>
Now that is judicial activism. A string of later dissents, by Justices Hugo Black and William O. Douglas, demonstrated that neither the history nor the language of the 14th Amendment was meant to protect corporations. But it was too late. The genie was out of the bottle and the corporate evolution into personhood was under way.<p>
It was not until the 1970's that corporations began to throw their constitutional weight around. Recent court decisions suggest that the future may hold even more dramatic extensions of corporate protections.<p>
In 1986, Dow Chemical, arguing before the Supreme Court, suggested that the Fourth Amendment's prohibition against unreasonable searches and seizures should prohibit the Environmental Protection Agency from flying planes over Dow's manufacturing facilities to monitor compliance with environmental laws. Although the Court permitted the flights on technical grounds, it appeared to endorse Dow's expansive view of the Constitution.<p>
That year, corporations received the most sweeping enlargement of their free speech rights to date. In a 5-3 decision, the Court invalidated a California regulation ordering a public utility monopoly to enclose in its billing envelopes a communication from a nonprofit ratepayer advocacy group that financed the insert. The purpose of the regulation was to assist the Public Utility Commission in achieving its authorized goal of reasonable rates. Even so, the Court held that the enclosures violated a new corporate First Amendment right "not to speak." Associate Justice William H. Rehnquist wrote in a pro-consumer dissent that to "ascribe to such artificial entities an 'intellect' or 'mind' [for constitutional purposes] is to confuse metaphor with reality."<p>
Today, corporations remain unsatisfied with their ascendant constitutional status. They want much more. At a 1987 judicial conference in Pennsylvania, lawyers counseled that corporations use the First Amendment to invalidate a range of Federal regulations, including Securities and Exchange Commission disclosure requirements that govern corporate takeovers, and rules affecting stock offerings.<p>
Businesses angry at Congressional attempts to ban cigarette advertising -- by that, we mean commercial carcinogenic speech -- are alleging First Amendment violations.<p>
The corporate drive for constitutional parity with real humans comes at a time when legislatures are awarding these artificial persons superhuman privileges. Besides perpetual life, corporations enjoy limited liability for industrial accidents such as nuclear power disasters, and the use of voluntary bankruptcy and other disappearing acts to dodge financial obligations while remaining in business.<p>
The legal system is thus creating unaccountable Frankensteins that have human powers but are nonetheless constitutionally shielded from much actual and potential law enforcement as well as from accountability to real persons such as workers, consumers and taxpayers.<p>
Of course individuals in these companies can always exercise their personal constitutional rights, but the drive for corporate rights is dangerously out of control.<p>
Too frequently the extension of corporate constitutional rights is a zero sum game that diminishes the right and powers of real individuals. The corporate exercise of First Amendment rights frustrates the individual's right to participate more equally in democratic elections, to pay reasonable utility rates and to live in a toxin-free environment. Fourth Amendment rights applied to the corporation diminish the individual's right to live in an unpolluted world and to enjoy privacy.<p>
Equality of constitutional right plus an inequality of legislated and de-facto powers leads inevitably to the supremacy of artificial life over real persons. And now the ultimate irony. Corporate entities have the constitutional right, says the Supreme Court, to patent living beings such as genetically engineered cattle, pigs, chickens and, perhaps someday, humanoids.<p>
This is not to say that corporations should have only the legal right emanating from state charters that create them. What is required, however, is a constitutional presumption favoring the individual over the corporation.
To establish this presumption, we need a constitutional amendment that declares that corporations are not persons and that they are only entitled to statutory protections conferred by legislatures and through referendums. Only then will the Constitution become the exclusive preserve of those whom the Framers sought to protect: real people.



	</strong>
	</td>
</tr>
</table></div>
<hr><br>


<br><div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
<div align="center"><font SIZE="-1" face="Verdana,Arial,Helvetica"><a href="${BASE_URL}newchau/ccgoals.html">Goals</a> | <a href="${BASE_URL}newchau/ccplay.html">Play</a> |  <a href="${BASE_URL}newchau/gospels.html">Study</a> | <a href="${BASE_URL}newchau/ccnews.html">News</a> | <a href="${BASE_URL}newchau/faq.html">FAQ</a> | <a href="${BASE_URL}newchau/contact.html">Contact</a> | <a href="${BASE_URL}newchau/cchelp.html">Help</a> | <a href="${BASE_URL}newchau/nchistry.html">Archives</a></font></div>
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

export default CorpersonCpnader;
