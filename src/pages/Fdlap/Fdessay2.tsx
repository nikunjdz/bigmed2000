import { useEffect } from "react";

const FdlapFdessay2 = () => {
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
<H3>"Asian Values vs. Human Rights"</H3> 
<H4>by Aryeh Neier<BR>Open Society Institute</H4>
<HR WIDTH=300 ALIGN=CENTER SIZE=3><BR>
</CENTER>
<TABLE>
<TR><TD><IMG SRC="${BASE_URL}bulls/dot_clea.gif" WIDTH=1 HEIGHT=1></TD><TD>

	<FONT  SIZE=4>The claim that "Asian Values" and Asian culture are at odds with Western concepts of human rights has been repeated widely in recent years.  It presents one of the most serious challenges that the 
international human rights movement has confronted because it denies the universality of rights.<P>
	Proponents of this view include, in varying degree, the governments of China, Indonesia, Malaysia and Singapore.  Their spokespersons argue that East Asia's relative economic success is based in large part on adherence to traditional values that emphasize communitarianism rather than individualism; and on adherence to consensus-building rather than to the adversarialism that is more prized in 
Western countries.  Moreover, they argue that Western criticism of their human rights practices, or even of such extreme abuses as those by the SLORC in Burma, is an unwarranted intrusion on sovereignty.<P>
	It is important to note that the rights issues at the heart of this dispute are the denial of freedom of expression and association, arbitrary political imprisonment, cruelty to detainees, and restrictions on democratic processes.  Many Western human rights proponents, I among them, have difficulty in comprehending how it is possible that the protection of rights against these abuses would threaten the values that are said to be intrinsic to Asian culture.  For example, it is difficult to understand how the protection of freedom of expression threatens a concern with consensus.  Indeed, one wonders how it is possible to build a consensus unless the participants are permitted to engage in 
the free exchange of information, insights, and ideas, thus gradually modifying their views as they 
are exposed to alternative considerations and eventually arriving at a consensus.  A consensus implies a process in which all may participate; it is not a dogma handed down from above to which all must pay obeisance.<P>
	Similarly, it is not apparent that imprisoning peaceable dissenters and mistreating them is an intrinsic aspect of communitarianism.  How, a proponent of human rights must ask, is this Asian value 
served by the lengthy sentences under terrible conditions imposed after closed trials on such Chinese advocates of human rights as Wei Jingsheng and Wang Dan?  Is there any Asian value that requires that they should be treated barbarically?<P>
	The argument that outsiders who criticize abuses of human rights and impose economic sanctions is an intrusion on sovereignty, is not new and not limited to East Asia.  It has been voiced in every 
part of the world where abuses come under fire.  For example, this defensive objection was long a reflexive response given by the Soviet Union as well as its client states to any suggestion that their 
rights practices were deficient.  In counter debate, human rights proponents have pointed out that virtually every government in the world has committed itself to respect human rights, and to support 
efforts to promote human rights internationally through their memberships with the United Nations.  
These commitments are set forth in the Charter of the United Nations which must be signed and ratified by every state as a condition of membership.  The rights to which the Charter refers are spelled 
out in the Universal Declaration of Human Rights, which was adopted without dissent by the United Nations and with abstentions only from the Soviet bloc, Saudi Arabia, and South Africa. Approximately 
another three-fourths of the member states of the UN have made further commitments by signing and ratifying the International Covenant on Civil and Political Rights.  Even those governments that have 
not ratified the Covenant, however, are bound to many of its provisions by virtue of their voluntary 
ratification of the UN Charter.  The widespread acceptance of rights has given these governments the 
status of customary international law.  Accordingly, every government is committed to refrain from torture and every government, through its membership with the United Nations, has committed itself to seek an end to torture wherever it is practiced.<P>
	There is further ground for questioning whether the claim of a sovereign has the right not to be 
criticized or sanctioned for human rights abuses in countries ruled dictatorially.  That is, how can 
dictators, who deny the citizenry the opportunity to choose who should govern them and how they should be governed, claim to be vested with a sovereign right against outside interference?  Dictatorships lack the legitimacy to make this claim.<P>
	The most obvious example of a serious claim of sovereignty is that by the SLORC.  It rules in Burma because when the SLORC recognized that it was humiliatingly losing the 1990 elections, it simply 
canceled them.  Thereafter, candidates of the victorious National League for Democracy who were legitimately elected were rounded up and imprisoned.  In the intervening years, the SLORC has refused even to enter into a dialogue with Daw Aung San Suu Kyi, the leader of the NLD.  Since releasing her from house arrest, her movements have been restricted and she has suffered periodic harassment from S
LORC.  The limited opportunities that she had originally been granted to communicate with the Burmese citizenry have recently been terminated.<P>
	Burma is an extreme case because it held democratic elections but the results were then nullified by SLORC.  Moreover, one would be hard pressed to argue that the Chinese government is any more democratic than the SLORC.  With all things considered, is it possible to suggest that Jiang Zemin and Li Peng represent anyone other than the aging leadership of the Chinese Communist Party?  On whose 
behalf do they invoke sovereignty?  The other Asian states that are most insistent on sovereignty manifest greater respect for the forms of democracy, but a factor in their unchanging leadership is the systematic suppression on oppositional expression.<P>
	Though some Asian leaders invoke Asian values to respond to Western proponents of human rights, 
it seems more likely that their primary concern is with their domestic dissenters.  These Asian leaders believe that denying Asian human rights advocates international attention, encouragement, and support, will cause the oppositional criticism to decline in significance and disappear.  In common with their Western counterparts, Asian human rights proponents assert the universality of human rights 
principles.  Equally significant, they reject the claim that there is a conflict between those principles and Asian values</FONT>.<P>
<HR WIDTH=300 ALIGN=left SIZE=2>
<H4>
Aryeh Neier is the President of the Open Society Institute.  <BR>He also spent twelve years as Founder/Director  of Human Rights Watch <BR>and eight years as National Director for the American Civil Liberties Union.</H4>
<HR WIDTH=300 ALIGN=left SIZE=2>
</TD></TR>
</TABLE>
<P>

<CENTER>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlpaper.html#essayarc"><STRONG>Back to Main Archives</A></STRONG><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:fdlap@chollian.dacom.co.kr"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A href="${BASE_URL}fdlap/fdlorg.html#address">Our Address...</A></FONT>
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

export default FdlapFdessay2;
