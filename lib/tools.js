async function repairText( text ) {

	text = text.replace(/St\?rung/g,'Störung')
            .replace(/Z\?ndung/g,'Zündung')
            .replace(/\?kologisch/g,'Ökologisch')
            .replace(/Sch\?nwetterprognose/g,'Schönwetterprognose')
            .replace(/\?kologisch/g,'Ökologisch')
            .replace(/u\?e/g,'uße')
            .replace( /\?ber/g,' über');
	return text;	
}

module.exports = {
    repairText,
};


