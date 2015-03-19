function invitados(idi) {

	var arrInv = [];

	for (var i = 0; i < 5; i++) {
		var row = Titanium.UI.createTableViewRow({
			width : 80,
			textAlign : 'left'

		});

		var etiqueta = Ti.UI.createLabel({
			text : 'invitadosR[i].CWID2',
			font : {
				fontSize : 20
			},
			color : '#000',
			textAlign : 'left'
		});
		row.add(etiqueta);
		arrInv.push(row);
	}
	$.participantesVista.data=[];
	$.participantesVista.data = arrInv;

	// var clearI = [];
	// $.participantesVista.data = clearI;
	// $.participantesVista.data = arrInv;

};

setInterval(function() {
	var cleanR = [];
	// $.itinerarioList.data = cleanR;
	// ititnerarioSalas();

}, 14000);

setInterval(function() {
	invitados();
	// itinerarios();
	// botonesCR(botonesEstado);
}, 12000);



// var myTemplate = {
	// properties:{
// 		
	// },
	// childTemplates : {
		// type : Ti.UI.Label,
		// bindId : 'titulos',
		// properties : {
			// color : 'black',
			// font : {
				// fontSize : 18
			// },
			// left : 3,
			// backgrounColor : 'blue'
		// },
// 
		// type : Ti.UI.Label,
		// bindId : 'texto2',
		// properties : {
			// color : 'red',
			// font : {
				// fontSize : 15
			// },
			// backgrounColor : 'white'
		// },
	// }
// };


var listavista=Ti.UI.createListView({
	height:130,
	width:190,
	// templates:{'tmp':myTemplate}
});

var secciones = Ti.UI.createListSection({
	headerTitle : "primera seccion"
});
var secciones2 = Ti.UI.createListSection({
	headerTitle : "segunda seccion"
});

var itemSet = [
	{ properties: { title: 'Row 1'} },
    { properties: { title: 'Row 2'} },
    { properties: { title: 'Row 3'} },
    { properties:{title:'ROW 4'}}
];


secciones.setItems(itemSet);
secciones.setFooterTitle('--footer--');
secciones2.setItems(itemSet);
secciones2.setFooterTitle('--footer 2--');
listavista.sections= [secciones, secciones2];
$.listview.add(listavista);
$.index.open();
