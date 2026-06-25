import { useEffect } from "react";

const BigdnaUsatbest = () => {
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
AMERICA AT ITS BEST</STRONG></STRONG><br>
<font size="3">by Robert C Hinkley</font><br>


<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>

<table width="600" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>







In his inaugural speech President Bush urged individual Americans to
increase their commitment to civility, character, and compassion.
Instead of its people, these remarks should have been addressed to
America's most powerful citizens--its corporations.

<p>

Since a Supreme Court decision in 1886, corporations have enjoyed all
the rights of citizens.  However, because they are dedicated to the
pursuit of self-interest, their behavior often reflects a disregard for
the obligations of citizenship of which the president spoke.
<p>


He began with a call to civility.   "America, at its best, matches a
commitment to principle with a concern for civility."



Civility involves respect for the public interest; sometimes even at the
expense of one's own private interest.  Corporations do not practice
civility when they put profit ahead of the environment, human rights,
public safety, the dignity of their employees or the welfare of the
communities in which they operate.  Their concern for civility
extends only as far as the pursuit of profit allows it.  Yet, the
president had nothing to say about improving the civility of
corporations.

<p>

The new president continued, "America, at its best, is a place where
personal responsibility is valued and expected.   Encouraging
responsibility...is a call to conscience.  And although it requires
sacrifice, it brings deeper fulfillment.  We find the fullness of life,
not only in options, but in commitments.  And we find that children and
community are commitments that set us free."

<p>

The Bush administration is not likely to ask corporate America to examine
their consciences, sacrifice, or make greater commitments to America's
children and communities.   But why not?  Our most powerful citizens
should not be able to claim all the rights of citizenship, but bear none
of its responsibilities.  Why was not one word spoken on inauguration day
asking corporations to make a greater commitment to the public interest.
<p>


According to our new president,  "America, at its best, is compassionate."

<p>

Compassionate conservatism is the new administration's slogan. Yet, the
man who parlayed that slogan into the presidency had nothing to say about
creating corporate compassion.

<p>

To be fair to him, this omission reflects something we all know to be
true--that corporate compassion is an oxymoron.  By law, the
corporation is a system dedicated to the pursuit of profit for the
benefit of stockholders, i.e. its own self-interest.  Compassion is not a
corporate trait.  But should it be?

<p>

In a recent poll taken by one of America's leading business magazines,
95% of those polled said they thought there were times when a corporation
should sacrifice its own interests for the interests of its workers and the
communities in which it operates.  If so many of us think this way, why
doesn't our law reflect it?

<p>

Corporations exist only because laws have been enacted that provide for
their creation and give them a license to operate. When these laws were
enacted, no attempt was made to give corporations characteristics or
traits that would make them good citizens.   At that time, most
corporations were small and their impact on society was insignificant.
Then, it was not as important that they be socially responsible. This is
no longer true.


<p>
The corporate law establishes a structure under which all corporations
operate.  The key element of this structure is the duty of directors to
try to make money for shareholders.  This duty of directors, in turn,
becomes the primary directive for all of the corporation�s officers,
managers and other employees.

<p>

The consequence of this structure is that all corporate action is taken in
the pursuit of profit.  Literally hundreds of decisions are made every
day by employees who have little incentive to promote corporate
citizenship or social responsibility unless such promotion also can be
shown to improve (short term) profitability.  Nothing in this structure
encourages (let alone requires) corporations to be socially responsible
or to contribute, cooperate or sacrifice for the benefit of the public
interest (i.e. be a good citizen).
<p>


To the extent there is any restraint on the pursuit of profit at the
expense of the public interest, it comes in the form of government
regulation.  This presents corporate managers with a basic conflict of
interest: how to comply with the regulation (which can increase their
costs) while at the same time remaining primarily responsive to their duty
to make money (which requires reduced costs). Too often corporate managers
resolve this conflict by legal hairsplitting, lobbying against the public
interest, or  playing governments off against each other.



W Edwards Deming, the late American management guru, was fond of saying
that 94% of all business problems are systems problems and only 6% are
people problems. This is because the lack of performance is usually not a
problem caused by the people working within the system. It is caused by the
system itself.  Most of the time the people cannot overcome the system, no
matter how well they are educated and no matter how many times they are
admonished to do better..

<p>

Lack of corporate citizenship is not a people problem.  It is a systems
problem.  It cannot be solved by the education or regulation of the people
in the corporation.  It can only be solved by changing the corporate
structure.
<p>


Corporations will take on the obligations of citizenship spoke of by
President Bush only when the duty to make money becomes balanced by
something that protects the public interest.  This can be achieved by
changing our corporate laws by adding a 25 word Code of Corporate
Citizenship to the existing duty of directors to make money:

<p>

<blockquote><strong>"but not at the expense of
the environment, human rights, public safety, the communities in which
the corporation operates, or the dignity of its employees."</strong></blockquote>
<p>


These boundaries are not unreasonable. Profit need not come at the expense
of the public interest.

<p>

The corporate law was enacted so that corporations could serve mankind,
not the other way around.   Imposing these boundaries will make it clear
that corporations have obligations to the public (which passed the law
under which corporations are formed) that are just as important as the
obligations to their investors.  Once our president and corporations
recognize this, then we may begin to see an America at its best.

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

export default BigdnaUsatbest;
