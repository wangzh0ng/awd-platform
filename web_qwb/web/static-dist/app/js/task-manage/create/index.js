webpackJsonp(["app/js/task-manage/create/index"],{"4e68e437f5b716377a9d":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TaskListHeaderFixed=t.updateTaskNum=t.TabChange=t.showSettings=t.unpublishTask=t.publishTask=t.deleteTask=t.publishCourse=t.deleteCourse=t.closeCourse=t.taskSortable=t.sortablelist=void 0;var i=s("b334fd7e4c5a19234db2"),a=n(i),r=s("8f840897d9471c8c1fbd"),o=n(r),l=t.sortablelist=function(e){var t=$(e),s=t.sortable("serialize").get();$.post(t.data("sortUrl"),{ids:s},function(e){var s=0,n=0,i=0;t.find(".task-manage-item").each(function(){var e=$(this);e.hasClass("js-task-manage-item")?e.find(".number").length>0&&(s++,e.find(".number").text(s)):e.hasClass("task-manage-unit")?(i++,e.find(".number").text(i)):e.hasClass("task-manage-chapter")&&(n++,i=0,e.find(".number").text(n))}),t.trigger("finished")})};t.taskSortable=function(e){$(e).length&&(0,o.default)({element:e,ajax:!1},function(t){l(e)})},t.closeCourse=function(){$("body").on("click",".js-close-course",function(e){var t=$(e.currentTarget);confirm(Translator.trans("是否确定关闭该教学计划？"))&&$.post(t.data("check-url"),function(e){e.warn&&!confirm(Translator.trans(e.message))||$.post(t.data("url"),function(e){e.success?((0,a.default)("success","关闭成功"),location.reload()):(0,a.default)("danger","关闭失败："+e.message)})})})},t.deleteCourse=function(){$("body").on("click",".js-delete-course",function(e){confirm(Translator.trans("是否确定删除该教学计划？"))&&$.post($(e.currentTarget).data("url"),function(e){e.success?((0,a.default)("success","删除成功"),location.reload()):(0,a.default)("danger","删除失败："+e.message)})})},t.publishCourse=function(){$("body").on("click",".js-publish-course",function(e){confirm(Translator.trans("是否确定发布该教学计划？"))&&$.post($(e.target).data("url"),function(e){e.success?((0,a.default)("success","发布成功"),location.reload()):(0,a.default)("danger","发布失败："+e.message,{delay:5e3})})})},t.deleteTask=function(){$("body").on("click",".delete-item",function(e){if("task"==$(e.currentTarget).data("type")){if(!confirm(Translator.trans("是否确定删除该任务吗？")))return}else if("chapter"==$(e.currentTarget).data("type")&&!confirm(Translator.trans("是否确定删除该章节吗？")))return;$.post($(e.currentTarget).data("url"),function(t){t.success?((0,a.default)("success","删除成功"),$(e.target).parents(".task-manage-item").remove(),l("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden"),document.location.reload()):(0,a.default)("danger","删除失败："+t.message)})})},t.publishTask=function(){$("body").on("click",".publish-item",function(e){$.post($(e.target).data("url"),function(t){if(t.success){var s=$(e.target).closest(".task-manage-item");(0,a.default)("success","发布成功"),$(s).find(".publish-item").addClass("hidden"),$(s).find(".delete-item").addClass("hidden"),$(s).find(".unpublish-item").removeClass("hidden"),$(s).find(".publish-status").addClass("hidden")}else(0,a.default)("danger","发布失败："+t.message)})})},t.unpublishTask=function(){$("body").on("click",".unpublish-item",function(e){$.post($(e.target).data("url"),function(t){if(t.success){var s=$(e.target).closest(".task-manage-item");(0,a.default)("success","取消发布成功"),$(s).find(".publish-item").removeClass("hidden"),$(s).find(".delete-item").removeClass("hidden"),$(s).find(".unpublish-item").addClass("hidden"),$(s).find(".publish-status").removeClass("hidden")}else(0,a.default)("danger","取消发布失败："+t.message)})})},t.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(e){var t=$(e.currentTarget),s=t.closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},t.TabChange=function(){$('[data-role="tab"]').click(function(e){var t=$(this);$(t.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},t.updateTaskNum=function(e){},t.TaskListHeaderFixed=function(){var e=$(".js-task-list-header");if(e.length){var t=e.offset().top;$(window).scroll(function(s){$(window).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})}}},"423d5c93d4f10f876e3b":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}();s("d5e8fa5f17ac5fe79c78");var r=s("fe53252afd7b6c35cb73"),o=n(r),l="COURSE_BASE_INTRO",d="COURSE_TASK_INTRO",u="COURSE_TASK_DETAIL_INTRO",c="COURSE_LIST_INTRO",f="COURSE_LIST_INTRO_COOKIE",h=function(){function e(){var t=this;i(this,e),this.intro=null,this.customClass="es-intro-help multistep",$("body").on("click",".js-skip",function(e){t.intro.exit()})}return a(e,[{key:"introType",value:function(){return this.isTaskCreatePage()?void this.initTaskCreatePageIntro():this.isCourseListPage()?void this.initCourseListPageIntro():void this.initNotTaskCreatePageIntro()}},{key:"isCourseListPage",value:function(){return!!$("#courses-list-table").length}},{key:"isTaskCreatePage",value:function(){return!!$("#step-3").length}},{key:"isInitTaskDetailIntro",value:function(){return $(".js-task-manage-item").attr("into-step-id","step-5"),!!$(".js-settings-list").length}},{key:"introStart",value:function(e){var t=this,s='<i class="es-icon es-icon-close01"></i>';this.intro=introJs(),e.length<2?(s="我知道了",this.customClass="es-intro-help"):this.customClass="es-intro-help multistep",this.intro.setOptions({steps:e,skipLabel:s,nextLabel:"继续了解",prevLabel:"上一步",doneLabel:s,showBullets:!1,tooltipPosition:"auto",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:this.customClass}),this.intro.start().onexit(function(){}).onchange(function(){t.intro._currentStep==t.intro._introItems.length-1?$(".introjs-nextbutton").before('<a class="introjs-button  done-button js-skip">我知道了<a/>'):$(".js-skip").remove()})}},{key:"initTaskCreatePageIntro",value:function(){$(".js-task-manage-item:first .js-item-content").trigger("click"),store.get(l)||store.get(d)?store.get(d)||(store.set(d,!0),this.introStart(this.initTaskSteps())):(store.set(l,!0),store.set(d,!0),this.introStart(this.initAllSteps()))}},{key:"initTaskDetailIntro",value:function(e){store.get(u)||(store.set(u,!0),this.introStart(this.initTaskDetailSteps(e)))}},{key:"initNotTaskCreatePageIntro",value:function(){store.get(l)||(store.set(l,!0),this.introStart(this.initNotTaskPageSteps()))}},{key:"isSetCourseListCookies",value:function(){store.get(c)||o.default.set(f,!0)}},{key:"initCourseListPageIntro",value:function(){var e=this,t=$("#courses-list-table").find("tbody tr").length;2===t&&!store.get(c)&&o.default.get(f)&&(o.default.remove(f),new Promise(function(e,t){setTimeout(function(){var t=$(".js-sidenav-course-menu");return t.length?void $(".js-sidenav-course-menu").slideUp(function(){e()}):void e()},100)}).then(function(){setTimeout(function(){e.initCourseListIntro(".js-sidenav")},100)}))}},{key:"initCourseListIntro",value:function(e){store.get(c)||(store.set(c,!0),this.introStart(this.initCourseListSteps(e)))}},{key:"initAllSteps",value:function(){var e=[{intro:'<p class="title">功能升级</p>\n        课程管理功能现已全新升级。'},{element:"#step-1",intro:'<p class="title">计划任务</p>\n        教学内容的编辑、管理请点击左侧“计划任务”的菜单项进入。'},{element:"#step-2",intro:'<p class="title">营销设置</p>\n        在“营销设置”中您可以通过设置决定课程如何销售、如何加入、如何学习。'},{element:"#step-3",intro:'<p class="title">添加任务</p>\n        您可以在这里选择各种不同的教学手段，然后上传文件/设置内容/设置学习完成条件。'}];return this.isInitTaskDetailIntro()&&(e.push({element:'[into-step-id="step-5"]',intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。'}),store.get(u)||store.set(u,!0)),e}},{key:"initNotTaskPageSteps",value:function(){return[{intro:'<p class="title">功能升级</p>\n        课程管理功能现已全新升级。'},{element:"#step-1",intro:'<p class="title">计划任务</p>\n        教学内容的编辑、管理请点击左侧“计划任务”的菜单项进入。'},{element:"#step-2",intro:'<p class="title">营销设置</p>\n        在“营销设置”中您可以通过设置决定课程如何销售、如何加入、如何学习。'}]}},{key:"initTaskSteps",value:function(){var e=[{element:"#step-3",intro:'<p class="title">添加任务</p>\n        您可以在这里选择各种不同的教学手段，然后上传文件/设置内容/设置学习完成条件。'}];return this.isInitTaskDetailIntro()&&(e.push({element:"#step-5",intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。',position:"bottom"}),store.get(u)||store.set(u,!0)),e}},{key:"initTaskDetailSteps",value:function(e){return[{element:e,intro:'<p class="title">任务环节</p>\n        在设计学习任务时，您可以按照课时去设置预习、学习、练习、作业、课外这几个环节，\n        每个环节都可以通过各种教学手段来实现。',position:"bottom"}]}},{key:"initCourseListSteps",value:function(e){return[{element:e,intro:'\n          <p class="title">多个教学计划</p>\n          恭喜你创建了多个教学计划！左侧的功能菜单会有所简化，\n          只会显示课程公共的相关设置。'}]}},{key:"initResetStep",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{element:".js-intro-btn-group",intro:'<div class="btn-content"><p><a class=\'btn btn-success js-reset-intro '+e+"'>查看引导</a></p>\n        <a class='btn btn-info'>完整教程</a><div>",position:"top"}]}}]),e}();t.default=h},"92bf3ad15db28fd41545":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),r=s("b4fbf03f4f16003fe503"),o=n(r);s("b3c50df5d8bf6315aeba");var l=s("b334fd7e4c5a19234db2"),d=n(l),u=s("423d5c93d4f10f876e3b"),c=n(u),f=s("4e68e437f5b716377a9d"),h=function(){function e(t){i(this,e),this.$element=t,this.$task_manage_content=$("#task-create-content"),this.$task_manage_type=$("#task-create-type"),this.$frame=null,this.$iframe_body=null,this.iframe_jQuery=null,this.iframe_name="task-create-content-iframe",this.mode=this.$task_manage_type.data("editorMode"),this.type=this.$task_manage_type.data("editorType"),this.step=1,this.loaded=!1,this.contentUrl="",this._init(),this._initEvent()}return a(e,[{key:"_initEvent",value:function(){var e=this;$("#course-tasks-submit").click(function(t){return e._onSave(t)}),$("#course-tasks-next").click(function(t){return e._onNext(t)}),$("#course-tasks-prev").click(function(t){return e._onPrev(t)}),"edit"!=this.mode?$(".js-course-tasks-item").click(function(t){return e._onSetType(t)}):$(".delete-task").click(function(t){return e._onDelete(t)})}},{key:"_init",value:function(){this._inItStep1form(),this._renderContent(this.step),"edit"==this.mode&&(this.contentUrl=this.$task_manage_type.data("editorStep2Url"),this.step=2,this._switchPage())}},{key:"_onNext",value:function(e){3!==this.step&&this._validator(this.step)&&(this.step+=1,this._switchPage(),this.$element.trigger("afterNext"))}},{key:"_onPrev",value:function(){1===this.step||3==this.step&&!this._validator(this.step)||(this.step-=1,this._switchPage())}},{key:"_onSetType",value:function(e){var t=$(e.currentTarget).addClass("active");t.siblings().removeClass("active");var s=t.data("type");$('[name="mediaType"]').val(s),this.contentUrl=t.data("contentUrl"),this.loaded=this.type===s,this.type=s,this._onNext(e)}},{key:"_onSave",value:function(e){var t=this;if(this._validator(this.step)){$(e.currentTarget).attr("disabled","disabled").button("loading");var s=$("#step1-form").serializeArray().concat(this.$iframe_body.find("#step2-form").serializeArray()).concat(this.$iframe_body.find("#step3-form").serializeArray());$.post(this.$task_manage_type.data("saveUrl"),s).done(function(e){var n=e.append,i=e.html;t.$element.modal("hide"),$(".js-task-empty").hasClass("hidden")||$(".js-task-empty").addClass("hidden"),n===!1&&document.location.reload();var a=s.find(function(e){return"chapterId"==e.name}),r=0,o=$("#"+a.value),l=null;o.length?(o.nextAll().each(function(){return $(this).hasClass("task-manage-chapter")?($(this).before(i),r=1,(0,f.sortablelist)("#sortable-list"),!1):o.hasClass("task-manage-unit")&&$(this).hasClass("task-manage-unit")?($(this).before(i),r=1,(0,f.sortablelist)("#sortable-list"),!1):void 0}),1!=r&&(l=$(i),$("#sortable-list").append(l),r=1)):(l=$(i),$("#sortable-list").append(l)),t.showDefaultSetting(l),t.initIntro(),(0,f.sortablelist)("#sortable-list")}).fail(function(e){var t="",s=JSON.parse(e.responseText);s.error&&s.error.message&&(t=s.error.message),(0,d.default)("warning","保存出错: "+t),$("#course-tasks-submit").attr("disabled",null)})}}},{key:"initIntro",value:function(){setTimeout(function(){if(1===$(".js-settings-list").length){var e=new c.default;e.initTaskDetailIntro(".js-settings-list")}},500)}},{key:"showDefaultSetting",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&e.hasClass("js-task-manage-item")&&($(".js-task-manage-item").removeClass("active").find(".js-settings-list").slideUp(),e.addClass("active").find(".js-settings-list").slideDown())}},{key:"_onDelete",value:function(e){var t=this,s=$(e.currentTarget),n=s.data("url");void 0!==n&&confirm(Translator.trans("是否确定删除该任务吗？"))&&$.post(n).then(function(e){(0,d.default)("success","删除成功"),t.$element.modal("hide"),document.location.reload()}).fail(function(e){(0,d.default)("warning","删除失败~~")})}},{key:"_switchPage",value:function(){this._renderStep(this.step),this._renderContent(this.step),this._rendStepIframe(this.step),this._rendButton(this.step),2!=this.step||this.loaded||this._initIframe()}},{key:"_initIframe",value:function(){var e=this,t='<iframe class="'+this.iframe_name+'" id="'+this.iframe_name+'" name="'+this.iframe_name+'" scrolling="no" src="'+this.contentUrl+'"></iframe>';this.$task_manage_content.html(t).show(),this.$frame=$("#"+this.iframe_name).iFrameResize();var s=function(){e.loaded=!0;var t={};e.iframe_jQuery=e.$frame[0].contentWindow.$,e.$iframe_body=e.$frame.contents().find("body").addClass("task-iframe-body"),e._rendButton(2),e.$iframe_body.find("#step2-form").data("validator",t),e.$iframe_body.find("#step3-form").data("validator",t)};this.$frame.load((0,o.default)(s,this.$task_manage_content))}},{key:"_inItStep1form",value:function(){var e=$("#step1-form"),t=e.validate({rules:{mediaType:{required:!0}},messages:{mediaType:"请选择%display%"}});e.data("validator",t)}},{key:"_validator",value:function(e){var t=null;if(1===e)t=$("#step1-form").data("validator");else if(this.loaded){var s=this.$iframe_body.find("#step"+e+"-form");t=this.iframe_jQuery.data(s[0],"validator")}return!(t&&!t.form())}},{key:"_rendButton",value:function(e){if(1===e)this._renderPrev(!1),this._rendSubmit(!1),this._renderNext(!0);else if(2===e){if(this._renderPrev(!0),"edit"===this.mode&&this._renderPrev(!1),!this.loaded)return this._rendSubmit(!1),void this._renderNext(!1);this._rendSubmit(!0),this._renderNext(!0)}else 3===e&&(this._renderNext(!1),this._renderPrev(!0))}},{key:"_rendStepIframe",value:function(e){this.loaded&&this.$iframe_body&&(2===e?this.$iframe_body.find(".js-step2-view").addClass("active"):this.$iframe_body.find(".js-step2-view").removeClass("active"),3===e?this.$iframe_body.find(".js-step3-view").addClass("active"):this.$iframe_body.find(".js-step3-view").removeClass("active"))}},{key:"_renderStep",value:function(e){$("#task-create-step").find("li:eq("+(e-1)+")").addClass("doing").prev().addClass("done").removeClass("doing"),$("#task-create-step").find("li:eq("+(e-1)+")").next().removeClass("doing").removeClass("done")}},{key:"_renderContent",value:function(e){1===e?this.$task_manage_type.removeClass("hidden"):this.$task_manage_type.addClass("hidden"),1!==e?this.$task_manage_content.removeClass("hidden"):this.$task_manage_content.addClass("hidden")}},{key:"_renderNext",value:function(e){e?$("#course-tasks-next").removeClass("hidden").removeAttr("disabled"):$("#course-tasks-next").addClass("hidden")}},{key:"_renderPrev",value:function(e){e?$("#course-tasks-prev").removeClass("hidden"):$("#course-tasks-prev").addClass("hidden")}},{key:"_rendSubmit",value:function(e){e?$("#course-tasks-submit").removeClass("hidden"):$("#course-tasks-submit").addClass("hidden")}}]),e}();t.default=h},0:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=s("92bf3ad15db28fd41545"),a=n(i);new a.default($("#modal"))},b4fbf03f4f16003fe503:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=arguments,n=function(e,t){var n=$('<div class="load-animation"></div>');n.prependTo(t).nextAll().hide(),t.append();var i=[],a=e.length;return function(t){return i.push(t),n.hide().nextAll().show(),i.length<a?s.callee:e.apply(null,i)}};t.default=n}});