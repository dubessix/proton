const require_chunk = require("./chunk-Cek0wNdY.js");
let node_path = require("node:path");
node_path = require_chunk.__toESM(node_path, 1);
let node_fs = require("node:fs");
node_fs = require_chunk.__toESM(node_fs, 1);
let node_os = require("node:os");
let node_child_process = require("node:child_process");
let node_https = require("node:https");
node_https = require_chunk.__toESM(node_https, 1);
//#region node_modules/pathe/dist/shared/pathe.ff20891b.mjs
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	if (!input) return input;
	return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
var normalize = function(path) {
	if (path.length === 0) return ".";
	path = normalizeWindowsPath(path);
	const isUNCPath = path.match(_UNC_REGEX);
	const isPathAbsolute = isAbsolute(path);
	const trailingSeparator = path[path.length - 1] === "/";
	path = normalizeString(path, !isPathAbsolute);
	if (path.length === 0) {
		if (isPathAbsolute) return "/";
		return trailingSeparator ? "./" : ".";
	}
	if (trailingSeparator) path += "/";
	if (_DRIVE_LETTER_RE.test(path)) path += "/";
	if (isUNCPath) {
		if (!isPathAbsolute) return `//./${path}`;
		return `//${path}`;
	}
	return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
var join = function(...arguments_) {
	if (arguments_.length === 0) return ".";
	let joined;
	for (const argument of arguments_) if (argument && argument.length > 0) if (joined === void 0) joined = argument;
	else joined += `/${argument}`;
	if (joined === void 0) return ".";
	return normalize(joined.replace(/\/\/+/g, "/"));
};
function cwd() {
	if (typeof process !== "undefined" && typeof process.cwd === "function") return process.cwd().replace(/\\/g, "/");
	return "/";
}
var resolve = function(...arguments_) {
	arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
	let resolvedPath = "";
	let resolvedAbsolute = false;
	for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
		const path = index >= 0 ? arguments_[index] : cwd();
		if (!path || path.length === 0) continue;
		resolvedPath = `${path}/${resolvedPath}`;
		resolvedAbsolute = isAbsolute(path);
	}
	resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
	if (resolvedAbsolute && !isAbsolute(resolvedPath)) return `/${resolvedPath}`;
	return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) char = path[index];
		else if (char === "/") break;
		else char = "/";
		if (char === "/") {
			if (lastSlash === index - 1 || dots === 1);
			else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
					if (res.length > 2) {
						const lastSlashIndex = res.lastIndexOf("/");
						if (lastSlashIndex === -1) {
							res = "";
							lastSegmentLength = 0;
						} else {
							res = res.slice(0, lastSlashIndex);
							lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
						}
						lastSlash = index;
						dots = 0;
						continue;
					} else if (res.length > 0) {
						res = "";
						lastSegmentLength = 0;
						lastSlash = index;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? "/.." : "..";
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0) res += `/${path.slice(lastSlash + 1, index)}`;
				else res = path.slice(lastSlash + 1, index);
				lastSegmentLength = index - lastSlash - 1;
			}
			lastSlash = index;
			dots = 0;
		} else if (char === "." && dots !== -1) ++dots;
		else dots = -1;
	}
	return res;
}
var isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
};
var toNamespacedPath = function(p) {
	return normalizeWindowsPath(p);
};
var _EXTNAME_RE = /.(\.[^./]+)$/;
var extname = function(p) {
	const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
	return match && match[1] || "";
};
var relative = function(from, to) {
	const _from = resolve(from).replace(_ROOT_FOLDER_RE, "$1").split("/");
	const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
	if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) return _to.join("/");
	const _fromCopy = [..._from];
	for (const segment of _fromCopy) {
		if (_to[0] !== segment) break;
		_from.shift();
		_to.shift();
	}
	return [..._from.map(() => ".."), ..._to].join("/");
};
var dirname = function(p) {
	const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
	if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) segments[0] += "/";
	return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
