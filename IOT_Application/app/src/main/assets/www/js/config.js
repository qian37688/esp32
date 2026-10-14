/**
 * Data Model Configuration Manager
 * Manages the dynamic configuration of sensors and controls.
 */

const DEFAULT_DATA_MODEL = {
    sensors: [
        { id: 'temp', name: '温度', icon: 'fa-thermometer-half', color: 'orange', unit: '℃', cloudKey: 'Temp', min: 15, max: 32, dataType: 'float', step: 0.1 },
        { id: 'hum', name: '湿度', icon: 'fa-droplet', color: 'blue', unit: '%', cloudKey: 'Humi', min: 20, max: 80, dataType: 'float', step: 0.1 },
        { id: 'smoke', name: '烟雾浓度', icon: 'fa-wind', color: 'slate', unit: 'ppm', cloudKey: 'MQ2', min: 0, max: 100, dataType: 'int32', step: 1 },
        { id: 'water', name: '水位', icon: 'fa-water', color: 'cyan', unit: '%', cloudKey: 'Deep', min: 10, max: 90, dataType: 'float', step: 1 }
    ],
    controls: [
        { id: 'valve', name: '电磁阀', icon: 'fa-toggle-off', color: 'blue', cloudKey: 'Valve', dataType: 'bool', step: 1 },
        { id: 'fan', name: '排风扇', icon: 'fa-fan', color: 'cyan', cloudKey: 'Fun', dataType: 'bool', step: 1 },
        { id: 'led2', name: '报警灯', icon: 'fa-lightbulb', color: 'red', cloudKey: 'LED2', dataType: 'bool', step: 1 },
        { id: 'led1', name: '照明灯', icon: 'fa-lightbulb', color: 'yellow', cloudKey: 'LED1', dataType: 'bool', step: 1 },
        { id: 'buzzer', name: '蜂鸣器', icon: 'fa-bullhorn', color: 'orange', cloudKey: 'Buzzer', dataType: 'bool', step: 1 },
        { id: 'led_brightness', name: 'LED亮度', icon: 'fa-sun', color: 'yellow', cloudKey: 'LedBrightness', dataType: 'int32', uiType: 'slider', min: 0, max: 100, step: 1, unit: '%' },
        { id: 'temp_set', name: '设定温度', icon: 'fa-thermometer-half', color: 'orange', cloudKey: 'TempSet', dataType: 'int32', uiType: 'slider', min: 16, max: 30, step: 1, unit: '℃' },
        { id: 'speed_set', name: '设定风速', icon: 'fa-wind', color: 'cyan', cloudKey: 'SpeedSet', dataType: 'int32', uiType: 'slider', min: 0, max: 100, step: 1, unit: '%' }
    ],
    videoData: []
};

// Common FontAwesome icons for the user to select
const COMMON_ICONS = [
    'fa-thermometer-half', 'fa-droplet', 'fa-wind', 'fa-water', 'fa-fire', 
    'fa-bolt', 'fa-lightbulb', 'fa-fan', 'fa-toggle-on', 'fa-toggle-off', 
    'fa-bell', 'fa-bullhorn', 'fa-plug', 'fa-power-off', 'fa-microchip', 
    'fa-server', 'fa-battery-full', 'fa-smog', 'fa-cloud', 'fa-sun',
    'fa-snowflake', 'fa-lock', 'fa-unlock', 'fa-video', 'fa-camera',
    'fa-door-open', 'fa-door-closed', 'fa-car-battery', 'fa-satellite-dish',
    'fa-users', 'fa-user', 'fa-eye', 'fa-car', 'fa-truck',
    // 滑动/调速/档位类
    'fa-sliders', 'fa-gauge-high', 'fa-percent', 'fa-volume-high', 'fa-volume-low',
    'fa-temperature-half', 'fa-stopwatch', 'fa-clock', 'fa-gear', 'fa-gears',
    'fa-layer-group', 'fa-arrow-trend-up', 'fa-moon', 'fa-battery-half'
];

