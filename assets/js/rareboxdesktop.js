/* RareBox Desktop 页面：从更新服务读取最新构建。
 *
 * 更新服务由管理员后台发布，接口和桌面应用的「检查更新」完全一致。
 * 没有发布记录、接口不可达、或下载地址仍是占位域名时，这一块保持隐藏，
 * 页面继续使用 _data/apps/rareboxdesktop.yml 里的静态下载列表。
 */
(function () {
    'use strict';

    var box = document.getElementById('rbd-live-release');
    if (!box) return;

    var API = box.getAttribute('data-api');
    var PLATFORMS = [
        { key: 'windows', label: 'Windows' },
        { key: 'macos', label: 'macOS' },
        { key: 'linux', label: 'Linux' },
        { key: 'android', label: 'Android' }
    ];
    var TIMEOUT = 6000;

    var PLACEHOLDER_HOSTS = ['example.com', 'example.org', 'example.net', 'localhost'];

    function isRealUrl(url) {
        if (!/^https?:\/\//i.test(url)) return false;
        var host;
        try {
            host = new URL(url).hostname.toLowerCase();
        } catch (e) {
            return false;
        }
        return PLACEHOLDER_HOSTS.indexOf(host) === -1;
    }

    function fetchJSON(path) {
        var controller = typeof AbortController === 'function' ? new AbortController() : null;
        var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT) : null;
        return fetch(API + path, {
            headers: { 'Accept': 'application/json' },
            credentials: 'omit',
            signal: controller ? controller.signal : undefined
        }).then(function (res) {
            clearTimeout(timer);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        }).catch(function (err) {
            clearTimeout(timer);
            throw err;
        });
    }

    function formatSize(bytes) {
        var value = Number(bytes) || 0;
        if (value <= 0) return '';
        var units = ['B', 'KB', 'MB', 'GB'];
        var i = 0;
        while (value >= 1024 && i < units.length - 1) {
            value /= 1024;
            i++;
        }
        return (i === 0 ? value : value.toFixed(1)) + ' ' + units[i];
    }

    function render(found) {
        if (!found.length) return;

        var newest = found[0];
        var version = box.querySelector('[data-live-version]');
        var meta = box.querySelector('[data-live-meta]');
        var notes = box.querySelector('[data-live-notes]');
        var links = box.querySelector('[data-live-links]');

        version.textContent = 'v' + newest.release.version;

        var metaParts = [];
        if (newest.release.published_at) metaParts.push(newest.release.published_at.slice(0, 10));
        var size = formatSize(newest.release.file_size);
        if (size) metaParts.push(size);
        metaParts.push('可直接下载');
        meta.textContent = metaParts.join(' · ');

        var notesText = (newest.release.notes || '').trim();
        if (notesText) {
            notes.textContent = notesText;
        } else {
            notes.textContent = '';
            notes.style.display = 'none';
        }

        links.textContent = '';
        found.forEach(function (item) {
            var a = document.createElement('a');
            a.className = 'live-link';
            a.href = item.release.download_url;
            a.rel = 'noopener';

            var icon = document.createElement('i');
            icon.className = 'material-icons';
            icon.textContent = 'file_download';
            a.appendChild(icon);
            a.appendChild(document.createTextNode(item.label + ' 版下载'));
            links.appendChild(a);
        });

        box.classList.add('is-visible');
    }

    Promise.all(PLATFORMS.map(function (platform) {
        return fetchJSON('/api/version?platform=' + platform.key + '&channel=stable')
            .then(function (data) {
                if (!data || !data.download_url || !isRealUrl(data.download_url)) return null;
                return { label: platform.label, release: data };
            })
            .catch(function () { return null; });
    })).then(function (results) {
        var found = results.filter(Boolean).sort(function (a, b) {
            return String(b.release.version).localeCompare(String(a.release.version), undefined, { numeric: true });
        });
        render(found);
    }).catch(function () { /* 静默失败：保留静态下载列表 */ });
})();
