var xOp7Up,xOp6Dn,xIE4Up,xIE4,xIE5,xIE6,xNN4,xUA=navigator.userAgent.toLowerCase();
if(window.opera){
  var i=xUA.indexOf('opera');
  if(i!=-1){
    var v=parseInt(xUA.charAt(i+6));
    xOp7Up=v>=7;
    xOp6Dn=v<7;
  }
}
else if(navigator.vendor!='KDE' && document.all && xUA.indexOf('msie')!=-1){
  xIE4Up=parseFloat(navigator.appVersion)>=4;
  xIE4=xUA.indexOf('msie 4')!=-1;
  xIE5=xUA.indexOf('msie 5')!=-1;
  xIE6=xUA.indexOf('msie 6')!=-1;
}
else if(document.layers){xNN4=true;}
var xMac=xUA.indexOf('mac')!=-1;
var xFF=xUA.indexOf('firefox')!=-1;

function ajaxboardProcess()
{
	return false;
}

/**
* class명으로 엘리먼트 검색
*/
function getElmsByClass(elm, className){
    if(typeof className == 'string'){
        var findElms = new Array();
        var reg = new RegExp("\\b"+className+"\\b", "i");
        var list = elm.getElementsByTagName('*');

        for(var i=0; (o=list[i]); i++){
            if(o.className && o.className.search(reg) != -1){
                findElms.push(o);
            }
        }

        if(findElms.length == 1) findElms = findElms[0];
        if(findElms.length == 0) findElms = null;

        return findElms;
    }
}

/**
* AJAX 객체 호출
*/
function call_Ajax_board(board_id, template)
{
	Ajax.init("/cjs/ajax/ajax.board.php?com_board_id="+board_id+"&template="+template, '', 'GET' , null , false , false );
}

/**
* 글쓰기 폼 체크
*/
function com_board_writeformCheck()
{
	var board_id = document.getElementById('board_id').value;
	var template = document.getElementById('template') ? document.getElementById('template').value : document.getElementsByName('template')[0].value;

	var boardForm = "com_board";
    if(document.getElementById('descriptionView_TEXTAREA')) {
        var descriptTemp = document.getElementById('descriptionView_TEXTAREA').value;
        document.com_board.description.value = descriptTemp.replace(/\s+$/, "");
    }

	realBoardCheck(boardForm, board_id, template);

	return FormCheck.init(boardForm);
}

/**
* 글수정 폼 체크
*/
function com_board_modifyformCheck()
{
	var board_id = document.getElementById('board_id').value;
	var template = document.getElementById('template') ? document.getElementById('template').value : document.getElementsByName('template')[0].value;

	var boardForm = "com_board";
    if(document.getElementById('descriptionView_TEXTAREA')) {
        var descriptTemp = document.getElementById('descriptionView_TEXTAREA').value;
        document.com_board.description.value = descriptTemp.replace(/\s+$/, "");
    }

	realBoardCheck(boardForm, board_id, template);
	return FormCheck.init(boardForm);
}