var format = function(p) {
	const segments = [
		p.root,
		p.dir,
		p.base ?? p.name + p.ext
	].filter(Boolean);
	return normalizeWindowsPath(p.root ? resolve(...segments) : segments.join("/"));
};
var basename = function(p, extension) {
	const lastSegment = normalizeWindowsPath(p).split("/").pop();
	return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};
var parse = function(p) {
	const root = normalizeWindowsPath(p).split("/").shift() || "/";
	const base = basename(p);
	const extension = extname(base);
	return {
		root,
		dir: dirname(p),
		base,
		ext: extension,
		name: base.slice(0, base.length - extension.length)
	};
};
var path = {
	__proto__: null,
	basename,
	delimiter: ":",
	dirname,
	extname,
	format,
	isAbsolute,
	join,
	normalize,
	normalizeString,
	parse,
	relative,
	resolve,
	sep: "/",
	toNamespacedPath
};
//#endregion
//#region node_modules/untun/dist/chunks/index.mjs
var CLOUDFLARED_VERSION = process.env.CLOUDFLARED_VERSION || "2023.10.0";
var RELEASE_BASE = "https://github.com/cloudflare/cloudflared/releases/";
var cloudflaredBinPath = path.join((0, node_os.tmpdir)(), "node-untun", process.platform === "win32" ? `cloudflared.${CLOUDFLARED_VERSION}.exe` : `cloudflared.${CLOUDFLARED_VERSION}`);
var cloudflaredNotice = `
\u{1F525} Your installation of cloudflared software constitutes a symbol of your signature
   indicating that you accept the terms of the Cloudflare License, Terms and Privacy Policy.

\u276F License:         \`https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/license/\`
\u276F Terms:           \`https://www.cloudflare.com/terms/\`
\u276F Privacy Policy:  \`https://www.cloudflare.com/privacypolicy/\`
`;
var connRegex = /connection[ =]([\da-z-]+)/i;
var ipRegex = /ip=([\d.]+)/;
var locationRegex = /location=([A-Z]+)/;
var indexRegex = /connIndex=(\d)/;
var LINUX_URL = {
	arm64: "cloudflared-linux-arm64",
	arm: "cloudflared-linux-arm",
	x64: "cloudflared-linux-amd64",
	ia32: "cloudflared-linux-386"
};
var MACOS_URL = {
	arm64: "cloudflared-darwin-amd64.tgz",
	x64: "cloudflared-darwin-amd64.tgz"
};
var WINDOWS_URL = {
	x64: "cloudflared-windows-amd64.exe",
	ia32: "cloudflared-windows-386.exe"
};
function resolveBase(version) {
	if (version === "latest") return `${RELEASE_BASE}latest/download/`;
	return `${RELEASE_BASE}download/${version}/`;
}
function installCloudflared(to = cloudflaredBinPath, version = CLOUDFLARED_VERSION) {
	switch (process.platform) {
		case "linux": return installLinux(to, version);
		case "darwin": return installMacos(to, version);
		case "win32": return installWindows(to, version);
		default: throw new Error("Unsupported platform: " + process.platform);
	}
}
async function installLinux(to, version = CLOUDFLARED_VERSION) {
	const file = LINUX_URL[process.arch];
	if (file === void 0) throw new Error("Unsupported architecture: " + process.arch);
	await download(resolveBase(version) + file, to);
	node_fs.default.chmodSync(to, "755");
	return to;
}
async function installMacos(to, version = CLOUDFLARED_VERSION) {
	const file = MACOS_URL[process.arch];
	if (file === void 0) throw new Error("Unsupported architecture: " + process.arch);
	await download(resolveBase(version) + file, `${to}.tgz`);
	process.env.DEBUG && console.log(`Extracting to ${to}`);
	(0, node_child_process.execSync)(`tar -xzf ${node_path.default.basename(`${to}.tgz`)}`, { cwd: node_path.default.dirname(to) });
	node_fs.default.unlinkSync(`${to}.tgz`);
	node_fs.default.renameSync(`${node_path.default.dirname(to)}/cloudflared`, to);
	return to;
}
async function installWindows(to, version = CLOUDFLARED_VERSION) {
	const file = WINDOWS_URL[process.arch];
	if (file === void 0) throw new Error("Unsupported architecture: " + process.arch);
	await download(resolveBase(version) + file, to);
	return to;
}
function download(url, to, redirect = 0) {
	if (redirect === 0) process.env.DEBUG && console.log(`Downloading ${url} to ${to}`);
	else process.env.DEBUG && console.log(`Redirecting to ${url}`);
	return new Promise((resolve, reject) => {
		if (!node_fs.default.existsSync(node_path.default.dirname(to))) node_fs.default.mkdirSync(node_path.default.dirname(to), { recursive: true });
		let done = true;
		const file = node_fs.default.createWriteStream(to);
		const request = node_https.default.get(url, (res) => {
			if (res.statusCode === 302 && res.headers.location !== void 0) {
				const redirection = res.headers.location;
				done = false;
				file.close(() => resolve(download(redirection, to, redirect + 1)));
				return;
			}
			res.pipe(file);
		});
		file.on("finish", () => {
			if (done) file.close(() => resolve(to));
		});
		request.on("error", (err) => {
			node_fs.default.unlink(to, () => reject(err));
		});
		file.on("error", (err) => {
			node_fs.default.unlink(to, () => reject(err));
		});
		request.end();
	});
}
function startCloudflaredTunnel(options = {}) {
	const args = ["tunnel"];
	for (const [key, value] of Object.entries(options)) if (typeof value === "string") args.push(`${key}`, value);
	else if (typeof value === "number") args.push(`${key}`, value.toString());
	else if (value === null) args.push(`${key}`);
	if (args.length === 1) args.push("--url", "localhost:8080");
	const child = (0, node_child_process.spawn)(cloudflaredBinPath, args, { stdio: [
		"ignore",
		"pipe",
		"pipe"
	] });
	if (process.env.DEBUG) {
		child.stdout.pipe(process.stdout);
		child.stderr.pipe(process.stderr);
	}
	const urlRegex = /\|\s+(https?:\/\/\S+)/;
	let urlResolver = () => void 0;
	let urlRejector = () => void 0;
	const url = new Promise((...pair) => [urlResolver, urlRejector] = pair);
	const connectionResolvers = [];
	const connectionRejectors = [];
	const connections = [];
	for (let i = 0; i < 1; i++) connections.push(new Promise((...pair) => [connectionResolvers[i], connectionRejectors[i]] = pair));
	const parser = (data) => {
		const str = data.toString();
		const urlMatch = str.match(urlRegex);
		urlMatch && urlResolver(urlMatch[1]);
		const connMatch = str.match(connRegex);
		const ipMatch = str.match(ipRegex);
		const locationMatch = str.match(locationRegex);
		const indexMatch = str.match(indexRegex);
		if (connMatch && ipMatch && locationMatch && indexMatch) {
			const [, id] = connMatch;
			const [, ip] = ipMatch;
			const [, location] = locationMatch;
			const [, idx] = indexMatch;
			connectionResolvers[+idx]?.({
				id,
				ip,
				location
			});
		}
	};
	child.stdout.on("data", parser).on("error", urlRejector);
	child.stderr.on("data", parser).on("error", urlRejector);
	const stop = () => child.kill("SIGINT");
	return {
		url,
		connections,
		child,
		stop
	};
}
//#endregion
exports.cloudflaredBinPath = cloudflaredBinPath;
exports.cloudflaredNotice = cloudflaredNotice;
exports.installCloudflared = installCloudflared;
exports.startCloudflaredTunnel = startCloudflaredTunnel;
