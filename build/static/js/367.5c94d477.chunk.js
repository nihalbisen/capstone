"use strict";(self.webpackChunkcapstone=self.webpackChunkcapstone||[]).push([[367],{367:function(e,a,s){s.r(a),s.d(a,{default:function(){return d}});var A=s(885),i=s(791),l=s(802),t=s(871),r=s(98),n=s(770),c=s(184);function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"stars-outer",children:(0,c.jsx)("div",{className:"stars-inner",style:{width:10*e.rating.rate*2}})}),(0,c.jsxs)("span",{className:"number-rating",children:["(",e.rating.count,")"]})]})}function d(){var e=(0,i.useState)([]),a=(0,A.Z)(e,2),s=a[0],d=a[1],o=(0,t.UO)().id;(0,i.useEffect)((function(){fetch("https://fakestoreapi.com/products/".concat(o)).then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]);var h=(0,l.I0)(),u=(0,i.useState)(1),j=(0,A.Z)(u,2),x=j[0],C=j[1];return(0,c.jsx)(c.Fragment,{children:s>=0?(0,c.jsx)("span",{className:"loader",children:"Content is loading..."}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("section",{className:"product-container aem-Grid aem-Grid--12",children:[(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 aem-Grid aem-Grid--12",children:[(0,c.jsxs)("div",{className:"product-img-slide aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--hide",children:[(0,c.jsx)("img",{src:s.image,alt:s.title}),(0,c.jsx)("img",{src:s.image,alt:s.title}),(0,c.jsx)("img",{src:s.image,alt:s.title}),(0,c.jsx)("img",{src:s.image,alt:s.title}),(0,c.jsx)("img",{src:s.image,alt:s.title})]}),(0,c.jsx)("div",{className:"product-img aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12",children:(0,c.jsx)("img",{src:s.image,alt:s.title})}),(0,c.jsx)("div",{className:"carousel aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--hide",children:(0,c.jsxs)("div",{style:{textAlign:"center"},children:[(0,c.jsx)("span",{className:"dot"}),(0,c.jsx)("span",{className:"dot"}),(0,c.jsx)("span",{className:"dot"}),(0,c.jsx)("span",{className:"dot"}),(0,c.jsx)("span",{className:"dot"})]})})]}),(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 prod-desc",children:[(0,c.jsx)("span",{className:"sprod-category",children:s.category}),(0,c.jsx)("h3",{className:"product-title",children:s.title}),(0,c.jsxs)("span",{className:"product-price",children:["$",s.price]}),(0,c.jsx)(m,{rating:s.rating}),(0,c.jsx)("article",{className:"product-description",children:s.description}),(0,c.jsxs)("form",{action:"/",target:"",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{className:"attribute",children:"Colors"}),(0,c.jsx)("input",{className:"colors colors-gr1",type:"checkbox",name:"gr1",value:"gr1"}),(0,c.jsx)("input",{className:"colors colors-gr2",type:"checkbox",name:"gr2",value:"gr2"}),(0,c.jsx)("input",{className:"colors colors-gr3",type:"checkbox",name:"gr3",value:"gr3"}),(0,c.jsx)("input",{className:"colors colors-gr4",type:"checkbox",name:"gr4",value:"gr4"})]}),(0,c.jsxs)("div",{className:"size-ar",children:[(0,c.jsx)("h4",{className:"attribute",children:"Size"}),(0,c.jsx)("input",{type:"radio",id:"xs",name:"size",value:"xs"}),(0,c.jsx)("label",{htmlFor:"xs",children:"XS"}),(0,c.jsx)("input",{type:"radio",id:"s",name:"size",value:"s"}),(0,c.jsx)("label",{htmlFor:"s",children:"S"}),(0,c.jsx)("input",{type:"radio",id:"m",name:"size",value:"m"}),(0,c.jsx)("label",{htmlFor:"m",children:"M"}),(0,c.jsx)("input",{type:"radio",id:"l",name:"size",value:"l"}),(0,c.jsx)("label",{htmlFor:"l",children:"L"}),(0,c.jsx)("input",{type:"radio",id:"xl",name:"size",value:"xl"}),(0,c.jsx)("label",{htmlFor:"xl",children:"XL"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{className:"attribute",children:"Quantity"}),(0,c.jsxs)("div",{className:"quantity",children:[(0,c.jsx)("button",{type:"button",onClick:function(){x>0&&C(x-1)},children:"-"}),(0,c.jsx)("input",{type:"text",value:x,onChange:function(e){C(e.target.value)}}),(0,c.jsx)("button",{type:"button",onClick:function(){x<10&&C(Number(x)+1)},children:"+"})]})]})]}),(0,c.jsx)("div",{className:"add-to-cart",children:(0,c.jsx)("button",{onClick:function(){var e;e=s,h((0,r.Xq)(e))},children:"ADD TO CART"})}),(0,c.jsxs)("div",{className:"product-social",children:[(0,c.jsxs)("a",{href:"/","aria-label":"Save",children:[" ",(0,c.jsx)("img",{src:n,alt:"Save"})," Save"]}),(0,c.jsxs)("a",{href:"/","aria-label":"Share",children:[" ",(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAABHNCSVQICAgIfAhkiAAAAYlJREFUOE+1lb9Lw0AUx9/d1VAHIYNaddCAaXB3FgVxdXbUv8BMjpo6ulj/AnVz1VUExdldYoTooPXHEBBMic2d7xKFEpOmTWvgIHB537z3vc97R6DAMzk9N89puA1AVuJwcU45231+vL0hverFYvwa44YTsT7ldKFnwYpWPcXMVnEdMkVsSdEwIHuY5QauswKCxqfMjikw9mTb71JwyjBGwwDe8NUvIuhjYFmUuP7qOPeFBVVNUxVQNjEDK/KOwAUbgrVCJU9o1XUBZB+D1ehM0TYUZpmHkoWBoDAiINzBdJbiYHLFgZslzlgmNlkYJLJ4ICCshnt3lIcZScXgC06wruXYKqg1Iah7ruvliUXfV7S/GIzr+ixpUQf3my+unQS4o+5/CKaQ31YyemkFEBx0XXKXh+Khl2bDtY/zfIw6JQubFg1DCrSO5C3GQuKSAKsRDh99TZsfsGWHzHQFdl4Zcl+2XhkUEz1F0COeirde+w8Rs8EMh1/RNG77HF8DHrADvwI6YSYvqW9KWfHfneQ+wgAAAABJRU5ErkJggg==",alt:"Share"})," Share"]})]})]})]}),(0,c.jsxs)("section",{className:"aem-Grid aem-Grid--12 sprod-bottom",children:[(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 aem-GridColumn--tablet--12",children:(0,c.jsx)("h3",{className:"product-title",children:s.title})}),(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12",children:[(0,c.jsx)("span",{id:"desc-title",children:"Description"}),(0,c.jsx)("article",{className:"desc-bottom",children:s.description}),(0,c.jsx)("hr",{className:"bottom-div"})]}),(0,c.jsxs)("div",{className:"bottom-sidecol aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12",children:[(0,c.jsx)("span",{id:"desc-title",children:"Details"}),(0,c.jsxs)("div",{className:"details-icon",children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOLSURBVFhH7ZdrSBRRFMeP+rm1LxX0wjItw0BJLJSglB4G9pCeaNhLI80sxEJJIUUIggJLay2LwLBasyyzp5FopWKK9oYySbeH5mPVTFG4zf80Y7u6M7ta0Yf6wfC/58yduWfOvefOjIOQoL+Io6x/jf8B2AzgfWMTbdkRzfpHwCJU43Nzs/APWComuLizwjbn2YuXcmv0qGagt6+PQjZsoq89PWxDYcMP0jP1FLh8JesvIQcyjG+9vSI+MVk8Kq/gDEBhw6/PPss+5YCt0NnVJbZHx4pnz1/IHm00pwC8eVvPg0BBh8nEdlJKmoXC393dLYLXbGDb2pRZY8RV4KzTUV1lGYWHbmQbChv+2PgEelvfwH5TZxdPmamzk201RlWG48eNk1s/gD0wMEBOTk50/mwW+1KTE2mG63Tqk9eMKnImVGnv6BChWyNZzRk6NQpd0jTA//BxhezRxmYGxjo7U062ntUcB0cHC7UHpYLMsWsKmlta6Oade3QxL5/ul5TSh4+faLqLC90qyGO1RWtbO23atoPWhW2WPWbImRhGf3+/uGC4LJYEh3BKcczy9h1sr14fJqW5XO79E1wnDSaajEa2LxjyhYf3PK6Kp1ZK02oAJaUPhX/gMjHV3VOq/SRRJg2E+gcotarqGhEesZMDCY+IGnZj9L1yrVAELF8hJrp6iNRDhwevH4pFAKjl3XH7+cZRsXFcx3giabdjHQoCWyVlAv3xlEGr1w4OiuBjpHvVv2uQe1vHIoADB9OE1/wFovhBiewRwpB/lQeAqoEM5OReEoePpvNRdPsuP4w9WASA9OJQQNp8/BcJtzlzWc3TqJWZkaC6CMGR9AweXHoVsx45limfsS8z9qAZgIe06jP0p7kNhQ20MvOltU1Mm+0lyiurZI82qvsAar2tvYP85vuyDYUN/4msbN7ji4sKWE+cOsN9wKkz56hHenUfP/ljS7aJHIhV8MQoIVQDVMnA0Mx4+vhxGyt+6kxPsXdfIk8PytkWmgGgGpBm3AwK2/jhI9s1tXXcBwobfpRwQNAKXpiRu/Zw2xaaAQCUE8rMvKyUzGBQfKQomUGQudLuCZTARrQP2Iu1zAAsvus3bnIbA+P8y1ev2VZj1H9GWHyNTUaaMnkSf4yAhOQUKrx1mxYHLKTqmlrS6cbQNUMun1Pjt/6a4aMEFVFR9YRmubtRzM7IweDU+Nf/DYm+A1ONAg4Q2eCMAAAAAElFTkSuQmCC",alt:"Sweat-wicking"}),"Sweat-wicking"]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKbSURBVFhH7ZddSJNRGMef5TBwMHA3lVdRJCRK0WYLvTBGJX0YQUEDI0hIIhSEgrqoC6GrjJKJwaDogyxBiiiyTwqR5YzCltVFpXWTH+tza9Bkg6c95zzjXe/ejxXGe5E/eHnf8+fs/J9zzv+822yYASxiHt8tYc7cEgzNv3z9BuUrPHCz/w4rklB4GKpW18LbsXFWJOl0GipWrYELPVdYMYHSbsSR9mNYtnQ53nvwkBXEn8kkNmz3Y2V1Db55N8aqJHj2HC5YXI69fVdZ0cfUnDh8tB2XVKzE8fcfWEFMJBKiAG/dOvGcS3fwjCh4JPKCFW0KMk+lUujbuBWbW9pYkXycmMRlVW4MnA6yorBt5y5s2OHnljYFBc5ut8PuRj88GhhkRVK2aCFs2VQPjzMZULN/bxM8G4mIHOhRcNqjnz6Dy1XKLYXJyWlwOBzcUpiYmgJ7UZEoXBdeAUNGX70We34y0M2K5Mat2yJcA4MhViQUwkpPjQirEabm4SdPhXHTvhax91nOX7osjNUFZY0pjOogqjE0pyNFA1HQco0p9ZRmSnUu1IfS37inWXzWDEPz/rv3xey+x2KsSI6fCmCtr55bCrT81H86GmXFGMPAJWdmwFFSIq5c4vEf4HQ6uaUQi8fF3VWaH0wtDM29Hrco4GJPLyuS9b61EBl9mTlKz1mReKvdML+4OK+/LrwCulCgKHAUvFxoX2np1Uus118LU3MKESVdPSAlmczrNmz+LdV6/bUwNSdoQEp864FDrEho1lRA37XrrEj0+qux9DdcnvmJzi5+mn0OtrXykyQ/7Tbbv7vU0MzVhIbC2JF5kaiZLT2LzjlXKqWvS2Ur/l7XhIvQJTQ0jB2dXdxS+FNdi/83cHP/1SzBQnOAX2Swn++tHDEyAAAAAElFTkSuQmCC",alt:"Breathable"}),"Breathable"]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMGSURBVEhL7ZZtSJNRFMePKfZBMCqj6MU0SZ3OmChmmophlpQxbbLSSLCQEg0he1HKEiosKCNBqDCTJLWZmQx1WaKUtuZUzEoT+1K+kzOXkkvH6bn3udbcZppUn/zB2L3nnHv/9557dpgFcsB/YBH7/ucsCM3KuE4HxSWlkHn1OrPw/JViGBsbg9a2tyCvrIKSsnLQar/CCjs7aGusZxHzFBrSDMPz+gZoamkFlboJ3rxrB71eD+4CV4iWRtHxrTv5oH5Rw1b8odDk5CRNye28fLC0tAKhmyv4eHuBl6cI/Hx9YImtLY3Lys6BMnkF1CnkdE4hQnNhYmICDx1NQkc3ERYUPsBv4+PMY0p8YjKNNWRWIbLhtewczLh0Ge2dhahUNTIPz+chDRvxkHiBpw/ezM1jFp7fCpFNwiX7caWDM65ydMHcu/eYh+dMxkXc6OHFZjyPyuX0QMYHmFGIBPpv20E/YukBDN4ZzjzT01ihqGZWxC8jIyjyDcCUtLPM8guzQmSjCG5zIjIwOIjq5hZ8VltHfaOjoyiJiaU3mUqjUqXGmLh49N4ajE7unjTGGLNC5y9k0o06uz4wC097x3sMCt1FT23oI/aE5BQME0eZpHIKE6HOri5c7SRAWWkZs/DISh/jBi5VkuhYektjimQP6TpSkeYwESIpCJfsYzM+VSfS0mlBXMm6QdNqCPGnpmdQv3GlGTJNqKe3j57qydMaOq9/qaR5F3r7/XwjQ8jbbA4KoX4FWzMT04SIwPbdEfjxUzfNOTll0vGTtJqmIDEFhcW0WIg/7kiiSSmbw+RG5Ldh7yLEQO7Rzd1CejCOCgSEhGFL62tmnR0r0tbllQqQV1RBdU0trFu7Bs6lnoK+gQHQ6b5Dg1JFW5VmWAOvGpuhu6eX63OWEBUpBtEmD+qbCxanuYe8XySD4KAA2CveA2GhIdDX3w+HE45xXbmDdmLCYmtrcHcTQKD/FpBKIsHRYT21zxULUjVkYGNjQw3GjGi1XNfWw/JlS5llfiz8C5o3C0LzBOAH4PxY6UHLxnkAAAAASUVORK5CYII=",alt:"Lightweight fabric"}),"Lightweight fabric"]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMxSURBVEhL7ZbrS1RRFMVP/Q9WREolGsYUmpOGVqaZ+WBkDEXBaqDBStEwNDVJyxQcUlOMBEOJKMiylNQ0K0VNo4dlamVKL7QHaUWCluKH3V3He4d7nbk6SUgf+sEwwzn3zNp7r73PzCISYAvEYvF9Qfg3xWrrbzFTQREbHx8XV+YBPJuNwaEPFLXXSMsdXchpnTt5+vhT670OcffPUBWbmpqi4pJSclijoR26MOrq7qGv377T/vhEWrrSmQfQ3NImPm0bVsUePOok7+2BtGqtK5WWn+fCcjqfdlF4tIGLItO8wmKqrW+gvv4BetbTa/G8hEIMkR9OTedfsu9gPH389FncsU7vi5d0LCuHvP128jPSS63MZrGKyipycfMkrbcvNd5tFldt58foKJ0SMoSvvyYmxFUlXCzblMcjgh9qD84FquC03p1y806LK5bw1o+OjGAe2g2srqGRFRSdYROTk7xTbWV4ZITtMR4QxuIns7dfwa5cq2Jt7ffFXRmiKOfS5atCKT1Iu9mX6hvviKuzM/D6DfcMZ4L0EaTRepmrNBOFWM3NBnLdtIUcNW78gCEmjs+ZGuUXLtJqoWP1kbvpy/AwX3v77j2fydtWfDeL9b3q5wLIDAJo760BIfzLMG/ydka3+QWH8i+V7+Ed2eFlrf2tZqbZ6EWV1Tf4AcwZ5g1zV3KujAJ0u8xlQhYSeNYYm8D3tgXq6FByKkUZjIrxUYiBsbExOpp5kpYJh8KE8sATHMDcOThr6Eh6Bp8vOdjHjQK/zpaWUVpmFg8KmWN2JSzEmlpaeXYop3+Inh/IzS9UHYnqmjo+n35BoTwwIJUTmcqxEMONgFLEJSbzQZV3qNz01vYOc/THc0yKYBAcSj84NCSuTGMhBhCt3Dt+jaVMX2Mol4/QOPhsiIlV+AayTfk8APg/E6tiAN4hSxzEpYsS4YLWhUdRWkaWuWQSCAhlUxMCqmISaAbUX807+FNReZ1XAr8AGBk15hSTgHe4ZOFdk/A7BhGUW5q3E4JvqMZs2CwGUKqEpBTuF4Ydo5CQlGrhmxrz+iv38PET1t37nOl1wWyJnZ24Ojf//zf+BRj7DSW/d8F9ZuJcAAAAAElFTkSuQmCC",alt:"nylon"}),"69% nylon, 31% lycra"]})]})]})]})]})})}},770:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAABHNCSVQICAgIfAhkiAAAAaVJREFUOE+1lU1SwkAQhXtiWS51o7KcDZQ74QZ4A24gNwBPYLgBOYF6Ar2B8QSyVFw47kQ3uKWKjK/zo01kksnCVKUKejrf6+55kygS16FudxWpkSLqIsz3zKa3jT7Ny6xIbemTfkLJ+W+ejS0pE1AweTdPpsjDena1dCcE6FKKyd9YC1e0ivZoFzlq7MhbYi1cmOeI11O4BCMwWZO940q5kx1SAyGKh+kA9xdDUH3MedyJpfUAsVEmqi4gMFUMCEg9cigh25PtF9XlOTH+7zMYef1teS3dHmI8V8hZKgp66kh3rlEtzw/zmoeuseQCqNaG28DFc5KnjnWHN+rUVbVLzBXPRpTcYzQPDMdIiRZm/rO5TYEyH3AN+Ctib/9bue/MfbvZmLmPWxqAB5jtLTsKbsGB3PT5Eht7VuWGGjdhI/kc5D4vW4g92lQg7z4Fwx03H2Y+TI+SrKSYVxMBF/gPnANNBKrAW+G+AnVgJ7xOwAdcCXcJ+IJr4WUB7P4YbpiWXeGyp9f7RGxyypF2qzpgXnDZgS/YayyyMn6d4hsZV1Ur174BjQwGWk/b91AAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=367.5c94d477.chunk.js.map