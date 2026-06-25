import { useEffect } from "react";

const BigbodyKnox3 = () => {
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
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=420 HEIGHT=5>

<H3>THE TROUBLE WITH CORPORATIONS: P<FONT SIZE=-1>ART </FONT>III<BR>
By Barbara Knox, Ph.D.<BR></H3>

<FONT  SIZE=5><B><U>Corporate Global Sovereignty</U></B></FONT><BR>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=420 HEIGHT=5 VSPACE=15>


</CENTER>
<P>

<FONT  SIZE=4>
<BLOCKQUOTE>   


   In parts I and II, I wrote about the problems with corporations when they do harm to us, the people of our nation, and to our environment.  I outlined their rise from being strictly under our control for the purpose of serving our needs to the enormously powerful, self-serving creations they have become.  They now control many facets of our lives.  Corporations have gone global.  It is not just our local, state and national government that they influence.  Through legal and treaty agreements like NAFTA (North American Free Trade Agreement) , GATT (General Agreement on Tariffs and Trade), OECD (the Organization for Economic Cooperation and Development), WTO (the World Trade Organization) and the proposed new MAI (Multilateral Agreement on Investments) we are surrendering our national sovereignty to them as well.

                                                                        <CENTER> <H4><U>The World Trade Organization</U></H4></CENTER>

   
   Let me take the WTO as my first example.  It is a powerful, global commerce agency whose enforcement capacity and lack of public accountability are powerful tools for corporations that want to undermine consumer, environmental and labor laws.  Created four years ago in January by the Uruguay Rounds of the international trade pact, GATT, WTO's unelected trade bureaucrats were given the power to decide the fate of democratically- achieved laws.  If any local, state or federal law of a WTO member country is found to violate the organization's trade rules, the law must be changed , or that nation must face economic sanctions.  Most nations of the world belong to the WTO.<P>

   Corporations have gone after such things as clean air regulations, initiatives promoting human rights, laws protecting endangered sea turtles, food safety provisions and laws protecting dolphins from unsafe tuna-catching practices.<P>

  The WTO puts international commerce and industry interests ahead of all other values, including consumer safeguards and environmental and labor protection.<P>
   The negative effects of the WTO are even worse than their critics had feared.  The WTO's very first ruling in 1996  ordered the US to eliminate its Clean Air regulation on gasoline cleanliness. <P>

   The Venezuelan oil industry, failing to weaken the U.S. regulations by other means, turned to the WTO through their government.  WTO rules forbid different treatment for foreign producers; it ruled that the U.S. regulation had to be changed.  The U.S. complied rather than face \$150 million a year in trade sanctions.  U.S. gas stations can now sell dirtier gasoline.<P>

   In another case, the WTO ruled that the European Union's ban on growth-hormone  treated milk and meat was an illegal restriction on free trade.  The EU had to decide whether to accept US beef or pay economic sanctions to the US.<P>

   A favorable trade agreement between the EU and its former colonies in the Caribbean that made possible family ownership of small banana farms and a relatively well-paid unionized work force was challenged by the U.S.  The Challenge came after the American owned Chiquita Banana Corporation made large campaign contributions to both political parties.  <P>

   The WTO ordered the  EU to terminate its Caribbean preference or else face trade sanctions.  Economies of the islands will be greatly destabilized, making them vulnerable to Colombian drug cartels. <P>

   A Massachusetts law banning state contracts and investments in Burma because of extreme human rights abuses has been challenged by Japan, Thailand and The EU.  WTO rules prohibit such efforts to influence government actions.  A U.S. requirement that shrimp be caught in nets that exclude the endangered sea turtle has also been challenged by three Asian countries.

                                                 <CENTER>  <H4><U>The Multilateral Agreement on Investments</U></H4></CENTER>


   As if the WTO weren't bad enough, a new treaty is being negotiated at the Organization for Economic Cooperation and Development that will empower foreign corporations and investors to sue governments directly for cash compensation in retaliation for almost any local government policy or action that they allege cuts into their profits.  This largely unknown treaty, negotiated with much secrecy, is called the Multilateral Agreement on Investment (MAI).  It will apply a WTO-like deregulatory agenda to those economic sectors not already covered by WTO rules.  A director general of the WTO wrote of the new MAI, "we are writing the constitution for a single global economy".<P>

   The MAI is designed to speed up economic globalization by bolstering the rights of corporations and investors and limiting Congress' ability to set rules about investment in the United States.  The MAI appears to be global NAFTA or a World Trade Organization for investment rules.  The most alarming aspect is the proposal to give corporations and investors the legal tools,  or "standing", to directly sue governments if the companies believe they haven't been given everything a country owes them under the treaty.  No other treaty gives private corporations or investors this kind of power.  <P>

   If a private corporation wins against our government, presumably our tax dollars would be used to pay the fines.  Some of the existing laws that we now use to regulate investments --- like environmental standards, community reinvestment programs, living wage laws and performance requirements --- could be challenged by the MAI.  The fundamental powers of our state and local governments to shape our own economic futures are threatened.<P>

   The treaty will make it even easier for locally owned or managed businesses to be replaced by foreign companies who don't have any stake in creating jobs here, funding our school, developing our communities or keeping our drinking water clean.<P>

   The MAI has been under negotiation at the OECD since May 1995; The treaty was supposed to be completed this past  may, but has now been delayed for a few months.  It is disturbing that negotiations of such a powerful international economic treaty reached an advanced stage without the scrutiny and cooperation of citizens, elected officials, and non-governmental organizations.  It seems that our senators and Congressmen have not had any input into the MAI negotiations, that Congress is not being consulted.  A significant amount of U.S. law could be affected.  The supporters of this treaty, of course, are the global corporations.<P>

<CENTER><A href="${BASE_URL}bigbody/knox4.html">Continued on next page</A></CENTER>  

</BLOCKQUOTE>        

</FONT>




<CENTER>
<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=300 HEIGHT=3 vspace=9><BR>

<FONT  SIZE=2><B>
<A href="${BASE_URL}bigbody/knox1.html">Part I</A> &nbsp; | &nbsp; <A href="${BASE_URL}bigbody/knox2.html">Part II</A> &nbsp; | &nbsp; <A HREF="#top">Part III</A> &nbsp; | &nbsp; <A href="${BASE_URL}bigbody/knox4.html">Part IV</A><BR>
<HR WIDTH=200 ALIGN=center SIZE=3>
<A href="${BASE_URL}bigmed2000/study.html">Nancho 2000</A> &nbsp; | &nbsp; <A href="${BASE_URL}arcmain.html">Main Archives</A>
</B></FONT><BR>



<IMG SRC="${BASE_URL}bulls/redblk50.gif" WIDTH=300 HEIGHT=3>
</CENTER>

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

export default BigbodyKnox3;
