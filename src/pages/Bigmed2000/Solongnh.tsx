import { useEffect } from "react";

const Bigmed2000Solongnh = () => {
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
<CENTER><IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7><BR>
<FONT  SIZE=5 COLOR=#000055><STRONG>L<FONT SIZE=-1>IVE</FONT> F<FONT SIZE=-1>REE AND  </FONT>D<FONT SIZE=-1>IE</FONT> <HR WIDTH=170 ALIGN=center SIZE=4><FONT  SIZE=3>Big Bodies Toast New Hampshire's Last Stand</STRONG></FONT></FONT><BR>

<IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7></CENTER>
<P>
<BLOCKQUOTE><BLOCKQUOTE><STRONG>
<CENTER><FONT  SIZE=4></FONT>

<FONT  COLOR=#000080>Big Bodies have smartbombed the NH presidential primary, our last low-toll bridge to the national conversation. Inertia, superstition and nostalgia will still draw a fair candidate/media presence this year, but this is New Hampshire's swan song. </FONT><P></CENTER></BLOCKQUOTE><HR WIDTH=75% ALIGN=center SIZE=3>
Big Body interests have lobbied California, Oregon and Washington to frontload the campaign year with an early vote-rich super-primary. This would overlap New York's Big Money bonanza and drown out any low-rent populist noise  from NH for good. Washington and California have already scrambled forward and since it costs an estimated \$5 million to begin play in the CA media market alone, this ensures that from now on all visible candidates will: 
<UL>
<LI> be fixed-grin-deep in Big Body pockets from the get-go; 
<LI> spend 90% of their time in the coastal urban sprawls; and 
<LI> deftly draw media mikes away from the Big-indicting rants that once rose and reverberated in NH's narrow valleys. 
</UL>


In other words, the fix is in - all Big Party nominees will henceforth be fully determined by mid to late March - approximately 4~6 weeks after the NH starting gun. This obviously means MASSIVE Big Money media budgets will be even more blatantly decisive than now (if that is conceivable), and there will be no time at all for a fresh, unsubsidized voice to build national recognition or support. <P>

OK, New Hampshire will still be chronologically first, but the importance of this primary was never just symbolic primacy. The state's human-scale allowed <U>many</U> voters to actually meet and judge the candidates in person. Conversations, ideas and compassionate chemistry still meant something to voters here, and it didn't cost millions to reach their minds or hearts. Of course, the overwhelmingly white rural/small town demographics of the state does not represent anything America has become, but somehow its atavistic sense of truth and decency proved a phenomenally prophetic guide to the ideas and candidates that the country as whole would respond to. And therein lay the problem. New Hampshire and New Hampshire alone gave a national stage to the ideas of "populist" outsiders like George McGovern, Eugene McCarthy, John Anderson, Jerry Brown and Pat Buchanan - all of whom attacked the escalating corporate domination of American life from one angle or another. <P>

And in the precious months of lag between NH and the "major" primaries in the South, East and West, there was a chance to kindle an  NH -recognized message into a heated national conversation. "Yeah, what about those billions blown on corporate welfare? Or the agrobiz extermination of family farms? Or NAFTA's wholesale sellout of American jobs? Or Big Lobby custody of our coin-operated Congress?  Or WTO's God-like veto  power over our hard-won health, labor and environment laws? What about that, guys?" Who can ever (noticeably) spotlight those questions again? The New Hampshire that once fired early campaigns with incendiary debate will soon be reduced to a few soundbite sparklers.<P>

<CENTER><FONT COLOR=#000080>
<H4>Do not go gently into that cold corporate night. <BR>Rage, Rage against the buying of the light.</H4></FONT></CENTER>

What to do? It is probably impossible to de-mob the primary schedule very soon, but NH might be better served (and avenged) if its libertarian ideals were mobilized for a stunning assault on Big Body dominion. America has been rightfully distrustful of Big Business Powers for a century, especially in the home of Live-Free-or-Die. Today as those powers swell and converge, darkening the sky and our fantasies of popular rule, the 2000 election offers one last rare chance to challenge their supremacy and control. <P>

Voting for the Kubiak would make the point, but you might also vote boldy (and actually) for yourselves. Let this write-in signify that we the people still take our sovereign role in this democratic passion play seriously, and therefore demand the expulsion of  Big Bodies (and their lapdog candidates) from our halls of governance. (After all, what possible legal or logical justification is there for letting artificial, anti-democratic, and profit-obsessed entities have any political role whatever in a democratic society, let alone predominant power?) <P>

In the short term, this means we must strip corporations of their political and "human" rights as "legal persons," and thus their dominant power over our leaders, institutions and political processes. (Big Bodies can spend unlimited amounts on lobbying, donations and political advertising because a benighted court once ruled that sluicing money is how corporate "persons" express themselves, and limiting this torrent would violate their "Freedom of Speech." Strange, sick, but true...) 
<P>
In the long run, it means rethinking our own lives in the world and recognizing that there are ethical and pathological limits to a social organism's scale. Once a body grows beyond a certain size, it threatens both its members' psychosomatic evolution, and also the health of the living surround. As a public and political health measure, therefore, these entities must be irresistibly "encouraged" to diet or divide. The enduring protection of democracy, our youth and the planetary future will of course require other basic reforms, but the barbarians at the gate right now are Big and demand the most abrupt attention. Not only are they despoiling our lands, governance, 
and children's consciousness, they have cynically sacked the shrine of New Hampshire, and sooner than later they shall pay...<P>


<CENTER><IMG SRC="${BASE_URL}bigmed2000/graph/advline2.gif" WIDTH=75% HEIGHT=5 vspace=7></CENTER>
<P>

</STRONG></BLOCKQUOTE>

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

export default Bigmed2000Solongnh;
