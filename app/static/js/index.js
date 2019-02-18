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
  const $sceneControl = $('.scene-control');

  const $userSetupContent = $('.user-setup-content');
  const $setGuideUserSetup = $('#set-guide-user-setup');

  const $userSetupBasicInfo = $('#user-setup-basic-info');
  const $userSetupBasicInfoOn = $('#user-setup-basic-info-on');
  const $userSetupChangePasswd = $('#user-setup-change-passwd');
  const $userSetupChangePasswdOn = $('#user-setup-change-passwd-on');
  const $userSetupBasicInfoText = $('#user-setup-basic-info-text');
  const $userSetupChangePasswdText = $('#user-setup-change-passwd-text');

  const $sceneControlMySceneText = $('#scene-control-my-scene-text');
  const $sceneControlExecLogText = $('#scene-control-exec-log-text');
  const $sceneControlExecLog = $('#scene-control-exec-log');
  const $sceneControlMyScene = $('#scene-control-my-scene');
  const $sceneControlLeftSideButtomOne = $('#scene-control-left-side-buttom-one');
  const $sceneControlLeftSideButtomOneOn = $('#scene-control-left-side-buttom-one-on');
  const $sceneControlLeftSideButtomTwo = $('#scene-control-left-side-buttom-two');
  const $sceneControlLeftSideButtomTwoOn = $('#scene-control-left-sice-buttom-two-on');

  const sceneControlMySceneChildBack = $('#scene-control-my-scene-child-back');
  const $sceneControlMySceneChildContent = $('.scene-control-my-scene-child-content');
  const $sceneControlContentBack = $('#scene-control-content-back');

  const $sceneControlBackHomeMode = $('#scene-control-back-home-mode');
  const $sceneControlDinnerMode = $('#scene-control-dinner-mode');
  const $sceneControlLeaveHomeMode = $('#scene-control-leave-home-mode');
  const $sceneControlRainMode = $('#scene-control-rain-mode');
  const $sceneControlSleepMode = $('#scene-control-sleep-mode');
  const $sceneControlCustomMode = $('#scene-control-custom-mode');
  const $deviceManageContentBack = $('#device-manage-content-back');
  const $openWindowMachineContent = $('.open-window-machine-content');
  const $openWindowMachineContentBack = $('#open-window-machine-content-back');
  const $smartCurtainContentBack = $('#smart-curtain-content-back');
  const $touchSwitchContentBack = $('#touch-switch-content-back');
  const $airBoxContentBack = $('#air-box-content-back');
  const $smartPlugContentBack = $('#smart-plug-content-back');
  const $manageEntryHomeManage = $('#manage-entry-home-manage');
  const $homeManageContent = $('.home-manage-content');
  const $homeManageHomeMamberText = $('#home-manage-home-mamber-text');
  const $homeManageHomeListText = $('#home-manage-home-list-text');
  const $homeManageHomeMember = $('#home-manage-home-member');
  const $homeManageHomeInformation = $('#home-manage-home-information');
  const $homeManageHomeRoomList = $('#home-manage-home-room-list');
  const $homeManageContentBack = $('#home-manage-content-back');
  const $manageEntryFreeGroup = $('#manage-entry-free-group');
  const $freeGroupContent = $('.free-group-content');

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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
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
    $userSetupContent.hide();
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
    $userSetupContent.hide();
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
    $userSetupContent.hide();
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

  /* 点击智能控制 -> 情景控制  */
  $sceneControl.on('click', ()=>{
    console.log('点击智能控制 -> 情景控制');

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
    $roomControlContent.hide();
    $userSetupContent.hide();
    $smartHomeContent.hide();
    $sceneControlMySceneChildContent.hide();
    $sceneControlContent.show();
  });

  /* 点击情景控制左侧 我的情景 */
  $sceneControlMySceneText.on('click', ()=>{
    console.log('点击情景控制左侧 我的情景');

    $sceneControlLeftSideButtomOne.hide();
    $sceneControlLeftSideButtomOneOn.show();
    $sceneControlLeftSideButtomTwo.show();
    $sceneControlLeftSideButtomTwoOn.hide();

    $sceneControlMyScene.show();
    $sceneControlExecLog.hide();
  });

  /* 点击情景控制左侧 执行记录 */
  $sceneControlExecLogText.on('click', ()=>{
    console.log('点击情景控制左侧 情景描述');

    $sceneControlLeftSideButtomOne.show();
    $sceneControlLeftSideButtomOneOn.hide();
    $sceneControlLeftSideButtomTwo.hide();
    $sceneControlLeftSideButtomTwoOn.show();

    $sceneControlMyScene.hide();
    $sceneControlExecLog.show();

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

  /* 设置向导 -> 用户设置-页面 左侧按钮 */
  $userSetupBasicInfoText.on('click', ()=>{
    console.log('设置向导 -> 用户设置-页面 左侧按钮 基本信息');

    $userSetupBasicInfo.hide();
    $userSetupBasicInfoOn.show();
    $userSetupChangePasswd.show();
    $userSetupChangePasswdOn.hide();
  });


  /* 设置向导 -> 用户设置-页面 左侧按钮 */
  $userSetupChangePasswdText.on('click', ()=>{
    console.log('设置向导 -> 用户设置-页面 左侧按钮 修改密码');

    $userSetupBasicInfo.show();
    $userSetupBasicInfoOn.hide();
    $userSetupChangePasswd.hide();
    $userSetupChangePasswdOn.show();
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $smartHomeContent.hide();
    $openWindowMachineContent.show();
  });

  /* 点击 智能控制 -> 独立控制 -> 窗帘   */
  $curtain.on('click', ()=>{
    console.log('点击打开窗帘页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $smartCurtainContent.show();
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
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $dimmingLampContent.show();

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

  /* 点击设置向导 -> 用户设置 */
  $setGuideUserSetup.on('click', ()=>{
    console.log('点击设置向导 -> 用户设置');
    /* 标题显示设置向导 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 显示用户设置页面 */
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
    $manageEntryContent.hide();
    $userSetupContent.show();
  });

  /* 点击返回 -> 情景控制 主界面 */
  sceneControlMySceneChildBack.on('click', ()=>{
    console.log('点击返回 -> 情景控制 主界面');

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
    $roomControlContent.hide();
    $userSetupContent.hide();
    $smartHomeContent.hide();
    $sceneControlMySceneChildContent.hide();
    $sceneControlContent.show();

  });

  /* 点击返回 -> 智能控制 */
  $sceneControlContentBack.on('click', ()=>{
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $smartHomeContent.show();
  });

  /* 点击回家模式 */
  $sceneControlBackHomeMode.on('click', ()=>{
    console.log('点击回家模式');

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
    $userSetupContent.hide();
    $smartHomeContent.hide();
    $sceneControlMySceneChildContent.show();


  });

  /* 点击晚餐模式 */
  $sceneControlDinnerMode.on('click', ()=>{
    console.log('点击晚餐模式');
  });

  /* 点击离家模式 */
  $sceneControlLeaveHomeMode.on('click', ()=>{
    console.log('点击离家模式');
  });

  /* 点击雨天模式 */
  $sceneControlRainMode.on('click', ()=>{
    console.log('点击雨天模式');
  });

  /* 点击睡觉模式 */
  $sceneControlSleepMode.on('click', ()=>{
    console.log('点击睡觉模式');
  });

  /* 点击自定义模式 */
  $sceneControlCustomMode.on('click', ()=>{
    console.log('点击自定义模式');
  });

  /*  */
  $deviceManageContentBack.on('click', ()=> {
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
    $userSetupContent.hide();
    $manageEntryContent.show();
  });

  $openWindowMachineContentBack.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $smartCurtainContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });


  $touchSwitchContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $airBoxContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $smartPlugContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  /* 点击家庭管理页面 */
  $manageEntryHomeManage.on('click', ()=> {
    console.log('点击家庭管理页面 ');

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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $homeManageContent.show();

  });

  /* 点击家庭管理页面 -> 左侧家庭成员按钮 */
  $homeManageHomeMamberText.on('click', ()=>{
    console.log('点击家庭管理页面 -> 左侧家庭成员按钮 ');
    $homeManageHomeInformation.hide();
    $homeManageHomeRoomList.hide();
    $homeManageHomeMember.show();
  });

  /* 点击家庭管理页面 -> 左侧房间列表按钮 */
  $homeManageHomeListText.on('click', ()=>{
    console.log('点击家庭管理页面 -> 左侧房间列表按钮 ');
    $homeManageHomeInformation.hide();
    $homeManageHomeMember.hide();
    $homeManageHomeRoomList.show();
  });

  $homeManageContentBack.on('click', ()=>{
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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.show();
  });

  /* 点击家管理入口 -> 自由组合页面 */
  $manageEntryFreeGroup.on('click', ()=>{

    console.log('点击家管理入口 -> 自由组合页面 ');

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
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $smartHomeContent.hide();
    $freeGroupContent.show();


  });

});
