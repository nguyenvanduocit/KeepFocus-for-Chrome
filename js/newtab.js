function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        slogan: 'Đừng phân tâm',
        tagline: 'Nếu muốn thành công, hãy tập trung vào việc bạn đang làm, đừng buông lơi, làm gì cũng có thể thành công. Nếu không có khó khăn, thì thành công làm gì.'
    }, function(items) {
        document.getElementById('slogan').innerText = items.slogan;
        document.getElementById('tagline').innerText = items.tagline;
    });
}
function open_setting(){
    var optionURL = chrome.extension.getURL("options.html");
    var createProperties = {
        windowId: chrome.windows.WINDOW_ID_CURRENT,
        url: optionURL,
        active: true,
        selected: true
    };
    chrome.tabs.create(createProperties, function () {});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('setting_link').addEventListener('click', open_setting);