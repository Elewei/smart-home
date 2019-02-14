$(document).ready(() => {

  /* 第二栏 定义 */
  const $smartControl = $('.smart-control');
  const $smartControlOn = $('.smart-control-on');
  const $manageEntry = $('.manage-entry');
  const $manageEntryOn = $('.manage-entry-on');
  const $setGuide = $('.set-guide');
  const $setGuideOn = $('.set-guide-on');
  const $other = $('.other');
  const $otherOn = $('.other-on');

  /* 定义四个页面内容 Card */
  const $smartHomeContent = $('.smart-control-content');
  const $manageEntryContent = $('.manage-entry-content');
  const $setGuideContent = $('.set-guide-content');
  const $otherContent = $('.other-content');

  /* 智能控制 -> 独立控制页面 */
  const $independantLeftMyDeviceText = $('#independant-left-my-device-text');
  const $independantLeftExecLogText = $('#independant-left-exec-log-text');

  const $leftSideButtomOne = $('.left-side-buttom-one');
  const $leftSideButtomOneOn = $('.left-side-buttom-one-on');
  const $leftSideButtomTwo = $('.left-side-buttom-two');
  const $leftSideButtomTwoOn = $('.left-side-buttom-two-on');

  const $independantControl = $('.independant-control');
  const $independantControlContent = $('.independant-control-content');

  const $touchSwitchContent = $('.touch-switch-content');
  const $smartPlug = $('.smart-plug');
  const $touchSwitch = $('.touch-switch');

  const $touchSwitchText = $('#touch-switch-text');
  const $myDeviceOn = $('.my-device-on');
  const $touchSwitchExecLogText = $('#touch-switch-exec-log-text');
  const $execLogOn = $('.my-device-on');

  const $oneKeySwitchKeyOn = $('.one-key-switch-on');
  const $oneKeySwitchKeyOff = $('.one-key-switch-off');

  const $twoKeyOneSwitchOn = $('.two-key-one-switch-on');
  const $twoKeyOneSwitchOff = $('.two-key-one-switch-off');

  const $twoKeyTwoSwitchOn = $('.two-key-two-switch-on');
  const $twoKeyTwoSwitchOff = $('.two-key-two-switch-off');

  const $threeKeyOneSwitchOn = $('.three-key-one-switch-on');
  const $threeKeyOneSwitchOff = $('.three-key-one-switch-off');

  const $threeKeyTwoSwitchOn = $('.three-key-two-switch-on');
  const $threeKeyTwoSwitchOff = $('.three-key-two-switch-off');

  const $threeKeyThreeSwitchOn = $('.three-key-three-switch-on');
  const $threeKeyThreeSwitchOff = $('.three-key-three-switch-off');

  const $roomControl = $('.room-control');
  const $roomControlContent = $('.room-control-content');

  const $deviceManageDeviceList = $('#device-manage-device-list');
  const $deviceManageDeviceListOn = $('#device-manage-device-list-on');
  const $deviceManageRegisterOff = $('#device-manage-register-off');
  const $deviceManageRegisterOffOn = $('#device-manage-register-off-on');

  const $deviceManageContent = $('.device-manage-content');
  const $smartPlugContent = $('.smart-plug-content');
  const $deviceListPage = $('.device-list-page');
  const $registerOffPage = $('.register-off-page');

  const $deviceManageCard = $('.device-manage-card');
  const $airBoxContent = $('.air-box-content');
  const $registerPlug = $('#register-plug');
  const $smartCurtainContent = $('.smart-curtain-content');
  const $dimmingLampContent = $('.dimming-lamp-content');
  const $sceneControlContent = $('.scene-control-content');

  const $openWindowMachine = $('.open-window-machine');
  const $curtain = $('.curtain');
  const $airBox = $('.air-box');
  const $dimmingLamp = $('.dimming-lamp');

  /* 点击智能控制 */
  $smartControl.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.show();

  });

  /* 点击管理入口 */
  $manageEntry.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.show();
  });

  /* 点击设置向导 */
  $setGuide.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.show();

  });

  /* 点击其他 */
  $other.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.hide();
    $otherOn.show();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.show();

  });

  /* 点击独立控制 */
  $independantControl.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.show();

  });

  /* 点击独立控制页面左侧-我的设备 */
  $independantLeftMyDeviceText.on('click', ()=>{
    console.log('点击第一个按钮');
    $leftSideButtomOne.hide();
    $leftSideButtomOneOn.show();
    $leftSideButtomTwo.show();
    $leftSideButtomTwoOn.hide();

  });

  /* 点击独立控制页面左侧-执行记录 */
  $independantLeftExecLogText.on('click', ()=>{
    console.log('点击第二个按钮');
    $leftSideButtomOne.show();
    $leftSideButtomOneOn.hide();
    $leftSideButtomTwo.hide();
    $leftSideButtomTwoOn.show();
  });

  /* 点击 管理入口 -> 独立控制 -> 触控开关 */
  $touchSwitch.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.hide();
    $touchSwitchContent.show();

  });

  /* 点击触控开关-左侧栏-我的设备 */
  $touchSwitchText.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.hide();
    $touchSwitchContent.show();

    $leftSideButtomOne.hide();
    $leftSideButtomOneOn.show();
    $leftSideButtomTwo.show();
    $leftSideButtomTwoOn.hide();


    console.log("touch switch");

  });

  /* 点击触控开关-左侧栏-执行记录 */
  $touchSwitchExecLogText.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.hide();
    $touchSwitchContent.show();

    $leftSideButtomOne.show();
    $leftSideButtomOneOn.hide();
    $leftSideButtomTwo.hide();
    $leftSideButtomTwoOn.show();

    console.log("exec switch");

  });

  /* 点击一键触控开关 - 开 */
  $oneKeySwitchKeyOn.on('click', ()=>{
    console.log("click onekey On");

    $oneKeySwitchKeyOn.hide();
    $oneKeySwitchKeyOff.show();

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击一键触控开关 - 关 */
  $oneKeySwitchKeyOff.on('click', ()=>{
    console.log("click onekey Off");

    $oneKeySwitchKeyOn.show();
    $oneKeySwitchKeyOff.hide();

  });

  /* 点击二键触控开关一 - 开 */
  $twoKeyOneSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $twoKeyOneSwitchOn.hide();
    $twoKeyOneSwitchOff.show();

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击二键触控开关一 - 关 */
  $twoKeyOneSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $twoKeyOneSwitchOn.show();
    $twoKeyOneSwitchOff.hide();

  });

  /* 点击二键触控开关二 - 开 */
  $twoKeyTwoSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $twoKeyTwoSwitchOn.hide();
    $twoKeyTwoSwitchOff.show();

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });

  });

  /* 点击二键触控开关二 - 关 */
  $twoKeyTwoSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $twoKeyTwoSwitchOn.show();
    $twoKeyTwoSwitchOff.hide();

  });

  /* 点击三键触控开关一 - 开 */
  $threeKeyOneSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $threeKeyOneSwitchOn.hide();
    $threeKeyOneSwitchOff.show();

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击三键触控开关一 - 关 */
  $threeKeyOneSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $threeKeyOneSwitchOn.show();
    $threeKeyOneSwitchOff.hide();

  });

  /* 点击三键触控开关二 - 开 */
  $threeKeyTwoSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $threeKeyTwoSwitchOn.hide();
    $threeKeyTwoSwitchOff.show();

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击三键触控开关二 - 关 */
  $threeKeyTwoSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $threeKeyTwoSwitchOn.show();
    $threeKeyTwoSwitchOff.hide();

  });

  /* 点击三键触控开关三 - 开 */
  $threeKeyThreeSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $threeKeyThreeSwitchOn.hide();
    $threeKeyThreeSwitchOff.show();

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击三键触控开关三 - 关 */
  $threeKeyThreeSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $threeKeyThreeSwitchOn.show();
    $threeKeyThreeSwitchOff.hide();

  });

  /* 点击 管理入口 -> 设备管理 */
  $deviceManageCard.on('click', ()=> {
    console.log("打开设备管理页面");

    /* 选定管理入口 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $deviceManageContent.show();
  });

  /* 点击 管理入口->设备管理->设备列表 */
  $deviceManageDeviceList.on('click', ()=>{
    /* 选定管理入口 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 显示设备管理内容 */
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $deviceManageContent.show();

    /* 选定设备列表 */
    $deviceManageDeviceList.hide();
    $deviceManageDeviceListOn.show();
    $deviceManageRegisterOff.show();
    $deviceManageRegisterOffOn.hide();

    $deviceListPage.show();
    $registerOffPage.hide();

    console.log("点击设备列表");

  });

  /* 点击 管理入口->设备管理->注册/注销 */
  $deviceManageRegisterOff.on('click', ()=>{
    /* 选定管理入口 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 显示设备管理内容 */
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $deviceManageContent.show();

    /* 选定注册注销 */
    $deviceManageDeviceList.show();
    $deviceManageDeviceListOn.hide();
    $deviceManageRegisterOff.hide();
    $deviceManageRegisterOffOn.show();

    $deviceListPage.hide();
    $registerOffPage.show();


    console.log("点击注册/注销");

  });

  /*  */
  $registerPlug.on('click', ()=> {
    console.log('点击注册按钮');

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });

  });

  /* 点击 智能控制 -> 独立控制 -> 开窗器   */
  $openWindowMachine.on('click', ()=>{
    console.log('点击开窗器');

  });

  /* 点击 智能控制 -> 独立控制 -> 窗帘   */
  $curtain.on('click', ()=>{
    console.log('点击打开窗帘页面');

  });

  /* 点击 智能控制 -> 独立控制 -> 空气盒子   */
  $airBox.on('click', ()=>{
    console.log('点击打开空气盒子');

    /* 显示 智能控制 标签*/
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.show();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();

  });

  /* 点击 管理入口 -> 独立控制 -> 智能插座   */
  $smartPlug.on('click', ()=>{
    console.log('点击开智能插座');

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.show();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();

  });

  /* 点击 管理入口 -> 独立控制 -> 调光灯   */
  $dimmingLamp.on('click', ()=>{
    console.log('点击打开调光灯');

  });

  /* 点击 房间控制 */
  $roomControl.on('click', ()=>{
    console.log("点击房间控制");

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.show();

  });



});
