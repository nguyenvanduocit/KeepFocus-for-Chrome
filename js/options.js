// Saves options to chrome.storage
function save_options(e) {
    e.preventDefault();
    var slogan = document.getElementById('slogan').value;
    var tagline = document.getElementById('tagline').value;
    console.log(slogan);
    chrome.storage.sync.set({
        slogan: slogan,
        tagline: tagline
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        slogan: 'Đừng phân tâm',
        tagline: 'Nếu muốn thành công, hãy tập trung vào việc bạn đang làm, đừng buông lơi, làm gì cũng có thể thành công. Nếu không có khó khăn, thì thành công làm gì.'
    }, function(items) {
        document.getElementById('slogan').value = items.slogan;
        document.getElementById('tagline').value = items.tagline;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);