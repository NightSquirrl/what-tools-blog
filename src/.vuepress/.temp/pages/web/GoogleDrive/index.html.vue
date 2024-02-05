<template><div><h1 id="google-drive" tabindex="-1"><a class="header-anchor" href="#google-drive"><span>Google Drive</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E5%BC%80%E5%A7%8B%E7%9A%84%E4%BA%94%E4%B8%AA%E6%AD%A5%E9%AA%A4">开始的五个步骤</a></li>
</ul>
<p><a href="#%E9%80%9A%E8%BF%87api%E8%B0%83%E7%94%A8">通过API调用</a></p>
<p><a href="#%E5%88%9D%E5%A7%8B%E5%8C%96">初始化</a><br>
<a href="#%E5%88%A0%E9%99%A4%E7%BD%91%E7%9B%98%E6%96%87%E4%BB%B6">删除网盘文件</a><br>
<a href="#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">文件上传</a><br>
<a href="#%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD">文件下载</a></p>
<p><a href="#%E4%BD%BF%E7%94%A8%E5%BA%93%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%95%8C%E9%9D%A2%E6%93%8D%E4%BD%9C">使用库图形化界面操作</a></p>
<p><a href="#react-google-drive-picker">React-google-drive-picker</a></p>
<p><a href="#%E4%BE%9D%E8%B5%96%E5%AE%89%E8%A3%85">依赖安装</a><br>
<a href="#%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B">配置案例</a><br>
<a href="#%E5%85%B6%E4%BB%96%E5%8F%82%E6%95%B0">其他参数</a><br>
<a href="#%E5%90%8E%E7%BB%AD%E5%B7%A5%E4%BD%9C">后续工作</a></p>
<h2 id="开始的五个步骤" tabindex="-1"><a class="header-anchor" href="#开始的五个步骤"><span>开始的五个步骤</span></a></h2>
<ol>
<li>
<p>为您的 Google Workspace 应用、扩展程序或集成<a href="https://developers.google.com/workspace/guides/create-project" title="创建一个 Google Cloud 项目。" target="_blank" rel="noopener noreferrer">创建一个 Google Cloud 项目。<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>打开<a href="https://console.cloud.google.com/" title="谷歌云控制台" target="_blank" rel="noopener noreferrer">谷歌云控制台<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>点击左上角的菜单menu &gt; IAM 和管理员 &gt; 创建项目 。</p>
</li>
<li>
<p>在<strong>项目名称</strong>字段中，输入项目的描述性名称。</p>
<p>可选：要编辑<strong>项目 ID ，请单击</strong>编辑 。项目ID在项目创建后无法更改，因此请选择在项目生命周期内满足您需求的ID。</p>
</li>
<li>
<p>在<strong>位置</strong>字段中，单击<strong>浏览</strong>以显示项目的潜在位置。然后，单击选择 。</p>
</li>
</ol>
</li>
<li>
<p><a href="https://developers.google.com/workspace/guides/enable-apis" title="启用要" target="_blank" rel="noopener noreferrer">启用要<ExternalLinkIcon/></a> 在 Google Cloud 项目中使用的 API。</p>
<ol>
<li>
<p>打开<a href="https://console.cloud.google.com/" title="谷歌云控制台" target="_blank" rel="noopener noreferrer">谷歌云控制台<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>点击左上角的菜单menu &gt; API 和服务 &gt; 库 。</p>
</li>
<li>
<p>在搜索字段中，输入要启用的 API 的名称，然后按Enter 。「google drive」</p>
</li>
<li>
<p>在搜索结果列表中，单击要启用的 API。</p>
</li>
<li>
<p>单击启用 。</p>
</li>
<li>
<p>要启用更多 API，请重复步骤 2-5。</p>
</li>
</ol>
</li>
<li>
<p><a href="https://developers.google.com/workspace/guides/auth-overview" title="了解" target="_blank" rel="noopener noreferrer">了解<ExternalLinkIcon/></a> 在为 Google Workspace 进行开发时身份验证和授权的工作原理。</p>
</li>
<li>
<p><a href="https://developers.google.com/workspace/guides/configure-oauth-consent" title="配置 OAuth 同意" target="_blank" rel="noopener noreferrer"> <em>配置 OAuth 同意</em> <ExternalLinkIcon/></a> <em>以确保用户可以了解和批准您的应用对其数据的访问权限。</em> </p>
<ol>
<li>
<p>打开 <a href="https://console.cloud.google.com/" title="谷歌云控制台" target="_blank" rel="noopener noreferrer">谷歌云控制台<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>点击左上角的菜单menu &gt; API 和服务 &gt; OAuth 同意屏幕 。</p>
</li>
<li>
<p>选择外部，点击<strong>创建</strong></p>
</li>
<li>
<p>填写应用注册表单，然后点击保存并继续 <em>。</em></p>
<p>应用说明</p>
<p>应用名称：即呈现在同意屏幕的名称</p>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/picX@master/image.4sqidld0aie0.webp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<p>用户支持的电子邮件：用户与你联系的电子邮件</p>
<p>徽标：显示在同意屏幕的logo</p>
<p>应用网域 -可选参数</p>
<p>应用首页→要使用Api服务的首页</p>
<p>应用隐私权政策链接</p>
<p>应用服务条款链接</p>
<p>已授权的网域</p>
<p>添加已获授权的网域后，您可以使用其任意子网域或页面。</p>
<p>开发者联系信息-必填选项</p>
</li>
<li>
<p>如果您要创建在 Google Workspace 组织之外使用的应用，请点击<strong>添加或删除范围 。添加并验证您的应用所需的授权范围，然后单击</strong>Save and Continue 。</p>
<p>注意：某些范围需要 Google 进行额外审核。对于仅供您的 Google Workspace 组织内部使用的应用，范围不会列在同意屏幕上，并且使用受限或敏感范围不需要 Google 进一步审核。有关更多详细信息，请参阅 下面<a href="https://developers.google.com/workspace/guides/configure-oauth-consent#choose-scopes" title="的如何为您的应用选择范围" target="_blank" rel="noopener noreferrer">的如何为您的应用选择范围<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>在“测试用户”下，点击<strong>添加用户 。输入您的电子邮件地址和任何其他授权测试用户，然后单击</strong>保存并继续 。</p>
<blockquote>
<p>当发布状态设置为“测试”时，仅测试用户可以访问应用。在应用验证之前，允许的用户数上限为 100，并且会计入应用的整个生命周期。</p>
</blockquote>
</li>
<li>
<p>查看您的应用注册摘要。单击<strong>编辑</strong>进行更改，或单击返回仪表板 。</p>
</li>
</ol>
</li>
<li>
<p><a href="https://developers.google.com/workspace/guides/create-credentials" title="创建访问凭据" target="_blank" rel="noopener noreferrer">创建访问凭据<ExternalLinkIcon/></a>以验证您应用的最终用户或服务帐户。</p>
<p>所需的凭据取决于应用程序的数据类型、平台和访问方法。以下是可用的凭据类型：</p>
</li>
</ol>
<p><a href="https://developers.google.com/workspace/guides/create-credentials#api-key" title="API 密钥" target="_blank" rel="noopener noreferrer"> <em>API 密钥</em> <ExternalLinkIcon/></a>– 使用此凭据在您的应用程序中匿名访问公开可用的数据。</p>
<p><a href="https://developers.google.com/workspace/guides/create-credentials#oauth-client-id" title="OAuth 客户端 ID" target="_blank" rel="noopener noreferrer"> <em>OAuth 客户端 ID</em> <ExternalLinkIcon/></a> – 使用此凭据作为最终用户进行身份验证并访问他们的数据。要求您的应用请求并获得用户的同意。</p>
<pre><code>创建 API 密钥：* *

