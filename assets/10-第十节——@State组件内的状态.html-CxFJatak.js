import{_ as n,c as s,o as a,a as p}from"./app-BgCKDSPR.js";const e={},t=p(`<h2 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念"><span>一、概念</span></a></h2><p>@State装饰的变量，或称为状态变量，一旦变量拥有了状态属性，就和自定义组件的渲染绑定起来。当状态改变时，UI会发生对应的渲染改变 @State装饰的变量，与声明式范式中的其他被装饰变量一样，是私有的，只能从组件内部访问，在声明时必须指定其类型和本地初始化。初始化也可选择使用命名参数机制从父组件完成初始化。</p><h2 id="二、state初始化" tabindex="-1"><a class="header-anchor" href="#二、state初始化"><span>二、State初始化</span></a></h2><h3 id="默认初始化" tabindex="-1"><a class="header-anchor" href="#默认初始化"><span>默认初始化</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnState <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 张三就是 name的初始值</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传入的参数作为初始值" tabindex="-1"><a class="header-anchor" href="#传入的参数作为初始值"><span>传入的参数作为初始值</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnState <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 当前name的值为父组件传过来的值 李四</span>
<span class="line">   </span>
<span class="line">   */</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;更新子组件的name&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token doc-comment comment">/**</span>
<span class="line">           * * 注意：name改变后 父组件的值不会发生变化</span>
<span class="line">           * 也就是 该值并不具备双向绑定</span>
<span class="line">           */</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;王五&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnStateParent <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 如果传递的值在子组件已经被@State装饰 那么不能再使用@State装饰的值覆盖</span></span>
<span class="line">  <span class="token comment">// @State parentName: string = &#39;李四&#39;</span></span>
<span class="line"></span>
<span class="line">  parentName <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">LearnState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parentName <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;查看父组件的name&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 父组件的值还是李四</span></span>
<span class="line">          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentName<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、基本使用" tabindex="-1"><a class="header-anchor" href="#三、基本使用"><span>三、基本使用</span></a></h2><h3 id="装饰基本数据类型" tabindex="-1"><a class="header-anchor" href="#装饰基本数据类型"><span>装饰基本数据类型</span></a></h3><blockquote><p>实现点击按钮+1功能</p></blockquote><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnState <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 使用@State装饰器 修饰num</span>
<span class="line">   * 让num 属性具备响应式</span>
<span class="line">   * 也就是就该后视图会发生变化</span>
<span class="line">   *</span>
<span class="line">   * 注意：@State装饰的属性必须定义类型</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/***</span>
<span class="line">     * 直接对数据进行修改</span>
<span class="line">     * 视图就会相应发生发辫</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰引用数据类型" tabindex="-1"><a class="header-anchor" href="#装饰引用数据类型"><span>装饰引用数据类型</span></a></h3><blockquote><p>@State只会对引用数据类型的第一层赋予响应式数据的能力，嵌套的属性不具备响应式</p></blockquote><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Info</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  child<span class="token operator">?</span><span class="token operator">:</span> Info</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnState <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> info<span class="token operator">:</span> Info <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    child<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      name<span class="token operator">:</span> <span class="token string">&quot;张三的儿子&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token function">updateName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 有效</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span></span>
<span class="line">    <span class="token comment">// 无效</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">.</span>child<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;李四的儿子&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;修改名字&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">.</span>child<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[t];function i(c,o){return a(),s("div",null,l)}const r=n(e,[["render",i],["__file","10-第十节——@State组件内的状态.html.vue"]]),d=JSON.parse('{"path":"/ArkTS/10-%E7%AC%AC%E5%8D%81%E8%8A%82%E2%80%94%E2%80%94@State%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E7%8A%B6%E6%80%81.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、概念","slug":"一、概念","link":"#一、概念","children":[]},{"level":2,"title":"二、State初始化","slug":"二、state初始化","link":"#二、state初始化","children":[{"level":3,"title":"默认初始化","slug":"默认初始化","link":"#默认初始化","children":[]},{"level":3,"title":"传入的参数作为初始值","slug":"传入的参数作为初始值","link":"#传入的参数作为初始值","children":[]}]},{"level":2,"title":"三、基本使用","slug":"三、基本使用","link":"#三、基本使用","children":[{"level":3,"title":"装饰基本数据类型","slug":"装饰基本数据类型","link":"#装饰基本数据类型","children":[]},{"level":3,"title":"装饰引用数据类型","slug":"装饰引用数据类型","link":"#装饰引用数据类型","children":[]}]}],"git":{"updatedTime":1719759971000,"contributors":[{"name":"etsuyou","email":"etsuyou.shuu@gmail.com","commits":2}]},"filePathRelative":"ArkTS/10-第十节——@State组件内的状态.md"}');export{r as comp,d as data};
