import { useEffect } from "react";

const CorpersonCpepope = () => {
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
<STRONG> <FONT  SIZE=4 COLOR=#000055> CORPORATE CITIZENS<br>

Some nonhuman entities <br>

are more equal 
than others.</font><br>
by Carl Pope </STRONG><br>
Sierra Magazine, Nov-Dec 1996 
<br>


<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>

<P>Many Sierra Club members fondly recall William 0. Douglas, the late Supreme Court Justice and member of the Club's Board of Directors, for his ringing argument that "trees should have standing," the right to be represented in court. Unfortunately, Douglas' argument was made in a dissent, not a majority opinion. Although the Club was ultimately successful in <I>Sierra Club v. Morton </I>in blocking the Disney Corporation's efforts to build a ski resort at Mineral King (now part of Sequoia National Park), it was allowed to intervene only because its members hiked in Mineral King. The valley itself � its trees, streams, and wildlife � was denied standing. <p>

Courts exist to resolve disputes among human beings, the majority ruled, not between humans and trees. To this day, environmental groups go to court on behalf of their members, not the wild places they seek to save. (The Sierra Club Legal Defense Fund did include an endangered Hawaiian bird, the palila, as a plaintiff in a lawsuit several years ago, but was careful to include humans as well.) <p>

Some nonhumans, however, are welcome in U. S. courts. In 1886, the 
Supreme Court declared corporations to be "legal persons" under the law. 
Corporations were granted not only standing to sue, but virtually the full 
range of rights granted to people. For example, corporations are allowed to 
spend unlimited sums to defeat environmental initiatives, because 
campaign spending limitations have been ruled to interfere with their right 
to free speech. <p>

Like people, corporations cannot be restricted in 
their ability to acquire other businesses (except within the 
increasingly ignored boundaries of the Sherman Antitrust Act). In an effort to 
preserve family farms, for instance, 

some states barred corporations from owning farms � only to have those 
prohibitions struck down by the courts. <p>

In another famous dissent, Justice Douglas argued that the decision to 
make corporations persons under the law was "without logic, history, or 
rationale." In early America, state legislatures could both grant charters 
to corporations and revoke or limit their rights. But by the end of the 19th 
century, an era in which federal courts consistently sided with powerful 
economic interests, corporations were 

given full constitutional rights � while their actual human owners and 
directors were absolved of liability for their debts and responsibility for their 
actions. 

<p>
Limiting liability is, after all, the primary purpose of the corporate 
form � hence the British shorthand for a corporation, "Ltd." 
There is little else that is limited about corporations, however. Since 
they exist to maximize profits 
(shareholders can sue them if they don't), they are compelled by their 

nature to grow and grow, consuming more natural resources and 
encouraging more consumption. This has made them major obstacles to the 
defense of clean air and water and the preservation of wildlife habitat. 
It's time for environmentalists to join the debate on the proper function 
of these economic machines in a democratic society. The destructive 
role of unchecked corporations is amply demonstrated in Russell 
Mokhiber's Sierra Club book, <I>Corporate Crime and Violence </I>(1988). 
<P>
And the people are ready to listen: a June poll for the Preamble Center for 
Public Policy revealed a striking increase in public anger at corporate 
behavior, with seven out of ten Americans blaming corporate greed 
for layoffs, declining wages, and the economic problems of the middle 
class. How can we make these gigantic 
economic engines accountable for their actions? Rejecting the concept 
that they deserve the same constitutional rights as individuals 
would be a powerful first step. 

<p>
Environmentalists should urge closer 
scrutiny and more effective regulation of corporations, in their overall 
behavior and governance as well as their environmental performance. 
Society should treat them as what they are � forms of business organization, 
not individuals. At the very least, we should 
remember William 0. Douglas and treat the natural world as well as we 
treat fictitious entities. True, trees are not people � but neither are Exxon or 
DuPont. One can certainly argue whether grizzly bears ought to have 
particular rights � voting seems inappropriate � but it is hard to argue 
that corporations deserve the protections accorded to living, 
breathing individuals while entire ecosystems lack the legal standing to 
be represented in our courts. <p>

If we're going to grant standing to fictitious 
entities, we could make the law a more reliable protector of everyone's 
long-range interests by opening the courthouse doors to the salmon and 
the sequoia. By doing so, we might even see Justice Douglas' vision 
translated from the text of his dissents to the fabric of our society. 
<P>
<hr align="left" width="300" size="3">
Carl Pope is the executive director of the <br>

Sierra Club. He can be reached by e-mail <br>

at carl.pope@sierraclub.org. 

	</strong>
	</td>
</tr>
</table></div>


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

export default CorpersonCpepope;
