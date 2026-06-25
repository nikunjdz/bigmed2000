import { useEffect } from "react";

const BigbodyKnox4 = () => {
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
<HR WIDTH=240 ALIGN=left SIZE=3>
<FONT  COLOR=#800000>&nbsp; &nbsp; &nbsp; <A NAME="top">Excerpted </A>with gratitude from:<BR> "<EM>IN REVERENCE FOR THE EARTH</EM>"</FONT><BR>
<HR WIDTH=240 ALIGN=left SIZE=3>
<CENTER>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=400 HEIGHT=5>
<H3>THE TROUBLE WITH CORPORATIONS: P<FONT SIZE=-1>ART </FONT>IV<BR>
By Barbara Knox, Ph.D.<BR></H3>


<FONT  SIZE=5><B><U>Reclaiming Our Power</U></B></FONT><BR>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=400 HEIGHT=5 VSPACE=15>
</CENTER>
<P>

<FONT  SIZE=4>
<BLOCKQUOTE>   

   Growing numbers of us believe that, while corporations are useful and necessary, they are too powerful, that they have usurped the sovereignty of the people, and that something must be done to get them back under control.  Corporations should do what they were created to do, which is to meet the needs of the citizens.  They should not be allowed to just pursue profit, heedless of the consequences for human rights, the environment, and the health, safety and welfare of the citizens who are affected by their activities.  But what can they do to change them ?  It is so much easier to describe problems than to find solutions for them.<P>

   We feel helpless against the enormous wealth and power of corporations.<P>

   Their message is constantly repeated: that economic growth is essential to prosperity, jobs and a rising standard of living.  Never mind that throughout the world great masses of people are in poverty or deeply in debt, many hungry, homeless, and even starving , while the heads of corporations are billionaires.  We are afraid to challenge the rights and privileges of corporations lest we lose jobs.  Our minds have been "colonized" by the corporations.  We believe their propaganda, and we can see no alternatives.

  
                                                                           <CENTER><H4><U>Changing Attitudes</U></H4></CENTER>

   For corporations to change requires a major, grass roots change in attitude, a difficult but not impossible task.  Change has already begun and is growing.  When we learn the disturbing history of corporations. It begins to dawn on us that many of our particular issues and concerns are largely symptoms of greedy corporations ruling our society.  A new social movement is rising up to reclaim our democratic authority over our corporate creations, and we can join it.  When we recognize, in reverence for the earth, that we are an integral part of the natural world, we begin to question distorted scientific findings that corporations hype through the media ( which they own ).  We shall see that our addictions to over-consumption and to our highly competitive society are embedded in a corporate culture that offers us very little control over our lives.                  

                                                                           <CENTER><H4><U>Action Plans</U></H4></CENTER>

   With new insights and attitudes, we will demand that our authority over what gets produced, how it is advertised and how our money is invested be restored.  Concerned about the safety of our food supply, we will remove corporations from participating in decisions about food production and distribution.  Corporate employees will see that they can have a real say in what corporations produce, how profits are distributed, or whether to allow the production process to poison the community.<P>

   Instead of just fighting one corporate abuse at a time, we can join in a set of common first steps, all involving confronting the privileges that corporations now exercise, so that we can be effective, and do work that will last.  For starters, we will challenge corporations free speech and private property protections.  We have forgotten that we can question how legitimate modern corporations are, or that we can contest the contrived legal doctrines that gave them their power.  We can refuse to give the courts the final say over our economic lives.  By using the chartering process to stop corporate harm, we can redefine what corporations are and can do so on our own terms.  All states legislatures still have the historic and legal obligations to grant, amend and revoke corporate charters.  They are responsible for overseeing corporate activities.  But  they don't do it anymore, and haven't for a long time.  We, the people, must call them to account.
<P>


   We need to learn together, to teach ourselves corporate history, to recover our skills of  citizen sovereignty and power.  We can read our own state's constitution and constitutional and judicial history.  We can demand to see the charters of every corporation.  Armed with information, we can amend and revoke charters, take corporations to court, ask for injunctions to stop corporate officials from doing further harm or grabbing the corporation's assets for themselves, or moving the company away, leaving an environmental mess and unemployed workers behind.  Stockholders can file suits to dissolve them.  We can require that workers own a significant or majority share of the company; that the work force has democratic decision-making authority; and that charters be renewed annually.<P>

   We will define them, using the charters to spell out what their purpose and what their limits are.  We will hold our legislators accountable to us, the voters, not to corporate lobbies.  We will dispute the prevailing judicial doctrines.  Legal doctrines are not inevitable or divine.  The corporation is an artificial creation and must not be protected by the Bill of Rights.  No corporation should exist forever.  Let's limit their lives and renew their charters for good behavior.  We will fight to make corporate owners and officers liable for harms they cause.  We have the right to decide what is produced, to own and to organize our own work, and to respect the earth.  Our earth need not be treated as a storehouse,  tool shed and sewer.  These rights are as American as our right to vote.  In a democracy, we can shape the nation's economic life any way we want.<P>

   Much of what I have written here I owe to ideas expressed in a booklet, <A href="${BASE_URL}bigbody/chrtink1.html">Taking Care of Business</A>, by Richard L. Grossman and Frank T. Adams.  Also, for this series of articles, I am indebted to recent issues of Public Citizen News, of Rachel's Environment and Health Weekly, and a Deep Ecology News article, <a href="http://www.eatthestate.org/03-03/DismantlingCorporateRule.htm">Dismantling Corporate Rule</A> by Paul Cienfuegos.  Grossman, in a speech at a regional Green Party meeting last summer in Chambersburg, whimsically suggested "guerrilla theater"--- for example, making a huge mock-up of a corporate charter and burning it on the steps of the state capital.  Any of you ready for that ?<P>

   For reading lists and more information on this subject you can contact the Program on Corporations, Law and Democracy (POCLAD) at PO Box 246 South Yarmouth, MA 02664-0246 or go to their web site <a href="http://www.poclad.org/">www.poclad.org</A>. Also see <A HREF="http://www.panix.com/~jimcook/globalization/gr-corp.htm">Greening The Corporation</A> ( an address by Ward Morehouse to a Greens Gathering at their 1996 presidential nominating convention).   

         

</BLOCKQUOTE>        

                                     </FONT>




<CENTER>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=300 HEIGHT=3 vspace=9><BR>

<FONT  SIZE=2><B>
<A href="${BASE_URL}bigbody/knox1.html">Part I</A> &nbsp; | &nbsp; <A href="${BASE_URL}bigbody/knox2.html">Part II</A> &nbsp; | &nbsp; <A href="${BASE_URL}bigbody/knox3.html">Part III</A> &nbsp; | &nbsp; <A HREF="#top">Part IV</A><BR>
<HR WIDTH=200 ALIGN=center SIZE=3>
<A href="${BASE_URL}bigmed2000/study.html">Nancho 2000</A> &nbsp; | &nbsp; <A href="${BASE_URL}arcmain.html">Main Archives</A>
</B></FONT><BR>



<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=300 HEIGHT=3>
</CENTER><BR><BR>

<HR WIDTH=200 ALIGN=left SIZE=2>
<H5>Page Work by Nancho East<BR>
Abetted by Alex Hammill<BR>
Creation date : 1/20/99
</H5>
<HR WIDTH=200 ALIGN=left SIZE=2>
</BLOCKQUOTE>


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

export default BigbodyKnox4;
