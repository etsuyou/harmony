import{_ as n,c as s,o as a,a as p}from"./app-G_LJPxZj.js";const e={},l=p(`<h2 id="一、存在的问题" tabindex="-1"><a class="header-anchor" href="#一、存在的问题"><span>一、存在的问题</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnThis <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 同js一样</span>
<span class="line">     * 当前this的取决于调用的上下文环境</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">+</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 这里我们可以直接用this获取到当前组件的方法</span>
<span class="line">       * 这里的this 会指向 Column Column 的this 指向 build 函数  build 函数的this 指向当前 struct 或者说当前实例</span>
<span class="line">       * this =&gt; Column =&gt; build =&gt; 当前实例</span>
<span class="line">         但是 add 方法的内部this指向就会出现问题！</span>
<span class="line">         add的执行上下文为最顶层对象 由于ets最终会被编译，在编译的过程中开启严格模式。</span>
<span class="line">         所以this指向变为undefined</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、改变this指向" tabindex="-1"><a class="header-anchor" href="#二、改变this指向"><span>二、改变this指向</span></a></h2><h3 id="使用bind改变this" tabindex="-1"><a class="header-anchor" href="#使用bind改变this"><span>使用bind改变this</span></a></h3><blockquote><p>ets基于js，那么js中的方法大多数可以直接在ets中使用😄</p></blockquote><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnThis <span class="token punctuation">{</span></span>
<span class="line">  name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span></span>
<span class="line">  <span class="token function">add</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 同js一样</span>
<span class="line">     * 当前this的取决于调用的上下文环境</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       *   我们可以通过bind函数来改变this指向</span>
<span class="line">           让函数内部指向当前组件实例</span>
<span class="line">           并可以还可以传递参数</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;哈哈&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用箭头函数完成绑定事件-推荐使用🚀" tabindex="-1"><a class="header-anchor" href="#使用箭头函数完成绑定事件-推荐使用🚀"><span>使用箭头函数完成绑定事件（推荐使用🚀）</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnThis <span class="token punctuation">{</span></span>
<span class="line">  name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span></span>
<span class="line">  <span class="token function">add</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 同js一样</span>
<span class="line">     * 当前this的取决于调用的上下文环境</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * Column函数的this最终会指向为实例自身，</span>
<span class="line">         所以，我们可以直接在绑定的时候使用箭头函数，</span>
<span class="line">         此时add函数内部的this指向当前上下文</span>
<span class="line">  </span>
<span class="line">         注意：使用这箭头函数这种形式要在箭头函数里面调用对应的方法</span>
<span class="line">         本质上来说 事件触发的是箭头函数，然后在箭头函数里面在触发</span>
<span class="line">         对应的事件方法</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;哈哈哈&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用箭头函数定义实例方法" tabindex="-1"><a class="header-anchor" href="#使用箭头函数定义实例方法"><span>使用箭头函数定义实例方法</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnThis <span class="token punctuation">{</span></span>
<span class="line">  name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 由于add函数式使用箭头函数定义</span>
<span class="line">   * 所以该函数的this 指向当前的上下文</span>
<span class="line">   * 也就是指向当前实例</span>
<span class="line">   *</span>
<span class="line">   * 注意：这种写法无法 手动 进行传参，会直接接收到事件本身携带的当前的参数</span>
<span class="line">   * 那么当前的msg 就会变成event对象</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token operator">?</span><span class="token operator">:</span> ClickEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 这样定义每次渲染都会触发这个add函数</span>
<span class="line">       * 每次点击不会触发add方法</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token comment">// Button(&#39;+1&#39;).onClick(this.add())</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、事件传参" tabindex="-1"><a class="header-anchor" href="#三、事件传参"><span>三、事件传参</span></a></h2><blockquote><p>后续所有代码包括项目都基于箭头函数进行编写</p></blockquote><h3 id="手动传递任意参数" tabindex="-1"><a class="header-anchor" href="#手动传递任意参数"><span>手动传递任意参数</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnThis <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token function">change</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 每次 Checkbox 变化都会触发onChange事件</span>
<span class="line">       * 那么 onChange事件 实际调用的 是 这个 匿名的箭头函数</span>
<span class="line">       * 然后我们再箭头函数里面手动调用 了 change方法 并且手动传参</span>
<span class="line">       * 那么 当前change 函数接收的是 你好</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接收当前event对象" tabindex="-1"><a class="header-anchor" href="#接收当前event对象"><span>接收当前event对象</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnThis <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token function">change</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> msg<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 每次 Checkbox 变化都会触发onChange事件</span>
<span class="line">       * 那么 onChange事件 实际调用的 是 这个 匿名的箭头函数</span>
<span class="line">       * 那么这个匿名的箭头函数就是事件触发的函数，所以匿名函数会默认携带一个参数，是当前事件传给它的</span>
<span class="line">       * 我们可以手动 传给当前自定义的事件 chagne</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token comment">// Checkbox().onChange((value) =&gt; this.change(value, &#39;你好&#39;))</span></span>
<span class="line"></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * 如果我们在里面直接调用自定义的change方法</span>
<span class="line">       * 那么现在事件调用的其实就是change方法</span>
<span class="line">       * 所以change方法就会接收到一个当事件的参数</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>change<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[l];function t(c,o){return a(),s("div",null,i)}const d=n(e,[["render",t],["__file","06-第六节——ArkTs中的this指向_事件参数传递.html.vue"]]),r=JSON.parse('{"path":"/ArkTS/06-%E7%AC%AC%E5%85%AD%E8%8A%82%E2%80%94%E2%80%94ArkTs%E4%B8%AD%E7%9A%84this%E6%8C%87%E5%90%91_%E4%BA%8B%E4%BB%B6%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、存在的问题","slug":"一、存在的问题","link":"#一、存在的问题","children":[]},{"level":2,"title":"二、改变this指向","slug":"二、改变this指向","link":"#二、改变this指向","children":[{"level":3,"title":"使用bind改变this","slug":"使用bind改变this","link":"#使用bind改变this","children":[]},{"level":3,"title":"使用箭头函数完成绑定事件（推荐使用🚀）","slug":"使用箭头函数完成绑定事件-推荐使用🚀","link":"#使用箭头函数完成绑定事件-推荐使用🚀","children":[]},{"level":3,"title":"使用箭头函数定义实例方法","slug":"使用箭头函数定义实例方法","link":"#使用箭头函数定义实例方法","children":[]}]},{"level":2,"title":"三、事件传参","slug":"三、事件传参","link":"#三、事件传参","children":[{"level":3,"title":"手动传递任意参数","slug":"手动传递任意参数","link":"#手动传递任意参数","children":[]},{"level":3,"title":"接收当前event对象","slug":"接收当前event对象","link":"#接收当前event对象","children":[]}]}],"git":{"updatedTime":1719759971000,"contributors":[{"name":"etsuyou","email":"etsuyou.shuu@gmail.com","commits":2}]},"filePathRelative":"ArkTS/06-第六节——ArkTs中的this指向+事件参数传递.md"}');export{d as comp,r as data};
