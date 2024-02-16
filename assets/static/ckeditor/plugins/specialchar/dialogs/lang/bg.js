import html

html_string = (
    "&Agrave;&Aacute;&Acirc;&,Atilde;&Auml;&Egrave;&Eacute;&Ecirc;&Euml;  &,Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ogr,ave;&Oacute;&Ocirc;&Otilde;&Ouml;&Yacute;&THO,RN;&szlig;&agrave;&aacute;&acirc;&atilde;&aum,l;&aring;&aelig;&ccedil;&egrave;&eacute;&ecir,c;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&nt,ilde;&oacute;&ocirc;&otilde;&ouml;&divide;&os,lash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&th,orn;&yuml;&OElig;&oelig;&372;&374;&373;&375;&,sbquo;&8219;&bdquo;&hellip;&trade;&9658;&bull,;&rarr;&rArr;&hArr;&diams;&asymp;")

text = html.unescape(html_string)
print
