var querystring = require("querystring");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('abit.db');
var jsonfile = require('jsonfile');

exports.dbAdd = function(postData) {

var dogovor = querystring.parse(postData).value_number,
srok = querystring.parse(postData).year,
fio = querystring.parse(postData).full_name,
speciality = querystring.parse(postData).kaf,
serial = querystring.parse(postData).passport_ser,
number = querystring.parse(postData).passport_num,
vydan = querystring.parse(postData).passport_who,
data_vyd = querystring.parse(postData).passport_when,
code_podrazd = querystring.parse(postData).passport_qcode,
adres_reg = querystring.parse(postData).passport_address,
tel = querystring.parse(postData).student_phone,
n_sem_oplaty = querystring.parse(postData).bablo_sem,
group_n = querystring.parse(postData).group,
full_name_zak = querystring.parse(postData).full_name_zak,
passport_ser_zak = querystring.parse(postData).passport_ser_zak,
passport_num_zak = querystring.parse(postData).passport_num_zak,
passport_who_zak = querystring.parse(postData).passport_who_zak,
passport_when_zak = querystring.parse(postData).passport_when_zak,
passport_qcode_zak = querystring.parse(postData).passport_qcode_zak,
passport_address_zak = querystring.parse(postData).passport_address_zak,
zak_phone = querystring.parse(postData).zak_phone;
/*
var abitData=[dogovor,srok,fio,speciality,serial,number,vydan,data_vyd,code_podrazd,adres_reg,tel,n_sem_oplaty,group_n];
for(i=0;i<toNull.length;i++){
	if (abitData[i]=='')
		abitData[i]='none';
}
*/

function makeJson(dbData){
	var file = 'abits.json';
	var toPrint=dbData;
	jsonfile.writeFile(file, toPrint, function (err) {
		if(err) console.error(err);
	})
}

function getData(){
	db.all("SELECT * FROM abits", function(err, rows) {
			makeJson(rows);
	});
}

function updateData(){
	db.run('UPDATE abits SET dogovor='+dogovor+',srok="'+srok+'",fio="'+fio+'",speciality="'+speciality+'",serial="'+serial+'",number="'+number+'",vydan="'+vydan+'",data_vyd="'+data_vyd+'",code_podrazd="'+code_podrazd+'",adres_reg="'+adres_reg+'",tel="'+tel+'",n_sem_oplaty="'+n_sem_oplaty+'",group_n="'+group_n+'",fio_zak="'+full_name_zak+'",serial_zak="'+passport_ser_zak+'",number_zak="'+passport_num_zak+'",vydan_zak="'+passport_who_zak+'",data_vyd_zak="'+passport_when_zak+'",code_podrazd_zak="'+passport_qcode_zak+'",adres_reg_zak="'+passport_address_zak+'",tel_zak="'+zak_phone+'" WHERE dogovor='+dogovor);
}

function inputData(){
	db.run('INSERT OR IGNORE INTO abits (dogovor,srok,fio,speciality,serial,number,vydan,data_vyd,code_podrazd,adres_reg,tel,n_sem_oplaty,group_n,fio_zak,serial_zak,number_zak,vydan_zak,data_vyd_zak,code_podrazd_zak,adres_reg_zak,tel_zak) VALUES ('+dogovor+',"'+srok+'","'+fio+'","'+speciality+'","'+serial+'","'+number+'","'+vydan+'","'+data_vyd+'","'+code_podrazd+'","'+adres_reg+'","'+tel+'","'+n_sem_oplaty+'","'+group_n+'","'+full_name_zak+'","'+passport_ser_zak+'","'+passport_num_zak+'","'+passport_who_zak+'","'+passport_when_zak+'","'+passport_qcode_zak+'","'+passport_address_zak+'","'+zak_phone+'")');
}

db.serialize(function() {
  db.run('CREATE TABLE if not exists abits (dogovor INTEGER PRIMARY KEY,srok TEXT,fio TEXT,speciality TEXT,serial TEXT,number TEXT,vydan TEXT,data_vyd TEXT,code_podrazd TEXT,adres_reg TEXT,tel TEXT,n_sem_oplaty TEXT,group_n TEXT,fio_zak TEXT,serial_zak TEXT,number_zak TEXT,vydan_zak TEXT,data_vyd_zak TEXT,code_podrazd_zak TEXT,adres_reg_zak TEXT,tel_zak TEXT)');
	inputData();
	updateData();
	getData();
});

//db.close();

}
/*
//Perform DELETE operation
db.run("DELETE * from table_name where condition");
*/
/*  db.all("SELECT * FROM abits", function(err, rows) {  
    rows.forEach(function (row) {  
        //console.log(row.dogovor, row.fio);
		getInfo(row);
    }) 
}); */


/*db.each("SELECT * FROM abits", function(err, row) {
	//console.log(row.dogovor,row.srok,row.fio,row.speciality,row.serial,row.number,row.vydan,row.data_vyd,row.code_podrazd,row.adres_reg,row.tel,row.n_sem_oplaty,row.group_n);
		getInfo(row);
});*/