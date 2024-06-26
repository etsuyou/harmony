import{_ as n,c as s,o as a,d as p}from"./app-CZ3kukTv.js";const e={},l=p(`<blockquote><p>ArkUI还提供了一种更轻量的UI元素复用机制@Builder，@Builder所装饰的函数遵循build()函数语法规则，开发者可以将重复使用的UI元素抽象成一个方法，在build方法里调用</p></blockquote><h2 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念"><span>一、概念</span></a></h2><p>正常情况下ArkUI只能在build函数中使用，使用@Builder装饰的函数可以在函数体内返回ArkUI，类似函数组件 直接调用即可使用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Builder <span class="token keyword">function</span> <span class="token function">ABuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、使用" tabindex="-1"><a class="header-anchor" href="#二、使用"><span>二、使用</span></a></h2><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><ul><li>允许在自定义组件内定义一个或多个@Builder方法，该方法被认为是该组件的私有、特殊类型的成员函数。</li><li>自定义构建函数可以在所属组件的build方法和其他自定义构建函数中调用，但不允许在组件外调用。</li><li>在自定义函数体中，this指代当前所属组件，组件的状态变量可以在自定义构建函数内访问。建议通过this访问自定义组件的状态变量而不是参数传递</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Builder <span class="token keyword">function</span> <span class="token function">ABuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">ABuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局自定义构建函数" tabindex="-1"><a class="header-anchor" href="#全局自定义构建函数"><span>全局自定义构建函数</span></a></h3><ul><li>全局的自定义构建函数可以被整个应用获取（要提前引入），不允许使用this和bind方法。</li><li>如果不涉及组件状态变化，建议使用全局的自定义构建方法</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Builder <span class="token keyword">function</span> <span class="token function">MyGlobalBuilderFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">MyGlobalBuilderFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、参数传递规则" tabindex="-1"><a class="header-anchor" href="#三、参数传递规则"><span>三、参数传递规则</span></a></h2><h3 id="按值传递参数" tabindex="-1"><a class="header-anchor" href="#按值传递参数"><span>按值传递参数</span></a></h3><p>调用@Builder装饰的函数默认按值传递。当传递的参数为状态变量时，状态变量的改变不会引起@Builder方法内的UI刷新。所以当使用状态变量的时候，推荐使用按引用传递。</p><h4 id="全局" tabindex="-1"><a class="header-anchor" href="#全局"><span>全局</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Builder <span class="token keyword">function</span> <span class="token function">MyGlobalBuilderFunction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 这里不能使用this</span></span>
<span class="line">  <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 即使使用@State定义 全局自定义构建函数也不会重新渲染</span></span>
<span class="line">  @State num<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">MyGlobalBuilderFunction</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="局部" tabindex="-1"><a class="header-anchor" href="#局部"><span>局部</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 即使使用@State定义 全局自定义构建函数也不会重新渲染</span></span>
<span class="line">  @State num<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  @Builder <span class="token function">MyBuilderFunction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 不会改变</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 直接获取组件状态可以改变</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// MyGlobalBuilderFunction(this.num)</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">MyBuilderFunction</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法-内置组件双向同步" tabindex="-1"><a class="header-anchor" href="#语法-内置组件双向同步"><span>$$语法：内置组件双向同步</span></a></h3><blockquote><p>$$运算符为系统内置组件提供TS变量的引用，使得TS变量和系统内置组件的内部状态保持同步。</p></blockquote><h4 id="使用规则" tabindex="-1"><a class="header-anchor" href="#使用规则"><span>使用规则</span></a></h4><ul><li>当前$$支持基础类型变量，以及@State、@Link和@Prop装饰的变量。</li><li>当前$$仅支持Refresh组件的refreshing参数。</li><li>$$绑定的变量变化时，会触发UI的同步刷新</li></ul><h3 id="按引用传递参数" tabindex="-1"><a class="header-anchor" href="#按引用传递参数"><span>按引用传递参数</span></a></h3><blockquote><p>按引用传递参数时，传递的参数可为状态变量，且状态变量的改变会引起@Builder方法内的UI刷新。ArkUI提供$$作为按引用传递参数的范式</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Builder <span class="token keyword">function</span> <span class="token function">MyGlobalBuilderFunction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">$$</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 使用$$后，数据改变会重新渲染，使用的时候key为$$</span></span>
<span class="line">  <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;朴实无华的小组件&#39;</span> <span class="token operator">+</span> $$<span class="token punctuation">.</span>num<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  @State num<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 需要传一个对象</span></span>
<span class="line">      <span class="token function">MyGlobalBuilderFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// this.MyBuilderFunction(this.num)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、引用-builder函数" tabindex="-1"><a class="header-anchor" href="#四、引用-builder函数"><span>四、引用@Builder函数</span></a></h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>当开发者创建了自定义组件，并想对该组件添加特定功能时，例如在自定义组件中添加一个点击跳转操作。若直接在组件内嵌入事件方法，将会导致所有引入该自定义组件的地方均增加了该功能。为解决此问题，ArkUI引入了@BuilderParam装饰器，@BuilderParam用来装饰指向@Builder方法的变量，开发者可在初始化自定义组件时对此属性进行赋值，为自定义组件增加特定的功能。该装饰器用于声明任意UI描述的一个元素，类似slot占位符。 简单来说可以往子组件传ArkUI组件</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><blockquote><p>@BuilderParam装饰的方法只能被自定义构建函数（@Builder装饰的方法）初始化。</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Component</span>
<span class="line">struct LearnBuildChild <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// content 父组件可以传入对应的ArkUI</span></span>
<span class="line">  @BuilderParam <span class="token function-variable function">content</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;头部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 这里就是父组件传过来的</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;底部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  @Builder <span class="token function">contentBuild</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;内容&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">LearnBuildChild</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>contentBuild <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数初始化组件" tabindex="-1"><a class="header-anchor" href="#参数初始化组件"><span>参数初始化组件</span></a></h3><blockquote><p>如果@Build本身需要接收参数，需要在类型定义处标明</p></blockquote><h4 id="基本数据" tabindex="-1"><a class="header-anchor" href="#基本数据"><span>基本数据</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Component</span>
<span class="line">struct LearnBuildChild <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// content 父组件可以传入对应的ArkUI</span></span>
<span class="line">  @BuilderParam <span class="token function-variable function">content</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">msg</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;头部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 这里就是父组件传过来的</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token string">&#39;内容🤔&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;底部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  @Builder <span class="token function">contentBuild</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">msg</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">LearnBuildChild</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>contentBuild <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型"><span>引用类型</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Component</span>
<span class="line">struct LearnBuildChild <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// content 父组件可以传入对应的ArkUI</span></span>
<span class="line">  @BuilderParam <span class="token function-variable function">content</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">$$</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span> string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;头部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 这里就是父组件传过来的</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;内容🤔&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;底部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  @Builder <span class="token function">contentBuild</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">$$</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Text</span><span class="token punctuation">(</span>$$<span class="token punctuation">.</span>msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">LearnBuildChild</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>contentBuild <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尾随闭包初始化组件" tabindex="-1"><a class="header-anchor" href="#尾随闭包初始化组件"><span>尾随闭包初始化组件</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">@Component</span>
<span class="line">struct LearnBuildChild <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// content 父组件可以传入对应的ArkUI</span></span>
<span class="line">  @BuilderParam <span class="token function-variable function">content</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;头部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 这里就是父组件传过来的</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;底部&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@Entry</span>
<span class="line">@Component</span>
<span class="line">struct LearnBuild <span class="token punctuation">{</span></span>
<span class="line">  @State num<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&#39;+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">LearnBuildChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 这部分内容可以直接传入,并且数据改变后可以重新渲染</span></span>
<span class="line">        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;内容&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),t=[l];function i(c,o){return a(),s("div",null,t)}const r=n(e,[["render",i],["__file","02-第二节——@Builder自定义构建函数_@BuilderParam.html.vue"]]),d=JSON.parse('{"path":"/Beginner/02-%E7%AC%AC%E4%BA%8C%E8%8A%82%E2%80%94%E2%80%94@Builder%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0_@BuilderParam.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、概念","slug":"一、概念","link":"#一、概念","children":[]},{"level":2,"title":"二、使用","slug":"二、使用","link":"#二、使用","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"全局自定义构建函数","slug":"全局自定义构建函数","link":"#全局自定义构建函数","children":[]}]},{"level":2,"title":"三、参数传递规则","slug":"三、参数传递规则","link":"#三、参数传递规则","children":[{"level":3,"title":"按值传递参数","slug":"按值传递参数","link":"#按值传递参数","children":[]},{"level":3,"title":"$$语法：内置组件双向同步","slug":"语法-内置组件双向同步","link":"#语法-内置组件双向同步","children":[]},{"level":3,"title":"按引用传递参数","slug":"按引用传递参数","link":"#按引用传递参数","children":[]}]},{"level":2,"title":"四、引用@Builder函数","slug":"四、引用-builder函数","link":"#四、引用-builder函数","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"参数初始化组件","slug":"参数初始化组件","link":"#参数初始化组件","children":[]},{"level":3,"title":"尾随闭包初始化组件","slug":"尾随闭包初始化组件","link":"#尾随闭包初始化组件","children":[]}]}],"git":{},"filePathRelative":"Beginner/02-第二节——@Builder自定义构建函数+@BuilderParam.md"}');export{r as comp,d as data};
