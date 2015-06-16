4. CSS的盒子模型
    
    > 内容(content)
    > 
    > 填充(padding)
    > 
    > 边界(margin)
    >
    > 边框(border)
    > 
    > IE的content部分包含了 border 和 padding
    
5. CSS选择器有哪些

    > id选择器（#myid）
    >
    > 类选择器（.myclassname）
    >
    > 标签选择器（div, h1, p）
    >
    > 相邻选择器（h1 + p）
    >
    > 子选择器（ul > li）
    >
    > 后代选择器（li a）
    >
    > 通配符选择器（ * ）
    >
    > 属性选择器（a[rel = "external"]）
    >
    > 伪类选择器（a:hover, li:nth-child）
    
6. CSS哪些属性可以继承

    > font-size
    >
    > font-family
    >
    > color
    >
    > text-indent
    
7. css不可继承的样式

    > border
    >
    > padding
    >
    > margin
    >
    > width
    >
    > height
    
8. css样式权重优先级

    > !important
    >
    > id
    >
    > class
    >
    > tag
    > 
    > 就近原则
    
9. display值有哪些？

    > block 象块类型元素一样显示。
    >
    > inline 缺省值。象行内元素类型一样显示。
    >
    > inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。
    >
    > list-item 象块类型元素一样显示，并添加样式列表标记。
    
10. 哪些标签的默认display是block

    > div
    >
    > p
    >
    > h1
    >
    > section
    >
    > article
    
11. 哪些标签的默认display是inline
    
    > a
    >
    > span
    >
    > label
    >
    > input
    
12. position的值有哪些？

    > absolute 生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。 
    > 
    > fixed （老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。 
    >
    > relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。 
    >
    > static  默认值。没有定位，元素出现在正常的流中
    >
    > inherit 规定从父元素继承 position 属性的值。
    
2. position的absolute与fixed共同点

    > 改变行内元素的呈现方式，display被置为block
    >
    > 让元素脱离普通流，不占据空间
    > 
    > 默认会覆盖到非定位元素上
    
3. position的absolute与fixed不同点

    > absolute的”根元素“是可以设置的，而fixed的”根元素“固定为浏览器窗口
    
1. display:none和visibility:hidden的区别？
    > display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，
    > 就当他从来不存在。
    > 
    > visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。
    
13. 为什么要初始化CSS样式？

    > 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
    
14. CSS sprites的实现机制

    > CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background-repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。