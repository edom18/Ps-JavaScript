//output marge copy to new doucment.
preferences.rulerUnits = Units.PIXELS;

var DEFAULTPATH = '';
var DEFAULTNAME = 'marge';
var DEFAULTEXTENTION = '.jpg';

//get active document rectangle.
var doc = activeDocument;
var w = doc.width.value;
var h = doc.height.value;
doc.selection.selectAll();
doc.selection.copy(true);

var newDoc = documents.add( w, h );
newDoc.paste();

var exp = new ExportOptionsSaveForWeb();
exp.format = SaveDocumentType.JPEG;
exp.optimized = true;
exp.quality = 70;

var fn = DEFAULTPATH + DEFAULTNAME + DEFAULTEXTENTION;
var imgFile = new File(fn);
newDoc.exportDocument( imgFile, ExportType.SAVEFORWEB, exp );
newDoc.close(SaveOptions.DONOTSAVECHANGES);

doc.selection.deselect();
