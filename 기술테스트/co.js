var aCategory = [];
$(document).ready(function(){
    $('#header').append('<div id="dimmedSlider"></div>');
    var methods = {
        aCategory    : [],
        aSubCategory : {},
        get: function()
        {
             $.ajax({
                url : '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function(aData) {
                    if (aData == null || aData == 'undefined') {
                        methods.checkSub();
                        return;
                    }
                    for (var i=0; i<aData.length; i++)
                    {
                        var sParentCateNo = aData[i].parent_cate_no;
                        var sCateNo = aData[i].cate_no;
                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }
                        if (!aCategory[sCateNo]) {
                            aCategory[sCateNo] = [];
                        }
                        methods.aSubCategory[sParentCateNo].push( aData[i] );
                        aCategory[sCateNo] = aData[i];
                    }
                    methods.checkSub();
                    methods.getMyCateList();
                }
            });
        },
        getParam: function(sUrl, sKey) {
            if (typeof sUrl !== 'string') return;
            var aUrl         = sUrl.split('?');
            var sQueryString = aUrl[1];
            var aParam       = {};
            if (sQueryString) {
                var aFields = sQueryString.split("&");
                var aField  = [];
                for (var i=0; i<aFields.length; i++) {
                    aField = aFields[i].split('=');
                    aParam[aField[0]] = aField[1];
                }
            }
            return sKey ? aParam[sKey] : aParam;
        },

        show: function(overNode, iCateNo) {
             var oParentNode = overNode;
            var aHtml = [];
            var sMyCateList = localStorage.getItem("myCateList");
            if (methods.aSubCategory[iCateNo] != undefined) {
                aHtml.push('<ul class="slideSubMenu">');
                $(methods.aSubCategory[iCateNo]).each(function() {
                    var sNextParentNo = this.cate_no;
                    var sCateSelected = (checkInArray(sMyCateList, this.cate_no) == true) ? ' selected' : '';
                    if (methods.aSubCategory[sNextParentNo] == undefined) {
                        aHtml.push('<li class="noChild" id="cate'+this.cate_no+'">');
                        var sHref = '/product/list_thumb.html'+this.param;
                    } else {
                        aHtml.push('<li id="cate'+this.cate_no+'">');
                        var sHref = '#none';
                    }
                    aHtml.push('<a href="'+sHref+'" class="cate" cate="'+this.param+'" onclick="subMenuEvent(this);">'+this.name+'</a>');
                    if (methods.aSubCategory[sNextParentNo] != undefined)  aHtml.push('<a href="/product/list_thumb.html'+this.param+'" class="view">상품보기</a>');
                    aHtml.push('<button type="button" class="icoBookmark'+sCateSelected+'" id="icoBookmark">즐겨찾기 추가</button>');

                    if (methods.aSubCategory[sNextParentNo] != undefined) {
                        aHtml.push('<ul>');
                        $(methods.aSubCategory[sNextParentNo]).each(function() {
                            var sNextParentNo2 = this.cate_no;
                            var sCateSelected = (checkInArray(sMyCateList, this.cate_no) == true) ? ' selected' : '';
                            if (methods.aSubCategory[sNextParentNo2] == undefined) {
                                aHtml.push('<li class="noChild" id="cate'+this.cate_no+'">');
                                var sHref = '/product/list_thumb.html'+this.param;
                            } else {
                                aHtml.push('<li id="cate'+this.cate_no+'">');
                                var sHref = '#none';
                            }
                            aHtml.push('<a href="'+sHref+'" class="cate" cate="'+this.param+'" onclick="subMenuEvent(this);">'+this.name+'</a>');
                            if (methods.aSubCategory[sNextParentNo] != undefined)  aHtml.push('<a href="/product/list_thumb.html'+this.param+'" class="view">상품보기</a>');
                            aHtml.push('<button type="button" class="icoBookmark'+sCateSelected+'" id="icoBookmark">즐겨찾기 추가</button>');

                            if (methods.aSubCategory[sNextParentNo2] != undefined) {
                                aHtml.push('<ul>');

                                $(methods.aSubCategory[sNextParentNo2]).each(function() {
                                    aHtml.push('<li class="noChild" id="cate'+this.cate_no+'">');
                                    var sCateSelected = (checkInArray(sMyCateList, this.cate_no) == true) ? ' selected' : '';
                                    aHtml.push('<a href="/product/list_thumb.html'+this.param+'" class="cate" cate="'+this.param+'" onclick="subMenuEvent(this);">'+this.name+'</a>');
                                    aHtml.push('<button type="button" class="icoBookmark'+sCateSelected+'" id="icoBookmark">즐겨찾기 추가</button>');
                                    aHtml.push('</li>');
                                });
                                aHtml.push('</ul>');
                            }
                            aHtml.push('</li>');
                        });
                        aHtml.push('</ul>');
                    }
                    aHtml.push('</li>');
                });
                aHtml.push('</ul>');
            }
            $(oParentNode).append(aHtml.join(''));
        },
        close: function() {
            $('.slideSubMenu').remove();
        },
        checkSub: function() {
            $('.cate').each(function(){
                var sParam = $(this).attr('cate');
                if (!sParam) return;
                var iCateNo = Number(methods.getParam(sParam, 'cate_no'));
                var result = methods.aSubCategory[iCateNo];
                if (result == undefined) {
                    if ($(this).closest('#slideProjectList').length) {
                        var sHref = '/product/project.html'+sParam;
                    } else {
                        var sHref = '/product/list_thumb.html'+sParam;
                    }

                    $(this).attr('href', sHref);
                    $(this).parent().attr('class', 'noChild');
                }
            });
        },
        getMyCateList :function() {
            var sMyCateList = localStorage.getItem("myCateList");
            if (sMyCateList != null && sMyCateList != "") {
                var aTempList = sMyCateList.split("|");
                var aHtml = [];
                for (var i = 0; i < aTempList.length; i++) {
                    if (aTempList[i] != "") {
                        var iCateNo = aTempList[i];
                        var sCateName = aCategory[iCateNo].name;
                        var sCateParam = aCategory[iCateNo].param;
                        aHtml.push('<li id="bookmark'+iCateNo+'"><a href="/product/list_thumb.html'+sCateParam+'" book_mark="'+iCateNo+'">'+sCateName+'</a><button type="button" class="icoBookmark selected" onclick="setMyCateList('+iCateNo+');">즐겨찾기 삭제</button></li>');
                        $("#cate"+iCateNo+" #icoBookmark").addClass("selected");
                    }
                }
                $('#bookmartCateArea').append('<ul>'+aHtml.join('')+'</ul>');
            }
        }
    }
})