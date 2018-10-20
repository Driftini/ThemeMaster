var _maincode = `le._apps["themes"] = {
  exec: function() {

    var ThemeMasterWindow = $window({
      url: "about:blank",
      title: 'ThemeMaster',
      icon: '/c/sys/skins/w93/apps/paint.png',
      width: 150,
      height: 0,
      resizable: false,
      maximizable: false,
      minimizable: false,
      help: 'ThemeMaster allows you to easily change CSS themes without having to manually move the style sheets to the boot folder. ThemeMaster is being developed by PhantomDoom741. Ver. 1.0',
      menu: [
        {
          name: "Themes",
          items: [
            {
              name: "Windows93 Default",
              action: function () {
                $store.del("boot/currentstyle.css");
                location.reload();
              },
            },
            {name:"---"},
            {
              name: "Bubble93",
              action: function () {
                $store.set('boot/currentstyle.css', 'button, input, select{border-radius: 32px;}')
                location.reload();
              }
            },
            {
              name: "Smooth Borders",
              action: function () {
                $store.set('boot/currentstyle.css', 'button, input, select {border-radius: 2.556px;}')
                location.reload();
              }
            },
            {name:"---"},
            {
              name: "SYSTEM",
              action: function () {
                $store.set('boot/currentstyle.css', '.ui_window__head{background:#b0c4de!important;color:#000;margin:0;padding:2px}html,body,button,input,select,option,textarea{font-family:sans-serif;font-size:12px}#s42_background{background:#b0c4de}.ui_window--active{border-color:#B5B6B5!important}#ui_explorer_0 > .ui_icon{color:#0f0f0f;text-shadow:none}.ui_window,.ui_menu--popup > ul,.ui_menu--popup .ui_menu__submenu > ul,#s42_taskbar{animation-duration:0;padding:0;background:#F7F3F7;border:4px solid #fafafa;box-shadow:0 2px 0 #fff,0 -2px 0 #fff,2px 0 0 #fff,-2px 0 0 #fff,-2px -2px 0 #fff,2px 2px 0 #fff,-2px 2px 0 #fff,2px -2px 0 #fff}button[class*=ui_window__head__]{position:relative;bottom:.5px;right:1px;padding:8px;background:#F7F3F7;text-align:center}.ui_window__head__title{display:flex;align-self:center}.ui_window__head__pin::before,.ui_window__head__config::before,.ui_window__head__reload::before,.ui_window__head__help::before,.ui_window__head__minimize::before,.ui_window__head__maximize::before,.ui_window__head__maximized::before,.ui_window__head__close::before{font-weight:900!important;margin:0;padding:0;position:relative;left:-5.75px;top:-5px;right:0;bottom:0}#s42_taskbar *{border:none!important;box-shadow:none!important;background:transparent!important}button:not([class*=ui_window__head__]):not(.ui_window_docked){background:inherit!important;box-shadow:none!important;font-weight:900!important;border:1px solid #7E7F7E!important}')
                location.reload();
              }
            },
            {
              name: "RedGlass",
              action: function () {
                $store.set('boot/currentstyle.css', ':root{--main-color:rgba(10, 10, 10, .94);--secondary-color:red;--radius:5px;--background:url("https://i.imgur.com/aozoBct.png");--active-titlebar:transparent;--inactive-titlebar:transparent;--window-shadow:none;--wnd-padding:5px;--hover-bg:#a200ff;--bios-color:black;--bios-fg:lightgray;--blur-radius:5px}#s42_taskbar,.ui_menu--menu ul,.ui_window{background:var(--main-color)!important;-webkit-backdrop-filter: blur(var(--blur-radius));-o-backdrop-filter: blur(var(--blur-radius));-moz-backdrop-filter: blur(var(--blur-radius));-ms-backdrop-filter: blur(var(--blur-radius));backdrop-filter: blur(var(--blur-radius))}#buttons,#functions,#s42_notif,#s42_start,#trollbox,#trollbox_infos,#trollbox_input,#trollbox_scroll,.hbox,.hbox > main,.ui_explorer__nav__go,.ui_explorer__nav__home,.ui_explorer__nav__input,.ui_explorer__nav__prev,.ui_explorer_container .ui_explorer,.ui_layout > footer,.ui_menu--scroller > .ui_menu__down_handler,.ui_menu--scroller > .ui_menu__up_handler,.ui_menu.ui_menu--open,.ui_terminal,.ui_window__cancel,.ui_window__head__help,.ui_window__ok,.ui_window_docked,.vbox,.vbox > main,box-h > main,box-v > main,button,textarea{background:0 0!important}#s42_start span,.ui_menu__separator,.ui_window__head__close::before,.ui_window__head__maximize::before,.ui_window__head__maximized::before,.ui_window__head__minimize::before{display:none!important}#s42_bios,#s42_notif,#s42_start,#s42_taskbar,#trollbox_infos,#trollbox_input,#trollbox_scroll,.ui_explorer__nav__go,.ui_explorer__nav__home,.ui_explorer__nav__input,.ui_explorer__nav__prev,.ui_explorer__selected_file,.ui_explorer_container .ui_explorer,.ui_menu--menu ul,.ui_menu--scroller > .ui_menu__down_handler,.ui_menu--scroller > .ui_menu__up_handler,.ui_window__cancel,.ui_window__head__close,.ui_window__head__help,.ui_window__head__maximize,.ui_window__head__minimize,.ui_window__ok,.ui_window_docked,button,textarea{border:0!important;box-shadow:none!important;outline:0!important}.ui_window{animation-duration:0s!important}#ui_explorer_0 > .ui_icon > span{text-shadow:none!important;box-shadow:none!important}#s42_taskbar{border-top:1px solid var(--secondary-color)!important}.ui_window_docked{border-bottom:2px solid var(--secondary-color)!important;border-radius:0!important}.ui_window,.ui_window__cancel,.ui_window__ok{border:1px solid var(--secondary-color)!important}#s42_clock,#trollbox_input,.ui_alert__text,.ui_explorer--icons > .ui_icon > span,.ui_explorer__nav__go,.ui_explorer__nav__input,.ui_explorer__nav__prev,.ui_explorer__selected_file,.ui_menu--scroller > .ui_menu__down_handler::after,.ui_menu--scroller > .ui_menu__up_handler::after,.ui_menu__item__text,.ui_window__cancel,.ui_window__head__help,.ui_window__ok,.ui_window_docked__text,button,label,textarea{color:#fff!important}[src*=home]{filter: invert(100%)}.ui_terminal{color:var(--secondary-color)}#s42_bios{background:var(--bios-color)!important;color:var(--bios-fg)!important;padding:0!important !important}#trollbox_input,.ui_menu.ui_menu--open,.ui_window,.ui_window__iframe,.ui_window__ok,.ui_window_docked,textarea{border-radius:var(--radius)}#s42_background{background:var(--background);background-size:cover!important;background-attachment:fixed!important;background-position:50% 50%!important;background-repeat:no-repeat!important;background-color:#232323}.ui_window--active .ui_window__head{background:var(--active-titlebar)}.ui_window__head{background:var(--inactive-titlebar)}.ui_window__head__close{background:#ea4343!important;border-radius:100%;margin-left:10px}.ui_window__head__close,.ui_window__head__maximize,.ui_window__head__maximized,.ui_window__head__minimize{padding:0!important !important;height:12px!important;width:12px!important}.ui_window__head__maximize,.ui_window__head__maximized{background:#39c347!important;border-radius:100%;margin-left:10px}.ui_window__head__minimize{background:#ff9600!important;border-radius:100%;margin-left:10px}.ui_window{box-shadow:var(--window-shadow);padding:var(--wnd-padding)!important !important}.ui_menu--menu .ui_menu__item--focus{background:var(--hover-bg)}#s42_bios *{font-size:2vh!important;font-family:"Inconsolata For Powerline", Inconsolata, "Anonymous Pro", monospace, "Perfect DOS VGA 437"!important}.ui_window:not(.ui_window--active){filter: grayscale(50%)}#ui_explorer_0 > .ui_icon > span,.ui_explorer--icons > .ui_icon > span,.ui_window__head__title,a,button,input,li,ul{font-family:"San Francisco Display";font-weight:700!important}#ui_explorer_0 > .ui_icon > span,.ui_explorer--icons > .ui_icon > span,.ui_window__head__title,a,button,input,ul{font-size:140%}.ui_menu .ui_menu__item{font-size:90%}')
                location.reload();
              }
            },
            {
              name: "PureDark",
              action: function () {
                $store.set('boot/currentstyle.css', ':root{--background:url("https://cdn.discordapp.com/attachments/433213209705447425/453993823157223434/blurry_blue_background-wallpaper-2560x1440.jpg");--main-color:rgba(0,0,0,.7)}.ui_window__head{background:transparent !important}.ui_window__head__close::before,.ui_window__head__config::before,.ui_window__head__help::before,.ui_window__head__maximize::before,.ui_window__head__maximized::before,.ui_window__head__minimize::before,.ui_window__head__pin::before,.ui_window__head__reload::before{font-weight:900;text-shadow:1px 0 #000, -1px 0 #000,0px 1px #000, 0 -1px #000}.ui_icon{text-shadow:0 0 0.5rem #000 !important}.ui_window__head__close::before,.ui_window__head__config::before,.ui_window__head__help::before,.ui_window__head__maximize::before,.ui_window__head__maximized::before,.ui_window__head__minimize::before,.ui_window__head__pin::before,.ui_window__head__reload::before,input:not([type="checkbox"]):not([type="radio"]):not([type="range"]).ui_explorer__selected_file,input.ui_explorer__nav__input,.ui_window,.ui_terminal div{color:white}.ui_explorer--not_workspace,.ui_terminal,button[class*=ui_window__head__]{background:transparent;border:none;box-shadow:none}.ui_terminal{overflow:auto}.btn,button:not(.unstyled):not([class*=ui_window__head__]),input[type="reset"],input[type="submit"],input[type="button"],input:not([type="checkbox"]):not([type="radio"]):not([type="range"]).ui_explorer__selected_file,input.ui_explorer__nav__input,select{color:#fafafa !important;box-shadow:none !important;background:transparent !important;border:1px ridge #fafafa !important}.ui_menu--bar .ui_menu__submenu ul,.ui_menu--menu .ui_menu__submenu ul,.ui_menu--menu ul{background-color:var(--main-color) !important}#s42_start{border:none !important}.ui_explorer__nav__home > img{filter: invert(100%) opacity(100%)}.ui_icon,.ui_menu .ui_menu__item,button:not(.unstyled).skin_outset{color:#fff}.ui_window{border-radius:0.3rem;box-shadow:0 0 0.8rem #000;border:1px solid #000 !important;background-color:var(--main-color)}.skin_outset_deep,.ui_menu--bar .ui_menu__submenu ul,.ui_menu--menu .ui_menu__submenu ul,.ui_menu--menu ul{border-top:none !important;border-left:none !important}.skin_base{background:transparent}.ui_explorer--not_workspace{background-color:transparent}#s42_background{background-image:var(--background);background-color:#01a9ac;background-size:cover;background-repeat:no-repeat;background-position:50% 50%}#s42_notif{background-color:#23272A}#s42_bios{background-color:#222}')
                location.reload();
              }
            }
          ]
        },
      ]
    });
    ThemeMasterWindow
  },
  hascli: true,
  terminal: true
};`;
var _ver = "1.0";

$alert({
  msg: "Welcome to the ThemeMaster " + _ver + " installer. Choose an option below.",
  title: "ThemeMaster Installer",
  btnOk: "Install ThemeMaster " + _ver,
  btnCancel: "Close",
  img: "/c/sys/skins/w93/apps/paint.png",
  resizable: false,
  maximizable: false,
  minimizable: false,
  closable: false,
  dockable: false
}, function(isOK) {
  if (isOK) {
    $store.set('boot/thememaster.js', _maincode);
    $alert({
      msg: "ThemeMaster " + _ver + " needs a reboot to start working. Reboot now?",
      title: "ThemeMaster Installer",
      btnOk: "Reboot",
      btnCancel: "Cancel and reboot later",
      img: "/c/sys/skins/w93/apps/paint.png",
      resizable: false,
      maximizable: false,
      minimizable: false,
      closable: false,
      dockable: false
    }, function(isOK) {
      if (isOK) {
        location.reload()
      }
    })
  }
})