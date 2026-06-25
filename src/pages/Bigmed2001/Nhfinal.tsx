import { useEffect } from "react";

const Bigmed2001Nhfinal = () => {
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

<CENTER><TABLE>
<TR><TD><IMG SRC="${BASE_URL}bigmed2001/nhseal.gif" WIDTH=150 HEIGHT=150 HSPACE=15></TD><TD><CENTER><H3>STATE OF NEW HAMPSHIRE</H3>
<H4>Election Division<BR>
Presidential Primary - February 1, 2000<P>

FINAL VOTING RESULTS FOR <BR>
VICE-PRESIDENT OF THE UNITED STATES <BR>
DEMOCRATIC PRIMARY</H4></CENTER></TD></TR>
</TABLE>
<STRONG>Reference Link</STRONG><BR>(Reality Check)<BR>              <STRONG> <A HREF="http://www.sos.nh.gov/presprim2000/dvpressum.htm">New Hampshire Presidential Primary Home Page</A> </STRONG>
<H4><A href="${BASE_URL}bigmed2001/nhpr2.html">Click here to also see Big Med's <BR>Post-Announcement Press Release</A><BR>or<BR><A href="${BASE_URL}nh/nhfly.html" target="_blank">Campaign Flier</A></H4>
                                   
</CENTER><P>


<FONT  COLOR=#F2FFFF></FONT>
<CENTER><TABLE width=500 border=3 cellpadding=9 bgcolor="#F2FFFF">
<CAPTION ALIGN=top>SUMMARY BY COUNTY</CAPTION>
<TR><TD align=left><STRONG>COUNTY</STRONG></TD><TD align=middle><STRONG>Bradley</STRONG></TD><TD align=middle><STRONG>Costello</STRONG></TD><TD align=middle><STRONG>Gore</STRONG></TD><TD align=middle><STRONG>Kubiak</STRONG></TD><TD align=middle><STRONG>Shaheen</STRONG>
</TD></TR><TR><TD align=left>
Belknap</TD><TD align=right>108</TD><TD align=right>672</TD><TD align=right>54</TD><TD align=right>791</TD>
<TD align=right>14</TD></TR><TR><TD align=left>
Carroll</TD><TD align=right>83</TD><TD align=right>414</TD><TD align=right>37</TD><TD align=right>621</TD>
<TD align=right>6</TD></TR><TR><TD align=left>
Cheshire</TD><TD align=right>235</TD><TD align=right>1,060</TD><TD align=right>108</TD><TD align=right>1,237</TD>
<TD align=right>20</TD></TR><TR><TD align=left>
Coos</TD><TD align=right>89</TD><TD align=right>89</TD><TD align=right>32</TD><TD align=right>847</TD>
<TD align=right>5</TD></TR><TR><TD align=left>
Grafton</TD><TD align=right>176</TD><TD align=right>820</TD><TD align=right>115</TD><TD align=right>1,064</TD>
<TD align=right>13</TD></TR><TR><TD align=left>
Hillsborough</TD><TD align=right>788</TD><TD align=right>5,603</TD><TD align=right>311</TD><TD align=right>6,366</TD>
<TD align=right>86</TD></TR><TR><TD align=left>
Merrimack</TD><TD align=right>392</TD><TD align=right>1,809</TD><TD align=right>138</TD><TD align=right>2,269</TD>
<TD align=right>58</TD></TR><TR><TD align=left>
Rockingham</TD><TD align=right>576</TD><TD align=right>3,525</TD><TD align=right>206</TD><TD align=right>5,078</TD>
<TD align=right>77</TD></TR><TR><TD align=left>
Strafford</TD><TD align=right>247</TD><TD align=right>1,662</TD><TD align=right>103</TD><TD align=right>2,276</TD>
<TD align=right>76</TD></TR><TR><TD align=left>
Sullivan</TD><TD align=right>96</TD><TD align=right>572</TD><TD align=right>43</TD><TD align=right>735</TD>
<TD align=right>5</TD></TR><TR><TD align=left>

<STRONG>TOTALS</STRONG></TD><TD align=right><STRONG>2,790</STRONG></TD><TD align=right><STRONG>16,726</STRONG></TD><TD align=right><STRONG>1,147</STRONG></TD><TD align=right><STRONG>21,284</STRONG>   </TD><TD align=right><STRONG>360</STRONG></TD></TR>
<TR> <TD colspan=6 align=middle><STRONG>>> Kubiak plurality among all Democratic candidates: 50.7% <<</STRONG></TD></TR>

</TABLE>

<P>

<TABLE width=500 border=3 cellpadding=9 bgcolor="#F2FFFF">
<TR><TD align=left><STRONG>COUNTY</STRONG></TD><TD align=middle><STRONG>E. Dole</STRONG>*</TD><TD align=middle><STRONG><STRONG>Forbes</STRONG></STRONG>*</TD><TD align=middle><STRONG>Keyes</STRONG>*</TD><TD align=middle><STRONG>McCain</STRONG>*</TD><TD align=middle><STRONG>Misc</STRONG>.
</TD></TR>
<TR><TD align=left>
Belknap</TD><TD align=right>52</TD><TD align=right>-</TD><TD align=right>32</TD><TD align=right>38</TD>

<TD align=right>192</TD></TR><TR><TD align=left>
Carroll</TD><TD align=right>17</TD><TD align=right>-</TD><TD align=right>1</TD><TD align=right>13</TD>

<TD align=right>82</TD></TR><TR><TD align=left>
Cheshire</TD><TD align=right>67</TD><TD align=right>31</TD><TD align=right>26</TD><TD align=right>72</TD>

<TD align=right>213</TD></TR><TR><TD align=left>
Coos</TD><TD align=right>23</TD><TD align=right>11</TD><TD align=right>7</TD><TD align=right>40</TD>

<TD align=right>90</TD></TR><TR><TD align=left>
Grafton</TD><TD align=right>32</TD><TD align=right>8</TD><TD align=right>12</TD><TD align=right>35</TD>

<TD align=right>184</TD></TR><TR><TD align=left>
Hillsborough</TD><TD align=right>138</TD><TD align=right>61</TD><TD align=right>85</TD><TD align=right>132</TD>

<TD align=right>1,063</TD></TR><TR><TD align=left>
Merrimack</TD><TD align=right>38</TD><TD align=right>21</TD><TD align=right>19</TD><TD align=right>71</TD>

<TD align=right>361</TD></TR><TR><TD align=left>
Rockingham</TD><TD align=right>148</TD><TD align=right>39</TD><TD align=right>66</TD><TD align=right>135</TD>

<TD align=right>560</TD></TR><TR><TD align=left>
Strafford</TD><TD align=right>43</TD><TD align=right>8</TD><TD align=right>8</TD><TD align=right>44</TD>

<TD align=right>246</TD></TR><TR><TD align=left>
Sullivan</TD><TD align=right>36</TD><TD align=right>23</TD><TD align=right>36</TD><TD align=right>49</TD>

<TD align=right>129</TD></TR><TR>
<TD align=left><STRONG>TOTALS</STRONG></TD><TD align=right><STRONG>594</STRONG></TD><TD align=right><STRONG>202</STRONG></TD><TD align=right><STRONG>292</STRONG></TD><TD align=right><STRONG>629</STRONG></TD><TD align=right><STRONG>3,120</STRONG></TD></TR>
<TR> <TD colspan=6 align=middle><STRONG>>> <FONT  SIZE=+2>*</FONT> indicates Republican write-in candidates <<</STRONG></TD></TR>
</TABLE
<P>



<H3>See sample campaign flier<BR> <A href="${BASE_URL}nh/nhfly.html" target="_blank"><STRONG>here</STRONG></A>!</H3>


<H3><A href="${BASE_URL}bigmed2000/" target="_top">Back to the Future</A></H3>

</CENTER>
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

export default Bigmed2001Nhfinal;
