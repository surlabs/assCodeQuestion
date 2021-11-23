var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="swiglpk.data";var REMOTE_PACKAGE_BASE="swiglpk.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","swiglpk",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:854593,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1429,2339,3616,4835,5856,6564,7174,7827,8341,9168,9941,10444,10970,11511,12315,13250,13975,14697,15321,15957,16579,17209,17856,18500,19120,19775,20437,21227,21794,22521,23271,24027,24659,25245,26077,27004,28322,29572,31023,31326,32633,34033,35383,36597,37890,39139,40384,41374,42465,43564,44623,45646,46306,46943,47562,48174,48785,49400,50018,50629,51245,51858,52470,53088,53715,54440,55253,56088,56968,57871,58905,59964,60992,62046,63110,64172,65241,66342,67390,68407,69427,70428,71433,72471,73465,75335,76657,77955,79247,80541,81833,83120,84373,85502,86637,88210,89031,89380,90110,91340,91968,92604,93668,94297,94862,95390,96045,96926,97665,98321,99501,100134,100694,101228,102646,103619,104483,105631,106700,107615,108472,109369,109988,110569,111231,112110,112727,113343,113883,114514,115149,115995,116705,117484,118235,118970,119862,120655,121339,122118,123148,124056,124893,125891,126830,128144,129260,130373,131047,132088,132732,133497,134093,135185,136099,136969,137848,138781,139896,140874,141683,142624,143537,144491,145838,147111,148362,149377,150338,151473,152643,153855,154971,156189,157482,158549,159557,160519,161852,162422,163351,164040,164913,165998,166828,168119,169320,170383,171583,172473,173593,174592,175498,176390,177364,178300,179439,180465,181362,182469,183701,184647,185649,186623,187521,188343,189182,190121,191359,192306,193424,194513,195260,195897,196654,197363,198508,199700,200779,201804,203069,204291,205431,206345,207584,208530,209718,210804,212098,213374,213933,214624,215739,216716,217861,218886,219612,220565,221253,221996,222940,223856,224743,225556,226397,227277,228224,228754,229648,230421,231144,232171,233341,234535,235665,236589,237586,238124,238874,239522,240591,241217,241784,242499,243525,244126,244979,245903,246299,246842,247619,248058,249061,249585,250201,250823,251776,252521,253206,253763,254260,255217,255826,256338,257078,257559,258508,258996,259656,260107,260885,261498,262076,262566,263240,263752,264285,264897,265889,266302,266780,267558,268033,268530,269266,270611,271734,272773,273894,275048,276340,277440,278491,279787,280993,282208,283343,284514,285749,286680,287750,288821,289957,291190,292367,293545,294787,295914,296903,297984,298934,299604,300506,301373,302601,303731,304641,305634,306732,307946,309068,310041,311209,312371,313392,314603,315725,316711,317915,319020,320216,321345,322554,323196,323951,325124,326265,327506,328613,329818,331190,332165,333236,333629,334706,335896,336809,337723,338881,340052,341304,342033,342899,343312,343982,345349,346542,347326,348223,349297,349721,350566,351518,352447,353337,354091,355011,355854,356762,357793,358838,359717,360373,361051,362374,363361,364666,365824,366921,368164,369332,370615,371828,373004,374340,375696,376905,378028,379315,380324,381390,381982,383184,384466,385661,386825,387865,389182,390268,391225,392387,393725,394927,396162,397279,398537,399497,400512,401525,402657,403666,404875,406107,407229,408244,409400,410450,411583,412564,413712,414918,416007,417238,417994,419201,420350,421424,422489,423425,424595,425645,426810,427633,428787,429784,430882,431816,432459,433593,434623,435607,436803,437809,438857,439996,441182,442491,443849,445019,446106,447298,448529,449697,450942,452028,453170,454261,455469,456382,457320,458303,459404,460572,461597,462890,463950,465183,466273,467470,468646,470078,471422,472751,474018,475249,476220,477205,478385,479652,480825,482030,483246,484444,485696,486717,488021,489118,490522,491599,492654,494002,495339,496525,497609,498602,499874,501172,502258,503175,504042,505363,506660,507826,508686,509518,510543,511415,512264,513263,513829,514627,515768,516756,517663,518573,519592,520466,521433,522274,523156,524511,525578,526455,527649,528807,529733,530906,531767,532927,533642,534883,535908,536862,537821,538717,540005,541318,542434,543380,544461,545639,546829,548084,549229,550354,551483,552587,553651,554812,555838,557139,558466,559768,561120,562319,563283,564217,565380,566654,567813,569042,570123,571108,572338,573539,574722,575864,576634,577646,578819,579954,581054,582329,583568,584810,585790,586911,587922,588971,590078,591036,592238,593427,594467,595732,597082,598138,599279,600568,601055,601940,602691,603321,604128,605004,605872,606832,607470,607778,608777,609380,610720,611668,612999,613699,614506,615259,615900,616680,617799,618989,619798,620769,622055,622831,623747,624757,625718,626652,627840,628749,629975,630881,631847,632968,633961,634892,636099,637373,638349,639401,640541,641693,643005,644134,645167,646535,647730,649003,650272,651348,652691,653777,654849,655659,656537,657725,658852,660161,661236,662509,663893,665206,666555,667875,669026,669891,670720,672053,673174,674228,675271,676525,677732,679068,680269,681447,682547,683793,684847,686204,687258,688563,689498,690672,691936,692723,694022,695269,696587,697865,698999,700281,701181,702344,703479,704577,705689,706865,708185,708921,709859,710965,711676,712887,713801,714593,715694,716859,717723,718815,719955,721128,722446,723638,724908,725549,726844,728132,729472,730239,731464,732388,733405,734299,735211,736399,737665,738790,740076,740991,742130,743345,744146,745076,746446,747025,748444,749490,750357,751229,752169,753110,753984,754824,755660,756415,757066,757718,758480,759615,760377,761367,762483,763508,764129,764732,765193,765756,766303,766830,767282,767897,768512,768995,769492,769962,770482,771015,771546,772041,772502,773011,773555,774103,774649,775402,775921,776412,776915,777492,777973,778446,778904,779463,780218,781431,782721,784083,785089,786027,787288,788499,789389,790127,791118,792191,792949,793795,794991,795875,796697,797531,798632,799521,800794,802096,803117,804323,805172,806120,807012,808128,809438,810810,812203,813557,814790,816150,817499,818810,820195,821357,822373,823343,824571,825721,826788,828076,828998,830312,831503,832677,834013,835307,836794,838842,840890,842938,844921,846395,847804,849459,850492,851532,852572,853614,854337,854543,854568],sizes:[1429,910,1277,1219,1021,708,610,653,514,827,773,503,526,541,804,935,725,722,624,636,622,630,647,644,620,655,662,790,567,727,750,756,632,586,832,927,1318,1250,1451,303,1307,1400,1350,1214,1293,1249,1245,990,1091,1099,1059,1023,660,637,619,612,611,615,618,611,616,613,612,618,627,725,813,835,880,903,1034,1059,1028,1054,1064,1062,1069,1101,1048,1017,1020,1001,1005,1038,994,1870,1322,1298,1292,1294,1292,1287,1253,1129,1135,1573,821,349,730,1230,628,636,1064,629,565,528,655,881,739,656,1180,633,560,534,1418,973,864,1148,1069,915,857,897,619,581,662,879,617,616,540,631,635,846,710,779,751,735,892,793,684,779,1030,908,837,998,939,1314,1116,1113,674,1041,644,765,596,1092,914,870,879,933,1115,978,809,941,913,954,1347,1273,1251,1015,961,1135,1170,1212,1116,1218,1293,1067,1008,962,1333,570,929,689,873,1085,830,1291,1201,1063,1200,890,1120,999,906,892,974,936,1139,1026,897,1107,1232,946,1002,974,898,822,839,939,1238,947,1118,1089,747,637,757,709,1145,1192,1079,1025,1265,1222,1140,914,1239,946,1188,1086,1294,1276,559,691,1115,977,1145,1025,726,953,688,743,944,916,887,813,841,880,947,530,894,773,723,1027,1170,1194,1130,924,997,538,750,648,1069,626,567,715,1026,601,853,924,396,543,777,439,1003,524,616,622,953,745,685,557,497,957,609,512,740,481,949,488,660,451,778,613,578,490,674,512,533,612,992,413,478,778,475,497,736,1345,1123,1039,1121,1154,1292,1100,1051,1296,1206,1215,1135,1171,1235,931,1070,1071,1136,1233,1177,1178,1242,1127,989,1081,950,670,902,867,1228,1130,910,993,1098,1214,1122,973,1168,1162,1021,1211,1122,986,1204,1105,1196,1129,1209,642,755,1173,1141,1241,1107,1205,1372,975,1071,393,1077,1190,913,914,1158,1171,1252,729,866,413,670,1367,1193,784,897,1074,424,845,952,929,890,754,920,843,908,1031,1045,879,656,678,1323,987,1305,1158,1097,1243,1168,1283,1213,1176,1336,1356,1209,1123,1287,1009,1066,592,1202,1282,1195,1164,1040,1317,1086,957,1162,1338,1202,1235,1117,1258,960,1015,1013,1132,1009,1209,1232,1122,1015,1156,1050,1133,981,1148,1206,1089,1231,756,1207,1149,1074,1065,936,1170,1050,1165,823,1154,997,1098,934,643,1134,1030,984,1196,1006,1048,1139,1186,1309,1358,1170,1087,1192,1231,1168,1245,1086,1142,1091,1208,913,938,983,1101,1168,1025,1293,1060,1233,1090,1197,1176,1432,1344,1329,1267,1231,971,985,1180,1267,1173,1205,1216,1198,1252,1021,1304,1097,1404,1077,1055,1348,1337,1186,1084,993,1272,1298,1086,917,867,1321,1297,1166,860,832,1025,872,849,999,566,798,1141,988,907,910,1019,874,967,841,882,1355,1067,877,1194,1158,926,1173,861,1160,715,1241,1025,954,959,896,1288,1313,1116,946,1081,1178,1190,1255,1145,1125,1129,1104,1064,1161,1026,1301,1327,1302,1352,1199,964,934,1163,1274,1159,1229,1081,985,1230,1201,1183,1142,770,1012,1173,1135,1100,1275,1239,1242,980,1121,1011,1049,1107,958,1202,1189,1040,1265,1350,1056,1141,1289,487,885,751,630,807,876,868,960,638,308,999,603,1340,948,1331,700,807,753,641,780,1119,1190,809,971,1286,776,916,1010,961,934,1188,909,1226,906,966,1121,993,931,1207,1274,976,1052,1140,1152,1312,1129,1033,1368,1195,1273,1269,1076,1343,1086,1072,810,878,1188,1127,1309,1075,1273,1384,1313,1349,1320,1151,865,829,1333,1121,1054,1043,1254,1207,1336,1201,1178,1100,1246,1054,1357,1054,1305,935,1174,1264,787,1299,1247,1318,1278,1134,1282,900,1163,1135,1098,1112,1176,1320,736,938,1106,711,1211,914,792,1101,1165,864,1092,1140,1173,1318,1192,1270,641,1295,1288,1340,767,1225,924,1017,894,912,1188,1266,1125,1286,915,1139,1215,801,930,1370,579,1419,1046,867,872,940,941,874,840,836,755,651,652,762,1135,762,990,1116,1025,621,603,461,563,547,527,452,615,615,483,497,470,520,533,531,495,461,509,544,548,546,753,519,491,503,577,481,473,458,559,755,1213,1290,1362,1006,938,1261,1211,890,738,991,1073,758,846,1196,884,822,834,1101,889,1273,1302,1021,1206,849,948,892,1116,1310,1372,1393,1354,1233,1360,1349,1311,1385,1162,1016,970,1228,1150,1067,1288,922,1314,1191,1174,1336,1294,1487,2048,2048,2048,1983,1474,1409,1655,1033,1040,1040,1042,723,206,25,25],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_swiglpk.data")}Module["addRunDependency"]("datafile_swiglpk.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/swiglpk-4.65.1-py3.9.egg-info",start:0,end:6885,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/__init__.py",start:6885,end:6907,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/swiglpk.py",start:6907,end:73442,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/_swiglpk.so",start:73442,end:1763221,audio:0}],remote_package_size:858689,package_uuid:"5b11aff7-a511-472c-8e26-4514bca76bc9"})})();