/**
* 실제 폼 체크
*/
function realBoardCheck(formName, board_id, template) {
	call_Ajax_board(board_id, template);

	var rsXml	=	Ajax.rltXml();
	var xmlData	=	Ajax.rltXmlLoop(rsXml, "board_title");
	var tempArr	=	new Array();
    //console.log(tempArr);

	for(var i = 0; i < xmlData.length; i++) {
		tempArr[i] = new Array();
		tempArr[i]["code"]	=	Ajax.rltXmlOnce(xmlData[i], "code");
		tempArr[i]["name"]	=	Ajax.rltXmlOnce(xmlData[i], "name");
		tempArr[i]["attribute"]	=	Ajax.rltXmlOnce(xmlData[i], "attribute");
		tempArr[i]["necessary"]	=	Ajax.rltXmlOnce(xmlData[i], "necessary");
		tempArr[i]["attribute_value"]	=	Ajax.rltXmlOnce(xmlData[i], "attribute_value");

        /*
        @ 2011-03-18 ktchoi necessary=필수=setCheck(formName, code, 공백체크y/n,name,type,'min-max')
             - 필수와 상관없이 값이 있으면 유효성 체크 한다.
             - 필수의 의미는 공백(빈값) 여부로 처리한다.

        */
        var necessaryFlag='n';
        if(Common.int(tempArr[i]["necessary"])==1){
            //필수 항목
            necessaryFlag='y';
         }

        switch (Common.int(tempArr[i]["attribute"])) {
            case	1	:	//텍스트박스
                if(tempArr[i]["code"] == 'age') {
                    FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], 'num', '1-3');
                } else {
                    FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], '', '1-'+tempArr[i]["attribute_value"]);
                }
                break;
            case	12	:	//PASSWORD
                FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], '');
                break;
            case	2	:	//TEXTAREA
            case	9	:	//SELECTBOX
                if(necessaryFlag=='y' ){
                    FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], '');
                }
                break;
            case	3	:	//이메일
                FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], 'email');
                break;
            case	4	:	//URL
                FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], '');
                break;
            case	5	:	//TEL
                if(Common.int(tempArr[i]["attribute_value"]) == 2) {
                    FormCheck.setCheck(formName, tempArr[i]["code"]+'0', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                }
                FormCheck.setCheck(formName, tempArr[i]["code"]+'1', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                FormCheck.setCheck(formName, tempArr[i]["code"]+'2', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                FormCheck.setCheck(formName, tempArr[i]["code"]+'3', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                break;
            case	6	:	//DATE
                FormCheck.setCheck(formName, tempArr[i]["code"]+'Y', necessaryFlag, tempArr[i]["name"], '');
                FormCheck.setCheck(formName, tempArr[i]["code"]+'M', necessaryFlag, tempArr[i]["name"], '');
                FormCheck.setCheck(formName, tempArr[i]["code"]+'D', necessaryFlag, tempArr[i]["name"], '');
                break;
            case	7	:	//주소
                if(Common.int(tempArr[i]["attribute_value"]) == 1) {
                    FormCheck.setCheck(formName, tempArr[i]["code"]+'_post1', necessaryFlag, tempArr[i]["name"], 'num', '5');
                    //FormCheck.setCheck(formName, tempArr[i]["code"]+'_post2', necessaryFlag, tempArr[i]["name"], 'num', '1-3');
                }
                FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], '');
                break;
            case	8	:	//FILE
                if(necessaryFlag=='y' ){
                    if(getElmsByClass(document.body, 'file_attach_del') == null){
                        FormCheck.setCheck(formName, tempArr[i]["code"]+'[]', 'y', tempArr[i]["name"], 'file', '', '', '');
                    }
                }
                break;
            case	10	:	//CHECKBOX : 비밀글(secret)은 필수체크값 없음.
                if(tempArr[i]["code"] != 'secret' && necessaryFlag=='y' ){
                    FormCheck.setCheck(formName, tempArr[i]["code"]+'[]', necessaryFlag, tempArr[i]["name"], 'checkbox', '', '', '1');
                }
                break;
            case	11	:	//RADIO
                if(necessaryFlag=='y' ){
                    FormCheck.setCheck(formName, tempArr[i]["code"]+'[]', necessaryFlag, tempArr[i]["name"], 'checkbox', '', '', '');
                }
                break;
            case	13	:	//휴대전화
                if(Common.int(tempArr[i]["attribute_value"]) == 1) {
                    FormCheck.setCheck(formName, tempArr[i]["code"]+'0', necessaryFlag, tempArr[i]["name"], '');
                }
                FormCheck.setCheck(formName, tempArr[i]["code"]+'1', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                FormCheck.setCheck(formName, tempArr[i]["code"]+'2', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                FormCheck.setCheck(formName, tempArr[i]["code"]+'3', necessaryFlag, tempArr[i]["name"], 'num', '1-4');
                break;
            case	50	:	//CHECKBOX : 개인정보의 수집 및 이용목적 (기존 attribute 영향 안주게 개인정보필드일때는 50으로 설정함.)
                if(necessaryFlag=='y' ){
                    FormCheck.setCheck(formName, tempArr[i]["code"], necessaryFlag, tempArr[i]["name"], 'checkbox', '', '', '');
                }
                break;
        }
	}

    // 스팸방지문자
    try
    {
        FormCheck.setCheck(formName, 'captcha_code', 'y', '스팸방지 문자', '');
    }
    catch (e){}
}

/**
* 파일사이즈 체크 요청
*/
function ask_filesize(target, form){
	if(target.value == "") return;

	progressBar();
	var origin_target = '_self';
	var origin_action = document[form].action;

	document[form].target = "_filechk";
	document[form].action = "/cjs/filesize_chk.php";
	document[form].submit();

	document[form].target = origin_target;
	document[form].action = origin_action;

	setTimeout(function(){ res_filesize(target) }, 200);
}

/**
* 파일사이즈 체크결과 콜백함수
*/
function res_filesize(elm){
	if(document.getElementById('filesize_status').value != ""){
        if(document.getElementById('filesize_status').value == "hdd_false"){
			alert("사용중인 계정의 저장공간이 부족하여 파일업로드가 불가능합니다.\n\n [나의서비스관리] 에서 상위 서비스로 변경하거나 추가 옵션을\n 신청한 뒤 이용하시기 바랍니다.");
			elm.select();
            /*var f = document.getElementsByName('file_attachment[]');
            for(var i=0; i<f.length; i++) {
                f[i].value = '';
            }*/
            location.reload();
		} else if(document.getElementById('filesize_status').value == "false"){
			alert('파일 용량이 초과되었습니다');
			elm.select();
		}

		progressBar_remove();
		document.getElementById('filesize_status').value = "";
	}else{
		setTimeout(function(){ res_filesize(elm) }, 200);
		document.getElementById('filesize_status').value = "";
	}
}

/**
* ProgressBar 출력
*/
function progressBar(){
	if(document.getElementById('progressBar')) return;

	var w = xGetBodyWidth();
	var h = xGetBodyHeight();

	var itemTop = (h / 2) - (20 / 2);
	var itemLeft = (w / 2) - (300 / 2);

	var obj = document.createElement('div');
	obj.id = 'progressBar';
	obj.style.position = 'absolute';
	obj.style.textAlign = 'center';
	obj.style.filter = 'alpha(opacity=70)';
	obj.style.opacity = '0.7';
	obj.style.top = itemTop+'px';
	obj.style.left = itemLeft+'px';
	obj.style.width = '300px';
	obj.style.height = '20px';
	obj.style.padding = '4px';
	obj.style.border = '1px solid #666';
	obj.style.backgroundColor = '#FFF';
	obj.style.color = '#F30';
	obj.style.zIndex = '101';
	obj.innerHTML = '현재 파일 사이즈 체크중입니다';

	document.body.appendChild(obj);
}


/**
* ProgressBar 해제
*/
function progressBar_remove(){
	if(document.getElementById('progressBar')){
		document.body.removeChild(document.getElementById('progressBar'));
	}
}

/**
* @brief 보이는 문서의 가로
*
* @param void
* @returns void
*/
function xClientWidth()
{
  var w=0;
  if(xOp6Dn) w=window.innerWidth;
  else if(document.compatMode == 'CSS1Compat' && !window.opera && document.documentElement && document.documentElement.clientWidth)
	w=document.documentElement.clientWidth;
  else if(document.body && document.body.clientWidth)
	w=document.body.clientWidth;
  else if(xDef(window.innerWidth,window.innerHeight,document.height)) {
	w=window.innerWidth;
	if(document.height>window.innerHeight) w-=16;
  }
  return w;
}

/**
* @brief 보이는 문서의 높이
*
* @param void
* @returns void
*/
function xClientHeight()
{
  var h=0;
  if(xOp6Dn) h=window.innerHeight;
  else if(document.compatMode == 'CSS1Compat' && !window.opera && document.documentElement && document.documentElement.clientHeight)
    h=document.documentElement.clientHeight;
  else if(document.body && document.body.clientHeight)
    h=document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  else if(xDef(window.innerWidth,window.innerHeight,document.width)) {
    h=window.innerHeight;
    if(document.width>window.innerWidth) h-=16;
  }
  return h;
}

/**
* @brief 문서 전체 가로
*
* @param void
* @returns void
*/
function xGetBodyWidth() {
  var cw = xClientWidth();
  var sw = window.document.body.scrollWidth;
  return cw>sw?cw:sw;
}

/**
* @brief 문서 전체 높이
*
* @param void
* @returns void
*/
function xGetBodyHeight() {
  var cw = xClientHeight();
  var sw = window.document.body.scrollHeight;
  return cw>sw?cw:sw;
}

/**
* 리스트 분류 선택
*/
function com_board_category_sel(path)
{
	var form = document.com_board_form;

	code = form.com_board_category_code.options[form.com_board_category_code.selectedIndex].value;

	location.href = path + "&com_board_category_code=" + code;
}

/**
* 우편번호 검색
*/
function com_board_zipcode(name1, name2, name3, template)
{
	window.open("/chtml/zipcode.php?template=" + template + "&com_zipcode_openerform=document.com_board&com_zipcode_openername1=document.com_board." + name1 + "&com_zipcode_openername2=document.com_board." + name2 + "&com_zipcode_openername3=document.com_board." + name3, "cafe_component_zipcode", "width=447,height=370,scrollbars=yes");
}

/**
* 비밀글 링크
*/
function com_board_secret_form(idx, path, query, board_id, template)
{
	call_Ajax_board(board_id, template);

	var rsXml	=	Ajax.rltXml();
	var board_code = null;

	try{
		board_code	=	Ajax.rltXmlOnce(rsXml, "board_code");
	}catch(e){ }

	var board_id = (Common.int(board_id) > 0) ? board_id : board_code;
	window.open("/chtml/board.php?com_board_id=" + board_id + "&com_board_basic=secret_form&com_board_idx=" + idx + "&template=" + template + "&com_board_path=" + path + "&" + query, 'cafe_component_secret','width=430,height=353');
}

/**
* 본문 새창
*/
function com_board_read_new(idx, board_id, template)
{
	call_Ajax_board(board_id, template);

	var rsXml	=	Ajax.rltXml();
	var board_code	=	Ajax.rltXmlOnce(rsXml, "board_code");
	var read_link_newwidth	=	Ajax.rltXmlOnce(rsXml, "read_link_newwidth");
	var read_link_newheight	=	Ajax.rltXmlOnce(rsXml, "read_link_newheight");

	window.open("/chtml/board.php?com_board_id="+board_code+"&com_board_basic=read_form&com_board_idx=" + idx + "&template=" + template, 'cafe_component_read','width='+read_link_newwidth+',height='+read_link_newheight+',scrollbars=yes');
}

/**
* 댓글 달기 폼체크
*/
function com_board_commentCheck(board_id, template)
{
	call_Ajax_board(board_id, template);

	var rform	=	"com_board_form";
	var rsXml	=	Ajax.rltXml();
	var comment_writer_display	 =	Ajax.rltXmlOnce(rsXml, "comment_writer_display");
	var use_comment_anonymous	 =	Ajax.rltXmlOnce(rsXml, "use_comment_anonymous");

	if(Common.int(comment_writer_display) != 3 || Common.int(use_comment_anonymous) == 1) {
		FormCheck.setCheck(rform, 'com_board_comment_name', 'y', '이름', '');
	}

	FormCheck.setCheck(rform, 'com_board_comment_password', 'y', '비밀번호', '');
	FormCheck.setCheck(rform, 'com_board_comment_contents', 'y', '내용', '');

    // 스팸방지문자
    try
    {
        FormCheck.setCheck(rform, 'captcha_code', 'y', '스팸방지 문자', '');
    }
    catch (e){}

	return FormCheck.init(rform);
}

/**
* 댓글 수정 삭제
*/
function com_board_comment_action(arg, template)
{
	window.open("/chtml/board.php?" + arg + "&template=" + template, "comboardrwinaction", "width=450,height=250,directory=no,resizable=no,scrollbars=yes");
}

/**
* 글삭제
*/
function com_board_delete(id, idx, path, template, query)
{
	window.open("/chtml/board.php?com_board_id=" + id + "&com_board_basic=delete_form&com_board_idx=" + idx + "&template=" + template + "&" + query + "&com_board_path=" + path, 'cafe_component_delete', 'width=450,height=220,directory=no,resizable=no,scrollbars=yes');
}

/**
* 파일 개별 삭제
*/
function com_board_file_delete(id, template, idx, type, seq, filename)
{
	window.open("/chtml/board.php?com_board_basic=file_delete&com_board_id=" + id +"&com_board_idx=" + idx + "&template=" + template + "&com_board_file_type=" + type + "&com_board_file_seq=" + seq + "&filename=" + filename, 'cafe_component_file_delete', 'width=50,height=50');
}

/**
* 이미지 삭제
*/
function com_board_img_delete(id, idx, path, template, query, type, seq)
{
	window.open("/chtml/board.php?com_board_id=" + id + "&com_board_basic=file_delete_form&com_board_idx=" + idx + "&template=" + template + "&" + query + "&com_board_path=" + path + "&com_board_file_type=" + type + "&com_board_file_seq=" + seq, 'cafe_component_delete', 'width=450,height=220,directory=no,resizable=no,scrollbars=yes');
}

/**
* 페이지 이동
*/
function com_board_relocate(path, idx, query, board_id, template)
{
	call_Ajax_board(board_id, template);
	var rsXml = Ajax.rltXml();
	var board_code	= Ajax.rltXmlOnce(rsXml, "board_code");

	location.href = path + '?com_board_basic=read_form&com_board_id='+board_code+'&' + query + '&com_board_idx=' + idx;
}

/**
* FAQ 글보기
*/
function com_board_faq_show(obj)
{
	if(Common.getObj(obj).style.display == 'none') {
		Common.getObj(obj).style.display = '';
	} else {
		Common.getObj(obj).style.display = 'none';
	}
}

/**
* 추출 본문 새창
*/
function com_board_output_read_new(path, board_id, template)
{
	call_Ajax_board(board_id, template);


	var rsXml	=	Ajax.rltXml();
	var output_winwidth		=	Ajax.rltXmlOnce(rsXml, "output_winwidth");
	var output_winheight	=	Ajax.rltXmlOnce(rsXml, "output_winheight");

	window.open(path, 'cafe_output_read','width='+output_winwidth+',height='+output_winheight+',scrollbars=yes,resizable=yes');
}

/**
* 텍스트 박스 넒이 길이 조절
*/
function com_board_resize_textarea(mode, oc, or)
{
	var form = document.com_board;
	switch (mode) {
		// 넓이
		case 'c' : form.description.cols += 5; break;
		// 원위치
		case 'o' : form.description.cols = oc;  form.description.rows = or; break;
		// 길이
		case 'r' : form.description.rows += 5; break;
	}
}

/**
* 읽기 페이지에서 이미지 새창
*/
function com_board_image_new(path, w, h, board_id, template)
{
	call_Ajax_board(board_id, template);

	var rsXml	=	Ajax.rltXml();
	var board_code	=	Ajax.rltXmlOnce(rsXml, "board_code");

	if(w > screen.width) w = screen.width - 100;
	if(h > screen.height) h = screen.height - 100;

	window.open('/chtml/board.php?com_board_basic=image_view&template=' + template + '&com_board_id='+board_code+'&path=' + path, 'cafe_board_image', 'width=' + w + ',height=' + h + ',top=0,left=0,scrollbars=no,resizable=no');
}

/**
* 게시물 여러개 삭제(관리자)
*/
function delete_check_notice(id, path, template, query)
{
	if(!confirm('삭제하시겠습니까?')) return;

	var obj, i, idxs = '';

	obj = Common.getObj('delete_check_notice[]', 'name');

	for(var i = 0; i < obj.length; i++) {
		if(obj[i].checked == false) continue;

		if(idxs) {
			idxs += '^';
		}

		idxs += obj[i].value;
	}

	if(Space_All(idxs) == '') {
		alert('선택하신 게시물이 없습니다. 다시한번 확인 바랍니다. ');
		return;
	}

	document.location.href="/chtml/board.php?com_board_id=" + id + "&com_board_basic=delete&com_board_idx=" + idxs + "&template=" + template + "&" + query + "&com_board_path=" + path, 'cafe_component_delete';
}

/**
* 게시물 삭제
*/
function delete_check_notice2(id, path, template, query, idxs,pass)
{
    if(!confirm('삭제하시겠습니까?')) return;

	document.location.href="/chtml/board.php?com_board_id=" + id + "&com_board_basic=delete&com_board_idx=" + idxs + "&template=" + template + "&" + query + "&com_board_path=" + path + "&com_board_password=" + pass, 'cafe_component_delete';
}

/**
* 게시물 이동,복사
*/
function move_check_board(id, path, template, query,com_board_basic,com_board_category_code)
{

	var obj, i, idxs = '';

	obj = Common.getObj('delete_check_notice[]', 'name');

	for(i = 0; i < obj.length; i++) {
		if(obj[i].checked == false) continue;

		if(idxs) {
			idxs += '^';
		}
		idxs += obj[i].value;
	}

	if(Space_All(idxs) == '') {
		alert('선택된 항목이 없습니다.');
		return;
	}
    path=encodeURIComponent(path); //2011-03-03 ktchoi
	window.open("/chtml/board_move.php?com_board_id=" + id + "&com_board_basic="+ com_board_basic +"&com_board_idx=" + idxs + "&template=" + template + "&" + query + "&com_board_path=" + path + "&com_board_category_code=" + com_board_category_code,"board_move","width=430,height=210,scrollbars=yes,top=250,left=250");
}

/**
* 게시물 이동 팝업
*/
function move_check_board_read(id, path, template, query,com_board_basic,com_board_category_code,com_board_idx)
{

	var obj, i, idxs = '';

	obj = Common.getObj('delete_check_notice[]', 'name');

	for(var i = 0; i < obj.length; i++) {
		if(obj[i].checked == false) continue;

		if(idxs) {
			idxs += '^';
		}

		idxs += obj[i].value;
	}
    path=encodeURIComponent(path); //2011-03-03 ktchoi

	window.open("/chtml/board_move.php?com_board_id=" + id + "&com_board_basic="+ com_board_basic +"&com_board_idx=" + idxs + "&template=" + template + "&" + query + "&com_board_path=" + path + "&com_board_category_code=" + com_board_category_code + "&com_board_idx=" + com_board_idx,"board_move","width=430,height=210,scrollbars=yes,top=250,left=250");
}

/**
* 체크박스 전체 선택
*/
function delete_select_all(el)
{
	var delete_checkbox = Common.getObj("delete_check_notice[]", 'name');

	if(el.checked == true) {
		for(var i = 0; i < delete_checkbox.length; i++) {
			delete_checkbox[i].checked = true;
		}
	} else {
		for(var i = 0; i < delete_checkbox.length; i++) {
			delete_checkbox[i].checked = false;
		}
	}
}

/**
* 컬러선택팝업
*/
function colorTb(frm, view_frm)
{
	window.open('/chtml/colortable.php?frm=' + frm + '&view_frm=' + view_frm,'ctable','resizable=false,width=320,height=190,scrollbars=no');
}

/**
* 컬러뷰
*/
function colorView(frm, view_frm)
{
	var val = frm.value;
	val = val.replace(/#/g,'');

	if(val && !(isHexStr(val))) {
		if(val.length < 6) {
			var blank = '';
			for(i=1; i<=(6 - val.length); i++) blank += '0';
			val = '#' + val + blank;
			view_frm.style.backgroundColor = val;
		}
		else if(val.length == 6) view_frm.style.backgroundColor = val;
	}
}

/**
* HEXCODE 인지 판별
*/
function isHexStr(str)
{
	for(var i = 0; i < str.length; i++) {
		if( !((str.charAt(i) >= 0 && str.charAt(i) <= 9) || (str.charAt(i).toUpperCase() >= 'A' && str.charAt(i).toUpperCase() <= 'F')) ) return true;
	}

	return false;
}

/**
* 공백 제거
*/
function Space_All(str)
{
	return str.replace(/[\s]+/g,"");
}

/**
* 이미지 파일 업로드 팝업
*/
function editor_image_add(template, com_board_id) // gckim 2008-03-07
{
	var popup_editor_image = window.open("/chtml/board.php?com_board_basic=image_add_pop&template=" + template + "&com_board_id=" + com_board_id, "comboardeditor", "width=648,height=510,directory=no,resizable=no,scrollbars=no,scrollbars=no,status=no");
    popup_editor_image.focus();
}

/**
* 이미지 파일 업로드
*/
function photo_file2(mode, com_board_id,file_size)
{
	var form = document.photoform;
	var photo_max_size;
	var photo_max_size_string;

	if(file_size == '') {
		photo_max_size = 500000;
		photo_max_size_string = '500k'
	} else {
		photo_max_size = file_size*1000000;
		photo_max_size_string = file_size+'Mb';
	}

	if(mode == 'add')
	{
		if(form.file_gubun.value == 'I' && !form.photo_file.value) {
			alert('사진 파일을 선택하세요!');
			return;
		} else {
			var newImg = new Image();
			newImg.src = form.photo_file.value;

			if(!validfile(newImg.src)) {
				alert('파일포맷은 jpg, gif 업로드 가능합니다.');
				return;
			}

			if(newImg.fileSize != "-1") {
				if(newImg.fileSize > photo_max_size) {
					alert('파일용량은 '+photo_max_size_string+' 미만으로 업로드 가능합니다.');
					return;
				}
			}

			//이미지 등록시 로딩 이미지 처리-이미지 등록시 중복 예비 [2007-04-26 kjm]
			var PrevLayer = Common.getObj('prev_photo_layer');
            Common.getObj('prev_photo_layer').src = '/cimg/board/img_upload.gif';

			/*for(i = 0; i < PrevLayer.childNodes.length; i++) {
				if(PrevLayer.item[i].tagName == 'IMG') {
					PrevLayer.item[i].src = '/cimg/board/img_upload.gif';
				}
			}*/

			Common.getObj('prev_photo_layer').style.display = '';
			Common.getObj('photo_layer').style.display = 'none';

			var filemode = 'upload';
		}
	}
	else if(mode == 'add_url') {
		if(form.file_gubun.value == 'I' && !form.photo_url.value) {
			alert('사진 파일을 선택하세요!');
			return;
		} else {
			var newImg = new Image();
			newImg.src = form.photo_url.value;

			if(!validfile(newImg.src)) {
				alert('파일포맷은 jpg, gif 업로드 가능합니다.');
				return;
			}

			if(newImg.fileSize != "-1") {
				if(newImg.fileSize > photo_max_size) {
					alert('파일용량은 500K 미만으로 업로드 가능합니다.');
					return;
				}
			}

			//이미지 등록시 로딩 이미지 처리-이미지 등록시 중복 예비 [2007-04-26 kjm]
			var PrevLayer = Common.getObj('prev_photo_layer');
            Common.getObj('prev_photo_layer').src = '/cimg/board/img_upload.gif';

			/*for(i = 0; i < PrevLayer.childNodes.length; i++) {
				if(PrevLayer.item[i].tagName == "IMG") {
					PrevLayer.item[i].src = '/cimg/board/img_upload.gif';
				}
			}*/

			Common.getObj('prev_photo_layer').style.display = '';
			Common.getObj('photo_layer').style.display = 'none';

			var filemode = 'upload_url';
		}
	}
	else if(mode == 'del')
	{
		var file = form.elements('ch[]');
		var file_len = img_arr1.length;
		var del_file = "";
		var tmp1 = Array();
		var tmp2 = Array();
		var tmp_link = Array();
		var tmp_infotxt = Array();
		var tmp_infoimg = Array();
		var tmp_mode = Array();
		var n = 0;
		var warn_msg = "삭제할 파일이 없습니다!";
		var warn_status = false;

		if(file_len == 1 && (file.checked == true) && (img_mode[0] == "") ) {
			del_file += file.value + ";";
			n++;
		} else {
			for(i=0,m=0; i<file_len; i++) {
				if( (img_mode[i] == "") && (file[i].checked == true) ) {
					del_file += file[i].value + ";";
					n++;
				} else {
					tmp1[m] = img_arr1[i];
					tmp2[m] = img_arr2[i];
					tmp_link[m] = img_link_arr[i];
					m++;

					if(img_mode[i] != "") warn_status = true;
				}
			}
		}

		// 본문에 첨부된 이미지 리스트 문자열에서 삭제된 문자열 부분 제거
		var post_img = opener.Common.getObj('upload_photo_images').value;
		post_img = post_img;

		var del_file2 = del_file;
		del_file2 = del_file2.replace(/;/g,',');
		post_img = post_img.replace(del_file2,'');

		opener.Common.getObj('upload_photo_images').value=post_img;
		if(del_file == "") {
			if(warn_status == true) warn_msg += " (포스트에 등록된 이미지는 삭제가 불가능합니다.)";
			alert(warn_msg);
			warn_status = false;
			return;
		} else {
			var for_cnt = tmp1.length + Common.int(5 - (tmp1.length / 5));

			var str = "<table width=100% border=0 cellspacing=0  cellpadding=5 align=center>";

			for(i=0; i<for_cnt; i++) {
				if(i%5 == 0) str += "<tr height=130 align=center>";

				str += "<td width=20%>";

				if(tmp1[i]) {
					str += "<table border=1 cellpadding=0 cellspacing=2 style='border-collapse:collapse' bordercolor='#DEDFDE'>";
					str += "<tr><td><img name='i[]' src='" + tmp1[i] + "' width=100 height=131><input type='hidden' name='photo[]' value='" + tmp2[i] + "'><input type='hidden' name='photo_link[]' value='" + tmp_link[i] + "'></td></tr>";
					str += "</table>";
					str += "<table border=0 cellpadding=0 cellspacing=0 width=100%>";
					str += "<tr><td height='35' align='center'><input type='checkbox' name='ch[]' value='" + tmp2[i] + "'>";

					str += "</td></tr></table>";
				} else {
					str += "&nbsp;";
				}

				str += "</td>";

				if(i%5 == 4) str += "</tr>";
			}

			str += "</tr></table>";

			var layer = Common.getObj('photo_layer');
			layer.innerHTML = str;

			img_arr1 = tmp1;
			img_arr2 = tmp2;
			img_link_arr = tmp_link;

			form.photo_del_file.value = del_file;

			if((file_len - n) == 0) {
				Common.getObj('prev_photo_layer').style.display = '';
				Common.getObj('photo_layer').style.display = 'none';
			}

			var filemode = 'remove';
		}
	}

	form.target = 'fileframe';
	form.action = '/chtml/board.php?template=&com_board_basic=image_upload_mode&filemode=' + filemode + '&com_board_id=' + com_board_id+'&filesize='+photo_max_size;
	form.submit();
	form.photo_url.value = '';
}

/**
* 이미지 파일 판별
*/
function validfile(file)
{
	var ext = file.substring(file.lastIndexOf(".")+1);

	ext = ext.toUpperCase();

	if (ext == "JPG" || ext=="JPEG" || ext=="GIF")
		return true;

	return false;
}

/**
* 이미지 등록 전체 선택
*/
function uploadCheckBoxAll()
{
	var allCheck = Common.getObj('allcheck');
	var upload_check = Common.getObj('ch[]', 'name');

	if(allCheck.checked) {
		for(i=0; i<upload_check.length; i++) {
			upload_check[i].checked = true;
		}
	} else {
		for(i=0; i<upload_check.length; i++) {
			upload_check[i].checked = false;
		}
	}
}

/**
* 선택 이미지 Content box에 적용
*/
function photo_apply_post()
{
    var descbox_ifr = 'description_ifr';
    var descbox_txt = 'description_txt';

    if(opener.document.getElementById('iframe_change')){
        descbox_ifr = 'iframe_change';
        descbox_txt = 'contents';
    }

	var status = false;
	var upload_photo_images = upload_photo_images_url = "";

	// 직접올리기
	if (photo_type == 'self') {
		var file_mode = img_mode;
		var file1 = img_arr1;
		var file2 = img_arr2;
		var file_link = img_link_arr;

		var file1_len = file1.length;

		var x = Common.getObj('ch[]', 'name');
		var upload_image_url = Array();
		var upload_image_name = Array();
		var l=0;

		for(i = 0 ; i < x.length ; i++) {
			if (x[i].checked) {
				var a=opener.document.getElementById('upload_photo_images').value;

				if (a.indexOf(file2[i]) == -1) {
					upload_photo_images += file2[i] + ",";
					upload_image_url += file1[i] + ",";
					upload_image_name += file2[i] + ",";
				}

				if(file_mode[i] == "") upload_photo_images_url += "<P><IMG SRC='" + file1[i] + "'></P>";

				l++;
			}
		}

		if(l == 0) {
			alert("선택한 사진이 없습니다.");
		} else status = true;
	}

	if (status == true) {
		// 위지윅 모드
		var url = location.href;
		var domain = url.substring(0,url.indexOf("chtml"));

		/*if ((opener.document.getElementById(descbox_ifr).contentWindow.document.body.contentEditable == 'true'
			|| opener.document.getElementById(descbox_ifr).contentWindow.document.body.contentEditable == 'inherit') && opener.document.getElementById(descbox_txt).style.display == 'none')
		{*/
        if(opener.document.getElementById(descbox_txt).style.display == 'none') {
			prev = opener.document.getElementById(descbox_ifr).contentWindow.document.body.outerHTML;
			opener.document.getElementById('description').value = prev + upload_photo_images_url;
			//2008.06.09 주소창 정규식 치환
			temp = opener.document.getElementById('description').value;
			var pattern = /http\:\/\/+[가-힝a-zA-Z0-9\-\.]+[가-힝a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3})+\//i;

			tempUrl = temp.replace(pattern, domain);

			opener.document.getElementById(descbox_ifr).contentWindow.document.body.innerHTML = tempUrl;
		}
		// html 모드
		else {
			var id = descbox_txt;
			var el, i, objs = opener.document.getElementsByTagName('textarea');
			for (i = objs.length; --i >= 0 && (el = objs[i]);) {
				if(el.id == id) {
					el.value=el.value + upload_photo_images_url;
				}
			}
		}

		opener.document.getElementById('upload_photo_images').value += upload_photo_images;
		opener.document.getElementById('upload_photo_images_url').value += upload_image_url;
		opener.document.getElementById('upload_photo_images_name').value += upload_image_name;
		self.close();
	}
}

/**
* 이미지 파일 등록
*/
function add_file(furl, fname, linkurl, infotxt, infoimg, mode)
{
	var mode = (mode) ? mode : "";
	add_cnt++;

	img_mode.push(mode);
	img_arr1.push(furl);
	img_arr2.push(fname);

	if(linkurl) img_link_arr.push(linkurl);
	else img_link_arr.push('');

	//텀이 없이 이미지 등록시 문제 생김[joumi, kim]
	//var for_cnt = img_arr1.length + parseInt(5 - (img_arr1.length / 5));
	var for_cnt = img_arr1.length;
	var str = "<table width=100% border=0 cellspacing=0  cellpadding=5 align=center>";
	str +="<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";

	for(i=0; i<for_cnt; i++) {
		if(i%5 == 0) str += "<tr height=130 align=center>";

		str += "<td width=20%>";

		if(img_arr1[i]) {
			str += "<table border=1 cellpadding=0 cellspacing=2 style='border-collapse:collapse' bordercolor='#DEDFDE'>";
			str += "<tr><td><img name='i[]' src='" + img_arr1[i] + "' width=100 height=131><input type='hidden' name='photo[]' value='" + img_arr2[i] + "'><input type='hidden' name='photo_link[]' value='" + img_link_arr[i] + "'></td></tr>";
			str += "</table>";
			str += "<table border=0 cellpadding=0 cellspacing=0 width=100%>";
			str += "<tr><td height='35' align='center'><input type='checkbox' name='ch[]' value='" + img_arr2[i] + "' checked>";
			str += "</td></tr></table>";
		} else {
			str += "&nbsp;";
		}
		str += "</td>";

		if(i%5 == 4) str += "</tr>";
	}
	str += "</tr></table>";

	var layer = Common.getObj('photo_layer');
	layer.innerHTML = str;

	Common.getObj('prev_photo_layer').style.display = 'none';
	Common.getObj('photo_layer').style.display = '';

	//이미지 등록시 로딩 이미지 처리-이미지 등록시 중복 예비 [2007-04-26 kjm]
	var PrevLayer = Common.getObj('prev_photo_layer');
    Common.getObj('prev_photo_layer').src = '/cimg/board/img_pop_photo.gif';

	/*for(i = 0; i < PrevLayer.childNodes.length; i++) {
		if(PrevLayer.item[i].tagName == "IMG") {
			PrevLayer.item[i].src = '/cimg/board/img_pop_photo.gif';
		}
	}*/
}

/**
* 검색창 display(작성날짜)
*/
function sel_search()
{
	var form	 =	document.com_board_search;
	var s = form.com_board_search_code.options[form.com_board_search_code.selectedIndex].value;

	if(s == 'dateof_write') {
		Common.getObj('search_display1').style.display = 'none';
		Common.getObj('search_display2').style.display = 'block';
	} else {
		Common.getObj('search_display1').style.display = 'block';
		Common.getObj('search_display2').style.display = 'none';
	}
}

/**
* 검색창 display(dateof_write)
*/
function sel_search_onload()
{
	try{
		Common.getObj('search_display1').style.display = 'none';
		Common.getObj('search_display2').style.display = 'block';
	}catch(e){}
}

/**
* 검색창 display
*/
function sel_search_onload2()
{
	try{
		Common.getObj('search_display1').style.display = 'block';
		Common.getObj('search_display2').style.display = 'none';
	}catch(e){}
}

/**
* 이벤트 stopPropagation
*/
function stopEventWave(evnt)
{
	evnt = evnt ? evnt : window.event;

	if(evnt.stopPropagation)
		evnt.stopPropagation();
	else
		evnt.cancelBubble = true;
}

/**
* 페이지 이동
*/
function linkMove(url)
{
	location.href=url;
}

/**
* @brief 위 두 함수의 세팅
*/
function setResetFunc(){
    if(document.com_board){
        document.com_board.reset = location.reload;
    }
}

/**
* @brief 파일 확장자 반환
*/
function getFileExtension(val){
    var idx = val.lastIndexOf('.') + 1;
    var result = val.substr(idx);

    return result;
}

/**
* @brief 파일 이름 반환
*/
function getFileName(val){
    var idx = val.lastIndexOf('.');
    var result = val.substr(0, idx);

    return result;
}

/** 사용자 tpl에 나가있으므로 오류 안나게 empty function 추가 **/
builderEditor = {};
builderEditor.Send = function(id) { return true; };


if(window.attachEvent)
    window.attachEvent("onload", setResetFunc);
else if(window.addEventListener)
    window.addEventListener('load', setResetFunc, false);