// 图标中文说明（选择图标时提示用户）
const ICON_LABELS = {
    'fa-thermometer-half': '温度',
    'fa-droplet': '水滴 / 湿度',
    'fa-wind': '风 / 通风',
    'fa-water': '水位',
    'fa-fire': '火焰 / 加热',
    'fa-bolt': '闪电 / 电源',
    'fa-lightbulb': '灯泡 / 照明',
    'fa-fan': '风扇 / 排风',
    'fa-toggle-on': '开关（开启）',
    'fa-toggle-off': '开关（关闭）',
    'fa-bell': '铃铛 / 警报',
    'fa-bullhorn': '喇叭 / 蜂鸣器',
    'fa-plug': '插头 / 插座',
    'fa-power-off': '电源键',
    'fa-microchip': '芯片 / 传感器',
    'fa-server': '服务器',
    'fa-battery-full': '电池满',
    'fa-smog': '烟雾',
    'fa-cloud': '云 / 联网',
    'fa-sun': '太阳 / 光照',
    'fa-snowflake': '雪花 / 制冷',
    'fa-lock': '锁定',
    'fa-unlock': '解锁',
    'fa-video': '视频',
    'fa-camera': '摄像头',
    'fa-door-open': '门开',
    'fa-door-closed': '门关',
    'fa-car-battery': '电瓶',
    'fa-satellite-dish': '天线 / 信号',
    'fa-users': '多人',
    'fa-user': '单人',
    'fa-eye': '监控 / 查看',
    'fa-car': '汽车',
    'fa-truck': '货车',
    'fa-sliders': '滑杆 / 调节',
    'fa-gauge-high': '仪表 / 转速',
    'fa-percent': '百分比',
    'fa-volume-high': '高音量',
    'fa-volume-low': '低音量',
    'fa-temperature-half': '半温 / 恒温',
    'fa-stopwatch': '秒表 / 计时',
    'fa-clock': '时钟 / 定时',
    'fa-gear': '齿轮 / 设置',
    'fa-gears': '多齿轮 / 机械',
    'fa-layer-group': '层叠 / 档位',
    'fa-arrow-trend-up': '上升趋势 / 速率',
    'fa-moon': '月亮 / 夜间',
    'fa-battery-half': '半电 / 限功率'
};

// 默认登录账号（改密码后保存到 localStorage）
const DEFAULT_USER = {
    id: 'admin',
    name: '管理员',
    username: 'admin',
    password: '123456'
};

function getUser() {
    try {
        const saved = localStorage.getItem('iot_user');
        if (saved) {
            return Object.assign({}, DEFAULT_USER, JSON.parse(saved));
        }
    } catch (e) {
        console.error('Error loading user:', e);
    }
    return Object.assign({}, DEFAULT_USER);
}

function saveUser(user) {
    localStorage.setItem('iot_user', JSON.stringify(user));
}

function getDataModel() {
    try {
        const saved = localStorage.getItem('iot_data_model');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading data model:', e);
    }
    return DEFAULT_DATA_MODEL;
}

function saveDataModel(model) {
    localStorage.setItem('iot_data_model', JSON.stringify(model));
}

// Helper to determine decimal places based on data type and step
function getDecimals(dataType, step) {
    if (dataType === 'int32') return 0;
    if (step === undefined || step === null) return 1;
    const stepStr = String(step);
    if (stepStr.includes('.')) {
        return stepStr.split('.')[1].length;
    }
    return 0;
}

// UI Color mapping helpers（对应 css/common.css 中的语义色板类）
const COLOR_CLASSES = {
    'orange': { bg: 'tile-orange', text: 'c-orange', chip: 'chip-orange', border: '', fill: 'fill-orange' },
    'blue': { bg: 'tile-blue', text: 'c-blue', chip: 'chip-blue', border: '', fill: 'fill-blue' },
    'slate': { bg: 'tile-slate', text: 'c-slate', chip: 'chip-slate', border: '', fill: 'fill-slate' },
    'cyan': { bg: 'tile-cyan', text: 'c-cyan', chip: 'chip-cyan', border: '', fill: 'fill-cyan' },
    'teal': { bg: 'tile-teal', text: 'c-teal', chip: 'chip-teal', border: '', fill: 'fill-teal' },
    'yellow': { bg: 'tile-yellow', text: 'c-yellow', chip: 'chip-yellow', border: '', fill: 'fill-yellow' },
    'red': { bg: 'tile-red', text: 'c-red', chip: 'chip-red', border: '', fill: 'fill-red' },
    'green': { bg: 'tile-green', text: 'c-green', chip: 'chip-green', border: '', fill: 'fill-green' },
    'purple': { bg: 'tile-purple', text: 'c-purple', chip: 'chip-purple', border: '', fill: 'fill-purple' },
    'pink': { bg: 'tile-pink', text: 'c-pink', chip: 'chip-pink', border: '', fill: 'fill-pink' }
};
