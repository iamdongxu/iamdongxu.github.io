import{_ as s,c as a,o as i,V as n}from"./chunks/framework.__fMkWnK.js";const k=JSON.parse('{"title":"安装 MongoDB 社区版","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mongodb/mongodb.md","filePath":"guide/mongodb/mongodb.md","lastUpdated":1733062151000}'),e={name:"guide/mongodb/mongodb.md"},l=n(`<h1 id="安装-mongodb-社区版" tabindex="-1">安装 MongoDB 社区版 <a class="header-anchor" href="#安装-mongodb-社区版" aria-label="Permalink to &quot;安装 MongoDB 社区版&quot;">​</a></h1><p>MongoDB 社区版是 MongoDB 的开源版本，适用于开发者和小型团队。它提供了大多数核心功能，适合开发、测试以及小型生产环境。通过简单的安装步骤，你可以在本地环境中快速部署 MongoDB，并利用其强大的功能来构建和管理应用数据。</p><h2 id="_1-官网下载压缩包手动安装" tabindex="-1">1 官网下载压缩包手动安装 <a class="header-anchor" href="#_1-官网下载压缩包手动安装" aria-label="Permalink to &quot;1 官网下载压缩包手动安装&quot;">​</a></h2><p><strong>（1）下载和解压</strong></p><ul><li><p>从 <a href="https://www.mongodb.com/try/download/community-edition" target="_blank" rel="noreferrer">MongoDB官方下载页面</a> 下载适合 macOS 的 <code>.tgz</code> 文件</p></li><li><p>打开终端，导航到下载目录并解压缩文件：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Downloads</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongodb-macos-arm64-8.0.3.tgz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><p><strong>（2）移动解压后的文件到目标目录</strong></p><ul><li>创建一个目录来存放 <code>mongodb</code> 二进制文件，例如 <code>/usr/local/mongodb</code><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir -p /usr/local/mongodb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>将解压后的文件移动到目标目录：<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo mv mongodb-macos-aarch64-8.0.3/* /usr/local/mongodb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><p><strong>（3）配置环境变量</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在配置文件中添加以下行，将 MongoDB 的路径添加到 PATH 环境变量中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${PATH}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/usr/local/mongodb/bin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 保存配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>（4）验证安装</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>（5）创建数据和日志目录</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir -p /usr/local/mongodb/{data,log}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置读写权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod -R </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/mongodb/{data,log}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>（6）启动 MongoDB</strong></p><ul><li><p>使用 <code>mongod</code> 命令启动 MongoDB 服务器：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dbpath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/mongodb/data</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>如果需要在后台运行，可以使用 <code>--fork</code> 选项，并指定日志文件：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dbpath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/mongodb/data --logpath /usr/local/mongodb/log/mongo.log --logappend --fork</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><details class="details custom-block"><summary>参数解释</summary><ul><li><strong><code>--dbpath /usr/local/mongodb/data</code></strong><ul><li>指定 MongoDB 数据库文件的存储路径。确保此目录存在且可写。</li></ul></li><li><strong><code>--logpath /usr/local/mongodb/log/mongo.log</code></strong><ul><li>指定日志文件的路径。确保日志目录存在且可写。</li></ul></li><li><strong><code>--logappend</code></strong><ul><li>以追加模式写入日志文件，以防止覆盖现有日志。</li></ul></li><li><strong><code>--fork</code></strong><ul><li>使 MongoDB 进程在后台运行。</li></ul></li><li><strong><code>--port</code></strong><ul><li>指定端口号</li></ul></li></ul></details><p><strong>（7）验证启动</strong></p><p><a href="http://127.0.0.1:27017/" target="_blank" rel="noreferrer">http://127.0.0.1:27017/</a></p><p><strong>（8）关闭 MongoDB</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> killall mongod</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-homebrew安装" tabindex="-1">2 Homebrew安装 <a class="header-anchor" href="#_2-homebrew安装" aria-label="Permalink to &quot;2 Homebrew安装&quot;">​</a></h2><p><strong>（1）安装 MongoDB</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 MongoDB 的 Tap 添加到 Homebrew</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap mongodb/brew</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 MongoDB社区版 8.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install mongodb-community@8.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>（2）验证安装</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>（3）启动 MongoDB 服务</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services start mongodb/brew/mongodb-community</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>（4）验证启动</strong></p><p><a href="http://127.0.0.1:27017/" target="_blank" rel="noreferrer">http://127.0.0.1:27017/</a></p><p><strong>（5）停止 MongoDB 服务</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services stop mongodb/brew/mongodb-community</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,31),p=[l];function t(o,r,d,h,c,g){return i(),a("div",null,p)}const u=s(e,[["render",t]]);export{k as __pageData,u as default};