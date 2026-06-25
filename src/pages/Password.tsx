import { useEffect } from "react";

const Password = () => {
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
<TABLE BORDER=3>
<TR><TD BGCOLOR=#0000A0 ALIGN=MIDDLE>
<FONT COLOR=#FFFFE8>
<IMG SRC="${BASE_URL}graph/truths2.jpg" ALT="WE HOLD THESE TRUTHS TO BE SELF-EVIDENT..." hspace=9 vspace=9 WIDTH=313 HEIGHT=88 BORDER=2></FONT></TD></TR>
</TABLE><BR>
<IMG SRC="${BASE_URL}graph/advline2.gif" WIDTH=75% HEIGHT=5><BR>
<BLOCKQUOTE><FONT SIZE=5 COLOR=#000033>If you do, too, hang out a bit. <BR>There are things to talk about..</FONT></BLOCKQUOTE>






<IMG SRC="${BASE_URL}graph/advline2.gif" WIDTH=75% HEIGHT=5><BR><BR>

<FONT  SIZE=4>

<STRONG><FONT  COLOR=#004000>"The task is not so much to see what no one has yet seen, <BR>but to think
                           what nobody has yet thought, <BR>about that 
                                   which everybody sees."</FONT></STRONG><BR>
                               -- Erwin Schr�dinger<P>

<BLOCKQUOTE><BLOCKQUOTE><STRONG><FONT  COLOR=#004000>"We live in the age of corporate organisms. Though no formal announcements have
      been issued, it's becoming harder to ignore that they have wrested control of the Earth
      from Homo sapiens and supplanted us as the planet's dominant species. It is these Big Bodies - the
      multinationals, government bureaucracies, ecclesiastical hierarchies, military organizations, et al. -
      not individual humans, that generate our era's character - its patterns of wealth &amp;
      poverty, its technological priorities &amp; ecological peril, its entertainment &amp; political
      agenda. They have, in short, taken over... The only important question now  is how shall we humans respond?" </FONT></STRONG><BR>- - W. David Kubiak</BLOCKQUOTE></BLOCKQUOTE>




"<STRONG><FONT  COLOR=#004000>A power has risen up in the government greater than the people<BR> 
themselves, consisting of many, and various, and powerful bodies, <BR>
combined into one mass, and held together by the cohesive power <BR>of the 
vast surplus of the banks.</FONT></STRONG>" <BR> - - John C. Calhoun<P>



"<STRONG><FONT  COLOR=#004000>The government has ceased to function, <BR>the corporations are the 
government</FONT></STRONG>."<BR> - - Theodore Dreiser<P>

"<STRONG><FONT  COLOR=#004000>We still have autocracy in industry as firmly seated on its throne <BR>as 
theocratic kings ruling in the name of god, <BR>or aristocracy ruling by military 
power; <BR>and the superceded forces represented by these twain, <BR>have 
become the allies of the power which replaced them.</FONT></STRONG>
" <BR> - - George W. Russell<P>



"<STRONG><FONT  COLOR=#004000>The American press, with very few exceptions, <BR>is a kept press. 
Kept by the big corporations <BR>the way a whore is kept by a tycoon</FONT></STRONG>." <BR> - - Theodore Dreiser<P>

"<STRONG><FONT  COLOR=#004000>The remedy in the United States is not less liberty but real liberty <BR>-- an end 
to the brutal intolerance of churchly hooligans <BR>and flag-waving 
corporations and all the rest <BR>of the small but bloody despots who are
making the word <BR>'Americanism' a synonym for coercion and legal crime.</FONT></STRONG>
"  <BR>- - Archibald MacLeish<P>

"<STRONG><FONT  COLOR=#004000>A perfect democracy is the most shameless thing in the world.  <BR>As it is the most shameless, it is the most fearless.</FONT></STRONG>
" <BR> - - Edmund Burke<P>

"<STRONG><FONT  COLOR=#004000>If there be a principle that ought not to be questioned <BR>within the United 
States, it is that every man has a right <BR>to abolish an old government and 
establish a new one, <BR>This principle is not only recorded in every public 
archive, <BR>written in every American heart, and sealed with the blood <BR>of a 
host of American martyrs, but is the only lawful tenure <BR>by which the 
United States hold their existence as a nation.</FONT></STRONG>"<BR>
  - - James Madison<P>


"<STRONG><FONT  COLOR=#004000>Let no man imagine that he has no influence. <BR>Whoever he may be, and 
wherever he may be placed,<BR> the man who thinks becomes a light and a power.</FONT></STRONG>
" <BR> - - Henry George<P>

"<STRONG><FONT  COLOR=#004000>When bad men combine, the good must associate; <BR>otherwise they will fall, 
one by one, <BR>an unpitied sacrifice in a contemptible struggle</FONT></STRONG>."<BR>  - - Edmund Burke<P>

"<STRONG><FONT  COLOR=#004000>Never doubt that a small group of thoughtful <BR>committed citizens can
                                    change the world; <BR>indeed it's the only thing that ever has</FONT></STRONG>."<BR>  -- Margaret
                                    Mead<P>





"<STRONG><FONT  COLOR=#004000>In politics, experiments mean revolutions.</FONT></STRONG>
" <BR> - - Benjamin Disraeli<P>



<HR WIDTH=85% ALIGN=center SIZE=2>
<IMG SRC="${BASE_URL}graph/advline2.gif" WIDTH=75% HEIGHT=5><BR>
<HR WIDTH=85% ALIGN=center SIZE=2><BR>
<FONT  COLOR=#000033><STRONG>If you are still wondering if <BR>You Should Be Here Now?<BR>Check out our <A HREF="../sithere1.html">Deep Structure</A>...</STRONG></FONT>

</FONT>
</CENTER>


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

export default Password;
