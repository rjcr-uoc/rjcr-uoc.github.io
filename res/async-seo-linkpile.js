(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[24],{M8Gd:function(e,t,n){"use strict";n.r(t);var i=n("wx14"),a=n("zLVn"),o=n("q1tI"),l=n.n(o),r=n("pVnL"),c=n.n(r),s=n("VbXa"),p=n.n(s),u=n("Zure"),d=n("TSYQ"),f=n.n(d),m=n("xBhV"),h=n.n(m),v=n("CP3N"),_=n("ygDV"),g=(n("g2gp"),function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).handleClick=function(e){var n=t.props.actionlocation,i=h()();i.push({name:"generic.event",data:{actionlocation:n,eventcategory:"interaction-click",eventaction:"link-click",eventrefinements:"url="+e.target.href}}),i.push({name:"interaction.selected",data:{action_location:n,event_category:"interaction-click",event_action:"link-click",event_refinements:"url="+e.target.href}})},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.title,i=t.links;return l.a.createElement("div",{className:"CollapsibleLinkpile__category"},l.a.createElement("h3",{className:"CollapsibleLinkpile__category-title"},n),l.a.createElement("ul",{className:"CollapsibleLinkpile__category-list list-inline"},i.map((function(t,n){var i=t.url,a=t.text;return l.a.createElement("li",{className:"CollapsibleLinkpile__category-list-item",key:n},l.a.createElement("a",{className:"CollapsibleLinkpile__category-link",href:i,onClick:e.handleClick},a))}))))},t}(o.PureComponent));g.defaultProps={actionlocation:"collapsible-linkpile-component"};var k=g,b=(n("Q+uA"),function(e){return function(){return l.a.createElement("h2",{className:"CollapsibleLinkpile__title"},e)}}),E=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).getId=function(){var e=t.props,n=e.id,i=e.title;return n||"CollapsibleLinkpile_"+(i?i.replace(/\W/g,""):"")},t.fireContentModulePresentedEvent=function(e){return function(n){var i=n.isIntersecting,a=t.props.actionlocation,o=h()();i&&(o.push({name:"content_module.presented",data:{action_location:a,position_fired:e}}),"bottom"===e&&o.push({name:"page.module.view",data:{actionlocation:a}}))}},t.handleExpansionToggle=function(e){var n=t.props.actionlocation,i=h()(),a=e?"expand":"collapse";i.push({name:"generic.event",data:{actionlocation:n,eventcategory:"interaction-click",eventaction:a}}),i.push({name:"interaction.selected",data:{action_location:n,event_category:"interaction-click",event_action:a}})},t}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.forceExpanded,i=e.isMobile,a=e.categories,o=e.actionlocation,r=e.site;return!!a.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement(u.default,{onIntersection:this.fireContentModulePresentedEvent("top"),unobserveAfterIntersect:!0}),l.a.createElement("div",{className:f()("CollapsibleLinkpile",r)},l.a.createElement("div",{className:"CollapsibleLinkpile__container"},l.a.createElement(v.a,{heading:b(t),expanded:n||!i,id:this.getId(),onExpandedChange:this.handleExpansionToggle},a.map((function(e,t){return l.a.createElement(k,c()({actionlocation:o},e,{key:t}))}))))),l.a.createElement(u.default,{onIntersection:this.fireContentModulePresentedEvent("bottom"),unobserveAfterIntersect:!0}))},t}(o.PureComponent);E.defaultProps={actionlocation:"collapsible-linkpile-component",forceExpanded:!1,isMobile:!1,isVisible:!1,title:"More Popular Vacation Destinations",site:"homeaway_us"};var C,y=(C=E,function(e){function t(t){var n;return(n=e.call(this,t)||this).getMobileBreakpoint=function(){return n.state.isMounted?n.props.mobileBreakpoint:n.props.isMobile?1/0:0},n.state={isMounted:!1},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({isMounted:!0})},n.render=function(){var e=Object(_.default)(C);return l.a.createElement(e,c()({},this.props,{mobileBreakpoint:this.getMobileBreakpoint()}))},t}(o.Component)),L=n("MXvH"),M=(n("jlkX"),function(e){var t=e.onMount,n=Object(a.default)(e,["onMount"]);return Object(L.f)(t),l.a.createElement(y,Object(i.default)({forceExpanded:!0},n))});M.displayName="SeoLinkPile";t.default=M},"Q+uA":function(e,t,n){},g2gp:function(e,t,n){},jlkX:function(e,t,n){}}]);
//# sourceMappingURL=https://csvcus-stage.homeaway.com/rsrcs-crs/node-homepage/async-seo-linkpile.e6bb6a1ac832ab85f853.js.map