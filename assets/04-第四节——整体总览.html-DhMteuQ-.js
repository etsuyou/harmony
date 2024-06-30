import{_ as n,c as s,o as a,a as p}from"./app-Cuj6z6E9.js";const e={},t=p(`<blockquote><p>ArkTS通过装饰器@Component和@Entry装饰struct关键字声明的数据结构，构成一个自定义组件。自定义组件中提供了一个build函数，开发者需在该函数内以链式调用的方式进行基本的UI描述，UI描述的方法请参考UI描述规范</p></blockquote><h2 id="一、页面基本构成" tabindex="-1"><a class="header-anchor" href="#一、页面基本构成"><span>一、页面基本构成</span></a></h2><h3 id="struct" tabindex="-1"><a class="header-anchor" href="#struct"><span>struct</span></a></h3><p>自定义组件可以基于struct实现，不能有继承关系，对于struct的实例化，可以省略new。struct内部语法和ts的class几乎一致</p><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器"><span>装饰器</span></a></h3><p>装饰器给被装饰的对象赋予某一种能力，其不仅可以装饰类或结构体，还可以装饰类的属性。多个装饰器可以叠加到目标元素上，定义在同一行中或者分开多行，推荐分开多行定义</p><h4 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>@Component</span></a></h4><p>装饰struct，结构体在装饰后具有基于组件的能力，需要实现build方法来创建UI</p><h4 id="entry" tabindex="-1"><a class="header-anchor" href="#entry"><span>@Entry</span></a></h4><p>装饰struct，组件被装饰后作为页面的入口，页面加载时将被渲染显示</p><h5 id="复制learnarkts组件-但是不要复制-entry装饰器-并修改组件名为learnarkts2" tabindex="-1"><a class="header-anchor" href="#复制learnarkts组件-但是不要复制-entry装饰器-并修改组件名为learnarkts2"><span>复制LearnArkTs组件，但是不要复制@Entry装饰器，并修改组件名为LearnArkTs2</span></a></h5><h5 id="预览页面" tabindex="-1"><a class="header-anchor" href="#预览页面"><span>预览页面</span></a></h5><p>@Entry装饰器装饰那个struct页面会显示那个struct</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 使用两个装饰器 装饰MyComponent 赋予这两个装饰器的能力</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct MyComponent <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="build函数" tabindex="-1"><a class="header-anchor" href="#build函数"><span>build函数</span></a></h3><p>自定义组件必须定义build函数，并且禁止自定义构造函数。只能用于定义组件的声明式UI描述，不能编写其他如for、if等方法</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;你好鸿蒙&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 以下都是不被允许的</span></span>
<span class="line">    <span class="token comment">// console.log(this.message)</span></span>
<span class="line">    <span class="token comment">//</span></span>
<span class="line">    <span class="token comment">// for (let i = 0; i &lt; 10; i++) {</span></span>
<span class="line">    <span class="token comment">//</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token comment">//</span></span>
<span class="line">    <span class="token comment">// if (true) {</span></span>
<span class="line">    <span class="token comment">//</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">fontWeight</span><span class="token punctuation">(</span>FontWeight<span class="token punctuation">.</span>Bold<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、声明式ui" tabindex="-1"><a class="header-anchor" href="#二、声明式ui"><span>二、声明式UI</span></a></h2><blockquote><p>ArkTS以声明方式组合和扩展组件来描述应用程序的UI，同时还提供了基本的属性、事件和子组件配置方法，帮助开发者实现应用交互逻辑。 注意：本阶段以学习ArkTs基本语法为主，后续会有专门的课程讲解ArkUI，后续课程以线性布局为例 主要使用Row和Column</p></blockquote><h3 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构"><span>基本结构</span></a></h3><p>如果组件的接口定义没有包含必选构造参数，则组件后面的“()”不需要配置任何内容。例如，Divider下划线组件不包含构造参数</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 只能有一个根节点</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;item 1&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Divider</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;item 2&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的ui组件" tabindex="-1"><a class="header-anchor" href="#常用的ui组件"><span>常用的UI组件</span></a></h3><blockquote><p>后续会有课程详细讲相关组件目前先了解几个组件配合ArkTs的学习</p></blockquote><h4 id="text-文本显示" tabindex="-1"><a class="header-anchor" href="#text-文本显示"><span>Text 文本显示</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// string类型的参数</span></span>
<span class="line"><span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 无参数形式</span></span>
<span class="line"><span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="checkbox-多选框" tabindex="-1"><a class="header-anchor" href="#checkbox-多选框"><span>Checkbox 多选框</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 使用链式调用</span>
<span class="line">       * select 函数接收一个boolean值</span>
<span class="line">       * </span>
<span class="line">       * */</span></span>
<span class="line">      <span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮"><span>Button 按钮</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;按钮名&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="textinput-文本输入" tabindex="-1"><a class="header-anchor" href="#textinput-文本输入"><span>TextInput 文本输入</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 接收一个对象</span>
<span class="line">       * text 为当前输入框的数据</span>
<span class="line">       */</span></span>
<span class="line">     <span class="token function">TextInput</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">       text<span class="token operator">:</span> <span class="token string">&quot;哈哈哈&quot;</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件定义" tabindex="-1"><a class="header-anchor" href="#事件定义"><span>事件定义</span></a></h3><blockquote><p>注意this指向问题</p></blockquote><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">   num <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  </span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 默认为public</span>
<span class="line">   * 和ts 中的class 几乎一致</span>
<span class="line">   */</span></span>
<span class="line">  userInfos <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      age<span class="token operator">:</span> <span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      name<span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      age<span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 使用链式调用跟上onClick</span>
<span class="line">       * 在onClick函数中传入一个回调函数</span>
<span class="line">       * 在编辑器下方点击日志 可以看到打印结果</span>
<span class="line">       * 注意日志只能查看字符串类型对象类型无法查看</span>
<span class="line">       * */</span></span>
<span class="line">     <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;点击打印哈哈哈&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;哈哈哈&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      </span>
<span class="line">     <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token doc-comment comment">/***</span>
<span class="line">       * 每次change接收一个boolean 代表当前多选框状态</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 每次输入框输入都会触发</span>
<span class="line">       * 接收当前输入框的内容</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">TextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础样式编写" tabindex="-1"><a class="header-anchor" href="#基础样式编写"><span>基础样式编写</span></a></h3><p>样式属性方法以“.”链式调用的方式配置系统组件的样式和其他属性，建议每个属性方法单独写一行。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnArkTs <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/***</span>
<span class="line">       * 除布局外基本样式和css几乎一致</span>
<span class="line">       * 以下为字体大小12 宽度 100 高度100</span>
<span class="line">       * 边框宽度为1 边框颜色为#00000 margin为10 的样式</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        color<span class="token operator">:</span> <span class="token string">&#39;#00000&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">margin</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),l=[t];function i(c,o){return a(),s("div",null,l)}const r=n(e,[["render",i],["__file","04-第四节——整体总览.html.vue"]]),d=JSON.parse('{"path":"/ArkTS/04-%E7%AC%AC%E5%9B%9B%E8%8A%82%E2%80%94%E2%80%94%E6%95%B4%E4%BD%93%E6%80%BB%E8%A7%88.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、页面基本构成","slug":"一、页面基本构成","link":"#一、页面基本构成","children":[{"level":3,"title":"struct","slug":"struct","link":"#struct","children":[]},{"level":3,"title":"装饰器","slug":"装饰器","link":"#装饰器","children":[]},{"level":3,"title":"build函数","slug":"build函数","link":"#build函数","children":[]}]},{"level":2,"title":"二、声明式UI","slug":"二、声明式ui","link":"#二、声明式ui","children":[{"level":3,"title":"基本结构","slug":"基本结构","link":"#基本结构","children":[]},{"level":3,"title":"常用的UI组件","slug":"常用的ui组件","link":"#常用的ui组件","children":[]},{"level":3,"title":"事件定义","slug":"事件定义","link":"#事件定义","children":[]},{"level":3,"title":"基础样式编写","slug":"基础样式编写","link":"#基础样式编写","children":[]}]}],"git":{"updatedTime":1719385700000,"contributors":[{"name":"etsuyou","email":"etsuyou.shuu@gmail.com","commits":1}]},"filePathRelative":"ArkTS/04-第四节——整体总览.md"}');export{r as comp,d as data};
