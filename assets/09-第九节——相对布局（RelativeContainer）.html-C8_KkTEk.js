import{_ as n,c as s,o as a,d as p}from"./app-CZ3kukTv.js";const t={},e=p(`<h2 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念"><span>一、概念</span></a></h2><p>RelativeContainer为采用相对布局的容器，支持容器内部的子元素设置相对位置关系。子元素支持指定兄弟元素作为锚点，也支持指定父容器作为锚点，基于锚点做相对位置布局。</p><ul><li>锚点：通过锚点设置当前元素基于哪个元素确定位置。</li><li>对齐方式：通过对齐方式，设置当前元素是基于锚点的上中下对齐，还是基于锚点的左中右对齐</li></ul><h2 id="二、relativecontainer容器说明" tabindex="-1"><a class="header-anchor" href="#二、relativecontainer容器说明"><span>二、RelativeContainer容器说明</span></a></h2><h3 id="容器内子组件区分水平方向-垂直方向" tabindex="-1"><a class="header-anchor" href="#容器内子组件区分水平方向-垂直方向"><span>容器内子组件区分水平方向，垂直方向</span></a></h3><p>水平方向为left， middle， right，对应容器的HorizontalAlign.Start， HorizontalAlign.Center， HorizontalAlign.End。 垂直方向为top， center， bottom，对应容器的VerticalAlign.Top， VerticalAlign.Center， VerticalAlign.Bottom。 以上规则需要使用alignRules设置</p><h3 id="子组件可以将容器或者其他子组件设为锚点" tabindex="-1"><a class="header-anchor" href="#子组件可以将容器或者其他子组件设为锚点"><span>子组件可以将容器或者其他子组件设为锚点</span></a></h3><p>参与相对布局的容器内组件必须设置id，不设置id的组件不显示，<strong>容器id固定为__container__，如果要依赖其它容器则设置为其它容器id</strong>。 此子组件某一方向上的三个位置可以将容器或其他子组件的同方向三个位置为锚点，同方向上两个以上位置设置锚点以后会跳过第三个。 前端页面设置的子组件尺寸大小不会受到相对布局规则的影响。子组件某个方向上设置两个或以上alignRules时不建议设置此方向尺寸大小。 对齐后需要额外偏移可设置offset。</p><h3 id="特殊情况" tabindex="-1"><a class="header-anchor" href="#特殊情况"><span>特殊情况</span></a></h3><p>互相依赖，环形依赖时容器内子组件全部不绘制。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct StackPage <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 行程环形依赖都不显示</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">RelativeContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          top<span class="token operator">:</span> <span class="token punctuation">{</span> anchor<span class="token operator">:</span> <span class="token string">&#39;row2&#39;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Top <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          bottom<span class="token operator">:</span> <span class="token punctuation">{</span> anchor<span class="token operator">:</span> <span class="token string">&#39;row1&#39;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Bottom <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Blue<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">margin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&#39;#6699FF&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器不设置宽高时，容器与容器内子组件不绘制</p><h2 id="三、设置依赖关系" tabindex="-1"><a class="header-anchor" href="#三、设置依赖关系"><span>三、设置依赖关系</span></a></h2><h3 id="锚点设置" tabindex="-1"><a class="header-anchor" href="#锚点设置"><span>锚点设置</span></a></h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h4><p>锚点设置是指设置子元素相对于父元素或兄弟元素的位置依赖关系。在水平方向上，可以设置left、middle、right的锚点。在竖直方向上，可以设置top、center、bottom的锚点。为了明确定义锚点，必须为RelativeContainer及其子元素设置ID，用于指定锚点信息。ID默认为“<strong>container</strong>”，其余子元素的ID通过id属性设置。未设置ID的子元素在RelativeContainer中不会显示。</p><blockquote><p>注意： 在使用锚点时要注意子元素的相对位置关系，避免出现错位或遮挡的情况。</p></blockquote><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct StackPage <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">RelativeContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token doc-comment comment">/**</span>
<span class="line">         * alignRules 添加对齐规则</span>
<span class="line">         * 右上</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          top<span class="token operator">:</span> <span class="token punctuation">{</span> anchor<span class="token operator">:</span> <span class="token string">&#39;__container__&#39;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Top <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          left<span class="token operator">:</span> <span class="token punctuation">{</span> anchor<span class="token operator">:</span> <span class="token string">&#39;__container__&#39;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>Start <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span></span>
<span class="line">      <span class="token doc-comment comment">/***</span>
<span class="line">       * 可以直接使用offset设置x、y的偏移量基于相对位置进行偏移</span>
<span class="line">       *</span>
<span class="line">       * 基于容器右下角进行偏移</span>
<span class="line">       */</span></span>
<span class="line">      <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          bottom<span class="token operator">:</span> <span class="token punctuation">{</span> anchor<span class="token operator">:</span> <span class="token string">&#39;__container__&#39;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Bottom <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          left<span class="token operator">:</span> <span class="token punctuation">{</span> anchor<span class="token operator">:</span> <span class="token string">&#39;__container__&#39;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>Start <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Blue<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">margin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&#39;#6699FF&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、小练习" tabindex="-1"><a class="header-anchor" href="#四、小练习"><span>四、小练习</span></a></h2><h3 id="样例" tabindex="-1"><a class="header-anchor" href="#样例"><span>样例</span></a></h3><p><img src="https://cdn.nlark.com/yuque/0/2023/png/12928539/1701702501947-03498b84-60d5-4156-902f-ab388f64a970.png#averageHue=%23f0b858&amp;clientId=u2b2d331c-0610-4&amp;from=paste&amp;height=449&amp;id=ua0f3d22a&amp;originHeight=898&amp;originWidth=900&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=49810&amp;status=done&amp;style=none&amp;taskId=u1871e948-9f5b-4c02-9118-49d3220c681&amp;title=&amp;width=450" alt="image.png"></p><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1"><span>代码</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Styles</span></span> <span class="token keyword">function</span> <span class="token function">itemStyle</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span></span>
<span class="line">struct LearnRelativeContainer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Flex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>alignItems<span class="token operator">:</span> ItemAlign<span class="token punctuation">.</span>Center<span class="token punctuation">,</span> justifyContent<span class="token operator">:</span>FlexAlign<span class="token punctuation">.</span>Center<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">RelativeContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            top<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Top<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            left<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>Start<span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">itemStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Yellow<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            top<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Top<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            right<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>End<span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">itemStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Blue<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 基于红色块定位，定位到红色块下面</span></span>
<span class="line">            top<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;row1&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Bottom<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 基于红色块定位，定位到红色块最后面</span></span>
<span class="line">            left<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;row1&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>End<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">itemStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Orange<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            bottom<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Bottom<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            left<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>Start<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">itemStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Gray<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">alignRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            bottom<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> VerticalAlign<span class="token punctuation">.</span>Bottom<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            right<span class="token operator">:</span> <span class="token punctuation">{</span>anchor<span class="token operator">:</span> <span class="token string">&quot;__container__&quot;</span><span class="token punctuation">,</span> align<span class="token operator">:</span> HorizontalAlign<span class="token punctuation">.</span>End<span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;row5&quot;</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">itemStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&quot;#6699FF&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[e];function o(l,i){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","09-第九节——相对布局（RelativeContainer）.html.vue"]]),k=JSON.parse('{"path":"/Beginner/09-%E7%AC%AC%E4%B9%9D%E8%8A%82%E2%80%94%E2%80%94%E7%9B%B8%E5%AF%B9%E5%B8%83%E5%B1%80%EF%BC%88RelativeContainer%EF%BC%89.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、概念","slug":"一、概念","link":"#一、概念","children":[]},{"level":2,"title":"二、RelativeContainer容器说明","slug":"二、relativecontainer容器说明","link":"#二、relativecontainer容器说明","children":[{"level":3,"title":"容器内子组件区分水平方向，垂直方向","slug":"容器内子组件区分水平方向-垂直方向","link":"#容器内子组件区分水平方向-垂直方向","children":[]},{"level":3,"title":"子组件可以将容器或者其他子组件设为锚点","slug":"子组件可以将容器或者其他子组件设为锚点","link":"#子组件可以将容器或者其他子组件设为锚点","children":[]},{"level":3,"title":"特殊情况","slug":"特殊情况","link":"#特殊情况","children":[]}]},{"level":2,"title":"三、设置依赖关系","slug":"三、设置依赖关系","link":"#三、设置依赖关系","children":[{"level":3,"title":"锚点设置","slug":"锚点设置","link":"#锚点设置","children":[]}]},{"level":2,"title":"四、小练习","slug":"四、小练习","link":"#四、小练习","children":[{"level":3,"title":"样例","slug":"样例","link":"#样例","children":[]},{"level":3,"title":"代码","slug":"代码-1","link":"#代码-1","children":[]}]}],"git":{},"filePathRelative":"Beginner/09-第九节——相对布局（RelativeContainer）.md"}');export{r as comp,k as data};
