import { useEffect } from "react";

const CorpersonCpmonbio = () => {
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
<STRONG> <FONT  SIZE=4 COLOR=#000055> 
CORPORATIONS BEHAVE AS IF <br>
THEY 
ARE MORE HUMAN THAN WE ARE </font><br>
by George Monbiot</STRONG><br>
The <I>Guardian </I>of London, 10/5/00<br>


<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>


The location of the boundaries of our humanity is perhaps the key moral question of our age. Whether a test-tube baby 
should be selected so that his cells can be used to save the life of his sister, whether one conjoined twin should die so that 
another can live, whether partial human embryos should be cloned and reared for organ transplants confront us with problems 
we have never faced before. Medical advances, both wonderful and terrifying, are eroding the edges of our identity. 
<P>
The new Human Rights Act is intended to provide us with some of the guidelines we need to help sort this out. It insists 
that we have an inalienable right both to life itself and to the freedom without which that life would be wretched. But while 
the rights it guarantees have proved fairly easy to define, it is, curiously, the concept of humanity which turns out to be 
precarious. 
<P>
Human beings, you might have thought, are animate, bipedal creatures a bit like you and me. But the lawyers would have 
it otherwise. Big companies might not breath or speak or eat (though they certainly reproduce), but they are now using human 
rights laws to claim legal protections and fundamental liberties. As their humanity develops, so ours diminishes. 
<P>
Last month, a quarrying company called Lafarge Redland Aggregates took the Scottish environment minister to court on 
the grounds that its human rights had been breached. Article 6 of the European Convention determines that human beings 
should be allowed a fair hearing of cases in which they are involved "within a reasonable time." Lafarge is insisting that the 
results of the public inquiry into its plan to dig up a mountain in South Harris have been unreasonably delayed. The company, 
as the campaigning academic Alastair McIntosh has argued, may have good reason to complain, but to use human rights law 
to press its case sets a frightening precedent. 
<P>
It is a concept developed in the US. The 14th amendment to the constitution was introduced in 1868 with the aim of extending to blacks the legal protections enjoyed by whites: equality under the law, the right to life, liberty and the enjoyment 
of property. By 1896, a series of extraordinary rulings by a corrupt, white and corporate-dominated judiciary had succeeded in denying these rights to the black people they were supposed to protect, while granting them instead to corporations. 
<P>
Though black people eventually reclaimed their legal protections, corporate human rights were never rescinded. Indeed, 
while they have progressively extended the boundaries of their own humanity, the companies have ensured that ours is ever 
more restrained. 
<P>
Firms in the US have argued that regulating their advertisements or restricting their political donations infringes their "human right" to "free speech." They have insisted that their right to the "peaceful enjoyment of possessions" should oblige 
local authorities to grant them planning permission, and prevent peaceful protesters from gathering on their land. 
At the same time, however, they have helped to ensure that the "social, economic and cultural" rights, which might have allowed us to challenge their dominance, remain merely "aspirational." As the solicitor Daniel Bennett has pointed out, 
article 13 of the European Convention, by which we could have contested the corporations' absolute control of fundamental resources, has been deliberately excluded from our own Human Rights Act. 
<P>
The rise of corporate human rights has been accompanied by an erosion of responsibilities. Limited liability allows firms 
to shed their obligations towards their creditors. Establishing subsidiaries � regarded in law as separate entitles � allows 
them to shed their obligations towards the rest of us. And while they can use human rights laws against us, we can't use 
human rights laws against them, as they were developed to constrain only the activities of states. As far as the law goes, 
corporations are now more human than we are. 
<P>
The potential consequences are momentous. Governments could find themselves unable to prevent the advertising of 
tobacco, the dumping of toxic waste or the export of arms to dictatorships. Yet in Britain the public discussion of this issue 
has so far been confined to the pages of the Stornoway Gazette. 
<P>
The creatures we invented to serve us are taking over. While we have been fretting about the power of nanotechnology 
and artificial intelligence, our domination by bodies we created but have lost the means to control has already arrived. It is 
surely inconceivable that we should grant human rights to computers. Why then should they be enjoyed by corporations? 
<P>
� Guardian Newspapers Limited 2000 

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

export default CorpersonCpmonbio;