1.  打开[谷歌云控制台](https://console.cloud.google.com/ &quot;谷歌云控制台&quot;)。

2.  点击左上角的菜单menu &gt;** API 和服务** &gt;** 凭证* *。

3.  单击**创建凭据** &gt;** API 密钥* *。

4.  将显示您的新 API 密钥。*        
</code></pre>
<p>点击复制content_copy 复制您的 API 密钥以在您的应用程序代码中使用。API 密钥也可以在项目凭证的“API 密钥”部分中找到。</p>
<pre><code>    *   单击**限制密钥**以更新高级设置并限制 API 密钥的使用。可以给密钥授权，比如只允许google drive api使用该秘钥。**

OAuth 客户端 ID 凭据**

1.  打开[谷歌云控制台](https://console.cloud.google.com/ &quot;谷歌云控制台&quot;)。

2.  点击左上角的菜单menu &gt;** API 和服务** &gt;** 凭证* *。

3.  单击**创建凭据** &gt;** OAuth 客户端 ID* *。

4.  单击**应用程序类型** &gt;** Web 应用程序* *。

5.  在“名称”字段中，输入凭证的名称。此名称仅显示在 Google Cloud 控制台中。

6.  添加与您的应用相关的授权 URI：***        
</code></pre>
<p>客户端应用程序 (JavaScript) – 在 Authorized JavaScript origins 下，单击Add URI 。然后，输入用于浏览器请求的 URI。这标识了您的应用程序可以将 API 请求发送到 OAuth 2.0 服务器的域。</p>
<pre><code>    &gt; 必须添加，表明那些网站可以使用你的OAuth客户端ID，如果不填写对应的URL，则就会显示无权限。***        
</code></pre>
<p>服务器端应用程序（Java、Python、.NET 等） – 在“授权的重定向 URI”下，单击添加 URI 。然后，输入 OAuth 2.0 服务器可以向其发送响应的端点 URI。</p>
<pre><code>    &gt; 当用户授权完毕之后将会跳转至哪个页面。

7.  单击**创建* *。出现 OAuth 客户端创建屏幕，显示您的新客户端 ID 和客户端密码。

8.  记下客户端 ID。客户端机密不用于 Web 应用程序。

9.  单击**确定* *。新创建的凭据显示在“OAuth 2.0 客户端 ID”下。
</code></pre>
<h2 id="通过api调用" tabindex="-1"><a class="header-anchor" href="#通过api调用"><span>通过API调用</span></a></h2>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
     <span class="token comment">// TODO(developer): Set to client ID and API key from the Developer Console</span>
     <span class="token keyword">const</span> <span class="token constant">CLIENT_ID</span> <span class="token operator">=</span> '<span class="token number">715665857361</span><span class="token operator">-</span>pfugekver5uc7dl3pu10v676ktis7jro<span class="token punctuation">.</span>apps<span class="token punctuation">.</span>
     googleusercontent<span class="token punctuation">.</span>com'<span class="token punctuation">;</span>
     <span class="token keyword">const</span> <span class="token constant">API_KEY</span> <span class="token operator">=</span> <span class="token string">'AIzaSyAkt5M4CAeME_Bq4VWvQW8RStUYN2Q9U2U'</span><span class="token punctuation">;</span>
     <span class="token comment">// Discovery doc URL for APIs used by the quickstart</span>
     <span class="token keyword">const</span> <span class="token constant">DISCOVERY_DOC</span> <span class="token operator">=</span> <span class="token string">'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'</span><span class="token punctuation">;</span>
     <span class="token comment">// Authorization scopes required by the API; multiple scopes can be</span>
     <span class="token comment">// included, separated by spaces.</span>
     <span class="token keyword">const</span> <span class="token constant">SCOPES</span> <span class="token operator">=</span> 'https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>googleapis<span class="token punctuation">.</span>com<span class="token operator">/</span>auth<span class="token operator">/</span>drive 
     <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>googleapis<span class="token punctuation">.</span>com<span class="token operator">/</span>auth<span class="token operator">/</span>drive<span class="token punctuation">.</span>appdata 
     <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>googleapis<span class="token punctuation">.</span>com<span class="token operator">/</span>auth<span class="token operator">/</span>drive<span class="token punctuation">.</span>file'<span class="token punctuation">;</span>

      <span class="token keyword">let</span> tokenClient<span class="token punctuation">;</span>
      <span class="token keyword">let</span> gapiInited <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> gisInited <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token comment">//控制登录和退出按钮</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'authorize_button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">'hidden'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'signout_button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">'hidden'</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/***         
 当api.js加载完之后调用*         
/
        function gapiLoaded() <span class="token punctuation">{</span>
            gapi.load('client', intializeGapiClient);
        <span class="token punctuation">}</span>

        /***         
 初始化api*         
/
        async function intializeGapiClient() <span class="token punctuation">{</span>
            await gapi.client.init(<span class="token punctuation">{</span>
                apiKey: API_KEY,
                discoveryDocs: [DISCOVERY_DOC],
            <span class="token punctuation">}</span>);
            gapiInited = true;
            maybeEnableButtons();
        <span class="token punctuation">}</span>

        /***         
 身份认证之后调用*         
/
        function gisLoaded() <span class="token punctuation">{</span>
            tokenClient = google.accounts.oauth2.initTokenClient(<span class="token punctuation">{</span>
                client_id: CLIENT_ID,
                scope: SCOPES,
                callback: '', // defined later
            <span class="token punctuation">}</span>);
            gisInited = true;
            maybeEnableButtons();
        <span class="token punctuation">}</span>

        /***         
 当认证完成之后显示按钮*         
 根据密钥和客户端id控制按钮*         
/
        function maybeEnableButtons() <span class="token punctuation">{</span>
            if (gapiInited &amp;&amp; gisInited) <span class="token punctuation">{</span>
                document.getElementById('authorize_button').style.visibility = 'visible';
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        /**
         *  当用户登陆之后显示出退出按钮*         
/
        function handleAuthClick() <span class="token punctuation">{</span>
            tokenClient.callback = async (resp) => <span class="token punctuation">{</span>
                console.log(resp);
                if (resp.error !== undefined) <span class="token punctuation">{</span>
                    throw (resp);
                <span class="token punctuation">}</span>
                document.getElementById('signout_button').style.visibility = 'visible';
                document.getElementById('authorize_button').innerText = 'Refresh';
                await listFiles();
            <span class="token punctuation">}</span>;

            if (gapi.client.getToken() === null) <span class="token punctuation">{</span>
                // Prompt the user to select a Google Account and ask for consent to share their data
                // when establishing a new session.
                tokenClient.requestAccessToken(<span class="token punctuation">{</span> prompt: 'consent' <span class="token punctuation">}</span>);
            <span class="token punctuation">}</span> else <span class="token punctuation">{</span>
                // Skip display of account chooser and consent dialog for an existing session.
                tokenClient.requestAccessToken(<span class="token punctuation">{</span> prompt: '' <span class="token punctuation">}</span>);
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        /***         
  用户退出之后*         
/
        function handleSignoutClick() <span class="token punctuation">{</span>
            const token = gapi.client.getToken();
            if (token !== null) <span class="token punctuation">{</span>
                google.accounts.oauth2.revoke(token.access_token);
                gapi.client.setToken('');
                document.getElementById('content').innerText = '';
                document.getElementById('authorize_button').innerText = 'Authorize';
                document.getElementById('signout_button').style.visibility = 'hidden';
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        /**
         * 将drive中前十个文件渲染到页面*         
/
        async function listFiles() <span class="token punctuation">{</span>
            let response;
            try <span class="token punctuation">{</span>
              response = await gapi.client.drive.files.list(<span class="token punctuation">{</span>
                'pageSize': 10,
                'fields': 'files(id, name)',
              <span class="token punctuation">}</span>);
            <span class="token punctuation">}</span> catch (err) <span class="token punctuation">{</span>
              document.getElementById('content').innerText = err.message;
              return;
            <span class="token punctuation">}</span>
            const files = response.result.files;
            if (!files || files.length == 0) <span class="token punctuation">{</span>
              document.getElementById('content').innerText = 'No files found.';
              return;
            <span class="token punctuation">}</span>
            // Flatten to string to display
            const output = files.reduce(
                (str, file) => `$<span class="token punctuation">{</span>str<span class="token punctuation">}</span>$<span class="token punctuation">{</span>file.name<span class="token punctuation">}</span> ($<span class="token punctuation">{</span>file.id<span class="token punctuation">}</span>\n`,
                'Files:\n');
            document.getElementById('content').innerText = output;
          <span class="token punctuation">}</span>
     &lt;/script>
&lt;script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()">
&lt;/script>
&lt;script async defer src="https://accounts.google.com/gsi/client" 
onload="gisLoaded()">&lt;/script>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除网盘文件" tabindex="-1"><a class="header-anchor" href="#删除网盘文件"><span>删除网盘文件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>      <span class="token comment">// 删除网盘的文件</span>
        <span class="token keyword">function</span> <span class="token function">deleteFile</span><span class="token punctuation">(</span><span class="token parameter">fileId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gapi<span class="token punctuation">.</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gapi<span class="token punctuation">.</span>client<span class="token punctuation">.</span>drive<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> request <span class="token operator">=</span> gapi<span class="token punctuation">.</span>client<span class="token punctuation">.</span>drive<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token string-property property">'fileId'</span><span class="token operator">:</span> <span class="token string">"1_6U4FxitDGbPmbb3cPTx7-Xb6vjjM8qI"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
            request<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Title: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Description: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'MIME type: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>mimeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传"><span>文件上传</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> files <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
            <span class="token keyword">const</span> boundary <span class="token operator">=</span> <span class="token string">'-------314159265358979323846'</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> delimiter <span class="token operator">=</span> <span class="token string">"\r\n--"</span> <span class="token operator">+</span> boundary <span class="token operator">+</span> <span class="token string">"\r\n"</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> close_delim <span class="token operator">=</span> <span class="token string">"\r\n--"</span> <span class="token operator">+</span> boundary <span class="token operator">+</span> <span class="token string">"--"</span><span class="token punctuation">;</span>

            <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            reader<span class="token punctuation">.</span><span class="token function">readAsBinaryString</span><span class="token punctuation">(</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>
                <span class="token keyword">var</span> contentType <span class="token operator">=</span> files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">'application/octet-stream'</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">'title'</span><span class="token operator">:</span> files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                    <span class="token string-property property">'mimeType'</span><span class="token operator">:</span> contentType
                <span class="token punctuation">}</span><span class="token punctuation">;</span>

                <span class="token keyword">var</span> base64Data <span class="token operator">=</span> <span class="token function">btoa</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> multipartRequestBody <span class="token operator">=</span>
                    delimiter <span class="token operator">+</span>
                    <span class="token string">'Content-Type: application/json\r\n\r\n'</span> <span class="token operator">+</span>
                    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>metadata<span class="token punctuation">)</span> <span class="token operator">+</span>
                    delimiter <span class="token operator">+</span>
                    <span class="token string">'Content-Type: '</span> <span class="token operator">+</span> contentType <span class="token operator">+</span> <span class="token string">'\r\n'</span> <span class="token operator">+</span>
                    <span class="token string">'Content-Transfer-Encoding: base64\r\n'</span> <span class="token operator">+</span>
                    <span class="token string">'\r\n'</span> <span class="token operator">+</span>
                    base64Data <span class="token operator">+</span>
                    close_delim<span class="token punctuation">;</span>

                <span class="token keyword">var</span> request <span class="token operator">=</span> gapi<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token string-property property">'path'</span><span class="token operator">:</span> <span class="token string">'/upload/drive/v2/files'</span><span class="token punctuation">,</span>
                    <span class="token string-property property">'method'</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
                    <span class="token string-property property">'params'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'uploadType'</span><span class="token operator">:</span> <span class="token string">'multipart'</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">'headers'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'multipart/mixed; boundary="'</span> <span class="token operator">+</span> boundary <span class="token operator">+</span> <span class="token string">'"'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">'body'</span><span class="token operator">:</span> multipartRequestBody<span class="token punctuation">,</span>

                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                request<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Title: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Description: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'MIME type: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>mimeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载"><span>文件下载</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>       <span class="token comment">// 获取下载路径</span>
        <span class="token keyword">function</span> <span class="token function">printFile</span><span class="token punctuation">(</span><span class="token parameter">fileId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> request <span class="token operator">=</span> gapi<span class="token punctuation">.</span>client<span class="token punctuation">.</span>drive<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token string-property property">'fileId'</span><span class="token operator">:</span> fileId<span class="token punctuation">,</span>
                <span class="token string-property property">'fields'</span><span class="token operator">:</span> <span class="token string">"webContentLink,name,id"</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
            request<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Title: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Description: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'MIME type: '</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span>mimeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">function</span> <span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>"https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>drive<span class="token punctuation">.</span>google<span class="token punctuation">.</span>com<span class="token operator">/</span>uc<span class="token operator">?</span>id<span class="token operator">=</span>1WBU
            fd0RXNqDb8pjqCCsMtc3F_Ig0D9Zc<span class="token operator">&amp;</span><span class="token keyword">export</span><span class="token operator">=</span>download"<span class="token punctuation">)</span>


        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用库图形化界面操作" tabindex="-1"><a class="header-anchor" href="#使用库图形化界面操作"><span>使用库图形化界面操作</span></a></h2>
<h3 id="react-google-drive-picker" tabindex="-1"><a class="header-anchor" href="#react-google-drive-picker"><span>React-google-drive-picker</span></a></h3>
<blockquote>
<p>通过库的使用，可以将文件形成图形界面，其次可以进行文件的选择，选中的文件会在后台打印出对应的地址。也可以进行文件的上传但是文件只能上传本地文件，无法上传内存中的文件。</p>
</blockquote>
<h4 id="依赖安装" tabindex="-1"><a class="header-anchor" href="#依赖安装"><span>依赖安装</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm i react<span class="token operator">-</span>google<span class="token operator">-</span>drive<span class="token operator">-</span>picker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置案例" tabindex="-1"><a class="header-anchor" href="#配置案例"><span>配置案例</span></a></h4>
<blockquote>
<p>同样需要开始五个步骤的谷歌控制台的配置生成客户端ID以及API密钥</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//页面引入库文件</span>
<span class="token keyword">import</span> useDrivePicker <span class="token keyword">from</span> <span class="token string">"react-google-drive-picker/dist"</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>openPicker<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDrivePicker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleOpenPicker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">openPicker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> <span class="token string">"your id"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">developerKey</span><span class="token operator">:</span> <span class="token string">"you api key"</span><span class="token punctuation">,</span>
      <span class="token comment">//可进行预览的文件类型，DOCS为Google Drive 全文件格式</span>
      <span class="token literal-property property">viewId</span><span class="token operator">:</span> <span class="token string">"DOCS"</span><span class="token punctuation">,</span>
      <span class="token comment">//是否开始上传功能</span>
      <span class="token literal-property property">showUploadView</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//是否可以上传文件夹</span>
      <span class="token literal-property property">showUploadFolders</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//是否可以进行分享</span>
      <span class="token literal-property property">supportDrives</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//是否可以多选</span>
      <span class="token literal-property property">multiselect</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//选择触发的回调函数，当选择一个文件之后就会将选中的文件的信息打印出来</span>
      <span class="token function-variable function">callbackFunction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>action <span class="token operator">===</span> <span class="token string">'cancel'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'User clicked cancel/close button'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token comment">//案例触发按钮，</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleOpenPicker<span class="token punctuation">}</span><span class="token operator">></span>Open Picker<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>功能描述
点击按钮之后，会触发账号登录机制，期间会询问权限是否同意，登录完成即可打开一个可视化的google drive文件的选择界面，当双击或者选中文件之后点击左下角的select按钮之后就会执行callbackFunction回调函数，将文件的信息在后台打印出来。还包含一个本地文件的上传功能，可以选择文件存放的文件位置，但是无法新建文件夹。</p>
</blockquote>
<h4 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数"><span>其他参数</span></a></h4>
<table>
<thead>
<tr>
<th>params</th>
<th>value</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>token</td>
<td>string</td>
<td>将用户的access_token传入会跳过认证阶段</td>
</tr>
<tr>
<td>setIncludeFolders</td>
<td>boolean</td>
<td>是否显示文件夹</td>
</tr>
<tr>
<td>setSelectFolderEnabled</td>
<td>booleam</td>
<td>是否允许选择文件夹</td>
</tr>
<tr>
<td>customScopes</td>
<td>string</td>
<td>授权的范围</td>
</tr>
</tbody>
</table>
<h4 id="后续工作" tabindex="-1"><a class="header-anchor" href="#后续工作"><span>后续工作</span></a></h4>
<p>若要实现内存中文件的上传需要修改引用库的源代码。</p>
</div></template>


