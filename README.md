# ThemeMaster
**ThemeMaster** (also abbreviated in Themem) is a Windows93 custom application allowing to change themes without having to manually find CSS code and put it in the /a/boot/ directory.
# What's Windows93?
**Windows93** is a WebOS freely accessible in ***http://www.windows93.net/***
# Installation
Download the latest release, unzip ThemeMaster-X (X is the version) and import the resulting folder in Windows93. Open the Windows93 Terminal, run the command `js [PATH]` and replace [PATH] with the path in which `thminstaller.js` is located. _(example: `/a/desktop/ThemeMaster-1.0/thminstaller.js`)_
# Execution
To run ThemeMaster, open Terminal and enter the command `themes`. This will only work if a reboot has been done after the installation.
# Uninstall
To uninstall ThemeMaster, enter the following command in the Terminal:
`$file.delete("/a/boot/thememaster.js");
$file.delete("/a/boot/currentstyle.css");
location.reload()`

After the execution of the script, Windows93 will reboot. **NOTE: This will clear the current theme.**
# A huge thank you to:
•**Domenic Waterdash, Draco, DarkPhoenix10 and 1024x2** for the Windows93 Javascript Documentation;

•**Draco** for the _PureDark_, _RedGlass_, _Smooth Borders_ and _SYSTEM_ themes;

•**Domenic** for the _Bubble93_ theme.
