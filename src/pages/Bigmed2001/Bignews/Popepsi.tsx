import { useEffect } from "react";

const Bigmed2001BignewsPopepsi = () => {
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
<CENTER><IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7><BR>
<FONT  SIZE=5 COLOR=#000055><STRONG>B<FONT SIZE=-1>IG </FONT>B<FONT SIZE=-1>ODY</FONT> N<FONT SIZE=-1>EWS</FONT> A<FONT SIZE=-1>LERT</FONT><BR><FONT  SIZE=3>Wake Up Calls for the Rising Resistance</FONT></STRONG></FONT><BR>

<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7>
<P>
<BLOCKQUOTE><BLOCKQUOTE><STRONG>
<FONT  SIZE=3 COLOR=#000066>This "news" is slightly dated, but since the Roman Catholic Church has been the prime paradigm for Big Body evolution for nearly two millennia, there is an instructive and curiously depressing sense of closure here. The Mother Big Body of them all reverently attended by the latest crew of of expansionist great-grandchildren, foreshadowing a Brave New world of truly catholic consumerism. Touching or what?</STRONG>

</BLOCKQUOTE>
<P>


<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=350 HEIGHT=5 vspace=7 ><BR>
<U><EM>Big Body Backscratching</EM></U>
<H3>    Pepsi Leads Pack Of Firms <BR>Backing The Pope's Visit</H3>
<P>
<STRONG>by Andrew Downie <BR>Special to the SF Chronicle 
</STRONG><BR>

<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=350 HEIGHT=5 vspace=7></CENTER>
<P>


MEXICO CITY - Someone looking at the billboards across Mexico City could be forgiven for thinking the pope had taken the Pepsi challenge, decided to dump "the real thing" and signed up as a fully fledged member of Generation Next. <P>

For the month of January, at least, Pepsi is the drink of choice for the Vatican generation. "Pepsi, always faithful," read the signs plastered across the Mexican capital. No matter that Pope John Paul II is 78 and hardly known for swilling soft drinks in public. <P>

The Vatican apparently has decided that the medium is the message and that plastic mugs, stamp albums and billboards bearing the pope's likenesses can get the message across. <P>

"We live in an age of publicity," said Papal Nuncio Justo Mullor, "and communication is a language. We have to raise funds." Here in Mexico, on the eve of John Paul's fourth trip to the nation, the Vatican is doing just that through a host of deals with companies eager for a divine endorsement. <P>

The Holy See has passed the plate to companies selling everything from soft drinks to computers to potato chips. Now, the donations are flooding in. Pepsi tops the list of advertisers, but there are plenty of others as well. 
<P>
There's the company designing the endorsement campaigns, the incongruously named Teheran Publicity, and the El Globo bakery chain, the firm presumably providing the pope with his daily bread. Then there's another bread company with a somewhat inappropriate name for English-speakers - Bimbo - that is sponsoring 80 massive billboards urging Mexicans to "feed the spirit" of joy. 
<P>
Mercedes-Benz is providing two Popemobiles, Hewlett Packard is donating computer equipment, and a local water firm, Electropura, is giving away 1.8 million liters of bottled refreshments. In addition to providing the pope's entourage with portable telephones, a cellular phone company is giving away 5,000 T-shirts. 
<P>
All in all, the 25 companies sponsoring the five-day papal visit to Mexico will cover 75 percent of the trip's expenses through either money paid for concessions or by donating equipment or services. In return, the Vatican will grant each participating firm permission to call itself an "Official Collaborator." 
<P>
In a nation where plastic popes adorn nearly every dashboard, the sale of religious icons is not unusual. But the unprecedented extent of the hard-sell has provoked widespread indignation here. Two-thirds of Mexicans are opposed to the over-commercialization of the papal visit, according to one newspaper poll. Many Roman Catholics see such conduct unbecoming to a man deemed God's Messenger on Earth. The message should be God is love, they say, not that God loves Pepsi. <P>

"The church has always denounced consumerism," said Luis Morales Reyes, president of the Mexican Episcopal Conference. "Therefore one must advise those companies to take a certain moderation so consumerism doesn't get out of control."<P>

It might be too late. <P>

Not only is the pope's image adorning Pepsi ads, it is also being tossed into millions of bags of potato chips made by the Sabritas company - part of Frito-Lay, which is part of PepsiCo. Inc. and placed on everything from commemorative coins to inflatable hats. Stamps portraying the pope and the Virgin of Guadalupe, Patroness of Mexico,, are inside every bag of chips. Consumers are invited to collect all 10 different stamps and stick each into an album that can be purchased for only 2 pesos, or 20 U.S. cents. Sabritas' chips not only are greasing the palms of consumers. If all the albums sell, the Catholic church stands to gain \$1.8 million, said Sabritas' executives. <P>

The unholy row over the endorsements may be bad news for the church's image, but it is a blessing for comedians and cartoonists. One wag rechristened the drink Popesicola. Another asked whether if the pope's punishing schedule of endorsements would allow him enough time to pray. And given that the Spanish words for Pope and chip are both papa, the church's spokesman felt it necessary to reassure Mexico's 86.3 million Catholics that the pontiff would not celebrate Mass dressed as a potato chip. 
<P>
The commercial deals have certainly lent the trip a unique flavor. 
<P>
"This has become an issue because some of the promotions are done in bad taste," said Bernardo Barranco Villafan, president of the Mexican Center for Religious Studies. "The Sabritas and Pepsi campaigns are grotesque." Barranco said the church seeks out sponsors to help share the costs of the papal trips. Normally, the host government pays for a trip, but Barranco said the Mexican government has severe revenue problems and so sought corporate partners to help. 
<P>
Church leaders have put the total cost of the visit in Mexico at around \$2 million, although Mullor and others said they have no idea how much of that comes from the church's own coffers. Senior church leaders have declined to comment about how much the church is making from the endorsements. Instead, they are doing their best to portray the deals as necessary for the long-term good of Catholicism in Mexico. 
<P>
"The funds that we are trying to raise are not exactly for the pope," Mullor said. "It is more than that. We want the (donated equipment) to remain for posterity. It is very important that it be used to benefit the (Catholic faith)."

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

export default Bigmed2001BignewsPopepsi;
