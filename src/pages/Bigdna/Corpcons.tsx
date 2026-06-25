import { useEffect } from "react";

const BigdnaCorpcons = () => {
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


<a href="${BASE_URL}demorule/index.html"><img src="${BASE_URL}graph/BMSPLICE.jpg" width="117" height="300" hspace="12"  border="0" align="left" alt="Return to Big Gene Splicing Index"></a>

<br>
<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055><em>BIG BODY GENE THERAPIES</em> <br>
<hr width="260" size="2">
CONSIDERING CORPORATE CONSCIENCE</STRONG></STRONG><br>
<font size="3">by Robert C Hinkley</font><br>


<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>

<table width="600" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>



Individuals living in a community generally accept responsibility for their
conduct and behave civilly. This involves more than just obeying the law.
It involves contribution, cooperation and most of all sacrifice -- behaving
in a manner that reflects conscience and self-regulatory acts and traits of
character that no law can enforce.

<p>

Corporations, on the other hand, exist only because laws have been enacted
that provide for their creation and give them a license to operate. When
these laws were enacted, no attempt was made to endow corporations with the
characteristics of individuals that make living in society possible. At
that time, most corporations were small and their impact on society was
insignificant. It was not as important that they be socially responsible.
Today, corporations are our most powerful citizens and it is no longer
tenable that they be entitled to all the benefits of citizenship, but have
none of the responsibilities.

<p>

The corporate law establishes rules for the structure and operation of
corporation . The keystone of this structure is the duty of directors to
preserve and enhance shareholder value--to make money. Under this
structure, the objective of stockholders -- making money -- becomes the
duty of directors which, in turn, becomes the marching orders for the
corporation.

<p>

As officers, managers and other employees. This objective is promoted both
by incentive compensation schemes and the threat of termination. It becomes
amplified the further down the chain of command you go. Most corporate
decisions are made by people who have little incentive to promote corporate
citizenship or social responsibility (which in some measure requires
corporate sacrifice) unless such promotion also can be shown to improve
profitability.

<p>

The corporate system is therefore one that is dedicated to self-interest
and devoid of disinterest. Nothing in the system encourages (let alone
requires) corporations to be socially responsible or to contribute,
cooperate or sacrifice for the benefit of the community or the common good
(i.e. be a good citizen). Indeed, nothing in the system makes any provision
for the public interest.
<p>


This is not to say that there are not corporations that sometimes behave in
a manner that makes them appear to be good citizens. However, good
marketing should not be confused with good citizenship and a company. As
citizenship should not be dependent upon the size of its marketing budget.
There are also corporations that have managers who manage their companies
to be good corporate citizens as well as make money. However, this tends to
last only as long as the individual(s) responsible. In a world of
takeovers, mergers, and fast moving corporate executives, it can be
extremely short lived. To the extent there is any restraint on the duty of
directors to make money, it comes in the form of government regulation.
This presents corporate managers with a basic conflict of interest: how to
comply with the regulation (which can increase their costs) while at the
same time remaining primarily responsive to their duty to make money (which
is generally thought to require reduced costs). Too often corporate
managers resolve this conflict by legal hairsplitting, lobbying and playing
governments off against each other. Each in some way corrupts our system of
government and sets a bad example for the rest of society.


<p>
W. Edwards Deming, the American management wizard most known for his work in
improving the quality of Japanese manufacturing after World War II, was
fond of saying that 94% of all business problems are systems problems and
only 6% are people problems. This is because the lack of performance is
usually not the fault of the people working within the system. It is the
fault of the system. When the system is the problem, you cannot enhance
performance by threatening the people who work within the system.
Performance can only be increased by changing the system.

<p>

Peter Senge of The Sloan Graduate School of Business at MIT says that the
best way to change a system is to make the change at the point of highest
leverage. This means that any change should be made at the point where the
maximum results can be attained relative to the amount of the change being
caused to the system. By making relatively small change in the right place
in the system, the greatest personnel commitment to change and the greatest
improvement in performance can be achieved. The duty of directors to make
money drives all corporate action. This makes it the point of highest
leverage. Corporations will take on the obligations of citizenship only
when the duty to make money becomes balanced by something that simulates
the human conscience. This balancing factor should be implanted in
corporations in a manner that tempers their drive to achieve profits -- not
destroys it. I would suggest five basic obligations of citizenship that
should be included in the make up of every corporation. This can be
attained by amending the corporate law by adding the following 28 words to
the existing duty of directors to make money: 

<blockquote><strong>"but not at the expense of
the environment, human rights, the public safety, the communities in which
the corporation conducts its operations, or the dignity of its employees."</strong></blockquote>



These boundaries on the duty of directors are designed to make it clear
that directors have obligations to the public interest that are just as
important as their obligations to their investors.

<p>

This is not unreasonable. Corporations owe their existence as much to the
public (which passed the law under which they are formed) as they do to
their stockholders. The corporate law was enacted so that corporations
could serve mankind, not the other way around. It is time to amend the
corporate law to encourage corporations to be good citizens as well as make
money.
</td>
</tr>
</table>
<br>
<hr width="300" size="3">
<font size="-1">Email the author: <a href="mailto:rchinkley@media2.hypernet.com">rchinkley@media2.hypernet.com</a></font>
<hr width="300" size="3">
<br><div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
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

export default BigdnaCorpcons;
