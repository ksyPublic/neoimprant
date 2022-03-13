/*바로사이트 전체 커스텀 js*/
(function($) {
    $(function() {
        //초기값 셋팅

        var windowSize = $(window).width();
        var el = $(".header")[0];
        var getHeight = el.offsetHeight;
        var delay = 500;
        var x = window.location.pathname.substring(1, 2);

        $(".bgOpen").css("margin-top", `-80px`);
        $(".bgOpen").css("height", `80px`);

        if (windowSize >= 750) {
            $(".header").removeClass("mbMenu");
            $(".bgOpen").css("margin-top", `-80px`);
            $(".bgOpen").css("height", `80px`);

            // $('ul.nav').css('display', 'flex');
        
        } else {
            $(".header").addClass("mbMenu");
            $(".bgOpen").css("margin-top", `-50px`);
            $(".bgOpen").css("height", `50px`);
            // mbNav();
        }

        //모바일 뎁스 클릭 함수
        $(".header__suvWrap > ul.nav > li > div").hide();

        $(".header__suvWrap > ul.nav > li > a").on('click', function() {
          console.log('@@@@@');
            var depth = $(this);
            var submenu = $(this).siblings();
            console.log('@@@@', submenu);
            $(".header__suvWrap > ul.nav > li > div:visible").slideUp("normal");
            $(".navli > a").removeClass("depthOn");

            if (submenu.is("div") && submenu.is(":visible")) {
              return false;
            }

            if (submenu.is("div") && !submenu.is(":visible")) {
                $(".header__suvWrap > ul.nav > li > div:visible").slideUp("normal");
                $(".navli > a").removeClass("depthOn");
                submenu.slideDown("normal");
                depth.addClass("depthOn");
              return false;
            }
        });

        //mobile 스크롤 버튼
        $(".mbScrollBtn").on("click", function() {
            $("html, body")
                .stop()
                .animate({ scrollTop: 0 }, delay);
        });

        if (x === "p" || x === "b") {
            $(".scroll-top").addClass("scroll-top-subpg");
            $(".scroll-top").removeClass("scroll-top");
            $(".scroll-top-subpg").on("click", function() {
                $("html, body")
                    .stop()
                    .animate({ scrollTop: 0 }, delay);
            });
            $('body').css('overflow-x', 'hidden');
        } else {
            $(".scroll-top").addClass("scroll-top-home");
            $(".scroll-top").removeClass("scroll-top");
            $(".scroll-top-home").on("click", function() {
                fullpage_api.moveTo("section1", 1); //api
            });
        }

        $(window).scroll(function() {
            //scroll event
            var scrollValue = $(document).scrollTop();
            if (scrollValue > 0) {
                $(".bgOpen").css("visibility", "visible");
                $(".bgOpen").css("margin-top", `0px`);
                $(".header__suvWrap ul.nav .navli").addClass("activeOn");
                $(".header__suvWrap .right-form a").addClass("activeForm");
                $(".header__suvWrap .logo-wrap a").addClass("on");
                $(".mbBtn").addClass("m-on");
            } else {
                $(".bgOpen").css("margin-top", `-80px`);
                $(".header__suvWrap ul.nav .navli").removeClass("activeOn");
                $(".header__suvWrap .right-form a").removeClass("activeForm");
                $(".header__suvWrap .logo-wrap a").removeClass("on");
                $(".mbBtn").removeClass("m-on");
            }

            if (scrollValue === 0) {
                $(".scroll-top-subpg").removeClass("vs");
            } else if (scrollValue > 0) {
                $(".scroll-top-subpg").addClass("vs");
            }
        });

        //새로 시작
        function AllFt() {//pc

            $(".alightNeo-title").html('임플란트의 올바른 선택, <span class="ftw500 ft42 let50">행복한 미소를 그립니다.</span>');
            $(".main-text h1").html("환자의 편안함은 네오임플란트");
            $(".main-text h2").html("임플란트, 어떤게 중요한것이 아닌 어떻게 하는지가 중요합니다.");
            $("ul.first").html("<li>(주)네오임플란트</li><li>서울특별시 금천구 독산동 291-1 현대지식산업센터 B동 1105호</li><li>대표 : 김인호</li><li>사업자등록번호 : 807-86-00744</li>");
            $("div.subTxt.s11subTxt").html(`
                  <span class="LyPink ftw500 ftGrey01">치아가 결손된 부위에 주변 치아를 손상하지 않고 특수금속으로 만든 인공치근을 치조골에 이식하여<br>
                  본래의 자기 치아와 같은 기능을 수행하게 하는 것입니다. 
                  </span>
                  수명이 길어 반영구적이며<br>
                  의치보다 저작하는 힘이 세고 튼튼하며 유지력이 강합니다. 이물감이 별로없어 자기치아처럼 편안하게 사용할 수 있습니다. 
            `);

            $("div.subTxt2").html(`    
              임플란트 치료과정은 진단 &gt; 1차 수술 &gt; 2차 수술 &gt; 보철물 장착 &gt; 수술 후 관리의 과정 등으로 나누어집니다.
            `);
            $('.sub1WBox > div.BoxWrap.pdl40').html(`
              <span class="ftw400 let25 ft18 ftbasic ftGrey06">
                  치과 임플란트 R&amp;D 전문기업 네오임플란트(네오바이오텍)는 임상시험관리<br>
                  기준에 따라 실시된 철저한 연구시험을 통해 개발된 안정성이 확보된 제품만을<br>
                  공급합니다. <span class="unftBasic ftw500 ft20 let25 ftGrey01">환자분의 뼈 상태, 치아건강 및 임플란트 수술위치 등<br>
                  여러 가지 조건을 고려하여 최상의 결과를 얻을 수 있도록 다양한 종류의<br>
                  임플란트를 생산 제공하고 있습니다.</span> 이는 치과의사와 환자 모두에게 이익을<br>
                  제공하는 회사의 경영철학과도 일치합니다.
              </span>
            `)

            $('.subSecTxt3 > div.subTxt2').html(`
              임플란트 치료과정은 진단 &gt; 1차 수술 &gt; 보철물 장착 &gt; 수술 후 관리 등으로 나누어집니다.
            `)

            $('.subSecTxt3 > div.s11Selector').html(`
            임플란트 Q&amp;A
            `)

            $('.subSecTxt div.s21subSecLine').html(`
                바로가이드라면 3회 방문으로 시술완료<span class="italic">!</span>
            `)

            $('.subSecTxt div.s21subTxt').html(`
                바로가이드는 사전 모의 시술을 통해 시술 과정을 미리 확인할 수 있어<br>
                <span class="LyPink ft20 ftw500 let25 ftGrey01">가장 적합한 위치에 식립이 될 수 있도록 계획하고, 정확한 시술이 가능한 신개념 디지털 가이드입니다.</span><br>
                일반 임플란트 시술에 비해 <span class="LyUnder">무절개 시술</span>로 출혈이 적어 <span class="LyUnder">통증이 감소</span>되고 <span class="LyUnder">당일 시술</span>이 가능합니다.
            `)

            $('.dayListContents').html(`
                        <ul>
                          <li>
                              <div class="ft22 let25 ftw500 ftPink01">1주 후</div>
                              <div class="ft18 let25 ftw400 ftGrey01 mgt12">(보철물 장착 후)</div>
                          </li>
                          <li>
                              <div class="ft22 let25 ftw500 ftPink01">1개월 후</div>
                              <div class="ft18 let25 ftw400 ftGrey01 mgt12">(임플란트 고정 단계)</div>
                          </li>
                          <li>
                              <div class="ft22 let25 ftw500 ftPink01">3개월 후</div>
                              <div class="ft18 let25 ftw400 ftGrey01 mgt12">(임플란트 고정 단계)</div>
                          </li>
                          <li>
                              <div class="ft22 let25 ftw500 ftPink01">6개월 후</div>
                              <div class="ft18 let25 ftw400 ftGrey01 mgt12">(임플란트 고정상태 검진)</div>
                          </li>
                          <li>
                              <div class="ft22 let25 ftw500 ftPink01">1년 후</div>
                              <div class="ft18 let25 ftw400 ftGrey01 mgt12">(임플란트 고정상태 검진)</div>
                          </li>
                      </ul>
            `)

            $('.ItemsBox.mgt50.frt').html(`

                <div class="ItemsBoxRight">
                    <div class="ft24 ftw500 let25 ftPink01">브릿지</div>
                    <div class="ft18 ftw400 let25 ftGrey06 ItemsSubTxt">
                        빠진 치아 양 옆의 이를 깎아 기둥으로 활용하여<br>
                        인공치아를 고정시키는 치료방법입니다.<br>
                        건강한 인접치아를 깎아야 하는 부작용이 있습니다.<br>
                        치료기간은 짧고 5~10년 주기로 교체하여야 합니다.
                    </div>
                </div>
                <div class="ItemsBoxLeft _sub3ibt02">
                <img src="../css/images/sub/sub3/sub3ibt02.png" />
                </div>
            `)

            $('._sub4Mbg ._sub4MbgHead2').html(`
                바로가이드를 이용한 디지털 임플란트 시술은 치과에 방문한 첫날 바로 시술이 가능하고,<br>
                상담에서 시술까지 3회 내원으로 임플란트 최종 완성이 가능합니다.
            `)

            $('.subSecTxt .s22SubTxt').html(`
                <span class="LyPink ft20 ftw500 let25 ftGrey01">3D 영상을 통한 정확한 진단부터 모의시술, 디지털 가이드 제작, 디지털 임플란트 시술까지</span><br>
                가장 안전하고 정확한 임플란트 시술이 가능합니다.
            `)

            $('.subSecTxt3 .s22subSecLine').html(`
                바로가이드 Q&amp;A
            `)

            $('.subSecTxt .productSubTxt').html(`
            뼈와 치아형성에 도움을 주는 영양제부터 잇몸 전용 전동 치간 칫솔까지<br>
            모두 네오임플란트를 통해 만나보시고 건강한 치아관리 하세요!
            `)

            $('.subSecTxt .proSubSecLine').html(`
            건강한 치아관리는 네오임플란트와 함께
            `)

            $('.transft01').html(`
                골의 치유 및 임플란트의 골유착이 진행되면<br>
                잇몸 밖으로 지대주를 연결합니다.
            `)

            $('.footerLt').html(`
                <span class="inforIc"></span>
                고객지원 : 02-1577-2885 (평일 09:00 ~ 18:00 주말 및 공휴일 제외)
            `)


        }

        function ftRespon() { //모바일
            $(".alightNeo-title").html('올바른 선택, <br/><span class="ftw500 ft42 let50">행복한 미소를 그립니다.</span>');
            $(".main-text h1").html("환자의 편안함은<br/>네오임플란트");
            $(".main-text h2").html("임플란트, 어떤게 중요한것이 아닌<br/> 어떻게 하는지가 중요합니다.");
            $("ul.first").html("<li>서울특별시 금천구 독산동 291-1 현대지식산업센터 B동 1105호</li>");
            $("div.subTxt.s11subTxt").html(`
                  <span class="ftw400 ftGrey06">
                  치아가 결손된 부위에 주변 치아를
                  손상하지 않고 특수금속으로 만든 인공치근을
                  치조골에 이식하여 본래의 자기 치아와 같은
                  기능을 수행하게 하는 것입니다. 
                  </span>
            `);
            $("div.subTxt2").html(`    
              임플란트 치료과정은 진단 > 1차 수술 > 보철물 장착 > 수술 후 관리 등으로 나누어집니다.
            `);

            $('.sub1WBox > div.BoxWrap.pdl40').html(`
              <span class="unftBasic ftw500 ft20 let25 ftGrey01">환자분의 뼈 상태, 치아건강 및 임플란트 수술위치 등<br>
              여러 가지 조건을 고려하여 최상의 결과를 얻을 수 있도록 다양한 종류의<br>
              임플란트를 생산 제공하고 있습니다.</span>
            `)

            $('.subSecTxt3 > div.subTxt2').html(`
            임플란트 치료의 궁금증을 해결해드립니다.
            `)

            $('.subSecTxt3 > div.s11Selector').html(`
              Q&amp;A
            `)

            $('.subSecTxt div.s21subSecLine').html(`
                3회 방문으로 시술완료<span class="italic">!</span>
            `)

            $('.subSecTxt div.s21subTxt').html(`
                가장 적합한 위치에 식립이 될 수 있도록 계획하고, 정확한 시술이 가능한 신개념 디지털 가이드입니다.<br>
                일반 임플란트 시술에 비해 <span class="LyUnder">무절개 시술</span>로 출혈이 적어 <span class="LyUnder">통증이 감소</span>되고 <span class="LyUnder">당일 시술</span>이 가능합니다.
            `)

            $('.ItemsBox.mgt50.frt').html(`
                <div class="ItemsBoxLeft _sub3ibt02">
                <img src="../css/images/sub/sub3/sub3ibt02.png" />
                </div>

                <div class="ItemsBoxRight">
                    <div class="ft24 ftw500 let25 ftPink01">브릿지</div>
                    <div class="ft18 ftw400 let25 ftGrey06 ItemsSubTxt">
                        빠진 치아 양 옆의 이를 깎아 기둥으로 활용하여<br>
                        인공치아를 고정시키는 치료방법입니다.<br>
                        건강한 인접치아를 깎아야 하는 부작용이 있습니다.<br>
                        치료기간은 짧고 5~10년 주기로 교체하여야 합니다.
                    </div>
                </div>
            
            `)

            $('.dayListContents').html(`
            <ul>
                <div class="dayListCon01">
                <li>
                    <div class="ft22 let25 ftw500 ftPink01">1주 후</div>
                    <div class="ft18 let25 ftw400 ftGrey01 mgt12">(보철물 장착 후)</div>
                </li>
                <li class="ArrowList"></li>
                <li>
                    <div class="ft22 let25 ftw500 ftPink01">1개월 후</div>
                    <div class="ft18 let25 ftw400 ftGrey01 mgt12">(임플란트 고정 단계)</div>
                </li>
                </div>
                <div class="dayListCon02">
                <li class="ArrowList"></li>
                <li>
                    <div class="ft22 let25 ftw500 ftPink01">3개월 후</div>
                    <div class="ft18 let25 ftw400 ftGrey01 mgt12">(임플란트 고정 단계)</div>
                </li>
                <li class="ArrowList"></li>
                <li>
                    <div class="ft22 let25 ftw500 ftPink01">6개월 후</div>
                    <div class="ft18 let25 ftw400 ftGrey01 mgt12">(고정상태 검진)</div>
                </li>
                </div>
                <div class="dayListCon03">
                <li class="ArrowList"></li>
                <li>
                    <div class="ft22 let25 ftw500 ftPink01">1년 후</div>
                    <div class="ft18 let25 ftw400 ftGrey01 mgt12">(고정상태 검진)</div>
                </li>
                </div>
            </ul>
            `)

            $('._sub4Mbg ._sub4MbgHead2').html(`
                상담에서 시술까지 3회 내원으로 임플란트<br> 최종 완성이 가능합니다.
            `)

            $('.subSecTxt .s22SubTxt').html(`
                3D 영상을 통한 정확한 진단부터 모의시술,<br/>
                디지털 가이드 제작, 디지털 임플란트 시술까지 가장<br/>
                안전하고 정확한 임플란트 시술이 가능합니다.
            `)

            $('.subSecTxt3 .s22subSecLine').html(`
                Q&amp;A
            `)

            $('.subSecTxt .productSubTxt').html(`
                뼈와 치아형성에 도움을 주는 영양제부터<br/>
                잇몸 전용 전동 치간 칫솔까지<br/>
                모두 네오임플란트를 통해 만나보시고 건강한 치아관리 하세요!
            `)

            $('.subSecTxt .proSubSecLine').html(`
                건강한 치아관리는 네오와 함께
            `)

            $('.transft01').html(`
                임플란트의 골유착이 진행되면
                잇몸 밖으로 지대주를 연결합니다.
            `)

            $('.footerLt').html(`
                고객지원 : 02-1577-2885<br/>
                <span class="mbfooterLtTxt">(평일 09:00 ~ 18:00 주말 및 공휴일 제외)</span>
            `)
       
        }

        function nav(device) {
            var scrollValue = $(document).scrollTop();
            $(".bgOpen").css("height", `80px`);
            //PC네비 함수
            $(".header").removeClass("mbMenu");
            $("ul.nav").removeClass("dpb");
            $(".logo-wrap a").removeClass("on");

            if(scrollValue === 0) {
              $(".bgOpen").css("margin-top", `-80px`);
              $(".bgOpen").css("visibility", "hidden");
            }

            if ($(".mbBtn").attr("style") === "display: block;") {
                $(".mbClose").css("display", "none");
            }

            if ($(".header__suvBox").attr("style") === "display: none;") {
                $(".header__suvBox").removeAttr("style");
            } else if ($(".header__suvBox").attr("style") === "display: block;") {
                $(".header__suvBox").removeAttr("style");
            }

            $(".navli").each(function(i) {
                var $this = $(this);

                $this.mouseenter(function() {
                    open();
                });

                $this.mouseleave(function() {
                    closeHeader();
                });

                function open() {
                    $(".bgOpen").css("visibility", "visible");
                    $(".bgOpen").css("margin-top", `0px`);
                    $(".header__suvWrap ul.nav .navli").addClass("activeOn");
                    $(".header__suvWrap .right-form a").addClass("activeForm");
                    $(".header__suvWrap .logo-wrap a").addClass("on");
                }

                function closeHeader() {
                    $(".bgOpen").css("margin-top", `-80px`);
                    $(".header__suvWrap ul.nav .navli").removeClass("activeOn");
                    $(".header__suvWrap .right-form a").removeClass("activeForm");
                    $(".header__suvWrap .logo-wrap a").removeClass("on");
                    $(".header__suvWrap").css("border-bottom", "0");
                    $(".header__suvBox").removeClass("suvOn");
                }
            });
        }

        function mbNav(device) { //모바일메뉴 함수
            var scrollValue = $(document).scrollTop();
            $(".bgOpen").css("height", `80px`);
            $(".navli").off();
            $(".header").addClass("mbMenu");

            $(".suvBox-right ul li:empty").detach();

            if ($(".mbBtn").attr("style") === "display: none;") {
                $(".mbBtn").css("display", "block");
            }
            
            $(".mbBtn").on("click", function() {
                $("ul.nav").addClass("dpb"); //test
                $(".logo").addClass("on");
                $(".bgOpen").css("visibility", "visible");
                $(".bgOpen").css("margin-top", `0px`);
                $(".mbClose").css("display", "block");
                $(".mbBtn").css("display", "none");
            });

            $(".mbClose").on("click", function() {
                $("ul.nav").removeClass("dpb"); //test
                $(".logo").removeClass("on");

                if ($(".mbBtn").attr("class") === "mbBtn m-on") {
                  $(".mbBtn").removeClass("m-on");
                }

                if( scrollValue > 0 ) {
                  $(".logo").addClass("on");
                  $(".mbBtn").addClass("m-on");
                  $(".bgOpen").css("visibility", "visible");
                  $(".bgOpen").css("margin-top", `0px`);
                } 
                
                if(scrollValue === 0) {
                  $(".logo").removeClass("on");
                  $(".mbBtn").removeClass("m-on");
                  $(".bgOpen").css("visibility", "hidden");
                  $(".bgOpen").css("margin-top", `-80px`);
                }


                $(".mbClose").css("display", "none");
                $(".mbBtn").css("display", "block");
               
            });
        }

        function mouseEventRollImg() {
            $(".neo-wrap").each(function(i) {
                var $this = $(this);
                var eff = $(this).find(".neo-position");
                eff.mouseenter(function() {
                    open();
                });

                eff.mouseleave(function() {
                    close();
                });

                function open() {
                    $(".neo-btn")
                        .eq(i)
                        .addClass("neo-zip");
                    $(".table-cell")
                        .eq(i)
                        .addClass("dimmer");
                    $(".table-cell")
                        .children(".idx")
                        .addClass("is-active");
                    var st = $(".table-cell")
                        .eq(i)
                        .children(".idx")
                        .attr("class");
                    var result = st.replace("idx is-active", "");
                    $(".table").attr("class", `table ${result}`);
                    $(".table").css("opacity", "1");
                }

                function close() {
                    $(".neo-btn")
                        .eq(i)
                        .removeClass("neo-zip");
                    $(".table-cell")
                        .eq(i)
                        .removeClass("dimmer");
                    var st = $(".table-cell")
                        .eq(i)
                        .children(".idx")
                        .attr("class");
                    var result = st.replace("idx is-active", "");
                    $(".table-cell")
                        .children(".idx")
                        .removeClass("is-active");
                    $(".table").css("opacity", "");
                    $(".table").attr("class", `table ${result}`);
                }
            });
        }

        function mbmenu() {
            $(".bgOpen").css("height", `50px`);
        }

        var responSize = 1108, //1125
            responPadJung = 1107; //1124
        responPadMin = 732; //749
        var device = "";
        var deviceCheck = function() {
            winWidth = $(window).width(); //winodw size
            if (winWidth >= responSize) {
                //ex 600 >= 1125 false; 1200 >= 1125 true
                nav(device);
                AllFt(device);
                mouseEventRollImg(device);
            } else if (winWidth <= responPadJung && winWidth >= responPadMin) {
                mbNav(device);
                ftRespon(device);
            } else {
                mbNav(device);
                mbmenu(device)
                ftRespon(device);
            }
        };
        deviceCheck();

        $(window).resize(function() {
            deviceCheck();

            var scrollValue = $(document).scrollTop();
            if($('.navli').attr('class') === 'navli activeOn' && scrollValue > 0) {
              $(".bgOpen").css("visibility", "visible");
              $(".bgOpen").css("margin-top", `0px`);
              $(".logo").addClass('on');
            }
        });
    });
})(jQuery);
