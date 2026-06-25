import { useEffect } from "react";

const CityhallJapanmes = () => {
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

<STRONG><FONT  COLOR=#800000>
<CENTER>Nancho Advisory: A short piece from the <BR>
early '90s that remains valid to this day.</CENTER>
</FONT>

<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=400 HEIGHT=5>

<FONT  COLOR=#000090> <h2>The Economic Dividends <BR>of Child Stress</h2>
<strong>by W. David Kubiak</strong></FONT><BR><font COLOR="#636363" FACE="Arial,Geneva">from <BR><STRONG>"Messages from Japan"<BR>20 Views of the Nation <BR>at the End of the Century</STRONG></font>
<br><p>
<IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=400 HEIGHT=5><P>
</CENTER></STRONG>

<P><FONT  SIZE=4>
<BLOCKQUOTE>
After nearly 20 years shuttling around the East as a muddler and journalist I find it difficult to read books praising Asia's "disciplined work force" or managerial virtuosity without coughing. References to the region's "mature and responsible workers" are especially breathtaking. From what I've witnessed, most Asian corporations (and their abetting governments)  treat their employees more like institutionalized juveniles with no rights to assert themselves, choose leaders or organize autonomous unions. The question, perpetually unaddressed, is not the managers' savvy in getting away with this, but why the managed so meekly endure it. 
<P>
Recently, however, politicians in the West have taken an intense, belated and transparently ulterior interest in the social plight of Asian labor. Seeking high, "non-protectionist" grounds to stem the East's export offensive, many Western legislators are finally exploring ways to tie human rights abroad to market access at home.
<P>
The political emasculation of Asian labor is of course an important factor in the competitive efficiency of their industries as well as a legitimate human rights concern. But Japan, which accounts for over 60% of the East/West trade surplus, has thus far fended off such tactical outrage with her impeccably democratic facade. There is, however, one seldom mentioned aspect of Japan's political economy that invites attention; the stress-induced hormonal pacification of her male youth.
<P>
Most nations beginning their industrial revolutions found their male citizens to be unruly and temperamentally unsuited to the tedium and depersonalization of mass production techniques. Early industrialists thus turned to docile children, usually young females to "man" their mills. As their economics moved beyond textiles and light manufacturing into heavier industries, however, more strength and endurance were needed. The ideal employee thus became a mate with the heart and submissive spirit of a 14-year-old girl.
<P>
The eunuch bureaucrats of ancient China fulfilled the ideal admirably, and although castration has since fallen into some disrepute as a management tool, quite similar effects can be achieved by subtler means. Stress, for example, generates hormones in the body that act like estrogen and suppress male hormones, also called androgens. That is why stressed-out executives often lose sexual interest, and potency. High stress may cause temporary embarrassment for men but for young boys approaching adolescence, it can virtually abort maturation and cause lasting anomalies.
<P>
During puberty, boys need a heavy jolt of androgens to physically and psychologically develop into adult males. But in Japan, puberty is also the time school stress reaches its peak and reduces these hormones drastically. The nation's infamous shiken jigoku (examination hell) turns the years between 10 and 16 into a psychosomatic ordeal unparalleled in the West. As the school kids' saying goes, "<EM>Yon to, Go raku</EM>"-'Four (hours' sleep), pass ; five (hours' sleep), fail'. The chronic stress and anxiety this pressure engenders cause not only hundreds of suicides but also endocrinological stunting among many of the survivors.
<P>
Although stress-stunted boys are relatively weak, like caponized cockerels they tend to grow larger and live longer than their normal brethren. In the 20 to 50 age group, these " men" seek out dominance/submission relationships and prefer juvenile sex fantasy (S&M, violent pornography, etc.) to mutual adult sensuality. Since they never really experience the arrival of manhood or the pubertal rush of confidence-building, ego-affirming androgens, they remain insecure and dependent, seeking out superiors or organizations that will act as surrogate parents and continue to take care of them. They serve authority figures meekly, obediently and faithfully, often sacrificing their friends and families to the new "parent's" demands. (Many, though, do seem uncomfortably aware of how their extreme docility might appear to outsiders, especially foreigners, and tend to dislike or fear their company.) Privately, these lifelong underlings hold on to childish fascinations with toy guns and comics well into their later years. More seriously for society, they are often politically passive citizens and disinterested fathers. In fact, many of the unfortunate things we see today in Japan's homes, media, and urban society may be caused by the increasing numbers of these child-men in the population. But whatever dangers fixed adolescence poses for a democratic egalitarian society, its economic utility appears formidable.

.</P><P>
<CENTER>- End -</CENTER>
</FONT>
<HR WIDTH=100 ALIGN=left SIZE=3>




  <font SIZE="2"  FACE="Arial,Geneva"><A href="${BASE_URL}sharight.html">Shareright</A> 1992.</font>
<HR WIDTH=100 ALIGN=left SIZE=3>
</BLOCKQUOTE>

<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=300 HEIGHT=5></CENTER>

<CENTER><H4><A href="${BASE_URL}bigmed2000/bigally.html">Allies</A> | <A href="${BASE_URL}bigmed2000/advisors.html">Advisors</A> | <A href="${BASE_URL}bigmed2000/nanmain.html">Home</A> | <A href="${BASE_URL}bigmed2000/bigstudy.html">Study</A></H4></CENTER>
<CENTER><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=300 HEIGHT=5></CENTER>
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

export default CityhallJapanmes;
